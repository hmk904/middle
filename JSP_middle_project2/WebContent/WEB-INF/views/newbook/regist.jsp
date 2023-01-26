<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

<!-- 타이틀 시작 -->
<div class="conTitle">
	<h3>&nbsp;&nbsp;&nbsp;새로들어온책</h3>
	<!-- 현재위치 표시 -->
	<ul class="snavi02">
		<li class="home"><a href="<%=request.getContextPath()%>/main.jsp">Home</a></li>

		<li><a href="/hanbatlibrary/dataSearch.do?menuSeq=6222">정보검색</a>

		</li>

		<li><a href="/hanbatlibrary/new.do?menuSeq=6224">새로들어온책</a></li>
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
								type="text" id="newTitle" name='newTitle' class="form-control"
								style="width: 38%">
						</h4>

						<ul class="h6_ul">
							<li><strong>자료유형</strong> <span><input type="text"
									id="newDataType" name='newDataType' class="form-control"
									style="width: 50%"></span></li>

							<li><strong>개인저자</strong> <span><input type="text"
									id="newWriter" name='newWriter' class="form-control"
									style="width: 50%"></span></li>
							<li><strong>출판사</strong> <span><input type="text"
									id="newCompany" name='newCompany' class="form-control"
									style="width: 50%"></span></li>

							<li><strong>단체저자명</strong><span><input type="text"
									id="newWriter" name='newWriter' class="form-control"
									style="width: 50%"></span></li>

							<li><strong>발행사항</strong><span><input type="text"
									id="newIssue" name='newIssue' class="form-control"
									style="width: 50%"></span></li>

							<li><strong>형태사항</strong><span><input type="text"
									id="newFormal" name='newFormal' class="form-control"
									style="width: 50%"></span></li>

							<li><strong>총서사항</strong><span><input type="text"
									id="newGeneral" name='newGeneral' class="form-control"
									style="width: 50%"></span></li>

							<li><strong>ISBN</strong><span><input type="text"
									id="newBookNum" name='newBookNum' class="form-control"
									style="width: 50%"></span></li>

							<li><strong>서지주기</strong><span><input type="text"
									id="newNote" name='newNote' class="form-control"
									style="width: 50%"></span></li>
							<li><strong>등록자</strong><span><input type="text"
									id="newMangerId" name='newMangerId' class="form-control"
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

		var input_Title = $('input[name="newTitle"]');
		if (!$('input[name="newTitle"]').val()) {
			alert("제목은 필수입니다.");
			input_Title.focus();
			return;
		}
		if (!$('input[name="newDataType"]').val()) {
			alert("자료유형은 중복 확인이 필요합니다.");
			return;
		}
		var input_newWriter = $('input[name="newWriter"]');
		if (!$('input[name="newWriter"]').val()) {
			alert("개인저자는 필수입니다.");
			input_newWriter.focus();
			return;
		}
		var input_newIssue = $('input[name="newIssue"]');
		if (!$('input[name="newIssue"]').val()) {
			alert("발행사항은 필수입니다.");
			input_newIssue.focus();
			return;
		}
		var input_newFormal = $('input[name="newFormal"]');
		if (!$('input[name="newFormal"]').val()) {
			alert("형태사항은 필수입니다.");
			input_newFormal.focus();
			return;
		}
		var input_newGeneral = $('input[name="newGeneral"]');
		if (!$('input[name="newGeneral"]').val()) {
			alert("총서사항은 필수입니다.");
			input_input_newFormal.focus().focus();
			return;
		}

		var input_newCompany = $('input[name="newCompany"]');
		if (!$('input[name="newCompany"]').val()) {
			alert("출판사는 필수입니다.");
			input_newCompany.focus();
			return;
		}

		var input_newBookNum = $('input[name="newBookNum"]');
		if (!$('input[name="newBookNum"]').val()) {
			alert("ISBN은 필수입니다.");
			input_newBookNum.focus();
			return;
		}
		var input_newGeneral = $('input[name="newNote"]');
		if (!$('input[name="newNote"]').val()) {
			alert("서지주기는 필수입니다.");
			input_newGeneral.focus();
			return;
		}

		var input_newMangerId = $('input[name="newMangerId"]');
		if (!$('input[name="newMangerId"]').val()) {
			alert("등록자는 필수입니다.");
			input_newMangerId.focus();
			return;
		}

		var form = $('form[role="form"]');
		form.submit();
	}
</script>
