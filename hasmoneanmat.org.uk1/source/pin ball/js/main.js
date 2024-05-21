$(document).ready(function () {
    var oMain = new CMain({

        fullscreen: false,                    //SET THIS TO FALSE IF YOU DON'T WANT TO SHOW FULLSCREEN BUTTON
        check_orientation: false,             //SET TO FALSE IF YOU DON'T WANT TO SHOW ORIENTATION ALERT ON MOBILE DEVICES
        audio_enable_on_startup: true       //ENABLE/DISABLE AUDIO WHEN GAME STARTS
    });


    $(oMain).on("start_session", function (evt) {
        if (getParamValue('ctl-arcade') === "true") {
            parent.__ctlArcadeStartSession();
        }
        //...ADD YOUR CODE HERE EVENTUALLY
    });

    $(oMain).on("end_session", function (evt) {
        if (getParamValue('ctl-arcade') === "true") {
            parent.__ctlArcadeEndSession();
        }
        //...ADD YOUR CODE HERE EVENTUALLY
    });

    $(oMain).on("restart_level", function (evt, iLevel) {
        if (getParamValue('ctl-arcade') === "true") {
            parent.__ctlArcadeRestartLevel({level: iLevel});
        }
        //...ADD YOUR CODE HERE EVENTUALLY
    });

    $(oMain).on("save_score", function (evt, iScore, szMode) {
        if (getParamValue('ctl-arcade') === "true") {
            parent.__ctlArcadeSaveScore({score: iScore, mode: szMode});
        }
        //...ADD YOUR CODE HERE EVENTUALLY
    });

    $(oMain).on("start_level", function (evt, iLevel) {
        if (getParamValue('ctl-arcade') === "true") {
            parent.__ctlArcadeStartLevel({level: iLevel});
        }
        //...ADD YOUR CODE HERE EVENTUALLY
    });

    $(oMain).on("end_level", function (evt, iLevel) {
        if (getParamValue('ctl-arcade') === "true") {
            parent.__ctlArcadeEndLevel({level: iLevel});
        }
        //...ADD YOUR CODE HERE EVENTUALLY
    });

    $(oMain).on("show_interlevel_ad", function (evt) {
        if (getParamValue('ctl-arcade') === "true") {
            parent.__ctlArcadeShowInterlevelAD();
        }
        //...ADD YOUR CODE HERE EVENTUALLY
    });

    $(oMain).on("share_event", function (evt, iScore) {
        if (getParamValue('ctl-arcade') === "true") {
            parent.__ctlArcadeShareEvent({
                img: TEXT_SHARE_IMAGE,
                title: TEXT_SHARE_TITLE,
                msg: TEXT_SHARE_MSG1 + iScore + TEXT_SHARE_MSG2,
                msg_share: TEXT_SHARE_SHARE1 + iScore + TEXT_SHARE_SHARE1
            });
        }
        //...ADD YOUR CODE HERE EVENTUALLY
    });

    // if (isIOS()) {
    //     setTimeout(function () {
    //         sizeHandler();
    //     }, 200);
    // } else {
    //     sizeHandler();
    // }

    sizeHandler();

});
