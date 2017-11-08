$(document).ready(function() {
	var name;
	var available;
	var usersName;
	var thisEl;
	var partyNum;
	var phone;
	var party;
	
	$("p").hover(function() {
		if ($(this).hasClass("available")) {
			$(this).fadeTo(1000, 0.50);	
		}
	}, function() {
		$(this).fadeTo(500, 1);
		
	});
	
	$(".exitOut").click(function() {
		$(".formBox").css("visibility", "hidden");
	});

	$("p").on("mouseenter", function(event) {
		if ($(this).hasClass("reserved")) {
			$(this).css("cursor", "not-allowed");
		} 
		console.log(event);
	});
	
	$(".available").on("click", function(event) {
		$(".formBox").css("visibility", "visible");
		thisEl = this;
	});
	
	$("#save-btn").on("click", function(event) {
		usersName = $("#name-id").val();
		phoneNum = $("#phone-id").val();
		partyNum = $("#party-id").val();
		$(".available").attr("name", usersName);
		$(".available").attr("phone", phoneNum);
		$(".available").attr("party", partyNum);
		$(thisEl).removeClass("available").addClass("reserved");
		$(".reserved").off("click");
		$("<span></span>").appendTo(".reserved");
		$("span").text("Reserved for: " + usersName + " Party: " + partyNum);
		$("span").css("z-index", "1");
		$(".formBox").hide();
	});
	
	
});

	