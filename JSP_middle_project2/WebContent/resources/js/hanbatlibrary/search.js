/**
 * 검색창 팝업
 * @param {} form
 * @return {Boolean}
 */
function fn_search_popup(form){
	var w = '1040';
	var h = '700';
	var wl = (window.screen.width/2) - ((w/2) + 10);
	var wt = (window.screen.height/2) - ((h/2) + 50);
	var option = "status=no,height="+h+",width="+w+",resizable=yes,left="+wl+",top="+wt+",screenX="+wl+",screenY="+wt+",scrollbars=yes";
	var pop = window.open( '',form.target, option );
	if(form.q.value == form.q.title) form.q.value = '';
	pop.focus();
	return true;
}

/**
 * 검색 썸네일
 * @param {} id
 * @param {} isbn
 */
function fn_thumbnail(id, isbn, linkYn){
	
	$.ajax({
          type : 'POST',
          dataType:'json',
          url : '/hanbatlibrary/thumbnail.do',
          data : ({
        	  isbn : isbn
          }),
          success:function(result, statusText){
        	  $('#'+id).attr('src', result.thumUrl);
      		  $('#'+id).error(function(){
      			$(this).attr('src', '/images/common/noimg_hanbat.jpg');
      		  });
        	  if(linkYn == 'Y'){
        	  	fn_detail_link(result.link);
        	  }
          },
          error:function(result, statusText){
          }
     });
} 

/**
 * 소장정보 간략 보기
 */
function fn_brief_preview(prevType, loca, ctrl, marcType){
	var img = $('#'+prevType+'_Img');
	
	if($('#'+prevType).is(':visible')){
		$('#'+prevType).hide();
		img.attr('src', img.attr('src').replace('up', 'down'));
		return;
	}else{
		img.attr('src', img.attr('src').replace('down', 'up'));    		
		$('#'+prevType).show();
	}
	var procImg = "<div style=\"width:100%;height:100%;text-align:center;vertical-align:middle;\" ><img src=\"/images/ilus/common/ico/ajax-loader_small.gif\" alt=\"ajax loader\" title=\"ajax loader\" /></div>";
	  $.ajax({
          type : 'POST',
          dataType:'json',
          url : '/hanbatlibrary/prevDetail.do',
          data : ({
        	  ctrl : ctrl,
              marcType : marcType,
              loca : loca.toUpperCase()
          }),
          success:function(result, statusText){
        	  //처리중 이미지 표시
        	  $('#'+prevType).html(procImg); 
				
        	  fn_viewLocation(result, loca, prevType, marcType);
        	  
        		//소장처 미리보기
        		//$('#'+prevType).html(html);
        		//$('#'+prevType).append(serView);
          },
          error:function(result, statusText){
               alert("해당 정보를 가져올수 없습니다.");
          }
     });
}

/**
 * 소장정보 HTML 생성
 */
function fn_viewLocation(result, loca, prevType, marcType){
	var isResveCheck = false;
	 var tempIndex = prevType.split("_");
	 var serView = "<div id=ser_"+tempIndex[1]+"/>";
	 var html = "<table class='possess' border='1' cellspacing='0' summary='상세보기'>";
	html+="<tr>";
	if(marcType == 's'){
		html+="<th scope='col'>No.</th>";
		html+="<th scope='col'>소장처/자료실/서가</th>";
		html+="<th scope='col'>소장사항</th>";
		html+="<th scope='col'>구독</th>";
		html+="<th scope='col'>최근입수호</th>"; 
		html+="<th scope='col'>권호정보</th>";
	}else{
		html+="<th scope='col'>No.</th>";
		html+="<th scope='col'>소장처/자료실/서가</th>";
		html+="<th scope='col'>청구기호</th>";
		html+="<th scope='col'>등록번호</th>";
		html+="<th scope='col'>도서상태</th>"; 
		if(siteCode == 'home') html+="<th scope='col'>예약</th>";
		html+="<th scope='col'>반납예정일</th>";
	}
	html+="</tr>";
	
	for(var i=0; i<result.length; i++){
		html+="<tr>";
		if(marcType == 's'){
			html+="<td class='num'>"+(i+1)+"</td>";
			html+="<td>"+result[i].FULL_LOCA_NAME+"</td>";
			html+="<td>"+result[i].CALL_NO_D+"</td>";
			html+="<td>"+result[i].SBSCRP_STATUS_DISPLAY+"</td>";
			html+="<td>"+result[i].MAX_VOLUME+"</td>";
			if(result[i].DETAIL_LOCATION == 'detailView')
			html+="<td><a href=\"javascript:fn_ser_year('"+result[i].CTRLNO+"', '"+prevType+"','"+loca+"', '"+result[i].SUB_LOCA+"', '"+result[i].BOOKSH+"', 'TOTAL');\">상세보기</a>";
			html+="</td>";
		}else{
			html+="<td class='num'>"+(i+1)+"</td>";
			html+="<td class='place'>"+result[i].LOCA_NAME;
			if(result[i].LOCA_NAME != '' && result[i].SUB_LOCA_NAME != '') html+="/";
			html+=result[i].SUB_LOCA_NAME;
			if(result[i].SUB_LOCA_NAME != '' && result[i].BOOKSH_NAME != '') html+="/";
			html+=result[i].BOOKSH_NAME;
			html+="</td>";
			var placeNo = result[i].PLACE_NO;
			var classNo = result[i].CLASS_NO;
			var authNo = result[i].AUTHOR_NO;
			var vol = result[i].VOLUME;
			var copyNo = result[i].COPY_NO;
			var callNo = "";
			if(result[i].CALL_NO_D != ''){
				callNo=result[i].CALL_NO_D;
			}else{
				callNo=placeNo+" "+classNo+" "+authNo;
				if(vol != '' && vol != null) callNo+=" v."+vol.replace('v.','');
				if(copyNo != '' && copyNo != null) callNo+=" c."+copyNo.replace('c.','');
			}

			html+="<td>"+callNo+"</td>";
			html+="<td>"+result[i].PRINT_ACSSON_NO+"</td>";
			html+="<td><span class='blue_12w'>"+result[i].DISPLAY_ITEM_STATUS+"</span></td>";
			//한밭도서관일 경우만 예약이 가능하다..
			if(siteCode == 'home'){
				var resve = "";
				if(result[i].RESVE_CHECK == 'Y'){
					//resve = '<a href="javascript:;" onclick="errorPage()">예약가능</a>';
					resve = '<a href="/hanbatlibrary/reserveForm.do?accNo='+result[i].ACSSON_NO+'&amp;loca='+result[i].LOCA+'" target="reserve" title="새창" onclick="return doReserve(this)">예약가능</a>';
					if(result[i].RESERVATION_COUNT !=0){
						resve+= '<br/>('+result[i].RESERVATION_COUNT+'명 예약중)';
					}
				}else if(result[i].CAN_RESERVE_COUNT == result[i].RESERVATION_COUNT ){
					resve+= '예약불가<br/>('+result[i].RESERVATION_COUNT+'명 예약중)';
				}
				html+="<td>"+resve+"</td>";
			}
			html+="<td>"+fn_parse_date(result[i].RETURN_PLAN_DATE)+"</td>";
		}
		html+="</tr>";	
	}
	html+="</table>";
	$('#'+prevType).html(html);
	$('#'+prevType).append(serView);
}

function fn_parse_date(dt){
	if(dt == "") return "";
	return dt.substring(0,4)+"-"+dt.substring(4,6)+"-"+dt.substring(6,8);
}


/**
 * 권호정보 상세보기
 */
function fn_ser_year(ctrl, prevType, loca, subLoca, booksh, year){
	$.ajax({
        type : 'POST',
        dataType:'json',
        url : '/hanbatlibrary/viewSerDetail.do',
        data : ({
             ctrl : ctrl,
             pubYear : year,
             loca : loca.toUpperCase(),
             subLoca : subLoca,
             booksh : booksh
        }),
        success:function(result, statusText){
        	if(year == 'TOTAL')
	        	fn_viewSerDetail(result, prevType, ctrl,  loca, subLoca, booksh);
        	else
        		fn_viewSerList(result, prevType);
        	
        },
        error:function(result, statusText){
             alert("해당 정보를 가져올수 없습니다.");
        }
   });
}

/**
 * 권호 연도 정보 표시
 */
function fn_viewSerDetail(result, prevType, ctrl,  loca, subLoca, booksh){
	var index = prevType.split("_")[1];
	var html = "<div><ul class='tabs'><li><span>권호정보</span></li></ul></div>";
	html+="<div>";
	html+="<h3 class='skip'>권호정보</h3>";
	html+="<div id='divYearList'>";
	html+="<select name='selectBox' class='select' onchange=\"fn_ser_year('"+ctrl+"', '"+prevType+"','"+loca+"', '"+subLoca+"', '"+booksh+"', this.value);\">";
		html+="<option value='TOTAL'>전체</option>";
	for(var i=0; i<result.dsSerYear.length; i++){
		html+="<option value='"+result.dsSerYear[i].SYEAR+"'>"+result.dsSerYear[i].SYEAR+"</option>";
	}
	html+="	</select>"; 
	html+="	연도를 선택하면 해당연도의 상세 권호정보를 보실 수 있습니다.";
	html+="</div>";
	html+="<div id='serList_"+index+"'/>";
	$('#ser_'+index).html(html);
	fn_viewSerList(result, prevType);
}

/**
 * 권호 연도별 리스트 표시
 */
function fn_viewSerList(result, prevType){
	var index = prevType.split("_")[1];
	var html="<table class='listtable' border='1' cellspacing='0' summary=''>";
	html+="<tr>";
	html+="	<th>No.</th>";
	html+="	<th>권호</th>";
	html+="	<th>발행일</th>";
	html+="	<th>입수일</th>";
	html+="	<th>도서상태</th>";
	html+="	<th>기사</th>";
	html+="	<th>부록</th>";
	html+="</tr>";
	
	for(var i=0; i<result.dsSerVolList.length; i++){
		var serVolList = result.dsSerVolList[i];
		html+="<tr>";
		html+="<td>"+(i+1)+"</td>";
		html+="<td>"+serVolList.VOLUME_NAME_DISP+"</td>";
		html+="<td>"+serVolList.PUBLISHER_DATE+"</td>";
		html+="<td>"+serVolList.IN_DATE+"</td>";
		html+="<td>"+serVolList.CHECKIN_STATE_NAME+"</td>";
		html+="<td></td>";
		html+="<td></td>";
		html+="</tr>";
	}
	html+="</table>";
	$('#serList_'+index).html(html);
}

function fn_limit(sysdiv, lang, stype){
		$.ajax({
	          type : 'POST',
	          dataType:'json',
	          url : '/hanbatlibrary/limitList.do',
	          data : ({
	        	  sysDiv : sysdiv,
	        	  lang : lang,
	        	  sType : stype
	          }),
	          success:function(result, statusText){
	        	  fn_set_select(result)
	          },
	          error:function(result, statusText){
	               alert("해당 정보를 가져올수 없습니다.");
	          }
	     });
	}

function fn_loca(){
	$.ajax({
	          type : 'POST',
	          dataType:'json',
	          url : '/hanbatlibrary/locaList.do',
	          data : ({
	          }),
	          success:function(result, statusText){
	        	  fn_set_select(result)
	          },
	          error:function(result, statusText){
	               alert("해당 정보를 가져올수 없습니다.");
	          }
	     });
}


function fn_open_print(call_no, place){
		$('.pop-conts #call_no').html(call_no);
		$('.pop-conts #place').html(place);
		var temp = $('#pop-layer');
		var bg = temp.prev().hasClass('bg');	//dimmed 레이어를 감지하기 위한 boolean 변수
		if(bg){
			$('.layer').fadeIn();	//'bg' 클래스가 존재하면 레이어가 나타나고 배경은 dimmed 된다. 
		}else{
			temp.fadeIn();
		}
		// 화면의 중앙에 레이어를 띄운다.
		if (temp.outerHeight() < $(document).height() ) temp.css('margin-top', '-'+temp.outerHeight()/2+'px');
		else temp.css('top', '0px');
		if (temp.outerWidth() < $(document).width() ) temp.css('margin-left', '-'+temp.outerWidth()/2+'px');
		else temp.css('left', '0px');
		temp.find('.btn-r #close').click(function(e){
			if(bg){
				$('.layer').fadeOut(); //'bg' 클래스가 존재하면 레이어를 사라지게 한다. 
			}else{
				temp.fadeOut();
			}
			e.preventDefault();
		});
		
		temp.find('.btn-r #print').click(function(e){
			 $('#printTable').printThis({
				  importCSS: false,
				  loadCSS:"/css/hanbatlibrary/ilus/search/detail.css",
				  removeInline: false});
		});
		
		$('.layer .bg').click(function(e){	//배경을 클릭하면 레이어를 사라지게 하는 이벤트 핸들러
			$('.layer').fadeOut();
			e.preventDefault();
		});
		
		 $('#printTable').printThis({
			  importCSS: false,
			  loadCSS:"/css/hanbatlibrary/ilus/search/detail.css",
			  removeInline: false});
		
}


function doReserve(obj){
	var options = "width=740,height=454,resizable=no,top=100,left=200,scrollbars=no";
	var winPop = window.open(obj.href,"reserve",options);
	winPop.focus();
	return false;
}

	
function errorPage(){
	alert("현재 서비스를 점검하고 있습니다. \n사이버도서관을 이용해주시면 감사하겠습니다.");
	return false;
}

	
	