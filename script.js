$(document).ready(function($){
	var x=1000;
	function render()
	{

	$("#word").css({"top":x+"px"});
	setTimeout(render, 10);

	
    }


	window.addEventListener("load", function(){ 
		render();
	});
});