const GLOBAL_DPI_SCALE = 1;

class WebPlatform extends Platform
{
    pendingOrder;
    domain;

    paymentOverlayMaxLoadAttempts = 8;

    constructor()
    {
        super();
        this.language = this.getSystemLanguage();

        if(languageOverride != "" && translations.hasOwnProperty(languageOverride))
        {
            this.language = languageOverride;
        }

        try
        {
            if(document.referrer.includes("armorgames"))
            {
                this.domain = "armorgames";
            }
            else if (document.referrer.includes("microsoft"))
            {
                this.domain = "microsoft";
            }
            else
            {
                var refererSplit = document.referrer.split("://")[1].split(".");
                if(refererSplit.length >= 3) 
                {
                    this.domain = refererSplit[1];
                }
                else 
                {
                    this.domain = refererSplit[0];
                }
            }
        }
        catch(e)
        {
            console.warn(e);
        }
    }

    initMusic()
    {
        this.music = new Audio(mainMusic);
        this.music.volume = 0;
        this.music.loop = true;
        return this.music;
    }

    toggleMusic()
    {
        if(!this.music)
        {
            this.initMusic();
        }
        this.music.volume = (mute == 0) ? musicFadeInVolume : 0;
    }

    playMusic()
    {
        if(!this.music)
        {
            this.initMusic();
        }
        this.music.play();
    }

    initPurchases(timeoutOnFailure = 1000, loadAttempt = 0)
    {
        if(this.domain == "armorgames") return;
        if(this.domain == "microsoft") return;
        
        if(typeof (playsaurusPayments) != "undefined")
        {
            playsaurusPayments.createPopup().then(function ()
            {
                playsaurusPayments.initializePaypal("ATTJm7-432QyQzMBX0HXcCb1r-xY_gEdK0mFV5gab9WiHeWIIFQJ6SAqFqUV3iL5u9EbWbdGCfkqvoL7");
                playsaurusPayments.initializeStripe("pk_live_51LXY6dCnj0k6kn1bSZh8iTuuwSCatikN7phnZliGCtUFNbYbt5fbd9kASEpkUrIRKJq3s3XpFP2FsJTw7pvxL8qm00gem4z1vJ");
                // playsaurusPayments.initializePaypalSandbox();
                // playsaurusPayments.initializeStripeSandbox();
                playsaurusPayments.registerProducts(this.buildProducts());
                playsaurusPayments.setPurchaseSuccessCallback(
                    function (purchaseData)
                    {
                        console.log("Purchased " + purchaseData.product.name)
                        this.completePurchase(purchaseData.product.packNum || purchaseData.product.sku, purchaseData);
                    }.bind(this)
                );
                playsaurusPayments.setPurchaseClosureCallback(
                    function (product)
                    {
                        this.cancelPurchase(product.packNum || product.sku);
                    }.bind(this)
                );
            }.bind(this));
        }
        else if(loadAttempt >= this.paymentOverlayMaxLoadAttempts)
        {
            console.error("Failed to initialize payment overlay (playsaurusPayments is undefined)");
        }
        else
        {
            var maxTimeout = 60000;
            if(timeoutOnFailure >= maxTimeout)
            {
                timeoutOnFailure = maxTimeout;
            }
            setTimeout(this.initPurchases.bind(this, 2 * timeoutOnFailure), timeoutOnFailure, loadAttempt + 1);
        }
    }

    buildProducts()
    {
        var packs = [];
        var ticketImages = [v5Tix10, v5Tix55, v5Tix120, v5Tix250, v5Tix650, v5Tix1400]
        for(var i = 0; i < purchasePacks.length; ++i)
        {
            if(Object.values(purchasePacks[i]).length == 0)
            {
                packs.push({
                    packNum: i,
                    sku: "",
                    name: "",
                    image: "",
                    price: 0,
                    description: ""
                });
            }
            else
            {
                packs.push({
                    packNum: i,
                    sku: purchasePacks[i].ag_sku,
                    name: purchasePacks[i].description,
                    image: ticketImages[i - 1].src,
                    price: purchasePacks[i].priceCents,
                    description: ""
                });
            }
        }
        return packs;
    }

    registerSinglePurchasePack(sku, name, image, price)
    {
        if(typeof (playsaurusPayments) != "undefined")
        {
            return playsaurusPayments.registerProducts(
                [
                    {
                        sku: sku,
                        name: name,
                        image: image,
                        price: price,
                        description: ""
                    }
                ]
            );
        }
    }

    buyPack(packNum)
    {
        if(this.domain == "armorgames")
        {
            var sku;
            var price;
            if(offerManager.currentOffer && offerManager.currentOffer.sku == packNum)
            {
                sku = packNum;
                price = offerManager.currentOffer.price;
            }
            else
            {
                sku = purchasePacks[packNum].ag_sku;
                price = purchasePacks[packNum].priceCents;
            }
            window.parent.postMessage({
                type: "purchase",
                sku: sku
            }, "https://19230.cache.armorgames.com");
            trackEvent_StartedPurchase(sku, price);
        }
        else if (this.domain == "microsoft")
        {
            // do nothing for now
        }
        else if(playsaurusPayments)
        {
            playsaurusPayments.startPurchase(packNum)
            if(parseInt(packNum))
            {
                var sku = "mrmine_" + purchasePacks[packNum].tickets + "tickets";
                trackEvent_StartedPurchase(sku, purchasePacks[packNum].priceCents);
            }   
            else if(offerManager.currentOffer && packNum == offerManager.currentOffer.sku)
            {
                var sku = offerManager.currentOffer.sku;
                var price = offerManager.currentOffer.price;
                trackEvent_StartedPurchase(sku, price);
            }
        }
    }

    completePurchase(packNum, purchaseData=null)
    {
        console.log(packNum);
        if(parseInt(packNum))
        {
            if(typeof (purchaseHistory) != "undefined")
            {
                purchaseHistory.logPurchase(
                    packNum,
                    purchasePacks[packNum].priceCents
                );
            }
            alert("Transaction complete. Thank you for your purchase!");
            var ticketsToAdd = purchasePacks[packNum].tickets;
            trackEvent_PurchasedTickets(ticketsToAdd, purchasePacks[packNum].priceCents);
            tickets += ticketsToAdd;
            console.log("Added " + ticketsToAdd + " tickets");
            centsSpent += purchasePacks[packNum].priceCents;

            var ticketPackId = "mrmine_" + ticketsToAdd + "tickets";
            if(purchaseData && typeof (playsaurusSdk) != "undefined")
            {
                playsaurusSdk.logPurchase(
                    {
                        sku: ticketPackId,
                        amount: (purchasePacks[packNum].priceCents / 100).toFixed(2),
                        currency: "USD",
                        transactionId: purchaseData.transactionId,
                        paymentGateway: purchaseData.paymentGateway,
                        productType: "general"
                    }
                );
            }
            logRevenue(purchasePacks[packNum].priceCents, ticketPackId);
            trackEvent_MadePurchase(
                ticketPackId, 
                purchasePacks[packNum].priceCents,
                purchasePacks[packNum].currency,
                purchasePacks[packNum].usdPriceCents,
            );

            var centPrice = (purchasePacks[packNum].priceCents / 100);
            // var revenue = new amplitude.Revenue().setProductId('tickets_' + tickets).setPrice(centPrice).setQuantity(1);
            // amplitude.getInstance().logRevenueV2(revenue);

            ajax(
                "backend/logtransaction.php",
                {
                    paymentAmount: purchasePacks[packNum].priceCents / 100,
                    ticketsPurchased: ticketsToAdd,
                    uid: platform.getUserId()
                },
                "POST",
                () => handleNameSubmission()
            );
            if(fbq)
            {
                fbq('track', 'Purchase', {currency: "USD", value: (purchasePacks[packNum].priceCents / 100)});
            }

            if(typeof gtag != "undefined" && gtag != null)
            {
                gtag('event', 'purchase', {
                    "transaction_id": rand(0, 10000000000),
                    "value": centPrice,
                    "currency": "USD",
                    "shipping": 0,
                    "items": [
                        {
                            "id": 'tickets_' + tickets,
                            "name": 'tickets_' + tickets,
                            "quantity": 1,
                            "price": centPrice
                        }
                    ]
                });
            }
        }
        else if(offerManager.currentOffer && packNum == offerManager.currentOffer.sku)
        {
            if(purchaseData && typeof (playsaurusSdk) != "undefined")
            {
                playsaurusSdk.logPurchase(
                    {
                        sku: packNum,
                        amount: (offerManager.getOfferPriceCents() / 100).toFixed(2),
                        currency: "USD",
                        transactionId: purchaseData.transactionId,
                        paymentGateway: purchaseData.paymentGateway,
                        productType: "bundle"
                    }
                );
            }
            offerManager.completePurchase();
        }

        platform.pendingOrder = null;
    }

    cancelPurchase(purchase)
    {
        trackEvent_CanceledPurchase(purchase.sku)
    }

    setQuestData()
    {
        questManager.getQuest(20).name = _("JOIN THE COMMUNITY");
        questManager.getQuest(20).description = _("Join the Mr.Mine discord for news, promo codes, and more!");
        questManager.getQuest(20).additionalOnClick = function () {openDiscord(); checkReview();};

        window["a20"] = window["a20v2"];
        window["a20g"] = window["a20gv2"];

        //questManager.getQuest(1).additionalOnClick = function () {showSimpleInput(_("Send this message to a friend to share the game with them!"), _("Copy Message"), generateShareText(), () => {copyShareText(); shareMouseDown();}, _("Cancel"));};
    }

    getUserId()
    {
        if(typeof (localStorage["uid"]) === "undefined")
        {
            localStorage["uid"] = rand(100, Number.MAX_SAFE_INTEGER);
        }
        return localStorage["uid"];
    }

    getSystemLanguage()
    {
        return getLanguageFromCode(window.navigator.userLanguage || window.navigator.language);
    }

    openSurvey()
    {
        if(depth > 20 && !hasTakenSurveyCheck() && !localStorage["isSurveyPending"] && document.getElementById("surveyDiv") == null)
        {
            var rewardAmount = 5 * surveyRewardMultiplier();
            var surveyDiv = document.createElement('div');
            surveyDiv.id = "surveyDiv";
            surveyDiv.style.cssText = 'position:absolute;left:20%;top:10%;width:60%;height:80%;z-index:100;background:#000;border: 1px solid black;';
            surveyDiv.innerHTML = '<iframe src="./Shared/survey.html?UID=' + UID + '&version=' + version + '&depth=' + depth + '&reward=' + rewardAmount + '" frameBorder="0" style="width: 100%; height: 100%; boder:0;"></iframe>';

            var surveyExitButton = document.createElement("div");
            surveyExitButton.id = "surveyExitButton";
            surveyExitButton.style.position = "absolute";
            surveyExitButton.style.top = "0px";
            surveyExitButton.style.right = "0px";
            surveyExitButton.style.width = "25px";
            surveyExitButton.style.height = "25px";
            surveyExitButton.style.zIndex = 4;
            surveyExitButton.style.background = "url('Shared/Assets/UI/closei.png') no-repeat center";
            surveyExitButton.style.backgroundSize = "contain";
            surveyExitButton.style.color = "white";
            surveyExitButton.style.display = "block";
            surveyExitButton.style.padding = "0px";
            surveyExitButton.style.cursor = "pointer";
            surveyExitButton.onclick = function () {document.getElementById("surveyDiv").visibility = "hidden"; document.body.removeChild(document.getElementById("surveyDiv"));};
            surveyDiv.appendChild(surveyExitButton);

            document.body.appendChild(surveyDiv);
        }
    }

    openFlashSurvey()
    {
        if(isFlashQuestionSurveyPromptVisible())
        {
            var rewardAmount = numFlashQuestions * surveyRewardMultiplier();
            var surveyDiv = document.createElement('div');
            surveyDiv.id = "surveyDiv";
            surveyDiv.style.cssText = 'position:absolute;left:20%;top:10%;width:60%;height:80%;z-index:100;background:#000;border: 1px solid black;';
            surveyDiv.innerHTML = '<iframe src="./Shared/ServerSurvey.html?UID=' + UID + '&version=' + version + '&depth=' + depth + '&reward=' + rewardAmount + '" frameBorder="0" style="width: 100%; height: 100%; boder:0;"></iframe>';

            var surveyExitButton = document.createElement("div");
            surveyExitButton.id = "surveyExitButton";
            surveyExitButton.style.position = "absolute";
            surveyExitButton.style.top = "0px";
            surveyExitButton.style.right = "0px";
            surveyExitButton.style.width = "25px";
            surveyExitButton.style.height = "25px";
            surveyExitButton.style.zIndex = 4;
            surveyExitButton.style.background = "url('Shared/Assets/UI/closei.png') no-repeat center";
            surveyExitButton.style.backgroundSize = "contain";
            surveyExitButton.style.color = "white";
            surveyExitButton.style.display = "block";
            surveyExitButton.style.padding = "0px";
            surveyExitButton.style.cursor = "pointer";
            surveyExitButton.onclick = function () {document.getElementById("surveyDiv").visibility = "hidden"; document.body.removeChild(document.getElementById("surveyDiv"));};
            surveyDiv.appendChild(surveyExitButton);

            document.body.appendChild(surveyDiv);

            lastFlashQuestionPromptClickTime = currentTime();
            hasVisitedFlashQuestionSurveyDuringCurrentSession = true;
        }
    }
}

function getCurrentWindow()
{
    return window;
}

window.addEventListener("message", function (event)
{
    if(event.origin != "https://files.armorgames.com" && event.origin != "https://19230.cache.armorgames.com")
    {
        return;
    }
    switch(event.data.type)
    {
        case "purchase":
            var packNum = getPurchasePackIndexBySku(event.data.data.sku);
            if(packNum < 0)
            {
                packNum = event.data.data.sku;
            }
            platform.completePurchase(packNum);
            break;
        case "consumeOldPurchase":
            var packNum = getPurchasePackIndexBySku(event.data.data.sku);
            if(packNum < 0)
            {
                packNum = event.data.data.sku;
            }
            platform.completePurchase(packNum);
            break;
        case "loginStatus":
            platform.isLoginRequired = true;
            platform.isLoggedInToHost = event.data.value;
            break;
        default:
            break;
    }
});

var platform = new WebPlatform();
language = platform.language;

const SUBSCRIPTION_ENDPOINT = "https://mrmine.com/subscribe.php";
const CODE_REDEMPTION_ENDPOINT = "https://mrmine.com/redemption.php";

var assetLoader = new AssetLoader();
assetLoader.setEndpoint("https://cdn.mrmine.com/game/desktop/");
// assetLoader.setEndpoint(""); //steam is empty, web is the above
loadAssets();

window.addEventListener("load", function ()
{
    if(platform.domain != "armorgames")
    {
        // platform.initPurchases();
    }
});