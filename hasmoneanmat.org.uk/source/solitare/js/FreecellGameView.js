var FreecellGameView=Backbone.View.extend({cardRatio:151/104,cardWidth:104,cardHeight:151,cardMargin:10,canMoveAutomatically:true,cardAnimInterval:0,cardPosAnimationQueue:[],cardOffset:false,el:document.getElementsByTagName("body")[0],touch:false,initialize:function(b){var g=this;g.complete=_.isFunction(b.complete)?b.complete:function(){};this.model.bind("change:piles",function(){g.redrawCards()});this.model.bind("change:undo",function(i){if(!i){g.flashBoard()}});this.model.bind("change:css",function(i){g.cardCssChanged(i);$("#tb-moves").text(i18n.t("interface.toolbar.moves",{moves:g.model.getMoveCount()}));$("#tb-score").text(i18n.t("interface.toolbar.score",{score:g.model.getScore()}))});this.model.bind("game:won",function(){g.complete("won")});var f=function(){var a=g.model.get("current");if(a){if(g.model.moveCard(a,$(this).data("card"))){g.cardDeselect()}}};this.placeholders=[];for(var e=0;e<8;e++){var k=this.createPlaceholder(e);this.placeholders.push(k);var h=$(this.el).append($('<div class="placeholder"></div>').click(f).data("card",k).attr("id",k.id));this.setCardPos(h,k)}for(var e=0;e<8;e++){var k=this.createPlaceholder(this.model.positions.freecells+e);this.placeholders.push(k);var h=$(this.el).append($('<div class="placeholder"></div>').click(f).data("card",k).attr("id",k.id));this.setCardPos(h,k)}for(var e=0;e<this.model.piles.length;e++){for(var c=0;c<this.model.piles[e].length;c++){this.drawCard(this.model.piles[e][c])}}this.redrawCards();var d="mousedown mouseup touchmove touchend";$(window).unbind(d).bind(d,function(a){g.touchHandler(a)});var d="mousemove touchmove";$(window).unbind(d).bind(d,function(a){g.moveHandler(a)});var d="dblclick";$(".card",this.el).bind(d,function(a){g.model.moveToFreeCell($(this).data("card"))});$(window).resize(function(){g.unify()});this.unify();Mousetrap.bind("ctrl+shift+k",function(a){console.log("setting debug mode");g.model.set("debug",true)});Mousetrap.bind("ctrl+shift+alt+n",function(a){console.log("congratulations, easiest win ever.");g.model.gameWon()});Mousetrap.bind("d",function(a){g.model.deal()});Mousetrap.bind("h",function(a){g.getHint()});Mousetrap.bind("ctrl+z",function(a){g.model.undoMove()});var d="mouseout";$(window).unbind(d).bind(d,function(a){if(a.toElement===null){g.touch=false;g.redrawCards()}});g.setCardPosAnimated();g.cardAnimInterval=10;g.model.move=false;$(this.el)[0].addEventListener("contextmenu",function(a){a.preventDefault()});$(this.el).addClass("ready")},flashBoard:function(){$("body").addClass("flash");window.setTimeout(function(){$("body").removeClass("flash")},150)},getHint:function(){var f=this.model.getHint();if(f){$(".hint").removeClass("hint");if(f.dest=="foundation"){var e=$("#"+f.src.id).addClass("hint hint-src");var a=1;var d=this;var b=window.setInterval(function(){var g=a;if(g>8){g=g-8}$("#"+d.placeholders[g+9].id).toggleClass("hint");if(a++>=16){window.clearInterval(b);window.setTimeout(function(){$(".hint").removeClass("hint")},1000)}},25)}else{var e=$("#"+f.src.id).addClass("hint hint-src");var c=$("#"+f.dest.id).addClass("hint hint-dest");window.setTimeout(function(){e.removeClass("hint").removeClass("hint-src");c.removeClass("hint").removeClass("hint-dest")},1500)}return}else{this.flashBoard()}},unify:function(){var b=window.innerWidth>1140?1140:window.innerWidth;this.cardWidth=b/10-10;this.cardHeight=this.cardWidth*this.cardRatio;$(".card,.placeholder").css({width:this.cardWidth+"px",height:this.cardHeight+"px"});for(var a=0;a<this.placeholders.length;a++){this.setCardPos($("#"+this.placeholders[a].id),this.placeholders[a],true)}$("#gameboard").css("width",(this.cardWidth+10)*9);this.redrawCards();this.gameboard=$("#gameboard").offset()},createPlaceholder:function(b){var a=this;var c=new Card({number:-1,suitName:"placeholder"});c.bind("change:css",function(d){a.cardCssChanged(d,false)});c=this.model.updatePos(c,b,0);return c},render:function(){return this},drawCard:function(a){var c=$('<div class="card"></div>');c.addClass(a.getCssClass()).attr("id",a.id);var b=this;c.click(function(){b.cardClick(this)});c.data("card",a);$(this.el).append(c)},redrawCards:function(c){var b=this;var d=this.model.getCards();for(var a=0;a<d.length;a++){this.redrawCard({el:$("#"+d[a].id),card:d[a],i:a,force:_.isUndefined(c)?false:c})}if(this.model.deckSize()==0){$("#deck").hide()}else{$("#deck").show()}},redrawCard:function(a){var b=this;b.setCardPos(a.el,a.card,a.force)},setCardPos:function(e,a,c){var d=this.cardPos(a);var b={left:Math.round(d.leftPx)+"px",top:Math.round(d.topPx)+"px",zIndex:a.pos.height};a.setCss(b);return e},cardCssChanged:function(c,a){var d=c.get("css");var b=$("#"+c.id);var a=d.immediate||(!_.isUndefined(a)&&a);delete d.immediate;if(a){b.addClass("dragging");b.css(d)}else{b.removeClass("dragging");this.cardPosAnimationQueue.push({el:b,css:d})}},setCardPosAnimated:function(){var b=this;if(this.cardPosAnimationQueue.length>0){var a=this.cardPosAnimationQueue.shift();if(this.cardAnimInterval<10){$(a.el).addClass("dragging")}$(a.el).css(a.css);if(this.cardAnimInterval<10){window.setTimeout(function(){$(a.el).removeClass("dragging")},25)}}if(this.cardAnimInterval==0&&this.cardPosAnimationQueue.length>0){this.setCardPosAnimated()}else{window.setTimeout(function(){b.setCardPosAnimated()},this.cardAnimInterval)}},cardPos:function(d){var b=d.pos.name;var c=d.pos.col;var a=d.pos.height;var f={top:0,left:0};if(b=="freecells"||b=="homecells"){f.top=0;f.left=c;if(b=="homecells"){f.left++}}else{if(b=="tableau"){a=a==0?1:a;f.top=1+(a-1)*0.13;f.left=c+0.5}else{}}f.topPx=f.top*(this.cardHeight+40);f.leftPx=f.left*(this.cardWidth+10);if(this.cardOffset&&b=="tableau"&&this.cardOffset[0]==c){var e=(0-this.cardOffset[1])/(this.model.piles[d.pos.row].length/(a-1));f.topPx+=e>0?e:0}return f},pos2row:function(a,b){a=a-$(this.el).offset().left;offset=b?this.cardWidth/2:0;a=Math.floor((a-offset)/(this.cardWidth+10));if(a<0||a>8){return false}return a},touchHandler:function(d){if(d.originalEvent.type=="mousedown"||d.originalEvent.type=="touchstart"){var b=$(d.target);var a=b.data("card");if(_.isUndefined(a)){return}if(this.model.canMoveCard(a)==false){this.touch=false;return}this.touch={el:b,card:a,col:a.pos.col,e:d,firstrun:true,dragging:false,currentRow:a.pos.col,dest:false}}if(this.touch&&(d.originalEvent.type=="mouseup"||d.originalEvent.type=="touchstop")){if(this.touch.dragging){if(this.model.moveCard(this.touch.card,this.touch.dest)){this.touch.el.removeClass("dragging");this.cardDeselect()}this.redrawCards(true)}else{if(this.cardOffset){this.cardDeselect();this.redrawCards(true)}else{var a=this.touch.el.data("card");var c=this.model.get("current");if(!c||c.get("number")==-1){this.cardSelect(this.touch.el,a)}else{if(!_.isUndefined(a.id)&&c.id==a.id){this.cardDeselect()}else{if(!this.model.moveCard(c,a)){this.cardSelect(this.touch.el,a)}else{this.cardDeselect()}}}this.redrawCards()}}this.touch=false}},moveHandler:function(g){var b=g.clientY<this.cardHeight*1.5;if(!this.touch){return}var f=this.pos2row(g.clientX,!b);if(this.touch.firstrun){this.cardOffset=false;this.touch.firstrun=false;this.touch.startRow=f}var c=this.touch.e.clientY-g.clientY;var a=this.touch.currentRow;this.touch.currentRow=f;this.cardOffset=false;this.touch.dragging=true;var d={left:(g.clientX-this.cardWidth/2-this.gameboard.left-this.cardMargin)+"px",top:(g.clientY-this.cardHeight/2-this.gameboard.top-this.cardMargin)+"px"};this.touch.card.setCss(d,true);if(b){this.touch.currentRow+=this.model.positions.freecells;if(this.touch.currentRow>=this.model.positions.homecells){this.touch.currentRow-=1}}if(this.touch.currentRow!==false&&this.touch.currentRow!==a){this.touch.dest=this.model.getTopCard(this.touch.currentRow);if(!this.touch.dest){this.touch.dest=this.createPlaceholder(this.touch.currentRow)}}},cardClick:function(a){},cardSelect:function(b,a){$(".current",this.el).removeClass("current");if(!_.isUndefined(a.id)){$(b).addClass("current");this.model.set("current",a)}},cardDeselect:function(a){$(".current",this.el).removeClass("current");this.model.set("current",false)}});