var player;var sdk;var payments=null;let _firstTimeUser;async function firstTimeUser()
{_firstTimeUser=localStorage.setItem("sessionCount","1");return true;}
let _loadDataFirstTime;let storedPlayerUniqueID;function loadDataFirstTime()
{_loadDataFirstTime=localStorage.setItem("loadUserData",player.getUniqueID());storedPlayerUniqueID=localStorage["loadUserData"];}
let recall=0;async function initSDK(){await YaGames.init().then(ysdk_=>{sdk=ysdk_;sdk.features.LoadingAPI?.ready();}).then(()=>{window.unityInstance.SendMessage('SettingsPanel','GetLangOnLaunch');}).then(()=>{auth().then((value)=>{if(value)
{initPayments().then(()=>{sdk.adv.showFullscreenAdv({callbacks:{onOpen:open=>{window.unityInstance.SendMessage('YandexSDK','IsAdShown','true');window.unityInstance.SendMessage('SoundManager','SetGameEndSnapShot',0);window.unityInstance.SendMessage('SoundManager','DisableMariaVoice',0);window.unityInstance.SendMessage('SoundManager','YandexAdStopSnapShot',0);},onClose:async wasShown=>{InitializeLandingScreen();},onError:async error=>{InitializeLandingScreen();}}})})}})}).catch(()=>{++recall;if(recall<3)
{initSDK();}
else
{window.location.reload();}});}
function sleep(time)
{return new Promise((resolve,reject)=>{setTimeout(()=>{resolve();},time);})}
async function loadGameOnLaunch()
{await loadGameProgress();await sleep(1000);await window.unityInstance.SendMessage('PlayerPrefsHandler','ReloadScene');await sleep(500);window.unityInstance.SendMessage('IAPManager','RestorePurchasesOnLaunch');}
async function InitializeLandingScreen()
{window.unityInstance.SendMessage('YandexSDK','IsAdShown','false');window.unityInstance.SendMessage('SoundManager','SetGameStartSnapShot',0);window.unityInstance.SendMessage('SoundManager','EnableMariaVoice',0);window.unityInstance.SendMessage('SoundManager','YandexAdStartSnapShot',0);if(!localStorage.getItem("sessionCount"))
{firstTimeUser();auth().then(async(_value)=>{if(_value)
{await sleep(3000);loadGameOnLaunch();}});}
else
{await sleep(3000);loadGameOnLaunch();}}
async function auth()
{initPlayer().then(async _player=>{if(player.getMode()==='lite')
{window.unityInstance.SendMessage('YandexSDK','CheckPlayerState',0);}
else
{await window.unityInstance.SendMessage('YandexSDK','CheckPlayerState',1);if(storedPlayerUniqueID)
{if(player.getUniqueID()!=storedPlayerUniqueID)
{loadGameProgress().then(()=>{}).then(()=>{getUserData();})}}
if(!localStorage.getItem("loadUserData"))
{loadGameProgress().then(()=>{}).then(()=>{getUserData();})}}}).catch(err=>{});return true;}
function login()
{sdk.auth.openAuthDialog().then(async()=>{window.unityInstance.SendMessage('YandexSDK','CheckPlayerLogin',1);if(!localStorage.getItem("loadUserData"))
{getUserData();}
await sleep(1500);loadGameOnLaunch();await sleep(500);sdk.feedback.canReview().then(({value,reason})=>{if(value)
{let currentFeedBack=false;sdk.feedback.requestReview().then(({feedbackSent})=>{currentFeedBack=feedbackSent;window.unityInstance.SendMessage('YandexSDK','OnFeedbackSent',JSON.stringify(feedbackSent));})
if(currentFeedBack===false)
{window.unityInstance.SendMessage('YandexSDK','OnFeedbackSent','false');}}});initPlayer().catch(err=>{window.unityInstance.SendMessage('YandexSDK','CheckPlayerLogin',0);});}).catch(()=>{window.unityInstance.SendMessage('YandexSDK','CheckPlayerLogin',0);});}
function initPlayer(){return sdk.getPlayer().then(_player=>{player=_player;}).catch(err=>{});}
function getPlayerMode()
{let playerMode;if(player.getMode()!='lite')
{playerMode=1;}
else
{playerMode=0;}}
function getUserData(){initPlayer().then(()=>{loadDataFirstTime();var data={"id":player.getUniqueID(),"name":player.getName(),"avatarUrlSmall":player.getPhoto('small'),"avatarUrlMedium":player.getPhoto('medium'),"avatarUrlLarge":player.getPhoto('large')};window.unityInstance.SendMessage('YandexSDK','StoreUserData',JSON.stringify(data));});}
function showFullscrenAd(){sdk.adv.showFullscreenAdv({callbacks:{onClose:function(wasShown){window.unityInstance.SendMessage('YandexSDK','OnInterstitialShown');},onError:function(error){window.unityInstance.SendMessage('YandexSDK','OnInterstitialFailed',JSON.stringify(error));}}})}
function showRewardedAd(){sdk.adv.showRewardedVideo({callbacks:{onOpen:()=>{window.unityInstance.SendMessage('YandexSDK','OnRewardedOpen');},onRewarded:()=>{window.unityInstance.SendMessage('YandexSDK','OnRewarded');},onClose:()=>{window.unityInstance.SendMessage('YandexSDK','OnRewardedClose');},onError:(e)=>{var data={"error":e};window.unityInstance.SendMessage('YandexSDK','OnRewardedError',JSON.stringify(data));}}})}
async function initPayments(){await sdk.getPayments({signed:true}).then(_payments=>{payments=_payments;getProductsCatalog().then((_prodCatalog)=>{window.unityInstance.SendMessage('IAPManager','OnInitialized',JSON.stringify(_prodCatalog));});}).catch(err=>{window.unityInstance.SendMessage('IAPManager','OnInitializeFailed',JSON.stringify(err));});return true;}
function buy(_id){payments.purchase({id:_id}).then(purchase=>{processPurchase(_id,purchase);}).catch(err=>{window.unityInstance.SendMessage('YandexSDK','OnPurchaseFailed',JSON.stringify(err));})}
let consumableProducts=["first_gear","second_gear","third_gear","fourth_gear","fifth_gear","sixth_gear"]
function processPurchase(_prodID,_purchase)
{if(consumableProducts.includes(_prodID))
{sdk.getPayments({signed:true}).then(_payments=>{payments=_payments;payments.consumePurchase(_purchase.purchaseToken).then(()=>{window.unityInstance.SendMessage('YandexSDK','OnPurchaseSuccess',_prodID);});});}
else
{sdk.getPayments({signed:true}).then(_payments=>{payments=_payments;getPurchaseHistory().then((_purchaseHistory)=>{if(_purchaseHistory._purchaseHistory.length>0)
{for(let i=0;i<_purchaseHistory._purchaseHistory.length;i++)
{if(_prodID==_purchaseHistory._purchaseHistory[i].productID)
{window.unityInstance.SendMessage('YandexSDK','OnPurchaseSuccess',_prodID);}}}});});}}
function checkDeferredPurchase()
{sdk.getPayments({signed:true}).then(_payments=>{payments=_payments;getPurchaseHistory().then((_purchaseHistory)=>{if(_purchaseHistory._purchaseHistory.length>0)
{for(let i=0;i<_purchaseHistory._purchaseHistory.length;i++)
{restorePurchase(_purchaseHistory._purchaseHistory[i].productID,_purchaseHistory._purchaseHistory[i]);}}});});}
function restorePurchase(_prodID,_purchase)
{if(consumableProducts.includes(_prodID))
{payments.consumePurchase(_purchase.purchaseToken).then(()=>{window.unityInstance.SendMessage('YandexSDK','OnPurchaseSuccess',_prodID);});}
else
{getPurchaseHistory().then((_purchaseHistory)=>{if(_purchaseHistory._purchaseHistory.length>0)
{for(let i=0;i<_purchaseHistory._purchaseHistory.length;i++)
{if(_prodID==_purchaseHistory._purchaseHistory[i].productID)
{window.unityInstance.SendMessage('IAPManager','RestorePurchases',_prodID);}}}});}}
function getPurchaseHistory(){return payments.getPurchases().then(purchases=>{var _purchaseHistory={_purchaseHistory:purchases};return _purchaseHistory;})}
function getProductsCatalog(){return payments.getCatalog().then(products=>{var _prodCatalog={_prodCatalog:products};return _prodCatalog;});}
function saveGameProgress(data,canLoad,isQueued)
{initPlayer().then(()=>{var _data={_data:data};if(player.getMode()!=='lite')
{let flush=Boolean(!(isQueued>0));player.setData(_data,flush).then(()=>{if(canLoad===1)
{loadGameProgress();}})}})}
async function loadGameProgress()
{await initPlayer().then(async()=>{await player.getData().then(async data=>{let myJSON=null;if(Object.entries(data).length>0)
{myJSON=JSON.stringify(data);await window.unityInstance.SendMessage('PlayerPrefsHandler','LoadGameDataToConstantsAndPlayerPrefs',myJSON);}
else
{await window.unityInstance.SendMessage('PlayerPrefsHandler','CheckAndLoadPlayerPrefs');}})});return;}
function rateUs()
{sdk.feedback.canReview().then(({value,reason})=>{console.log(reason);if(value)
{let currentFeedBack=false;sdk.feedback.requestReview().then(({feedbackSent})=>{currentFeedBack=feedbackSent;window.unityInstance.SendMessage('YandexSDK','OnFeedbackSent',JSON.stringify(feedbackSent));})
if(currentFeedBack===false)
{window.unityInstance.SendMessage('YandexSDK','OnFeedbackSent','false');}}
else
{if(reason==='NO_AUTH')
{login();}
else
{window.unityInstance.SendMessage('YandexSDK','OnRateGameSuccess',reason);}}})}
function getLanguage()
{var lang=sdk.environment.i18n.lang;return lang;}