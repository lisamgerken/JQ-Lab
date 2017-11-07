$(document).ready(function() {

	$(".available").hover(function() {
		$(this).fadeTo(1000, 0.50);	
	}, function() {
		$(this).fadeTo(500, 1);
	});
	
	$(".available").on("click", function() {
		$(".formBox").css("visibility", "visible");
	});	
	
	$(".reserved").click(function() {
		$(this).css("cursor", "not-allowed");
	});
	
	$(".exitOut").click(function() {
		$(".formBox").css("display", "none");
	});
	
});