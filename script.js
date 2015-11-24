$(document).ready(function($){
	var y=10;
	function render()
	{

	$("#word").css({"top":y+"px"});
	y+=10;
	setTimeout(render,100)
    }


	window.addEventListener("load", function(){ 
		render();
	});
});