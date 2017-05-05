
	
	
	
  var headerImages = ["FB-Game-Head-Ruzzle-Blue.png", "FB-Game-Head-WBA.png","FB-Game-Head-Ruzzle-Yellow.png","FB-Game-Head-WBA.png", "FB-Game-Head-RAD.png"];
  var footerImages = ["FB-Game-Foot-Ruzzle-Blue.png", "FB-Game-Foot-WBA.png","FB-Game-Foot-Ruzzle-Yellow.png","FB-Game-Foot-WBA.png", "FB-Game-Foot-RAD.png"];
  var crossLinks = ["http://ruzzle-game.com", "http://wordbrain.maginteractive.com/","http://ruzzle-game.com","http://wordbrain.maginteractive.com/", "http://ruzzleadventure.com/"];
  var storeLinksApple = ["https://app.adjust.com/inyyp5", "https://app.adjust.com/dsimyp", "https://app.adjust.com/inyyp5", "https://app.adjust.com/dsimyp", "https://app.adjust.com/h6nn08"]
  var storeLinksGoogle = ["https://app.adjust.com/7nrjg4", "https://app.adjust.com/5la7c1", "https://app.adjust.com/7nrjg4", "https://app.adjust.com/5la7c1", "https://app.adjust.com/5nlgk3"]
  var imageNr = 1;

	function cycleImages(){
        $('#crossPromotionHeader').fadeOut(800,function(){//fade out the top image
          document.getElementById("headerImage").src= "https://storage.googleapis.com/magfacebookapps/ruzzle/banners/" + headerImages[imageNr];
          document.getElementById("headerLink").href= crossLinks[imageNr];
      document.getElementById("appStore").href= storeLinksApple[imageNr];
      document.getElementById("googlePlay").href= storeLinksGoogle[imageNr];
          $('#crossPromotionHeader').fadeIn(800);
        });

        $('#crossPromotionFooter').fadeOut(800,function(){//fade out the top image
          document.getElementById("footerImage").src= "https://storage.googleapis.com/magfacebookapps/ruzzle/banners/" + footerImages[imageNr];
          document.getElementById("footerLink").href= crossLinks[imageNr];
      document.getElementById("appStoreFooter").href= storeLinksApple[imageNr];
      document.getElementById("googlePlayFooter").href= storeLinksGoogle[imageNr];
          $('#crossPromotionFooter').fadeIn(800);
        });

        imageNr++;
        if(imageNr >= headerImages.length){
          imageNr = 0;
        }
    }

    $(document).ready(function(){
    // run every 7s
    setInterval('cycleImages()', 180000);

	
	CHANGES TO MAKE IN CHÈCHE MO
	var playTurn = function (square) {

      // make sure we are still forming a valid word
      for (var i = 0, len = wordList.length; i < len; i++) {
        if (wordList[i].indexOf(curWord + $(square).text()) === 0) {
			if ( curWord.length === 1 || upward === true ) {
				upward = true;
				backward = false;
				$(square).addClass('selected');
				selectedSquares.push(square);
				curWord += $(square).text();
				break;
			}
        } else if (wordList[i].indexOf($(square).text() + curWord) === (wordList[i].length - curWord.length - 1)){
			if ( curWord.length === 1 || backward === true ) {
				backward = true;
				upward = false;
				$(square).addClass('selected');
				selectedSquares.push(square);
				curWord = $(square).text() + curWord;
				break;
			}
		}
      }
    };