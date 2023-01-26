<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html lang="ko">
<head>
<title>로그인&lt;대전광역시</title>
<meta charset="utf-8">
<meta name="keywords" lang="ko" content="대전광역시, 통합로그인, 로그인, 통합회원, 통합아이디">
<meta name="description" content="대전광역시 통합로그인">
<meta name="robots" content="all">
<meta name="viewport"
	content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no,minimal-ui">
<!-- <script type="text/javascript" -->
<%-- 	src="<%=request.getContextPath()%>/resources/js/jquery-1.7.2.min.js"></script> --%>

<link rel="stylesheet" type="text/css"
	href="<%=request.getContextPath()%>/resources/css/login_total/login_total.css">
<link rel="stylesheet" type="text/css"
	href="<%=request.getContextPath()%>/resources/css/login_total/reset.css">
<link rel="stylesheet" type="text/css"
	href="<%=request.getContextPath()%>/resources/css/login_total/common.css">

</head>
<body class="login_bg" style="background:#2C2F3E;">

	<div class="modal_header_wrap"></div>
	<!-- join_wrap 시작 -->
	<div class="login_wrap">
		<!--join_wrap_01 시작-->
		<div class="login_wrap_01">

			<!-- 타이틀 :S -->
			<div class="login_txt type02">
				<h2>로그인</h2>
			</div>


			<!-- 로그인 입력 :S -->

			<div class="login_form type02">
				<div class="login_entry">
					<fieldset>
						<legend>로그인</legend>
						<form role="form" class="form-horizontal" action="login.do"
							method="post">
							<input id="retUrl" name="retUrl" value="${retUrl }" type="hidden" />
							<input type="hidden" id="siteCd" name="siteCd" value="drh">
						<input type="hidden" id="subSiteCd" name="subSiteCd" value="">
						<input type="hidden" id="rtUrl" name="rtUrl" value="">
						<input type="hidden" id="afterIntegVal" name="afterIntegVal" value="">
							<div class="entry_id_pw">
								<ul class="text">
								
									<li><input placeholder="아이디" autocomplete="off"
										type="text" class="form-control" id="memberId" name="memberId" maxlength="30"
										title="아이디를 입력해주세요."
										onkeyup="this.value=this.value.replace(/[\ㄱ-ㅎㅏ-ㅣ가-힣]/g, &#39;&#39;);"
										style="ime-mode: inactive">
									<p class="id_ex">*ID는 영문,숫자 포함 4~12자까지 가능합니다.</p></li>
									<li><input placeholder="비밀번호" autocomplete="off"
										type="password" maxlength="30" id="memberPwd" name="memberPwd"
										title="비밀번호를 입력해주세요."
										onkeydown="javascript:if(event.keyCode == 13){login();}"></li>
								</ul>
								<ul class="check">
									<li>
										<!-- 								<input name="checkId" type="checkbox" id="checkId"> -->
										<!-- 								<label for="checkId"><span class="mr5"></span>아이디 기억하기</label></li> -->
								</ul>
								<span class="entry_btn"> 
								<button type="submit" class="entry_btn" title="로그인" style="color: #fff; margin: 0; font-size: 20px; background: #ed4246; text-align: center; width: 100%; padding: 24px;"
									onclick="login_go();">로그인</button>
								</span>
							</div>
						</form>
					</fieldset>
				</div>

				<div class="login_join type02">
					<button title="회원가입" class="login_join_btn00"
						style="color: #fff; margin: 0; font-size: 20px; background: #527496; text-align: center; width: 100%; padding: 24px;"
						onclick="OpenWindow('/JSP_middle_project/member/registForm.do','회원가입',800,700);">회원가입</button>


				</div>


			</div>
			<!-- 로그인 입력 :E -->


			<!-- (대전예술의전당) 회원전환 모달팝업 -->
			<div class="pop_modal_djac bd_vote_result_layer_djac">
				<div class="djac_member_modal">
					<div class="djac_member_modal_view">
						<h4>
							회원님은 <strong>미통합회원</strong>입니다.
						</h4>
						<p>
							<strong>2023년 6월 14일부터 미통합회원</strong>은<br /> 대전예술의전당 <strong>홈페이지
								서비스 이용이 불가</strong>합니다.
						</p>
						<span>대전광역시 통합회원으로 전환하시고 편리하게 서비스를 받아보세요!</span>
						<div class="djac_member_modal_btn">
							<a href="" onclick="javascript:agreeInteg();return false;"
								title="클릭시 대전광역시 통합회원전환이 진행됩니다." class="login_join_btn04">통합회원
								진행하기</a>
						</div>
						<p class="djac_member_modal_bottom">
							<strong>※ 자세한 사항은 공지사항을 확인해주시기 바랍니다.</strong><br /> 문의 전화
							042)270-8114, 8154
						</p>
					</div>
				</div>
			</div>
			<!-- //회원전환 모달팝업 -->

			<!-- (시대표) 회원전환 모달팝업 -->
			<div class="pop_modal bd_vote_result_layer">
				<div class="bd_vote_view_layer_area">
					<div class="bd_vote_result">
						<span class="btn_txt"><a href="" id="beforeAlert"
							onclick="javascript:afterInteg();return false;" title="다음에 하기"
							class="login_join_btn03">다음에 하기</a></span>
						<p class="bottom_txt">
							* 추후 통합회원전환은<br />
							<strong>[대전시청홈페이지-마이페이지-통합회원전환]</strong>에서<br />진행하실 수 있습니다.
						</p>
					</div>
				</div>
			</div>
			<!-- //회원전환 모달팝업 -->

			<div class="pop_modal_bg"
				style="display: none; top: 0px; height: 100%;"></div>

		</div>
		<!--//join_wrap_01 끝-->

	</div>
	<!-- //join_wrap 끝-->

	<!-- footer :S -->
	<div class="login_footer">
		<div>
			<ul>
				<li><a href="/drh/DrhContentsHtmlView.do?menuSeq=2062">개인정보처리방침</a></li>
				<li><a href="/drh/DrhContentsHtmlView.do?menuSeq=1757">영상정보처리기기
						운영·관리방침</a></li>
				<li><a href="/drh/DrhContentsHtmlView.do?menuSeq=3274">이용안내</a></li>
				<li><a
					href="/drh/board/boardNormalList.do?boardId=homepage_0001&menuSeq=1507">누리집
						개선의견</a></li>
				<li>문의(<span class="fred">042-120</span>)
				</li>
			</ul>
			<p class="foot_copy">COPYRIGHT 2019 ⓒ DAEJEON METROPOLITAN CITY.
				ALL RIGHTS RESERVED.</p>
		</div>
	</div>
	<!-- footer :E -->
	<script>
function OpenWindow(UrlStr, WinTitle, WinWidth, WinHeight) {
	winleft = (screen.width - WinWidth) / 2;
	wintop = (screen.height - WinHeight) / 2;
	var win = window.open(UrlStr , WinTitle , "scrollbars=yes,width="+ WinWidth
							+",height="+ WinHeight +", top="+ wintop +", left=" 
							+ winleft +", resizable=yes, status=yes"  );
	win.focus() ; 
}

function login_go() {
	
	var input_memberId = $('input[name="memberId"]');
	if (!$('input[name="memberId"]').val()) {
		alert("아이디를 입력하세요.");
		input_memberId.focus();
		return;
	}
	
	var form = $('form[role="form"]');
   	form.submit();

}

</script>

</body>
</html>

