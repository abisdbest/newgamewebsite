UI.pattern_sidebar = function(){
    var me = UI.panel();
    me.setProperties({
        name: "sideButtonPanel"
    });

    var sideLabel = UI.label();
    sideLabel.setProperties({
        label: "WIN96 PICKS:",
        font: fontFT
    });
    me.addChild(sideLabel);
    

    var buttonsSide = [];
    var buttonsSideInfo=[
        {label:"final countdown!", onClick:function(){Tracker.load(Host.getRemoteUrl() + 'mods/Zalza - Final Countdown.xm')}},
        {label:"sweet", onClick:function(){Tracker.load(Host.getRemoteUrl() + 'mods/5th_swee.xm')}},
        {label:"xTREMELY xECUTABLE", onClick:function(){Tracker.load(Host.getRemoteUrl() + 'mods/Anders Akerheden - Xtremely Xecutable.xm')}},
        {label:"Random MOD", onClick:function(){App.doCommand(COMMAND.randomSong)}},
        {label:"Random XM", onClick:function(){App.doCommand(COMMAND.randomSongXM)}}
    ];


    for (var i = 0;i< buttonsSideInfo.length;i++){
        var buttonSideInfo = buttonsSideInfo[i];
        var buttonElm = UI.button();
        buttonElm.info = buttonSideInfo;
        buttonElm.onClick =  buttonSideInfo.onClick;
        buttonsSide[i] = buttonElm;
        //me.addChild(buttonElm);
        me.addChild(buttonElm);
    }

    var pianoButton = UI.button();
    pianoButton.setProperties({
        label: "",
        textAlign:"center",
        background: UI.Assets.buttonLightScale9,
        hoverBackground: UI.Assets.buttonLightHoverScale9,
        image: Y.getImage("piano"),
        font:window.fontMed
    });
    pianoButton.onClick = function(){App.doCommand(COMMAND.togglePiano)};
    me.addChild(pianoButton);

    var nibblesButton = UI.button();
    nibblesButton.setProperties({
        label: "",
        textAlign:"center",
        background: UI.Assets.buttonLightScale9,
        hoverBackground: UI.Assets.buttonLightHoverScale9,
        image: Y.getImage("nibbles")
    });
    nibblesButton.onClick = function(){App.doCommand(COMMAND.nibbles)};
    me.addChild(nibblesButton);


    me.onResize = function(){
        sideLabel.setSize(me.width,Layout.trackControlHeight);

        var buttonHeight = 30;

        pianoButton.setProperties({
            left:0,
            top: me.height - buttonHeight,
            width: me.width,
            height:buttonHeight
        });

        nibblesButton.setProperties({
            left:0,
            top: me.height - buttonHeight - buttonHeight,
            width: me.width,
            height:buttonHeight
        });

        for (i = 0;i<buttonsSideInfo.length;i++){
            var button = buttonsSide[i];
            var buttonTop = (i*buttonHeight) + sideLabel.height;
            var buttonLeft = 0;
            if (buttonTop > nibblesButton.top-buttonHeight){
                buttonLeft = -500;
            }
            button.setProperties({
                left:buttonLeft,
                top: buttonTop,
                width: me.width,
                height:buttonHeight,
                label: button.info.label,
                textAlign:"left",
                background: UI.Assets.buttonLightScale9,
                hoverBackground: UI.Assets.buttonLightHoverScale9,
                font:window.fontFT
            });
        }
    };

    me.onResize();

    return me;
};