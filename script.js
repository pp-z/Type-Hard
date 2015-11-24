$(document).ready(function($){
	var y=10;
	var speed=2;
	function render()
	{

	$("#word").css({"top":y+"px"});
	y+=speed;
	setTimeout(render,10)
    

    if(y>500)
    {
    	$("#end").html("Game Over");
    	$("#word").empty();
    }
}
	window.addEventListener("load", function(){ 
		render();
		});
	
});