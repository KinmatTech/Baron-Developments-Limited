// JavaScript Document
$(document).ready(function(e) {
    $('.anser').hide();
	$('.capio').click(function(){
		$(this).next('.anser').slideToggle('slow');	
	});
});
//curtain home page
$(document).ready(function(e) {
	//index page: join d3m button on top right bar
	//$('.joincarry').hide();
    $('.join').click(function(){
		$('.joincarry').slideDown('slow','',function(){
			$('.joinmid').fadeIn('slow');	
		});	
	});
	$('.xclose').click(function(){
		$('.joinmid').fadeOut('slow','',function(){
			$('.joincarry').slideUp('slow');	
		});	
	});
	
	clicks=0;
		$("#clop").click(function()
		{
			var menu1 = $("#hdall");
			var menu2 = $(".navi");
				if (clicks==0){
				menu1.addClass("posi");
				menu1.animate({right:"200px"});
				menu2.animate({right:"0px",});
				 $('#menu').html("clear");
			clicks=1;
				return;
			}
			else
				{
					menu1.removeClass("posi");
					menu1.animate({right:"0px"},1000);
					menu2.animate({right:"-200px",});
					$('#menu').html("menu");
					clicks=0;
					return;	
				}
		}); 
		
		$('.projects').click(function(e) {
            var gid = $(this).attr('id');
			$('.year'+gid).css('display','block').fadeIn(3000);
			$('.year'+gid).siblings().css('display','none').fadeOut(2000);
			
			$(this).children().addClass('yearlyr').removeClass('yearlya');
			$(this).siblings().children().addClass('yearlya').removeClass('yearlyr');
        });
});