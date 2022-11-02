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
