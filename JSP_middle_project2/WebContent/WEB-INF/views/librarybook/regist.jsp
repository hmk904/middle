<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

<!-- 타이틀 시작 -->
<div class="conTitle">
	<h3>&nbsp;&nbsp;&nbsp;새로들어온책</h3>
	<!-- 현재위치 표시 -->
	<ul class="snavi02">
		<li class="home"><a href="<%=request.getContextPath()%>/index.do">Home</a></li>

		<li><a href="<%=request.getContextPath()%>/librarybook/list.do">">정보검색</a>

		</li>

		<li><a href="<%=request.getContextPath()%>/newbook/list.do">새로들어온책</a></li>
	</ul>
	<!-- 현재위치표시 끝 -->
</div>
<!-- 타이틀 끝 -->

<!-- contents s -->
<div class="contents">
	<!-- 컨텐츠 영역 -->
	<form role="form" class="form-horizontal" action="regist.do"
		method="post">
		<div class="">
				<div class="cal_view02">
					<div class="bk_info" style="width: 100%">
						<h4>
							제목&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input
								type="text" id="libraryBookTitle" name='libraryBookTitle' class="form-control"
								style="width: 38%">
						</h4>

						<ul class="h6_ul">
							<li><strong>자료유형</strong> <span><input type="text"
									id="libraryBookDataType" name='libraryBookDataType' class="form-control"
									style="width: 50%"></span></li>

							<li><strong>개인저자</strong> <span><input type="text"
									id="libraryBookWriter" name='libraryBookWriter' class="form-control"
									style="width: 50%"></span></li>
							<li><strong>출판사</strong> <span><input type="text"
									id="libraryBookCompany" name='libraryBookCompany' class="form-control"
									style="width: 50%"></span></li>

							<li><strong>단체저자명</strong><span><input type="text"
									id="libraryBookWriter" name='libraryBookWriter' class="form-control"
									style="width: 50%"></span></li>

							<li><strong>발행사항</strong><span><input type="text"
									id="libraryBookIssue" name='libraryBookIssue' class="form-control"
									style="width: 50%"></span></li>

							<li><strong>형태사항</strong><span><input type="text"
									id="libraryBookFormal" name='libraryBookFormal' class="form-control"
									style="width: 50%"></span></li>

							<li><strong>총서사항</strong><span><input type="text"
									id="libraryBookGeneral" name='libraryBookGeneral' class="form-control"
									style="width: 50%"></span></li>

							<li><strong>ISBN</strong><span><input type="text"
									id="libraryBookNum" name='libraryBookNum' class="form-control"
									style="width: 50%"></span></li>

							<li><strong>서지주기</strong><span><input type="text"
									id="libraryBookNote" name='libraryBookNote' class="form-control"
									style="width: 50%"></span></li>
							<li><strong>등록자</strong><span><input type="text"
									id="libraryBookMangerId" name='libraryBookMangerId' class="form-control"
									style="width: 50%"></span></li>
						</ul>
					</div>

				</div>

		</div>
		
		         <div
					style="cursor: pointer; display: flex; justify-content: flex-end; margin-top:0 !important;">
					<div class="bd_btn_area center mt30">
						<a id="registBtn" class="btn_blue bt_icon arr_w"
							onclick="regist_go();"> <span>저장하기</span>
						</a>
					</div>
					
					<div class="bd_btn_area center mt30">
						<a onclick="CloseWindow();" class="btn_blue_green bt_icon arr_w"><span>목록보기</span></a>
					</div>
				</div>

	</form>
</div>
<!-- //컨텐츠 영역 -->

<!-- //contents e -->

<script>
	function regist_go() {

		var input_Title = $('input[name="libraryBookTitle"]');
		if (!$('input[name="libraryBookTitle"]').val()) {
			alert("제목은 필수입니다.");
			input_Title.focus();
			return;
		}
		if (!$('input[name="libraryBookDataType"]').val()) {
			alert("자료유형은 중복 확인이 필요합니다.");
			return;
		}
		var input_libraryBookWriter = $('input[name="libraryBookWriter"]');
		if (!$('input[name="libraryBookWriter"]').val()) {
			alert("개인저자는 필수입니다.");
			input_libraryBookWriter.focus();
			return;
		}
		var input_libraryBookIssue = $('input[name="libraryBookIssue"]');
		if (!$('input[name="libraryBookIssue"]').val()) {
			alert("발행사항은 필수입니다.");
			input_libraryBookIssue.focus();
			return;
		}
		var input_libraryBookFormal = $('input[name="libraryBookFormal"]');
		if (!$('input[name="libraryBookFormal"]').val()) {
			alert("형태사항은 필수입니다.");
			input_libraryBookFormal.focus();
			return;
		}
		var input_libraryBookGeneral = $('input[name="libraryBookGeneral"]');
		if (!$('input[name="libraryBookGeneral"]').val()) {
			alert("총서사항은 필수입니다.");
			input_libraryBookFormal.focus();
			return;
		}

		var input_libraryBookCompany = $('input[name="libraryBookCompany"]');
		if (!$('input[name="libraryBookCompany"]').val()) {
			alert("출판사는 필수입니다.");
			input_libraryBookCompany.focus();
			return;
		}

		var input_libraryBookBookNum = $('input[name="libraryBookNum"]');
		if (!$('input[name="libraryBookNum"]').val()) {
			alert("ISBN은 필수입니다.");
			input_libraryBookNum.focus();
			return;
		}
		var input_libraryBookGeneral = $('input[name="libraryBookNote"]');
		if (!$('input[name="libraryBookNote"]').val()) {
			alert("서지주기는 필수입니다.");
			input_libraryBookGeneral.focus();
			return;
		}

		var input_libraryBookMangerId = $('input[name="libraryBookMangerId"]');
		if (!$('input[name="libraryBookMangerId"]').val()) {
			alert("등록자는 필수입니다.");
			input_libraryBookMangerId.focus();
			return;
		}

		var form = $('form[role="form"]');
		form.submit();
	}
</script>
