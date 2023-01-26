$(function(){
	// 검색
	$('#header .topSrch a, #header .util .btnSrch a').on('click', function(){
		if($(this).parent().hasClass('btnClose')){
			$(this).parent().removeClass('btnClose');
			$('#header .layerSrch').stop().slideUp('fast');
			$('.wrap').removeClass('dimmed');
		} else {
			$(this).parent().addClass('btnClose');
			$('#header .layerSrch').stop().slideDown('fast');
			$('.wrap').addClass('dimmed');
		}
		return false;
	});
	
	// input value click event
	$('input[type="text"]').focus(function() {
        if (this.value == this.defaultValue) {
            this.value = '';
        }
         $(this).css('color' , '#484848');
	  }).blur(function() {
		if (this.value == '') {
			this.value = this.defaultValue;
			$(this).css('color' , '#a3a3a3');
		}
	});

	// select layer
	$('.select > a').click(function(){
		$(this).next('.layerList').slideToggle('fast');
		return false;
	});
	$('.select .layerList a').click(function(){
		var val = $(this).text();
		$(this).parents('.select').find('> a').html(val);
		$('.select .layerList').hide();
		return true;
	});	
	

	
	
var thinWindow = false;
	// for Tab, Mobile
	if($(window).width() <= 1006){
		$('.layerGnb').hide();
		var cntW = $('.layerGnb .wrapCnt').width();
		// mobile - side menu sliding
		$('#header .btnToggleMn').on('click', 'a', function(){
			var m_ckHei = $(window).height()-$("#header").height()-5;
			$("#wrap").css({"height":m_ckHei+"px"});
			$('html').addClass('noScroll');
			$('.layerGnb').show();
			$(this).addClass('btnClose');
			$('.layerGnb .wrapCnt').show().css('left' , -cntW).stop().animate({'left': 0}, 250 ,"easeInOutExpo");
			
			$('#gnb .depth2').hide();
			$("#gnb .on").parent().css("display","block");
			$("#gnb .on").parent().parent().parent().css("display","block");
			
			var position = $(".on").offset();
			$('.wrapCnt').animate({scrollTop:position.top},100);
//			
			
			
		});
		$('.layerGnb').on('click', function(e) {
//			$("#wrap").css({"height":"auto"});	
			var target = $(e.target);
			if( ! target.closest('.layerGnb .wrapCnt').length){	
		 		$('html').removeClass('noScroll');
		 		$('.layerGnb .wrapCnt').stop().animate({'left': -cntW}, 250 ,"easeInOutExpo");
		 		$('.layerGnb').fadeOut(800);
	 		}
		});
		// snb menu
		var gnb = $('#header #gnb li a');
		var depth2 = $('#header #gnb .depth2');
		var depth3 = $('#header #gnb .depth2 .depth3');
		gnb.off('mouseenter focus');
		depth2.hide();
		
		depth3.hide();		
		
		
		gnb.click(function(){


			$(this).next('.depth2').slideDown('fast');
			
			if($(this).next().length != '0'){
				$('html').addClass('noScroll');
				$('.wrapCnt').animate({scrollTop: $(this).offset().top},100);
				depth2.hide();	
				depth3.hide();	
				$(this).parent().css("display","block");
				$(this).parent().parent().css("display","block");
				$(this).next("ul").show();
				
				return false;
			}else{
				$('html').addClass('noScroll');
				depth2.hide();
				return true;
			}
			
		});
	}

	// for PC
	else{
		var gnb = $('#header_wrap #gnb_wrap li#gnb_li> a');
//		var gnb = $('#header_wrap #gnb_wrap #gnb');
		var depth2 = $('#header_wrap #gnb_wrap .depth2');
		var snb = $('#header_wrap #gnb_wrap .depth2 li a');
		$('.layerGnb').show();

		$('#header_wrap #gnb_wrap .depth2').css("display","none");
		
		gnb.on('mouseenter focus' , function(){
			var i = $(this).parent('li').index();
			gnb.parent().removeClass('active');
			depth2.hide();	
			gnb.parent('li:eq('+i+')').addClass('active');
			gnb.parent('li:eq('+i+')').find('ul.depth2').css("display","block");
			gnb.parent('li:eq('+i+')').find('ul.depth2').show();
//		if(noActive == no){
//			$('#header_wrap #gnb_wrap #gnb ul').css("display","none");
//		}
			
			
			
//			$(".depth2").hide();
//			$(".active > .depth2").show();
			
//			depth2.show();
//			$('.bgLayer').show();
		});
		gnb.click(function(){
			return true;
		});

		$('#header_wrap').on('mouseleave blur' , function(){
			depth2.removeClass('on').hide();
			$('.bgLayer').hide();
		});
		snb.on('mouseenter focus' , function(){
			$(this).parents('.depth2').addClass('on');
			gnb.parent().removeClass('active');
			$(this).parents('.depth2').parents('li').addClass('active');
		});
		snb.on('mouseleave blur' , function(){
			$(this).parents('.depth2').removeClass('on');
			gnb.parent().removeClass('active');
		});
	}
	
	/* visual */
	if($(window).width() < 768){
		if(!thinWindow){
			$('#mvisual .slider img').attr('src',function(){
				var $src = $(this).attr('src');
				return $src.replace('.jpg','_mbl.jpg');
			});
			thinWindow = true
		} 
	} else {
		if(thinWindow){
			$('#mvisual .slider img').attr('src',function(){
				var $src = $(this).attr('src');
				return $src.replace('_mbl.jpg','.jpg');
			});
			thinWindow = false
		}
	}
	
	
	var delta = 300;
	var timerResize = null;
	//사이즈 변경시 reload
		$(window).on('resize',function(){
			clearTimeout(timerResize);
			timerResize = setTimeout(resizeDone, delta);
			function resizeDone(){
			
		}
	});

});