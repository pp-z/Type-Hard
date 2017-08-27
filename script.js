	var wordsBox = [];
	wordsBox = [
	  [
	    { word: "Servicenow", posX: 0, posY: 5 },
	    { word: "Amazone", posX: 50, posY: 20 },
	    { word: "Google", posX: 90, posY: 2 },
	    { word: "Facebook", posX: 120, posY: 40 },
	  ],
	  [
	    { word: "except", posX: 0, posY: 5 },
	    { word: "Reckles", posX: 50, posY: 20 },
	    { word: "explain", posX: 90, posY: 2 },
	    { word: "india", posX: 120, posY: 40 },
	    { word: "incredible", posX: 120, posY: 40 }

	  ]
	];
	var keyNum = 0;
	var str = null;
	var index = 0;
	var j;
	var l = 0;
	var totalLetterInArray = 0;

	$(document).ready(function() {

	  var y = 10;
	  var speed = 0.4;
	  displayWords(0);
function completed(){
	  for(var i=0;i<wordsBox.length;i++)
	  	for(var j=0;j<wordsBox[i].length;j++)
	  		totalLetterInArray+=wordsBox[i][j].word.length;

	  		return totalLetterInArray;
	  }		
function displayWords(j){
		var totalLetter = 0;
	  for (var i = 0; i < wordsBox[j].length; i++) {
	    //$("#words").append("<span>"+wordsBox[i].word+"</span><br>");
	    $('<span></span>').css({ "left": wordsBox[j][i].posX + "px", "top": wordsBox[j][i].posY + "px" }).html(wordsBox[j][i].word).appendTo('#words');
	    totalLetter += wordsBox[j][i].word.length;
		}
		return totalLetter;
	}

	  $(document).keyup(function(key) {



	    var letterValue = key.keyCode;
	    var letter = String.fromCharCode(letterValue);
	    if (l == 0) {

	      for (var i = 0; i < wordsBox[0].length; i++) {
	        if (wordsBox[0][i].word[0].toUpperCase() === letter) {

	          str = wordsBox[0][i].word;
	          l = str.length;
	          j = i;

	        }
	      }
	    }
	    if (l != 0) {
	      if (letter === str[0].toUpperCase())

	      {
	        var len = str.length;
	        str = str.substring(1, len);
	        l--;

	        wordsBox[0][j].word = (wordsBox[0][j].word).substring(1, len);
	        if (l == 0)
	          wordsBox[0].splice(j, 1);
	        $("#words").empty();
	        $("#words").html(myFunction(0));
	        keyNum++;
	        $("#score").html(keyNum);



	      }
	    }


	  });

	  function myFunction(j) {
	    for (var i = 0; i < wordsBox[j].length; i++) {

	      $('<span></span>').css({ "left": wordsBox[j][i].posX + "px", "top": wordsBox[j][i].posY + "px" }).html(wordsBox[j][i].word).appendTo('#words');

	      //$("#words").append("<span id='a'>"+wordsBox[i].word+"</span><br>");
	      //alert(wordsBox[i].posX);
	      //$("span").css({"left":wordsBox[i].posX+"px"});

	    }
	  }

	  function render() {

	    $("#words").css({ "top": y + "px" });

	    y += speed;

	    if (y <= 600 && keyNum == completed())
	      gameWon();
	    else
	    if (keyNum < completed() && y > 590)
	      gameOver();

	    setTimeout(render, 10);
	  }



	  function gameWon() {
	    {
	      $("#end").html("You Won");
	      $("#words").remove();
	      $("#word").remove();
	    }
	  }


	  function gameOver() {


	    $("#end").html("Game Over");
	    $("#words").remove();
	    $("#word").remove();
	    return;

	  }


	  window.addEventListener("load", function() {
	    render();
	  });

	});