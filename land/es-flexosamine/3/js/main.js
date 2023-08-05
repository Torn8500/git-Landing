$(function(){
	
	/* scroll */
	$("a[href^='#']").click(function(){
		var _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});

	timeCol = new Date();
	var tovCol = timeCol.getHours()*2 + Math.floor(timeCol.getMinutes()/25);
	$('.product_count>span').html(55 - tovCol + ' piezas');

});