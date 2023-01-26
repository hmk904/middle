<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>



<head>
	<title>로그인&lt;대전광역시</title>
	<meta charset="utf-8">
	<meta name="keywords" lang="ko" content="대전광역시, 통합로그인, 로그인, 통합회원, 통합아이디">
	<meta name="description" content="대전광역시 통합로그인">
	<meta name="robots" content="all">
	<meta http-equiv="X-UA-Compatible" content="IE=Edge">
	<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no,minimal-ui">
	<script type="text/javascript" src="/js/common/jquery-1.7.2.min.js"></script>
	
	<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/resources/css/login_total/login_total.css">
	<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/resources/css/drh/login/reset.css">
	<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/resources/css/drh/login/common.css">
	<!--[if IE 7]>
	   <link rel="stylesheet" type="text/css" href="/css/ie_login.css">
	<![endif]-->
	<!-- <link rel="stylesheet" type="text/css" href="/css/login_0404.css"> -->
	
	<script type="text/javascript" src="/js/cmm/stringUtil.js"></script>
	<script type="text/javascript" src="/js/cmm/commonUtil.js"></script>
	<script type="text/javascript" src="/js/cmm/system_util.js"></script>
	<script type="text/javascript" src="/js/cmm/system_board.js"></script>
	<script type="text/javascript" src="/js/drh/common.js"></script>
	
	<script type="text/javascript" src="/keypad/js/keypad.js"></script>
	
	<script type="text/javascript" src="../js/login_total/new_login.js"></script>
	<script type="text/javascript">
	$(function() {
		<!--
		// Message Common
		
			
		
		//-->
		var message = "";
		// Message Common
		if(message != "" && message != null && message != "null" ) {
			alert(message);
			$("#userPw").focus();
		} else {
			fnInit();
		}
		
		//통합회원 전환동의 여부
		var integSiteType = "";
		if(integSiteType != "" && integSiteType != null && integSiteType != "null" ) {
			if(integSiteType == "BEFORE_INTEG_MEMBER"){//시립연정국악원 미전환 회원
				var siteCode = "drh" ; 
				if(siteCode == "djac"){ //예당 단독 통합전환 팝업
					showLayer($("#logincheck"),'.pop_modal_djac');
				}else{
					showLayer($("#logincheck"),'.pop_modal');
				} 	
			}
		}
		
		
		// 로그인 폼 유효성 체크
// 		$("#frm").submit(function() {
// 			saveid(document.frm);
// 		});
		
	});
	
// 	function saveid(form) {
// 	    var expdate = new Date();
// 	    // 기본적으로 30일동안 기억하게 함. 일수를 조절하려면 * 30에서 숫자를 조절하면 됨
// 	    if (form.checkId.checked)
// 	        expdate.setTime(expdate.getTime() + 1000 * 3600 * 24 * 30); // 30일
// 	    else
// 	        expdate.setTime(expdate.getTime() - 1); // 쿠키 삭제조건
// 	    setCookie("integSaveId", form.userId.value, expdate);
// 	}
	function fnInit() {
	    document.getElementById('userId').focus();
// 	    getid(document.frm);
	}
	
// 	function getid(form) {
// 	    form.checkId.checked = ((form.userId.value = getCookie("integSaveId")) != "");
// 	}
	
// 	function setCookie (name, value, expires) {
// 	    document.cookie = name + "=" + escape (value) + "; path=/; expires=" + expires.toGMTString();
// 	}
	
	function fn_djacLoginAlert() {
		alert("신규회원가입 또는 통합회원전환을 하시기 바랍니다.\n *통합회원전환[대전시청-마이페이지-통합회원전환]");
	}
	
	function fn_djacSearchPwdAlert() {
		alert("예술의전당 기존회원의 비밀번호는 문의 하시길 바랍니다.\n *문의처 예술의전당 042-270-8333 ");
	}
	
	function getCookie(Name) {
	    var search = Name + "=";
	    if (document.cookie.length > 0) { // 쿠키가 설정되어 있다면
	        offset = document.cookie.indexOf(search);
	        if (offset != -1) { // 쿠키가 존재하면
	            offset += search.length;
	            // set index of beginning of value
	            end = document.cookie.indexOf(";", offset);
	            // 쿠키 값의 마지막 위치 인덱스 번호 설정
	            if (end == -1)
	                end = document.cookie.length
	            return unescape(document.cookie.substring(offset, end));
	        }
	    }
	    return "";
	}
	
	//로그인
	function login(){
		if($("#userId").val() == ""){
			alert("아이디를 입력하세요.");
			$("#userId").focus();
			return false;
		}
		if($("#userPw").val() == ""){
			alert("비밀번호를 입력하세요.");
			$("#userPw").focus();
			return false;
		}
		
		document.frm.submit();
	}
	
	// 나중에 하기
	function afterInteg(){
		$("#userId").val("");
		$("#userPw").val("");
		
		$("#afterIntegVal").val("N");
		document.frm.submit();
	}
	
	//통합회원 전환하기
	function agreeInteg(){
		$("#userId").val("");
		$("#userPw").val("");
		
		//$("#afterIntegVal").val("N");
		document.frm.action = "/integ/agreeMember/integMemberAgreeClause.do";
		document.frm.submit();
	}

	function fn_noMemberLogin(siteCd, rturl){
		alert('OK예약서비스를 이용하시려는 고객은\n대전시청 회원가입 후 이용하시기 바랍니다.\n(※ 일회용 로그인으로 OK예약서비스 사용 불가)');
		rturl = rturl.replace(/&/gi,"%26");
		location.href="/integ/integNonmemberLoginProc.do?siteCd="+siteCd+"&rtUrl="+rturl;
	}
	</script>
</head>



<body>
	<div class="login_wrap"> 
	<!--join_wrap_01 시작-->
	<div class="login_wrap_01">
        <!-- header :S -->
        <div class="login_header">
        <h1><img src="<%=request.getContextPath() %>/resources/images/drh/layout/common/hanbat_logo.jpg" alt="대전광역시 DAEJEON METROPOLITAN CITY">
        <a href="/index.do" target="_blank" title="새창열림">
        </a>
        </h1>
       </div>
        <!-- header :E -->

		<!-- 타이틀 :S -->
		<div class="login_txt type02">
			<h2>로그인</h2>
			<div class="com_ment">
				<!--<p><strong>2019년 더 새로워진 대전시 통합회원제를 만나보세요!</strong></p>-->
				
			</div>	
		</div>
		<!-- 타이틀 :E -->

        
        
		<!-- 로그인 입력 :S -->
		<div class="login_form type02">
			<div class="login_entry">
            		<fieldset>
					<legend>로그인</legend>
					<form id="frm" name="frm" action="/integ/integMemberLoginProc.do" method="post">
						<input type="hidden" id="siteCd" name="siteCd" value="drh">
						<input type="hidden" id="subSiteCd" name="subSiteCd" value="">
						<input type="hidden" id="rtUrl" name="rtUrl" value="/hanbatlibrary/hanlibHopeWrite.do?menuSeq=6246&amp;pageIndex=1">
						<input type="hidden" id="afterIntegVal" name="afterIntegVal" value="">
						<div class="entry_id_pw">
	                    	<ul class="text">
								<li><input placeholder="아이디" autocomplete="off" type="text" id="userId" name="userId" maxlength="30" title="아이디를 입력해주세요." value="" onkeydown="javascript:if(event.keyCode == 13){login();}" style="ime-mode:inactive"><p class="id_ex">*ID는 영문,숫자 포함 4~12자까지 가능합니다.</p></li>
								<li><input placeholder="비밀번호" autocomplete="off" type="password" maxlength="30" id="userPw" name="userPw" title="비밀번호를 입력해주세요." value="" onkeydown="javascript:if(event.keyCode == 13){login();}"></li>
							</ul>
							<ul class="check">
								<li>
<!-- 								<input name="checkId" type="checkbox" id="checkId"> -->
<!-- 								<label for="checkId"><span class="mr5"></span>아이디 기억하기</label></li> -->
								</li><li>
								<input name="keypadGbn" type="checkbox" id="keypadGbn">
								<label for="keypadGbn"><span class="mr5"></span>보안 키보드</label></li>
							</ul>
							<span class="entry_btn">
								
									<a href=".bd_vote_result_layer" onclick="javascript:login();return false;" title="로그인" id="logincheck">로그인</a>
								
								
							</span>
						</div>
                    </form>
					</fieldset>
			</div>
			
			<div class="login_join type02">
				<a href="/integ/registerMember/integMemberJoinClause.do" title="회원가입" class="login_join_btn00">회원가입</a>
				
				
					<div class="forget">
						<ul>
							<li><a href="/integ/idSearch/integStep01.do?siteCd=drh" title="아이디 찾기">아이디 찾기</a></li>
						    <li><a href="/integ/idSearch/integSelPwdBefore.do?siteCd=drh&amp;msgCd=0" title="비밀번호 재발급">비밀번호 재발급</a></li>
							<li><a href="javascript:;" title="일회용 로그인" onclick="fn_noMemberLogin('drh', '/hanbatlibrary/hanlibHopeWrite.do?menuSeq=6246&amp;pageIndex=1')">일회용 로그인</a></li>
						</ul>
					</div>
				
				
			</div>
						

		</div>
		<!-- 로그인 입력 :E -->

		
		<!-- (대전예술의전당) 회원전환 모달팝업 -->
		<div class="pop_modal_djac bd_vote_result_layer_djac">
			<div class="djac_member_modal">
				<div class="djac_member_modal_view">
					<h4>회원님은 <strong>미통합회원</strong>입니다.</h4>
					<p><strong>2023년 6월 14일부터 미통합회원</strong>은<br>
					대전예술의전당 <strong>홈페이지 서비스 이용이 불가</strong>합니다.</p>
					<span>대전광역시 통합회원으로 전환하시고 편리하게 서비스를 받아보세요!</span>
					<div class="djac_member_modal_btn">
						<a href="" onclick="javascript:agreeInteg();return false;" title="클릭시 대전광역시 통합회원전환이 진행됩니다." class="login_join_btn04">통합회원 진행하기</a>
					</div>
					<p class="djac_member_modal_bottom"><strong>※ 자세한 사항은 공지사항을 확인해주시기 바랍니다.</strong><br>
					문의 전화 042)270-8114, 8154</p>
				</div>
			</div>
		</div>
		<!-- //회원전환 모달팝업 -->

		<!-- (시대표) 회원전환 모달팝업 -->
		<div class="pop_modal bd_vote_result_layer">
			<div class="bd_vote_view_layer_area">
				<div class="bd_vote_result">
					<h4><strong>통합회원 전환 안내</strong></h4>
					<p>대전광역시 통합회원으로 전환하시면<br><strong>하나의 아이디</strong>로 대전시패밀리 사이트 및 문화시설<br>(대전시립연정국악원, 예술의전당, 시립미술관) 사이트를 동시에 이용 가능합니다.</p>
					<div class="btn_area_layer mt30">
						<a href="" onclick="javascript:agreeInteg();return false;" title="통합회원 전환하기" class="login_join_btn04">통합회원 전환하기</a>
					</div>
					<span class="btn_txt"><a href="" id="beforeAlert" onclick="javascript:afterInteg();return false;" title="다음에 하기" class="login_join_btn03">다음에 하기</a></span>
					<p class="bottom_txt">* 추후 통합회원전환은<br><strong>[대전시청홈페이지-마이페이지-통합회원전환]</strong>에서<br>진행하실 수 있습니다.</p>
				</div>
			</div>
		</div>
		<!-- //회원전환 모달팝업 -->

		<div class="pop_modal_bg" style="display: none; top: 0px; height: 100%;"></div>

	</div>
    <!--//join_wrap_01 끝-->
    
</div>
</body>
</html>