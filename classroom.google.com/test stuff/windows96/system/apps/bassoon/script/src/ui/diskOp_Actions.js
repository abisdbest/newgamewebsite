UI.DiskOperationActions = function(){

	var me = UI.panel();

	var background = UI.scale9Panel(0,0,20,20,UI.Assets.panelDarkInsetScale9);
	background.ignoreEvents = true;
	me.addChild(background);

	var label1 = UI.scale9Panel(0,0,20,20,UI.Assets.panelDarkGreyScale9);
	label1.ignoreEvents = true;
	me.addChild(label1);

	var labelLoad = UI.label({
		label: "Action",
		font: fontSmall
	});
	me.addChild(labelLoad);

	var selectionType = UI.radioGroup();
	selectionType.setProperties({
		align: "right",
		size:"med",
		divider: "line",
		type:"buttons",
		highLightSelection:true
	});
	selectionType.setItems([
		{label:"load",active:true},
		{label:"save",active:false}
	]);
	selectionType.onChange = function(selectedIndex){
		EventBus.trigger(EVENT.diskOperationActionChange,this.getSelectedItem());
	};
	me.addChild(selectionType);

	me.setLayout = function(){

		var innerWidth = me.width-2;
		var innerHeight = 70;

		if (me.height<100){
			innerHeight = me.height - 20;
		}


		if (!UI.mainPanel) return;
		me.clearCanvas();

		background.setProperties({
			left: 0,
			top: 0,
			height: me.height,
			width: me.width
		});

		label1.setProperties({
			left: 1,
			top: 1,
			height: 16,
			width: innerWidth
		});

		labelLoad.setProperties({
			left: -1,
			top: 3,
			height: 16,
			width: innerWidth
		});

		selectionType.setProperties({
			left:4,
			width: innerWidth-4,
			height: innerHeight,
			top: 18
		});



	};

	me.getAction = function(){
		var index = selectionType.getSelectedIndex();
		var result = "load";
		if (index == 1) result = "save";
		return result;
	};

	me.setSelectedIndex = function(index){
        selectionType.setSelectedIndex(index);
	};

	return me;

};

