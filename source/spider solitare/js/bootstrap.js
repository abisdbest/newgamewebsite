var Dialog = Backbone.View.extend({
	events : {
		"click .item" : 'returnItem',
		'click .close' : 'returnClose'
	},
	
	templateString : '<div style="opacity:0" class="dialog <%- className %>"><%= html %><ul><% _.each(items, function(item) { %> <li class="item" id="<%= item.id %>"><h2><%= item.name %></h2><span class="addendum">&nbsp;<%= item.addendum %></span><p><%= item.description %></p></li> <% }); %></ul></div>',
	
	initialize : function(a){
		if(_.isUndefined(a.el)){
			this.el = $('<div></div>');
			$('body').append(this.el);
			this.delegateEvents();
		}
		this.callback = a.callback;
		this.items = a.items;
		this.className = a.className;
		this.title = a.title;
		this.html = a.html;
		this.render();
	},
	
	returnItem : function(a){
		// Go through our items array and return the clicked one.
		for(var i=0; i<this.items.length; i++){
			if(this.items[i].id == $(a).attr('id')){
				this.callback(this.items[i]);
				break;
			}
		}
		this.remove();
		return true;
	},
	
	returnClose : function(){
		this.callback(false);
		this.remove();
		return false;
	},
	
	remove : function(){
		$(this.el).children().css('opacity',0);
		
		window.setTimeout(function(){
			$(this.el).remove();
		},500);
	},
	
	render : function(){
		var templateRendered = _.template(
			this.templateString,
			this
		)
		templateRendered = $(templateRendered);
		$(this.el).append(templateRendered);
		window.setTimeout(function(){
			templateRendered.css('opacity',1);
		},100);
		
		// This isn't working. Not sure why.
		this.delegateEvents();
		
		// So do this for now.
		var that = this;
		$('.close',this.el).click(function(){
			that.returnClose(this);
		});
		$('.item',this.el).click(function(){
			that.returnItem(this);
		});
		return this;
	}
});

(function($){
	
	var t = function(a){return a};
	var timeDelay = 500;
	
	var currentGame = false;
	var model = false;
	var view = false;
	
	//~ var clock = setInterval(function(){
		//~ if(model){
			//~ $('#tb-timer').text(t('interface.toolbar.timer',{time:model.getTime()}));
		//~ } else {
			//~ $('#tb-timer').text('0:00');
		//~ }
	//~ },1000);
	
	function gameChoose(){
		
		var gameChooseItems = [
			{
				id : 'one-suit',
				name : t('interface.games.one-suit.name'),
				addendum: t('interface.games.one-suit.addendum'),
				description : t('interface.games.one-suit.description'),
				options : {
					suits : 1
				}
			},
			{
				id : 'two-suit',
				name : t('interface.games.two-suit.name'),
				addendum: t('interface.games.two-suit.addendum'),
				description : t('interface.games.two-suit.description'),
				options : {
					suits : 2
				}
			},
			{
				id : 'four-suit',
				name : t('interface.games.four-suit.name'),
				addendum: t('interface.games.four-suit.addendum'),
				description : t('interface.games.four-suit.description'),
				options : {
					suits : 3
				}
			}
		];
		
		var dialog = new Dialog({
			title : t('interface.name'),
			className : 'gameChoose',
			items : gameChooseItems,
			html : '',
			callback : function(game){
				if(game == false){
					// Clicked close. Kinda redundant button.
					console.log('let\'s not play right now.');
				} else {
					currentGame = game.options;
					newGame(currentGame);
				}
			}
		});
	}
	
	function fadeOutGame(complete){
		if(model){
			model.writeGameStats('lost',function(){});
			model = false;
		}
		$('#gameboard,.dialog,.gamenumber').css('opacity',0);
		window.setTimeout(function(){
			$('#gameboard,.dialog').remove();
			$('.gamenumber').text('');
			complete();
		},timeDelay*2);
		model = false;
		view = false;
		$('#toolbar').removeClass('gameactive');
	}
	
	function showScoreboard(){
		if(!model){
			model = new SpiderGame();
		}
		
		model.getGameStats(function(stats){
			var makeBlock = function(classname,title,value){
				template += '<div class="'+classname+'"><div class="title">'+title+'</div><div class="value">'+value+'</div></div>'
			}
			var template = '<div class="column left"><h2 class="large" data-i18n="interface.scoreboard.scoreboard">Scoreboard</h2>';
			
			var gamesPlayed = stats.regular.won.val + stats.regular.lost.val;
			var percentageWon = Math.round((stats.regular.won.val / gamesPlayed) * 100);
			if(isNaN(percentageWon)){
				percentageWon = 0;
			}
			
			if(stats.regular.won.streakLength) {
				makeBlock('badgeblock winstreak',t('interface.scoreboard.winning-streak'),stats.regular.won.streakLength);
			}
			
			if(stats.regular.lost.streakLength) {
				makeBlock('badgeblock losingstreak',t('interface.scoreboard.losing-streak'),stats.regular.lost.streakLength);
			}
			
			makeBlock('badgeblock gamesplayed',t('interface.scoreboard.games-played'),gamesPlayed);
			makeBlock('badgeblock averagetime',t('interface.scoreboard.average-time'),model.getFormattedTime(stats.regular.time.val));
			
			template += '<table><tbody><tr><th></th><th data-i18n="interface.scoreboard.total">Total</th><th data-i18n="interface.scoreboard.longest-streak">Longest Streak</th></tr><tr><th data-i18n="interface.scoreboard.won">Won</th><td>'+
				stats.regular.won.val+'</td><td>'+
				stats.regular.won.streakMax+'</td></tr><tr><th data-i18n="interface.scoreboard.lost">Lost</th><td>'+
				stats.regular.lost.val+'</td><td>'+
				stats.regular.lost.streakMax+'</td></tr></tbody></table>';
			
			
			
			template += '</div><div class="column right">';
			
			makeBlock('winpercent',t('interface.scoreboard.percentage-won'),percentageWon);
			
			template += "</div>";
			
			fadeOutGame(function(){
				var dialog = new Dialog({
					title : t('interface.scoreboard.scoreboard'),
					className : 'scoreboard',
					items : [],
					html : template,
					callback : function(game){}
				}); 
				
				$('.dialog.scoreboard').i18n();
			});
			
		});
	}
	
	function gameComplete(status){
		var time = model.getTime('secs');
		var score = model.getScore();
		var moves = model.getMoveCount();
		model.getBadges(function(badges){
			model = false;
			
			var badgesHtml = '';
			for(var i=0;i<badges.length;i++){
				badgesHtml += '<div class="badgeholder"><div class="badge '+
					badges[i].badge+
					'"></div><p>'+
					t('interface.badges.'+badges[i].badge,{val:badges[i].val})+
					'</p></div>';
			}

			var gameCompleteItems = [
				{
					name : t('interface.gameover.items.new-game.name'),
					id : 'play-another',
					addendum : '',
					description : t('interface.gameover.items.new-game.description')
				},
				{
					name : t('interface.gameover.items.different-game.name'),
					id : 'choose-another',
					addendum : '',
					description : t('interface.gameover.items.different-game.description')
				}
			];
			var statusText = status == 'nomoves' ? t('interface.gameover.no-moves') : t('interface.gameover.won');
			var scores = i18n.t("interface.toolbar.moves",{moves:moves})+
				' — '+
				i18n.t("interface.toolbar.score",{score:score});
		
			fadeOutGame(function(){
				var dialog = new Dialog({
					title : statusText,
					className : 'gameComplete',
					items : gameCompleteItems,
						html : '<h2 class="large center">'+statusText+'</h2><p class="minor selectable">'+scores+'</p>'+badgesHtml,
					callback : function(game){
						if(game == false){
							// Clicked Close
						} else {
							if(game.id == 'play-another'){
								delete currentGame.seed;
								newGame(currentGame);
							} else {
								gameChoose();
							}
						}
					}
				});
				$('.badgeholder').click(function(){
				showScoreboard();
				});
			});
		});
	}
	
	function newGame(options){
		options = $.extend({
			seed : Math.round(Math.random()*1000000)
		},options);
		fadeOutGame(function(){
			var gameboard = $('<div id="gameboard"></div>').css('opacity','0');
			$('body').append(gameboard);
			model = new SpiderGame(options);
			view = new SpiderGameView({
				model : model,
				el : gameboard[0],
				complete : function(status){
					window.setTimeout(function(){
						gameComplete(status);
					},timeDelay*4);
				}
			});
			
			// For development. FIXME.
			window.view = view;
			window.model = model;
			
			$('#toolbar').addClass('gameactive');
			
			$('#gameboard').css('opacity','1');
			$('.gamenumber').css('opacity','.5');
		});
	}
	
	function aboutGame(){
		fadeOutGame(function(){
			var dialog = new Dialog({
				title : 'About',
				className : 'gameAbout',
				items : false,
				html :t('about'),
				callback : function(){}
			});	
			
		});
	}
	
	function showRules(){
		fadeOutGame(function(){
			var dialog = new Dialog({
				title : 'About',
				className : 'gameRules',
				items : false,
				html :t('rules'),
				callback : function(){}
			});	
			
		});
	}
	
	// Log any abandoned games
	window.addEventListener("beforeunload", function(e){
		if(model){
			model.writeGameStats('lost',function(){});
		}
	});

	
	$(document).ready(function(){
		i18n.init({
			useCookie : false,
			resGetPath: 'locales/__lng__/__ns__.json',
			fallbackLng: 'en',
			customLoad : function(lngValue, nsValue, options, loadComplete){
				if(typeof languages[lngValue.toLowerCase()] != 'undefined'){
					var result = languages[lngValue.toLowerCase()];
					loadComplete(null,result);
				} else {
					loadComplete('nuts',{});
				}
			}
		},function(i18n) {
			t = i18n;
			
			$('#toolbar').i18n();
			
			gameChoose();
			$('body').css('height',window.innerHeight+'px');
			
			var removeMenu = function(){
				$('#tb-menu').removeClass('toggled');
				$('body').unbind('click');
			}
			
			$('#tb-menu a').click(function(){
				var menu = $(this).parent().toggleClass('toggled');
				if(menu.hasClass('toggled')){
					$('body').bind('mousedown',function(e){
						if($(e.target).closest('#tb-menu').length == 0){
							removeMenu();
						}
					});
				} else {
					removeMenu();
				}
			});
			
			$('#tb-newgame').click(function(){
				delete currentGame.seed;
				fadeOutGame(function(){
					newGame(currentGame);
				});
				removeMenu();
				return false;
			});
			
			$('#tb-restartgame').click(function(){
				var seed = model ? model.get('seed') : undefined;
				fadeOutGame(function(){
					currentGame.seed = seed;
					newGame(currentGame);
				});
				removeMenu();
				return false;
			});
			
			$('#tb-about').click(function(){
				aboutGame();
				removeMenu();
				return false;
			});
			
			$('#tb-rules').click(function(){
				showRules();
				removeMenu();
				return false;
			});
			
			$('#tb-choosegame').click(function(){
				fadeOutGame(gameChoose);
				removeMenu();
				return false;
			});
			
			$('#tb-undo').click(function(){
				model.undoMove();
				return false;
			});
			
			$('#tb-hint').click(function(){
				view.getHint();
				return false;
			});
		
		});
	})
	
})(jQuery);
