$(function() {
//controls when button appears
	if ($(window).outerWidth() > 650 ) {
			$("nav").addClass("desktopnav").removeClass("mobilenav");
		} else {
			$("nav").addClass("mobilenav").removeClass("desktopnav");
			$("#navbutton").css( {"display": "inline"});
		}
	$(window).resize(function() {
		if ($(window).outerWidth() > 650 ) {
			$("#navbutton").css( {"display": "none"});
			$("nav").addClass("desktopnav").removeClass("mobilenav");
			$(".desktopnav").css({"display":"inline-block"});
			$("#plusspin").removeClass("anim rev-anim");
		} else {
			$("#navbutton").css( {"display": "inline"});
			$("nav").addClass("mobilenav").removeClass("desktopnav");
			$(".desktopnav").css({"display":"none"});
			$(".mobilenav").css({"display":"none"});
			$("#plusspin").addClass("rev-anim");
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
