// JavaScript Document
$(document).ready(function(e) {
	$('.tooltipped').tooltip({delay: 50});

	/* function for left slide */
	/*$('body').on('click','.lslide',function(e) {
		//alert('got here');
		var gm = $('.abs').css('margin-left');
		//alert(gm);
		if(parseInt(gm)<0){
			var pw = $('.mypix').width();
			$('.abs').animate({marginLeft:parseInt(gm)+parseInt(pw)},1000);
			$('.rslide').css('display','block').fadeIn(1000);
		}else{
			$('.lslide').css('display','none').fadeOut(1000);
		}
    });*/
	/* function for right slide */
	/*$('body').on('click','.rslide',function(e) {
		//alert('got here');
		var wdt_diff = $('.abs').width()-$('.hid').width();
		var gm = $('.abs').css('margin-left');
		//alert(gm+'=='+wdt_diff*(-1));
		if(parseInt(gm)==wdt_diff*(-1)){
			$('.rslide').css('display','none').fadeOut(1000);
		}else{
			var pw = $('.mypix').width();
        	$('.abs').animate({marginLeft:parseInt(gm)-parseInt(pw)},1000);
			$('.lslide').css('display','block').fadeIn(1000);
		}
    });*/
	/* close modal div */
	$('body').on('click','#cancel',function(){
		$('.dialog-overlay').remove();
	});

});

$(window).load(function(e) {
	var gjson = new Array("copengroup.png","exotic.png","elshammah.png","adonai.png","elohim.png","elshammah-bungalow.png");
	var dl = $('<div>').addClass('dialog-overlay').css('height',$(document).height()).appendTo('body').fadeIn(2000);
	var tp = $('<div>').addClass('gtop white-text col s12').css('color','#000').appendTo(dl);
	var clear = $('<a>').attr('href','javascript:;').css('float','right').appendTo(tp);
	var clear_ic = $('<i>').addClass('material-icons white-text').css({'margin-top':5+'px','margin-right':10+'px'}).attr('id','cancel').html('clear').appendTo(clear);
	//var tp_ctr = $('<div>').addClass('container').appendTo(tp);
	
	var big_img = $('<div>').addClass('container hid col s12 white-text').css('height',$(window).height()).appendTo(dl);
	
	/* Absolute div holding images */
	var abs_div = $('<div>').addClass('abs').css({'height':$(window).height(),'width':gjson.length*big_img.width()}).appendTo(big_img);
	
	/* Loop through the images */
	for(var k=0; k<gjson.length; k++)
	{
		//alert(gjson[k]["id"]);
		var pic_div = $('<a>').addClass('mypix tooltipped').attr({'href':'https://goo.gl/forms/PHrOnR45VdcsW0h73','data-position':'bottom','data-delay':50,'data-tooltip':'Apply Now'}).css({'width':big_img.width(),'float':'left','height':$(window).height(),'text-align':'center'}).appendTo(abs_div);
						
		/* Images */
		var main_img = $('<img>').css('display','none').addClass('lmg').attr('src','flyers/'+gjson[k]).appendTo(pic_div).fadeIn(2500);
		
		var width_mrg = (main_img.parent().width() - main_img.width())/2;
		var height_mrg = (main_img.parent().height() - main_img.height())/2;
		if(height_mrg<0)
		{
			main_img.height(main_img.parent().height());
			height_mrg=0;	
		}
		//main_img.css({'margin-left':width_mrg,'margin-top':height_mrg});
		main_img.css('margin-top',10+'px');
		
	}
	//abs_div.animate({marginLeft:abs_div.children(0).width()*rel*(-1)},1000);
	var gm = $('.abs').css('margin-left');
	var pw = $('.mypix').width();
	var ng = abs_div.children().length;
	var gn = abs_div.children().length;
	setInterval(function swap(){
		--gn;
		//alert('hello');
		if(gn == 0)
		{
			gn = ng;
			$(".abs").css({"left":944})
		}

		$('.abs').animate({"left":"-="+944+"px"},1000)
		},5000);

});