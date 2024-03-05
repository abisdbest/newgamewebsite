var SpiderGame = Backbone.Model.extend({
	defaults : {
		current : false,
		suits : 1,
		debug : false,
		timeStart : 0,
		timePaused : 0,
		undoPenalty : 0,
		seed : 0
	},
	
	/**
	 * These are the options for the Scoreboard library.
	 */
	scoreDefs : {
    storageEngine : 'chromesync',
		classes : ['regular'],
		fields : {
			time : {type:'average'},
			movesAverage : {type:'average'},
			movesLowest : {type:'custom'},
			won : {type:'addition',streak:true},
			lost : {type:'addition',streak:true},
		}
	},
	/**
	 * The Deck model.
	 */
	//~ cards : false,
	/**
	 * A big 2D array of cards. Each "pile" represents a pile of cards 
	 * on the discard, deck, foundation, or tableau. These are delineated
	 * by this.positions.
	 */
	//~ piles : false,
	
	move : false,
	
	undoHistory : [],
	
	/**
	 * Positions of various items in the deck. Each position signifies
	 * the start, and the finish is one number before the next highest
	 * value.
	 * Eg. Tableau ranges from 0 to 9, because foundation starts at 10.
	 */
	positions : {
		discard : 19,
		deck : 18,
		foundation : 10,
		tableau:0
	},
	
	startMove : function(){
		this.move = [];
	},
	
	endMove : function(){
		if(this.move && this.move.length > 0){
			this.undoHistory.push(this.move);
			this.move = false;
		}
		this.trigger('change:piles');
	},
	
	undoMove : function(){
		//~ console.log('undoing move');
		var move = this.undoHistory.pop();
		if(typeof move == 'undefined'){
			this.trigger('change:undo',false);
			return;
		}
		this.set('undoPenalty',this.get('undoPenalty')+1);
		//~ console.log(this.get('undoPenalty'));
		this.trigger('change:undo',true);
		//~ console.log(move);
		for(var i=0; i<move.length; i++){
			// Change a visibility.
			if(move[i].action == 'visibility'){
				move[i].card.set('visibility',move[i].visibility);
			}
			
			// Change a position.
			if(move[i].action == 'pos'){
				
				
				this.moveCards(
					move[i].card.pos.row,
					move[i].card.pos.height,
					move[i].oldPos.row,
					true
				);
			}
		}
		this.move = false;
		this.endMove();
	},
	
	getMoveCount : function(){
		return this.undoHistory.length + this.get('undoPenalty')*2;
	},
	
	getTime : function(format){
		if(typeof format == 'undefined'){
			format = 'mins';
		}
		
		var secs = Math.round(((new Date()).getTime() - this.get('timeStart')) / 1000);
		if(format == 'secs'){
			return secs;
		} else if(format == 'mins'){		
			return this.getFormattedTime(secs);
		}
	},
	
	getFormattedTime : function(secs){
		var mins = Math.round(secs / 60);
		secs = Math.round(secs % 60);
		if(secs<10){
			secs = "0"+secs;
		}
		return mins + ":" + secs;
	},
	
	/**
	 * The Microsoft-style scoring system.
	 */
	getScore : function(){
		var completed = 0;
		for(var i=this.positions.foundation; i< this.positions.deck; i++){
			if(this.piles[i].length > 0){
				completed++;
			}
		}
		
		return 500 - this.getMoveCount() + completed*100;
	},
	
	/**
	 * Set up our game logic.
	 */
	initialize : function(){		
		// Set up our piles
		this.piles = [];
		for(var i=0; i<20; i++){
			this.piles[i] = [];
		}
		
		/**
		 * Suits may be 1, 2, or 4 for a progressibely harder game.
		 */
		switch(this.get('suits')){
			case 1: // One suit
				this.cards = new Deck({
					deckCount:8,
					suits : [3],
					seed : this.get('seed')
				});
				break;
			case 2: // Two suits
				this.cards = new Deck({
					deckCount:4,
					suits : [2,3],
					seed : this.get('seed')
				});
				break;
			case 4: // 4 suits! :O
			default:
				this.cards = new Deck({
					deckCount:2,
					seed : this.get('seed')
				});
		}

		// Attach to the card change events.
		this.attachEvents();

		// Introduce some randomness
		this.cards.shuffle();
		
		// Dole out cards to the tableau.
		for(var i=0; i<54; i++){
			var nextCard = this.cards.next();
			if(i > 43){
				this.setCardVisibility(nextCard,true);
			}
			this.addCard(nextCard,i % 10);
		}
		
		// Put the remainder on deck.
		for(var i=0; i<50; i++){
			this.addCard(this.cards.next(),this.positions.deck);
		}
		
		// Each time the cards move around, see if we have a win state.
		var that = this;
		this.bind('change:piles',function(){
			that.checkGameStatus();
		});
		
		// Cancel the setup "move", otherwise people would be able to 
		// undo back to the deck. 
		this.move = false;
		
		this.set('timeStart',(new Date()).getTime());
		this.undoHistory = [];
	},
	
	getHint : function(){
		var cards = {};
		var keys = [];
		for(var i=this.positions.tableau; i< this.positions.foundation; i++){
			var pileLength = this.piles[i].length;
			if(pileLength > 0){
				var card = this.getHighestMovableCard(i);
				
				if(pileLength - card.pos.height == 12){
					// This should be a 12-card pile, moveable pile,
					// thus it can be moved to the foundation.
					return {
						src: card,
						dest: 'foundation'
					}
				}
				
				var key = (card.get('number') < 10 ? '0' : '') + card.get('number')+'-'+card.get('suitName');
				cards[key] = card;
				keys.push(key);
			}
		} 
		keys.sort();
		
		var fallback = false;
		for(var i=keys.length; i>0; i--){
			var srcCard = cards[keys[i-1]];
			var srcCardParent = this.piles[srcCard.pos.row][srcCard.pos.height-2];
			for(var j=this.positions.tableau; j< this.positions.foundation; j++){
				var destCard = this.getTopCard(j);
				if(destCard && destCard.get('number') == srcCard.get('number') +1){
					if(destCard.get('suitName') == srcCard.get('suitName')){
						return {
							src : srcCard,
							dest : destCard
						};
					} else if(
						fallback == false &&
						
						// Don't offer to move to a non-like card of the same number.
						(typeof srcCardParent != 'undefined' &&
						destCard.get('number') != srcCardParent.get('number'))
					) {
						fallback = {
							src : srcCard,
							dest : destCard
						};
					}
				}
			}
		}
		
		if(fallback){
			return fallback;
		}
	},
	
	attachEvents : function(){
		var that = this;
		for(var i=0; i<this.cards.cards.length; i++){
			this.cards.cards[i].bind('change:css',function(card){
				that.trigger('change:css',card);
			});
		}
	},
		
	/**
	 * Deal from the deck.
	 * This function deals out a card from the deck to each row of the
	 * tableau.
	 * FIXME: In traditional spider, each row must have at least one
	 * card, whereas this implementation is "relaxed spider" because
	 * this is not enforced.
	 */
	deal : function(){
		// Get the deck and make sure there's cards left.
		var deck = this.piles[this.positions.deck];
		if(this.deckSize() == 0){
			return;
		}
		
		var that = this;
		
		// Dish out a card to each tableau row.
		for(var i=this.positions.tableau; i<this.positions.foundation; i++){
			var nextCard = deck.pop();
			this.setCardVisibility(nextCard,true);
			that.piles[i].push(nextCard);
			that.updatePos(
				that.piles[i][that.piles[i].length-1],
				i,
				that.piles[i].length
			);
		}
		this.endMove();
	},
	/**
	 * Oops, implemented the deal algorithm for the wrong game.
	 */
	dealSolitaire : function(){
		var discard = this.piles[this.positions.discard];
		if(deck.length > 0){
			discard.push(deck.pop());
		} else {
			this.piles[this.positions.deck] = discard.reverse();
			this.piles[this.positions.discard] = [];
			for(var i=0; i<deck.length; i++){
				this.updatePos(this.piles[this.positions.deck][i],this.positions.deck,i);
			}
		}
		this.endMove();
	},
	
	addCard : function(card,row){
		this.piles[row].push(card);
		this.updatePos(card,row);
	},
	
	setCardVisibility : function(card, visibility, preventundo){
		if(typeof card == 'undefined') {
			return;
		}
		
		if(!preventundo){
			if(!this.move){
				this.startMove();
			}
			
			this.move.push({
				action : 'visibility',
				card : card,
				visibility : card.get('visibility')
			});
		}
		card.set('visibility',visibility);
	},
	/**
	 * UpdatePos adds positioning metadata to a card.
	 * Sort of a reverse lookup to index card positining on the game
	 * board. Call this each time you move a card so as to update the
	 * metadata to match the card piles.
	 */
	updatePos : function(card,row,height,preventundo){
		
		// if card.pos is undefined it's a placeholder, not historyworthy
		if(!preventundo && typeof card.pos != 'undefined'){
			if(!this.move){
				this.startMove();
			}
			
			//~ console.log(card,card.pos);
			
			this.move.push({
				action : 'pos',
				card : card,
				oldPos : _.extend({},card.pos),
				visibility : card.get('visibility')
			});
		}
		
		card.pos = {
			row : row,
			height : _.isUndefined(height) ? this.piles[row].length : height
		}
		
		if(row < this.positions.foundation){
			card.pos.name = 'tableau';
			card.pos.col = row;
		} else if(row < this.positions.deck){
			card.pos.name = 'foundation';
			// Foundation starts at row 10.
			card.pos.col = row - this.positions.foundation;
		} else if(row == this.positions.deck){
			card.pos.name = 'deck';
			card.pos.col = 0;
		} else if(row == this.positions.discard){
			card.pos.name = 'discard';
			card.pos.col = 0;
		} else {
			console.log('uhhh...',row);
		}
		return card;
	},
	
	/**
	 * Move a card elsewhere on the board, taking any child cards with it.
	 * @param source the Card object you wish to move.
	 * @param dest A destination card, or placeholder you wish to move
	 * 		       the source card onto.
	 */
	moveCard : function(source,dest){
		// Quick sanity check.
		if(!source || !dest){
			return;
		}
		
		// The source and dest rows.
		var sourceRow = this.piles[source.pos.row];
		var destRow = this.piles[dest.pos.row];
		
		// Check to make sure we can move this card.
		var moveRequest = this.checkColumn(source.pos.row,source.pos.height-1);
		
		// This is the destination.
		var destCard = this.getTopCard(dest.pos.row);
		
		// Debug code.
		if(this.get('debug')){
			console.log('debug mode, allowing move');
			this.moveCards(source.pos.row,source.pos.height,dest.pos.row,false);
			return true;
		}
		
		// Don't move these cards.
		if(source.pos.name == 'foundation' || !moveRequest.ordered || moveRequest.mixedSuit){
			return false;
		}
		
			
		// Move a suit onto a blank foundation.
		if(dest.pos.row >= this.positions.foundation && dest.pos.row < this.positions.deck){
			if(this.canMoveCard(this.getCardFromBottom(source.pos.row,13))){
				this.moveCards(source.pos.row,source.pos.height,dest.pos.row,false);
				return true;
			}
			
			return false;
		}
	
		if(
			(destRow.length == 0) ||
			moveRequest.firstNum == destCard.get('number') -1
		){
			this.moveCards(source.pos.row,source.pos.height,dest.pos.row,false);
			
			// Automatically move to the foundation.
			if(this.piles[dest.pos.row].length > 12 && this.canMoveCard(this.getCardFromBottom(dest.pos.row,13))){
				this.moveToFoundation(this.getCardFromBottom(dest.pos.row,13));
			}
			
			return true;
		}
		return false;
		
	},
	getCardFromBottom : function(row,numberFromBottom){
		if(typeof this.piles[row][this.piles[row].length-numberFromBottom] != undefined){
			return this.piles[row][this.piles[row].length-numberFromBottom];
		}
		return false;
	},
	moveCards : function(sourceRow,height,destRow,preventundo){
		
		// These are the cards we need to move, one at a time.
		var toMove = this.piles[sourceRow].splice(height-1);
		
		// For each card
		for(var i=0; i<toMove.length; i++){
			// push it onto the destination
			this.piles[destRow].push(toMove[i]);
			
			// Update the card metadata.
			this.updatePos(toMove[i],destRow,this.piles[destRow].length,preventundo);
		}
		
		if(height>=2){
			this.setCardVisibility(this.piles[sourceRow][height-2],true,preventundo);
		}
		
		this.endMove();
	},
	/**
	 * Check game status and see if we're at a win state.
	 */
	checkGameStatus : function(){
		
		if(this.hasWinState()){
			this.gameWon();
			return;
		}
		
	},
	
	gameWon : function(){
		this.writeGameStats('won',function(){
			this.trigger('game:won');
		});
	},
	
	loadGameStats : function(callback){
		if(!this.score){
			this.score = new Scoreboard(this.scoreDefs);
			this.score.load(callback);
		} else {
			callback();
		}
	},
	
	writeGameStats : function(state,callback){
		var that = this;
		var moves = this.getMoveCount();
		
		if(moves < 10){
			//~ console.log("Class this one as abandoned, don't score it.");
			callback.call(that);
			return;
		}
		
		this.loadGameStats(function(){
			var lowestMoves = that.score.getField('regular','movesLowest');
			if(lowestMoves == 0 || lowestMoves > moves){
				lowestMoves = moves;
			}
			
			if(state == 'won'){
				that.score.updateFields('regular',{
					time : that.getTime('secs'),
					movesAverage : moves,
					movesLowest : lowestMoves,
					won : 1
					
				});
				that.score.resetStreak('regular','lost');
			} else {
				that.score.updateField('regular','lost',1);
				that.score.resetStreak('regular','won');
			}
      
			that.score.save(function(){
				callback.call(that);
			});
		});
	},
	
	
	getGameStats : function(callback){
		var that = this;
		this.loadGameStats(function(){
			callback(that.score.getFields());	
		});
		
	},
	
	getBadges: function(callback){
		var that = this;
		this.getGameStats(function(stats){
			var badges = [];
			if(stats.regular.won.streakLength){
				switch(stats.regular.won.streakLength){
					case 5:
					case 10:
					case 25:
					case 50:
						badges.push({
							badge: 'winningstreak-small',
							val : stats.regular.won.streakLength
						});
				}
				
				if(stats.regular.won.streakLength % 1000 == 0){
					badges.push({
						badge: 'winningstreak-huge',
						val : stats.regular.won.streakLength
					});
				} else if(stats.regular.won.streakLength % 100 == 0){
					badges.push({
						badge: 'winningstreak-large',
						val : stats.regular.won.streakLength
					});
				}
			}
			
			if(that.getMoveCount() <= stats.regular.movesLowest.val){
				badges.push({
					badge: 'best-moves', 
					val : that.getMoveCount()
				});
			}
			
			if(that.getTime('secs') <= stats.regular.time.val){
				badges.push({
					badge: 'improved-time',
					val : that.getTime('secs')
				});
			}
			
			callback(badges);
		});
	},
	hasWinState : function(){
		var winState = 13 * 8; // 8 piles of 13 cards.
		
		// Start at the foundation & check until we reach the deck.
		for(var i=this.positions.foundation; i<this.positions.deck; i++){
			winState -= this.piles[i].length;
		}
		
		if(winState == 0){
			return true;
		}
		return false;
	},
	deckSize : function(){
		return this.piles[this.positions.deck].length;
	},
	getCards : function(){
		return _.isUndefined(this.cards.cards) ? [] : this.cards.cards;
	},
	getTopCard : function(row){
		return this.getCardFromBottom(row,1);
	},
	getHighestMovableCard : function(row){
		if(this.piles[row].length ==0){
			return false;
		}
		
		var prev = this.getTopCard(row);
		if(this.piles[row].length == 1){
			return prev;
		}
		for(var i=this.piles[row].length-2; i>=0; i--){
			if(!this.canMoveCard(this.piles[row][i])){
				return prev;
			}
			prev = this.piles[row][i];
		}
		// There are no higher cards, the top one can be moved.
		return prev;
	},
	checkColumn : function(column,start){
			
		// We've been given a dud!
		if(_.isUndefined(this.piles[column][start])){
			return false;
		}
		
		var results = {
			mixedSuit : false,
			alternatingColor : true,
			ordered : true,
			suitName : this.piles[column][start].get('suitName'),
			firstNum : this.piles[column][start].get('number'),
			cards : this.piles[column].length - start
		}
		
		var prevNum = false;
		var prevColor = false;
		
		for(var i=start;i<this.piles[column].length; i++){
			var thisCard = this.piles[column][i];
			
			if(i==start){
				results.suitName = thisCard.get('suitName');
				results.firstNum = thisCard.get('number');
			} else if(prevNum != thisCard.get('number') +1) {
				results.ordered = false;
			}
			
			if(results.suitName != thisCard.get('suitName')){
				results.mixedSuit = true;
				results.suitName = 'mixed';
			}
			
			// Are these alternating colour cards.
			if(prevColor != false){
				if(prevColor == thisCard.getColor()){
					results.alternatingColor = false;
				}
			}
			
			prevNum = thisCard.get('number');
			prevColor = thisCard.getColor();
		}
		return results;
	},
	canMoveCard : function(card){
		// Debug mode?
		if(this.get('debug')){
			return true;
		}
		
		if(typeof card == 'undefined'){
			return false;
		}
		
		// If the card is flipped, don't move it.
		if(card.get('visibility') == false){
			return false;
		}
		
		// Otherwise perform some basic checks to see if this card stack
		// can theoretically be moved.
		var results = this.checkColumn(card.pos.row,card.pos.height-1);
		if(results.ordered && results.mixedSuit === false){
			return true;
		}
		return false;
	},
	/**
	 * Get the next free foundation row. Useful for automatically
	 * sending cards to the foundation.
	 */
	getEmptyFoundation : function(){
		for(var i=this.positions.foundation; i< this.positions.deck; i++){
			if(this.piles[i].length == 0){
				return i;
			}
		}
		return false;
	},
	moveToFoundation : function(card){
		var row = card.pos.row;
		if(
			// 12 includes 13 cards, offsetting for a placeholder.
			this.piles[row].length - card.pos.height < 12 ||
			this.piles[row][this.piles[row].length-1].get('number') != 1
		){
			return false;
		}
		
		// FIXME: This is the shittest syntax ever.
		this.moveCard(card,{
			name:'foundation',
			pos : {row:this.getEmptyFoundation()}
		});
	}
});
