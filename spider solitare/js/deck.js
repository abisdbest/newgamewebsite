var Deck = Backbone.Model.extend({
	decks : false,
	cards : false,
	currentCard : 0,
	
	defaults : {
		deckCount : 1,
		jokers : false,
		suits : [0,1,2,3],
		seed : 0
	},
	
	initialize : function(){
		// Initialise these here or they're staaaatttiiiiccc!
		this.decks = [];
		this.cards = [];
		
		this.configureDeck();
	},
	
	keys : {
		suits : ['Clubs','Diamonds','Hearts','Spades'],
		cards : ['Joker','Ace','2','3','4','5','6','7','8','9','10','Jack','Queen','King']
	},
	
	configureDeck : function(options){
		for(var i=0; i < this.get('deckCount'); i++){
			this.addDeck();
		}
	},
	
	addDeck : function(options){
		var newDeck = [];
		var newCard = false;
		var suitNum = false;
		
		var jokers = this.get('jokers');
		var suits = this.get('suits');
		
		for(var card=0; card<this.keys.cards.length; card++){
			
			// Skip Jokers
			if(card == 0 && !jokers){
				continue;
			}
			
			for(var suit=0; suit <= suits.length-1; suit++){
				suitNum = suits[suit];
				
				// Create and distribute the card.
				newCard = new Card({
					number : card,
					numberName : this.keys.cards[card],
					suitNum : suitNum,
					suitName : this.keys.suits[suitNum],
					visibility: false
				});
								
				newDeck.push(newCard);
				this.cards.push(newCard);
			}
		}
		this.decks.push(newDeck);
	},

	/**
	 * Microsoft branded shuffle algo.
	 */
	shuffle : function(){
		//~ return;
		//~ for(var i=0; i<this.cards.length; i++){
			//~ var j = Math.round(Math.random()*(this.cards.length-1));
			//~ var dest = this.cards[j];
			//~ this.cards[j] = this.cards[i];
			//~ this.cards[i] = dest;
		//~ }
		
		if(this.cards.length){
			var i = this.cards.length;
			while(i--) {
				var j = this.msMaxRand(i+1);
				var tmp = this.cards[i];
				this.cards[i] = this.cards[j];
				this.cards[j] = tmp;
			}
		}
		this.cards.reverse();
		//~ return this.cards;
	},
	
	next : function(){
		if(typeof this.cards[this.currentCard] != 'undefined'){
			return this.cards[this.currentCard++];
		}
		return false;
	},
	
	/**
	 * Code via http://rosettacode.org/wiki/Deal_cards_for_FreeCell
	 */
	msRand : function(){
		this.set('seed',(this.get('seed') * 214013 + 2531011) & 0x7FFFFFFF);
		return ((this.get('seed') >> 16) & 0x7fff);
	},
	msMaxRand : function(max){
		max = this.msRand() % max
		return max;
	}
});


var Card = Backbone.Model.extend({
	defaults : {
		css : {}
	},
	initialize : function(){
		this.id = _.uniqueId('card-');
		this.set('css',{});
	},
	toString : function(){
		return this.get('numberName') + " of " + this.get('suitName');
	},
	getCssClass : function(){
		return 'card-'+ this.get('numberName').toLowerCase()+'-'+this.get('suitName').toLowerCase();
	},
	setCss : function(newCss,immediate){
		var oldCss = this.get('css');
		var hasChanged = false;
		
		// Whether to enable CSS transitions.
		var immediate = _.isUndefined(immediate) ? false : immediate;
		
		// Check each property and see if things have changed.
		for(property in newCss){
			if(_.isUndefined(oldCss[property]) || oldCss[property] != newCss[property]){
				hasChanged = true;
			}
			oldCss[property] = newCss[property];
		}
		oldCss['immediate'] = immediate;
		
		if(hasChanged){
			this.set('css',_.extend({},oldCss,newCss));
			this.trigger('change:css',this);
		}else{
			// Card has not changed
		}
		return this;
	},
	
	getColor : function(){
		if(this.get('suitName') == 'Hearts' || this.get('suitName') == 'Diamonds'){
			return 'red';
		} else {
			return 'black';
		}
	}
});
