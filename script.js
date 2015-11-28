

	var wordsBox=[];
	wordsBox=[["type","raheem","ajnas"]];
	var keyNum=0;
	var str="";
	var totalLetter=0;
	var index=0;

$(document).ready(function(){
	
	var y=10;
	var speed=0.4;

	//if(str==="")
    //str=wordsBox[0][0];

	for(var i=0;i<wordsBox[0].length;i++)
	{
	$("#words").append(wordsBox[0][i]+"<br>");
	totalLetter+=wordsBox[0][i].length;
	}
	
	$(document).keyup(function(key){
		


		var letterValue=key.keyCode;
		var letter = String.fromCharCode(letterValue);
		if(str=="")
		{
		
			for(var i=0;i<wordsBox[0].length;i++)
				{
					if(wordsBox[0][i][0].toUpperCase()===letter)
    				{
    				str=wordsBox[0][i];
    				wordsBox[0].splice(i,1);
    				$("#words").empty();
    				$("#words").html(myFunction());
    				}	
    			}
    	}
		if(str!=="")
		if(letter===str[0].toUpperCase())
		{
			var len = str.length;
			str = str.substring(1,len);
			$("#word").html(str);
			keyNum++;

		
		}
		

	});
	function myFunction()
	{
		for(var i=0;i<wordsBox[0].length;i++)
			$(words).append(wordsBox[0][i]+"<br>");
	}

	function render()
	{

	$("#words").css({"top":y+"px"});
	$("#word").css({"top":y+"px"});
	
	y+=speed;

	if(keyNum==totalLetter)
		gameWon();
	else
		if(y>600)
			gameOver();

	setTimeout(render,10);
	}

	

	function gameWon()
	{
		{
			$("#end").html("You Won");
			$("#words").remove();
			$("#word").remove();
		}
	}
    

    function gameOver()
    {	

   
    	$("#end").html("Game Over");
    	$("#words").remove();
   		$("#word").remove();
    	return;
    
    }

	
	window.addEventListener("load", function(){ 
		render();
		});
	
});