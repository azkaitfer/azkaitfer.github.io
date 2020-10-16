$(document).ready(main);

	var contador = 1 ;
	
	function main(){
		$('.menu_bar, #back, .cerrar').click(function(){
			//$('.menu').toggle();
			if(contador == 1){
				$('nav, #back').animate({
					right:'0',
				});
				contador = 0;
			} else{
				
				contador = 1;
				$('nav, #back').animate({
					right:'-120%'
				});
			  }
		});
	};
$(function() {
    var pull = $('#pull');
    menu = $('.menu_categorias,.su');
    menuHeight = menu.height();

    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
});

$(window).resize(function(){
    var w = $(window).width();
    if(w > 320 && menu.is(':hidden')) {
        menu.removeAttr('style');
    }
});

$('.AnclaScroll').click(function (event){
 var altura = $('header').height();
   event.stopPropagation();
   var idElement = $(this).attr('href');
       Position = (jQuery(idElement).offset().top) - altura ;
   jQuery('html, body').animate({ scrollTop: Position }, 300);
   return false;
});

// Posicionador de Footer
$(window).bind("load", function() { 
       var footerHeight = 0,
           footerTop = 0,
           $footer = $("footer");
           
       positionFooter();
       function positionFooter() {
            footerHeight = $footer.height();
            footerTop = ($(window).height())+"px";
   
           if ( ($(document.body).height()) < $(window).height()) {
               $footer.css({
                    position: "absolute"
               }).animate({
                    bottom: 0
               },-1)
           } else {
               $footer.css({
                    position: "static"
               })
           }
        }

       $(window)
               .scroll(positionFooter)
               .resize(positionFooter)
        });