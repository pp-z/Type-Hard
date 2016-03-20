var wordsBox=[];
	wordsBox=[{word:"Raheem", posX:20},{word:"Amazing", posX:30},{word:"queue", posX:40},{word:"Melbourne", posX:50}];
	var keyNum=0;
	var str=null;
	var totalLetter=0;
	var index=0;
	var j;
	var l=0;

$(document).ready(function(){
	
	var y=10;
	var speed=0.4;


	for(var i=0;i<wordsBox.length;i++)
	{
	$("#words").append("<span>"+wordsBox[i].word+"</span><br>");
	totalLetter+=wordsBox[i].word.length;
	}
	
	$(document).keyup(function(key){
		


		var letterValue=key.keyCode;
		var letter = String.fromCharCode(letterValue);
		if(l==0)
		{
			
			for(var i=0;i<wordsBox.length;i++)
				{
					if(wordsBox[i].word[0].toUpperCase()===letter)
    				{
				
    				str=wordsBox[i].word;
					l=str.length;
					j=i;
					
    				}	
    			}
    	}
		if(l!=0)
		{
		if(letter===str[0].toUpperCase())
		
		{	
			var len = str.length;
			str=str.substring(1,len);
			l--;
			
			wordsBox[j].word = (wordsBox[j].word).substring(1,len);
			if(l==0)
				wordsBox.splice(j,1);	
			$("#words").empty();
			$("#words").html(myFunction());
			keyNum++;
			$("#score").html(keyNum);
			

			
		}
		}
		

	});
	function myFunction()
	{
		for(var i=0;i<wordsBox.length;i++)
			$("#words").append("<span >"+wordsBox[i].word+"</span><br>");
			
		return;
	}

	function render()
	{

	$("#words").css({"top":y+"px"});
		
	y+=speed;

	if(y<=600 && keyNum==totalLetter)
		gameWon();
	else
		if(keyNum<totalLetter && y>600)
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
