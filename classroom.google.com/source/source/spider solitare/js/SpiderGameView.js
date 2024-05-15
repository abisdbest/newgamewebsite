var SpiderGameView = Backbone.View.extend({
	cardRatio : 151 / 104, // The ratio of card sizes.
	cardWidth : 104,
	cardHeight : 151,
	cardMargin : 10,
	canMoveAutomatically : true,
	cardAnimInterval : 0,
	cardPosAnimationQueue : [],
	/**
	 * Card Offsets.
	 * The column and amount of the offset. 
	 */
	cardOffset : false,
	el : document.getElementsByTagName('body')[0],
	touch : false,
	initialize : function(a){
		var that = this;
		
		// Save our callback function.
		that.complete = _.isFunction(a.complete) ? a.complete : function(){};
		
		$(this.el)
			.css({
				width:(this.cardWidth+10)*10+'px'
			})
			.append($('<div class="card nodrag" id="deck"></div>')
				.click(function(){
					that.model.deal();
				})
			);
		
		this.model.bind('change:piles',function(){
			that.redrawCards();
		});
		
		this.model.bind('change:undo',function(a){
			if(!a){
				that.flashBoard();
			}
		});
		
		this.model.bind('change:css',function(a){
			that.cardCssChanged(a);
			$('#tb-moves').text(i18n.t('interface.toolbar.moves',{moves:that.model.getMoveCount()}));
			$('#tb-score').text(i18n.t('interface.toolbar.score',{score:that.model.getScore()}));
			//~ $('#tb-moves').text('Mooooves: '+that.model.getMoveCount());
		});
		
		this.model.bind('game:won',function(){
			that.complete('won');
		});
		
		var placeholderClick = function(){
			var from = that.model.get('current');
			if(from){
				if(that.model.moveCard(from,$(this).data('card'))){
					that.cardDeselect();
				}
			}
		}
		
		
		/* Create placeholders */
		
		this.placeholders = [];
		/* FIXME: holy shit, fix this up you big idiot. */
		// Tableau
		for(var i=0; i<10; i++){
			var placeholder = this.createPlaceholder(i);
			this.placeholders.push(placeholder);
			var placeholderEl = $(this.el).append(
				$('<div class="placeholder"></div>')
					.click(placeholderClick)
					.data('card',placeholder)
					.attr('id',placeholder.id)
			);
			this.setCardPos(placeholderEl,placeholder);
		}
		
		// Foundation
		for(var i=0; i<8; i++){
			var placeholder = this.createPlaceholder(this.model.positions.foundation + i);
			this.placeholders.push(placeholder);
			var placeholderEl = $(this.el).append(
				$('<div class="placeholder"></div>')
					.click(placeholderClick)
					.data('card',placeholder)
					.attr('id',placeholder.id)
			);
			this.setCardPos(placeholderEl,placeholder);
		}
		
		for(var i=0; i<this.model.piles.length; i++){
			for(var j=0; j < this.model.piles[i].length; j++){
				this.drawCard(this.model.piles[i][j]);
			}
		}
		
		this.redrawCards();
		
		// On card click/touch
		var events = 'mousedown mouseup touchmove touchend';
		$(window).unbind(events).bind(events,function(e){
			that.touchHandler(e);
		});
		
		// On mouse move (anywhere)
		var events = 'mousemove touchmove';
		$(window).unbind(events).bind(events,function(e){
			that.moveHandler(e);
		});
		
		// On double click
		var events = 'dblclick';
		$('.card',this.el).bind(events,function(e){
			that.moveToFoundation($(this).data('card'));
		});
		
		// Unify dimensions on window resize.
		$(window).resize(function(){
			that.unify();
		});
		this.unify();
		
		// Cheat codes for debugging. FIXME.
		Mousetrap.bind('ctrl+shift+k', function(e){
			console.log('setting debug mode');
			that.model.set('debug',true);
		});
		
		Mousetrap.bind('ctrl+shift+alt+n', function(e){
			console.log('congratulations, easiest win ever.');
			that.model.gameWon();
		});
		
		Mousetrap.bind('d', function(e){
			that.model.deal();
		});
		
		Mousetrap.bind('h', function(e){
			that.getHint();
		});
		
		Mousetrap.bind('ctrl+z', function(e){
			that.model.undoMove();
		});
		
		// On mouseout, remove any touch events to prevent the card
		// from getting stuck to our cursor on mousebackin.
		var events = 'mouseout';
		$(window).unbind(events).bind(events,function(e){
			if(e.toElement === null){
				that.touch = false;
				that.redrawCards();
			}
		});
		
		that.setCardPosAnimated();
		that.cardAnimInterval = 10;
		
		that.model.move = false;
		
		$(this.el)[0].addEventListener('contextmenu', function(e){
			e.preventDefault();
		});
		
		$(this.el).addClass('ready');
		
	},
	
	flashBoard : function(){
		$('body').addClass('flash');
		window.setTimeout(function(){
			$('body').removeClass('flash');
		},150);
	},
	
	getHint : function(){
		
		var hint = this.model.getHint();
		
		if(hint){
			
			$('.hint').removeClass('hint');
			if(hint.dest == 'foundation'){
				var src = $('#'+hint.src.id).addClass('hint hint-src');
				var place = 1;
				var that = this;
				var interval = window.setInterval(function(){
					var id = place;
					if(id >8){
						id = id-8;
					}
					$('#'+that.placeholders[id+9].id).toggleClass('hint');
					if(place++ >= 16){
						window.clearInterval(interval);
						window.setTimeout(function(){
							$('.hint').removeClass('hint');
						},1000);
					}
				},25);
				
			} else {
				var src = $('#'+hint.src.id).addClass('hint hint-src');
				var dest = $('#'+hint.dest.id).addClass('hint hint-dest');
				window.setTimeout(function(){
					src
						.removeClass('hint')
						.removeClass('hint-src');
					dest
						.removeClass('hint')
						.removeClass('hint-dest');
				},1500);
			}
			return;
		}
		
		if(this.model.deckSize() == 0){
			this.flashBoard();
		} else {
			this.flashBoard();
		}
	},
	
	/**
	 * Call this when the window changes so as to adjust dimensions etc.
	 */
	unify : function(){
		var playWidth = window.innerWidth > 1140 ? 1140 : window.innerWidth;
		
		// Work out a decent card width.
		// We have 10 cards wide, but let's leave some room either side.
		this.cardWidth = playWidth / 11 - 10;
		this.cardHeight = this.cardWidth * this.cardRatio;
		
		$('.card,.placeholder').css({
			width:this.cardWidth+'px',
			height:this.cardHeight+'px'
		});
		
		for(var i=0; i<this.placeholders.length; i++){
			this.setCardPos($('#'+this.placeholders[i].id),this.placeholders[i],true);
		}
		
		// Set the gameboard width so it re-centers.
		// The extra ten px is the card margin. Should probably
		// globalise it.
		$('#gameboard').css('width',(this.cardWidth+10)*10);
		this.redrawCards();
		
		// Save the gameboard position so we can calculate the card drag.
		this.gameboard = $('#gameboard').offset();
		
	},
	createPlaceholder : function(pile){
		var that = this
		var placeholder = new Card({number:-1,suitName:'placeholder'});
		placeholder.bind('change:css',function(a){
			that.cardCssChanged(a,false);
		})
		placeholder = this.model.updatePos(placeholder,pile,0);
		return placeholder;
	},
	render : function(){
		return this;
	},
	drawCard : function(card){
		var $cardEle = $('<div class="card"></div>');
		
		$cardEle
			.addClass(card.getCssClass())
			.attr('id',card.id);
		
		var that = this;
		$cardEle
			.click(function(){
				that.cardClick(this);
			});
		
		$cardEle.data('card',card);
		
		$(this.el).append($cardEle);
		
	},
	redrawCards : function(force){
		var that = this;
		var cards = this.model.getCards();

		for(var i=0; i<cards.length; i++){
			this.redrawCard({
				el : $('#'+cards[i].id),
				card : cards[i],
				i : i,
				force : _.isUndefined(force) ? false : force
			});
			
		}
		
		if(this.model.deckSize() == 0){
			$('#deck').hide();
		} else {
			$('#deck').show();
		}
	},
	redrawCard : function(options){
		var that = this;
		
		
		if(options.card.get('visibility') == false){
			options.el.addClass('flipped');
		} else {
			// If the card is coming from the deck, don't flip it, just
			// make it visible straight away.
			if(options.el.hasClass('deck')){
				options.el.removeClass('flipped');
			}
			
			// Otherwise, perform a flip animation.
			if(options.el.hasClass('flipped')){
				options.el
					.removeClass('flipped');
			}
		}
		
		if(options.card.pos.name == 'deck'){
			options.el.addClass('deck');
		} else {
			options.el.removeClass('deck');
		}
		
		that.setCardPos(options.el,options.card,options.force);
		
	},
	setCardTransform: function(css){
		css['-webkit-transform'] = 'translate('+css.left+','+css.top+')';
		css.left = 0;
		css.top = 0;
		return css;
	},
	setCardPos : function($card,card,force){
		var pos = this.cardPos(card);
		var css = this.setCardTransform({
			left : Math.round(pos.leftPx)+'px',
			top : Math.round(pos.topPx)+'px',
			zIndex : card.pos.height
		});
		
		card.setCss(css);
		
		return $card;
	},
	/**
	 * Called when the change event triggers for the CSS onthe card
	 * model.
	 */
	cardCssChanged : function(card,immediate){
		var that = this;
		var css = card.get('css');
		var cardEl = $('#'+card.id);

		if(!this.queue){
			this.queue = {};
		}

		this.queue[card.id] = {
			css : css,
			el : cardEl,
			immediate: css.immediate || (!_.isUndefined(immediate) && immediate)
		}

		if(!this.queueHandler){
			this.queueHandler = window.requestAnimationFrame(function(){
				for(var i in that.queue){

					delete that.queue[i].css.immediate;
					if(that.queue[i].immediate){
						that.queue[i].el.addClass('dragging');
						that.queue[i].el.css(that.queue[i].css);
					} else {
						that.queue[i].el.removeClass('dragging');
						that.cardPosAnimationQueue.push({
							el : that.queue[i].el,
							css : that.queue[i].css
						});
					}
				}
				that.queue = false;
				that.queueHandler = false;
			});
		}
		
	},
	setCardPosAnimated : function(){
		var that = this;
		if(this.cardPosAnimationQueue.length > 0){
			var card = this.cardPosAnimationQueue.shift();
			if(this.cardAnimInterval < 10){
				$(card.el).addClass('dragging');
			}
			$(card.el).css(card.css);
			
			if(this.cardAnimInterval < 10){
				// There has to be a better way.
				window.setTimeout(function(){
					$(card.el).removeClass('dragging');
				},25);
			}
		}
		
		if(this.cardAnimInterval == 0 && this.cardPosAnimationQueue.length >0){
			this.setCardPosAnimated();
		} else {
			window.setTimeout(function(){
				that.setCardPosAnimated();
			},this.cardAnimInterval);
		}
	},
	getColumnSpacing: function(column){
		return Math.min(20,(window.innerHeight - this.cardHeight*3) / this.model.piles[column].length);
	},
	cardPos : function(card){
		var position = card.pos.name;
		var col = card.pos.col;
		var height = card.pos.height;
		
		var pos = {
			top : 0,
			left: 0
		};
		
		if(position == 'foundation'){
			pos.top = 0;
			pos.left = col+2;
			pos.topPx = 0;
		} else if(position == 'tableau') {
			height = height == 0 ? 1 : height;
			pos.top = height;
			pos.left = col;			
			pos.topPx = this.cardHeight + pos.top * this.getColumnSpacing(col);
		} else if(position == 'discard'){
			pos.top = 0;
			pos.left = 1;
			pos.topPx = 0;
		}
		
		pos.leftPx = pos.left * (this.cardWidth+10);
		
		// Adjust for card accordianism/draggulation.
		if(this.cardOffset && position == 'tableau' && this.cardOffset[0] == col){
			var offset = (0-this.cardOffset[1])  / (this.model.piles[card.pos.row].length / (height-1));
			pos.topPx += offset > 0 ? offset : 0;
		}
		
		return pos;
	},
	
	/**
	 *  Convert an x coordinate into a tableau row
	 */
	pos2row : function(x){
		x = x - $(this.el).offset().left;
		x = Math.floor(x / (this.cardWidth+10));
		if(x < 0 || x > 9){
			return false;
		}
		return x;
	},
	
	touchHandler : function(e){
		
		if(e.originalEvent.type == 'mousedown' || e.originalEvent.type == 'touchstart'){
			
			var el = $(e.target);			
			var card = el.data('card');
			
			if(_.isUndefined(card)){
				return;
			}
			
			if(this.model.canMoveCard(card) == false){
				this.touch = false;
				return;
			}
			
			this.touch = {
				el : el,
				card : card,
				col : card.pos.col,
				e : e,
				firstrun : true,
				dragging : false,
				currentRow : card.pos.col,
				dest : false
			};
		}
		
		if(this.touch && (e.originalEvent.type == 'mouseup' || e.originalEvent.type == 'touchstop')){
			
			if(this.touch.dragging){
				if(this.model.moveCard(this.touch.card,this.touch.dest)){
					this.touch.el.removeClass('dragging');
					this.cardDeselect();
				}
				this.redrawCards(true);
			} else if(this.cardOffset){
				this.cardDeselect();
				this.redrawCards(true);
			} else {
				//~ if(_.isUndefined(this.touch.el)){
					//~ throw 'element existence failure';
				//~ }
				var card = this.touch.el.data('card');
				var current = this.model.get('current');
				if(!current || current.get('number') == -1) {
					this.cardSelect(this.touch.el,card);
				} else if(!_.isUndefined(card.id) && current.id == card.id){
					this.cardDeselect();
				} else {
					if(!this.model.moveCard(current,card)){
						this.cardSelect(this.touch.el,card);
					} else {
						this.cardDeselect();
					}
				}
				
				this.redrawCards();
			}
			this.touch = false;
		}
	},
	
	moveHandler : function(e){
		
		if(!this.touch){
			return;
		}
		
		var pos2Row = this.pos2row(e.clientX,true);
		
		// Run this the first time to reset the last stack, if there was one.
		if(this.touch.firstrun){
			this.cardOffset = false;
			this.touch.firstrun = false;
			this.touch.startRow = pos2Row;
		}
		
		var adjustAmount = this.touch.e.clientY - e.clientY;
		var previousRow = this.touch.currentRow;
		this.touch.currentRow = pos2Row;
	
		// This is a drag to a new column.
		
		this.cardOffset = false;
		
		// Flag this as a drag so the peek mode doesn't activate.
		this.touch.dragging = true;
		var css = this.setCardTransform({
			left : (e.clientX-this.cardWidth/2-this.gameboard.left-this.cardMargin)+'px',
			top : (e.clientY-this.cardHeight/2-this.gameboard.top-this.cardMargin)+'px'
		});
		
		this.touch.card.setCss(css,true);

		
		if(this.touch.currentRow !== false && this.touch.currentRow !== previousRow){
			this.touch.dest = this.model.getTopCard(this.touch.currentRow);
			if(!this.touch.dest){
				this.touch.dest = this.createPlaceholder(this.touch.currentRow);
			}
			
			
		}
		
			
	},
	
	cardClick : function($cardEle){
	},
	
	cardSelect : function(ele,card){
		$('.current',this.el).removeClass('current');
		if(!_.isUndefined(card.id)){
			$(ele).addClass('current');
			this.model.set('current',card);
		}
	},
	cardDeselect : function(ele){
		$('.current',this.el).removeClass('current');
		this.model.set('current',false);
	},
	moveToFoundation : function(card){
		//~ console.log('delegating event to model');
		this.model.moveToFoundation(card);
	}
});



