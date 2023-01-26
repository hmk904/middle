$(function(){	
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
		$('.select .layerList').slideUp('fast');
		return false;
	});
});

$(window).on('load resize', function(){	
	// for Tab, Mobile
	if($(window).width() <= 1023){
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
			//$("#gnb .on").parent().parent().addClass("on");			
			
			var position = $(".on").offset();
			$('.wrapCnt').animate({scrollTop:position.top},100);			
		});

		$('.layerGnb').on('click', function(e) {
			$("#wrap").css({"height":"auto"});	
			var target = $(e.target);
			if( ! target.closest('.layerGnb .wrapCnt').length){	
		 		$('html').removeClass('noScroll');
		 		$('.layerGnb .wrapCnt').stop().animate({'left': -cntW}, 250 ,"easeInOutExpo");
		 		$('.layerGnb').fadeOut(800);
	 		}
		});
		
		// snb menu
		var gnb = $('#header .gnb li a');
		var depth2 = $('#gnb .depth2');
		var depth3 = $('#header .gnb .depth2 .depth3');
		gnb.off('mouseenter focus');
		depth2.hide();

		depth3.hide();		

		gnb.click(function(){
			$(this).next('.depth2').slideDown('fast');
			//$(this).parent('li').addClass('on').find('.depth2 li:first-child').addClass('on');

			if($(this).next().length != '0'){
				$('.wrapCnt').animate({scrollTop: $(this).offset().top},100);
				depth2.hide();	
				depth3.hide();	
				$(this).parent().css("display","block");
				$(this).parent().parent().css("display","block");
				$(this).next("ul").show();
				
				return false;
			}else{
				depth2.hide();
				return true;
			}			
		});
	}

	// for PC
	else{
		var gnb = $('#header .gnb li a');
		var depth2 = $('#header .gnb .depth2');
		var snb = $('#header .gnb .depth2 li a');
		$('.layerGnb').show();

		$('#header .gnb .depth2').css("display","none");

		gnb.on('mouseenter focus' , function(){
			var i = $(this).parent('li').index() + 1;
			gnb.parent().removeClass('active');
			$(this).parent().addClass('active');
			depth2.show();
			$('.bgLayer').show();
		});
		gnb.click(function(){
			return true;
		});

		$('#header').on('mouseleave blur' , function(){
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
});

$(document).ready(function() {	
	// select layer
	$('#util .lang span a').click(function(){
		$(this).parent().toggleClass('on').next('ul').slideToggle('fast');
		return false;
	});
	$('#util').on('mouseleave', function(){
		$('#util .lang span').removeClass('on').next('ul').css('display','none');
	});

	//aside height
	var aside_h = $(document).height()-216;
	$('#aside,.btn_slide_area').css('height',aside_h+'px');

	var slide_btn = $('.btn_slide');
	var slide_obj = $('#aside')
	
	//aside show-hide
	slide_btn.on('click', function(){
		slide_obj.toggleClass('move_right');
		if(slide_obj.hasClass('move_right')){
			slide_btn.addClass('open').css('right' ,'110px').stop().animate({'right': '4px'}, 10);
			slide_btn.text('사이드메뉴 펼치기');
		} else {
			slide_btn.removeClass('open').css('right' ,'4px').stop().animate({'right': '110px'}, 50);
			slide_btn.text('사이드메뉴 닫기');
		}
	});
});

// 모바일 viewport 801미만 tab 처리건(select 처리)
var delta = 300;
var timerResize = null;
$(document).ready(function(e) {
	mobToggle ();
});

var cacheWidth = $(window).width();
$(window).resize(function(){
	var newWidth = $(window).width();
	if(newWidth !== cacheWidth){
	//do
		clearTimeout(timerResize);
		timerResize = setTimeout(resizeDone, delta);
		function resizeDone(){
			mobToggle ();
			clearTimeout(timerResize);
	// 		location.reload();
		}
	}
});

$(window).ready(function(){
	$(".tab_mobile_ti").click(function(){
		$(this).toggleClass("ov");
		$(".tab_style01").slideToggle(400);	
		return false;	
	});
});

function mobToggle (){
	if($(window).width()<801){
		if($(".tab_mobile_ti").is(":hidden")){
			$(".tab_style01").hide();
		} else {
			$(".tab_mobile_ti").removeClass("ov");
			$(".tab_style01").hide();
		}
		var tebChkYn = $("ul.tab_style01 li:gt(0) a.on").text();
		if(tebChkYn==''){
			$(".tab_mobile_ti").text($("ul.tab_style01 li:eq(0)").text());
		}else{
			$(".depth2_tab a:eq(0)").text(tebChkYn);
		}
	}else{
		$(".tab_style01").show();
	}
}


// label-form focus
jQuery(function($){
	var info_box = $('.focus_tit').next('input,textarea');
	$('.focus_tit').css({'position':'absolute','z-index':'1','display':'block'});
	info_box
		.focus(function(){
			$(this).prev('.focus_tit').css('visibility','hidden');
		})
		.blur(function(){
			if($(this).val() == ''){
				$(this).prev('.focus_tit').css('visibility','visible');
			} else {
				$(this).prev('.focus_tit').css('visibility','hidden');
			}
		})
		.change(function(){
			if($(this).val() == ''){
				$(this).prev('.focus_tit').css('visibility','visible');
			} else {
				$(this).prev('.focus_tit').css('visibility','hidden');
			}
		})
		.blur();	
});


//자주묻는 질문
$(document).on("click",".bd_faq li .tit",function(e){
	var obj = $(".bd_faq li .tit");
	if( $(this).attr('data-click-state') == 1) {
		$(this).attr('data-click-state', 0)
		$(this).removeClass('open');
		$(this).next(".answer").stop().slideUp('fast');

	} else {
		obj.attr('data-click-state', 0)
		$(this).attr('data-click-state', 1)

		obj.removeClass('open').next(".answer").stop().slideUp('fast');
		$(this).addClass('open');
		$(this).next(".answer").stop().slideDown('fast');
	}

	return false;
});