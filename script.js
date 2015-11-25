

	var wordsBox=Array();
	wordsBox[0]="Type";
	var k=0;
	var str1="";

	var str="";

$(document).ready(function($){
	
	var y=10;
	var speed=0.2;
    str=wordsBox[0];

	$("#word").html(str);
	$(document).keyup(function(x){
		var z=x.keyCode;
		var y = String.fromCharCode(z);
	
		if(y===str[0].toUpperCase())
		{

			
			if(k===wordsBox[0].length-1)
			{
				$("#end").html("You Won");
				("#word").remove();
							
			}
			

			var len = str.length;
			str = str.substring(1,len);



		
		$("#word").html(str);

		k++;
		
	}

	});

	function render()
	{

	$("#word").css({"top":y+"px"});
	y+=speed;
	setTimeout(render,10);	
    

    if(y>600)
    {
    	$("#end").html("Game Over");
    	$("#word").remove();
    	return;
    }
}
	window.addEventListener("load", function(){ 
		render();
		});
	
});