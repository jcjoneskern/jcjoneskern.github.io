$(function() {
//controls when button appears
//consider add/remove class instead on the nav so that it's less repetitive code
	if ($(window).width() > 650 ) {
			$("#navbutton").css( {"display": "none"});
		}
	$(window).resize(function() {
		if ($(window).width() > 650 ) {
			$("#navbutton").css( {"display": "none"});
			$(".mobilenav").css( {"display": "none"});
		} else if ($(window).width() < 650 ) {
			$("#navbutton").css( {"display": "inline"});
			$(".mobilenav").css( {"display": "none"});
		}
	});
	$("#navbutton").click(function() {
		$(".mobilenav").slideToggle("fast");
	});
	//click animation
	$("#plusspin").on("click", function() {
		$(this).toggleClass("anim");
		$(this).toggleClass("rev-anim");
	});


});
