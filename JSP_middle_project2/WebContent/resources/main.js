/* main  visual s */
$(document).ready(function(){	

	//알림창
	var popZone = $(".m_popup ul").bxSlider({
		nextText:"다음",
		prevText:"이전",
		startText:"재생",
		stopText:"일시정지",
		mode:'fade',
		auto:true,
		pause:5000,
		speed:1000,
		autoHover:true,
		autoControls:true,
		pager:false
	});

		
	if($(window).width() >= 1024){
		var minN = 2;
		var maxN = 2;
	} else if($(window).width() <= 1023 && $(window).width() >= 901){
		var minN = 4;
		var maxN = 4;
	} else if($(window).width() <= 900 && $(window).width() >= 801){
		var minN = 1;
		var maxN = 1;
	} else if($(window).width() <= 800 && $(window).width() >= 668){
		var minN = 3;
		var maxN = 3;
	} else {
		var minN = 2;
		var maxN = 2;
	}
	//이달의 문화행사
	var mFestival = $(".m_festival ul").bxSlider({
		nextText:"다음",
		prevText:"이전",
		startText:"재생",
		stopText:"일시정지",
		mode:'vertical',
		auto:false,
		pause:5000,
		speed:1000,
		minSlides:minN,
		maxSlides:maxN,
		autoHover:true,
		autoControls:true,
		pager:false
	});
});

// 새로들어온책&이달의 추천도서 탭
$(function(){
	$(".m_book_tab h3:first-child").addClass("on");
	$(".m_book_tab ul:not(:first)").hide(); 
	$(".m_book_tab h3:first-child").next("ul").show(); 	 

	$(".m_book_tab h3 a").bind("click focus", function() { 
		$(this).parent().addClass("on");
		$(this).parent().siblings("h3").removeClass("on"); 
		$(this).parent().next().show(); 
		$(this).parent().next().siblings("ul").hide(); 

		return false;

	}); 
});