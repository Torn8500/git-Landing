$(document).ready(function() {
	var treeHours = new Date().getTime() + 13500000;	
	$('#timer, #timer2, #timer3').countdown(treeHours, function(event) {				
		var hours = event.offset.hours;
		var minutes = event.offset.minutes;
		var seconds = event.offset.seconds;

		var minutesPart1 = Math.floor(event.offset.minutes/10);
		var minutesPart2 = event.offset.minutes%10;

		var secondsPart1 = Math.floor(event.offset.seconds/10);
		var secondsPart2 = event.offset.seconds%10;	

		var $this = $(this).html(event.strftime(''			
			+ '<span class="bg-date textBig">' + hours +  ' : </span>'
			+ '<span class="bg-date textBig">' + minutesPart1 + minutesPart2 +  ' : </span>'
			+ '<span class="bg-date textBig">' + secondsPart1 + secondsPart2 + ' </span>'));
	});
    
    if($(window).width() > 767){
        $('#popup4').modal({
            backdrop: 'static',
            show: true
        });
    }
    
    setTimeout("$('.percent').css('display','block');", 40000);
    
    /*init();*/

});

function init() {
	var popupYes=$.cookie('popupYes');
  	/*var smallSlider=$.cookie('smallSlider');  	*/
  	
	if(popupYes != 'true'){
	    $('#popup4').modal({
	        backdrop: 'static',
	        show: true
	    });
		$.cookie('popupYes',true,{
	        expires: 180,
	        path: '/'
		});//запись в куки  
		
	}		
}

$('section a[href^="#"]').bind('click.smoothscroll',function (e) {
    e.preventDefault();
 
    var target = this.hash,
    $target = $(target);
 
    $('html, body').stop().animate({
    'scrollTop': $target.offset().top
    }, 500, 'swing', function () {
        window.location.hash = target;
    });
});


$('.btn_close, .menu_content a').click(function(){
    $('.menu_content').collapse('hide');
});


$('.foot-btn').click(function(){
    $('.footer-holder').toggle('linear');
    $('.foot-btn').toggleClass('open');
    
    var destination = $(".foot-btn").offset().top;           
  	$('body').animate({ scrollTop: destination }, 500);
});


$('#element').scroolly([
	{
	    to: 'con-top',
	    direction: 1,
	    css:{
	        top:'-100px',
	        bottom: '',
	        left: '0',
	        'margin-left': '25px',	        
	        position: 'absolute'
	    }
	},
	{
	    to: 'con-top',
	    direction: -1,
	    css:{
	        top: 'auto',
	        bottom: '12px',
	        position: 'absolute'
	    }
	},
	{
	    from: 'con-top = vp-center',
	    to: 'con-bottom - 100el = vp-top',
	    direction: 1,
	    css:{
	        top: '50%',
	        left: 'auto',
	        position: 'fixed'
	    }	    
	},
	{   
	    from: 'con-bottom = vp-bottom',
	    direction: 1,
	    css:{
	        top: 'auto',
	        bottom: '12px',
	        position: 'absolute'
	    },
	    onTopIn: function($el){	   
	    	$('#container').css('background','url(http://biolip.ru/690/images/gif_fd.gif) no-repeat left bottom');
	    	$('.section2 .borderGreen').addClass('borderGreenGo');
	    },
	    onTopOut: function($el){
	    	$('.section2 .hidden-xxs').html('<img class="gif" src="img_girl5-1.png"/*tpa=http://biolip.ru/690/images/img_girl5.png*/>');
	    }	    
	}	
], $('#container'));

$('.section3 .row').scroolly([
	{
	    from: 'con-top = vp-center',
	    /*to: 'con-center - 100el = vp-top',*/
	    direction: 1,
	    onTopIn: function($el){
	    	$('.section3 .row>div').addClass('blockGo');
	    }
	}
], $('.section3'));

$('.section4 .around-xs').scroolly([
	{
	    from: 'el-top = vp-center',
	    /*to: 'con-center - 100el = vp-top',*/
	    direction: 1,
	    onTopIn: function($el){
	    	$('.section4 .borderGreen').addClass('borderGreenGo');
	    }
	}
], $('.section4'));

$('.section6 .backMan').scroolly([
	{
	    from: 'el-top = vp-center',
	    /*to: 'con-center - 100el = vp-top',*/
	    direction: 1,
	    onTopIn: function($el){
	    	$('.section6 .backMan .backGreen2').addClass('percentGo');
	    }
	}
], $('.section6'));

$('.section8 .textBig2').scroolly([
	{
	    from: 'el-top = vp-center',
	    /*to: 'con-center - 100el = vp-top',*/
	    direction: 1,
	    onTopIn: function($el){
	    	$('.section8 .borderGreen').addClass('borderGreenGo');
	    }
	}
], $('.section8'));

$('.section9 h3').scroolly([
	{
	    from: 'el-top = vp-center',
	    /*to: 'con-center - 100el = vp-top',*/
	    direction: 1,
	    onTopIn: function($el){
	    	$('.dribs').addClass('dribsGo');
	    	$('.glass').addClass('glassGo');
	    }
	}
], $('.section9'));

$('#grass').scroolly([
	{
	    to: 'con-top',
	    direction: 1,
	    css:{
	        top:'0',
	        bottom: 'auto',
	        position: 'absolute'
	    }
	},
	{
	    to: 'con-top',
	    direction: -1,
	    css:{
	        top: 'auto',
	        bottom: '0',
	        position: 'absolute'
	    }
	},
	{
	    /*from: 'con-top = vp-center',
	    to: 'con-bottom = vp-bottom',*/
	    
	    from: 'con-top = vp-center',
	    to: 'con-bottom - 100el = vp-center',
	    
	    
	    direction: 1,
	    css:{
	        top: '50%',
	        bottom: 'auto',
	        position: 'fixed'
	    }	    
	},
	{   
	    from: 'con-bottom = vp-bottom',
	    direction: 1,
	    css:{
	        top: 'auto',
	        bottom: '0',
	        position: 'absolute'
	    },
	    onTopIn: function($el){	   
	    	
	    }
	}	
], $('#grassContainer'));

$('.section2 .row').scroolly([
	{
	    from: 'con-top = vp-center',
	    /*to: 'con-center - 100el = vp-top',*/
	    direction: 1,
	    onCheckIn: function($el){
	    	$('div#rc-connect').show();
	    	setTimeout(function(){
        		$('#rc-phone-form').animate({width:'605%'}).removeClass('closed');
        		$('#rc-phone-form-close').removeClass('closed');
        	}, 1000);
	    }
	}
], $('.section2'));

/*$('.section1 .boxOrder, .section10 .boxOrder, .section4 .percentGo, .section7 .percentGo').scroolly([
	{
	    from: 'el-top = vp-bottom',
	    to: 'el-bottom + 27 = vp-top',
	    direction: 0,
	    onCheckIn: function($el){
	    	$('.percent').removeClass('_hidden-md');
	    	$('.percent').addClass('_visible-md');
	    },
	    onCheckOut: function($el){
	    	$('.percent').removeClass('_visible-md');
	    	$('.percent').addClass('_hidden-md');
	    }
	}
], $('body'));*/

