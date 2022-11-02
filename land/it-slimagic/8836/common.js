$(function() {

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	// replace custom forms
		jcf.lib.domReady(function(){
			jcf.customForms.replaceAll();
		});


	$('a.btn, .nav a').on('click', function(event){
		event.preventDefault();
		var hr = $(this).attr('href');
		$('body, html').animate({scrollTop : $(hr).offset().top} ,1000);
	})

	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
		$('.nav').toggle();
	});

	var ww = $(window).width();
	if(ww < 950){
		$('.nav a').on('click', function(event){
			$('.nav').hide();
			$(".sandwich").removeClass("active");
		});
	}

});

 /*---timer---*/
document.addEventListener("DOMContentLoaded", function (event) {
    var fullTime = new Date().getTime() + 13500000; 
    $('.countdown-container').countdown(fullTime, function (event) {
        $(this).html(event.strftime(
        	'<span class="time time_hours">%H</span>'
            +'<b class="dots">:</b>'
            +'<span class="time time_minutes">%M</span>'
            +'<b class="dots">:</b>'
            +'<span class="time time_seconds">%S</span>'));
    })}); 
