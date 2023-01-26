<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

<c:set var="libraryBookList" value="${dataMap.libraryBookList }" />
<c:set var="cri" value="${dataMap.pageMaker.cri }" />

<!-- 타이틀 시작 -->
<div class="conTitle">
	<h3>&nbsp;&nbsp;&nbsp;수정하기</h3>
	<!-- 현재위치 표시 -->
	<ul class="snavi02">
		<li class="home"><a href="<%=request.getContextPath()%>/index.do">Home</a></li>

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
	<form role="modifyForm" class="form-horizontal" action="modify.do"
		method="post">
		<input type="hidden" name="libraryBookNum" value="${libraryBook.libraryBookNum }" />
		<div class="">
			<div style="margin:0 35px;"class="">
				

				<div class="cal_view02">
					<div class="bk_info" style="width: 100%">
						<h4>
							제목&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<input style="width: 38%;" type="text" id="libraryBookTitle" name='libraryBookTitle' class="form-control" value="${libraryBook.libraryBookTitle} ">
							
						</h4>

						<ul class="h6_ul">
							<li><strong>자료유형</strong><span><input type="text"
									id="libraryBookDataType" name='libraryBookDataType' class="form-control"
									style="width: 50%" value="${libraryBook.libraryBookDataType }"></span></li>

							<li><strong>개인저자</strong> <span><input type="text"
									id="libraryBookWriter" name='libraryBookWriter' class="form-control"
									style="width: 50%" value="${libraryBook.libraryBookWriter }"></span></li>
							<li><strong>출판사</strong> <span><input type="text"
									id="libraryBookCompany" name='libraryBookCompany' class="form-control"
									style="width: 50%" value="${libraryBook.libraryBookCompany }"></span></li>

							<li><strong>단체저자명</strong><span><input type="text"
									id="libraryBookWriter" name='libraryBookWriter' class="form-control"
									style="width: 50%" value="${libraryBook.libraryBookWriter }"></span></li>

							<li><strong>발행사항</strong><span><input type="text"
									id="libraryBookIssue" name='libraryBookIssue' class="form-control"
									style="width: 50%" value="${libraryBook.libraryBookIssue }"></span></li>

							<li><strong>형태사항</strong><span><input type="text"
									id="libraryBookFormal" name='libraryBookFormal' class="form-control"
									style="width: 50%" value="${libraryBook.libraryBookFormal }"></span></li>

							<li><strong>총서사항</strong><span><input type="text"
									id="libraryBookGeneral" name='libraryBookGeneral' class="form-control"
									style="width: 50%" value="${libraryBook.libraryBookGeneral }"></span></li>

							<li><strong>ISBN</strong><span><input type="text"
									id="libraryBookBookNum" name='libraryBookBookNum' class="form-control"
									style="width: 50%" value="${libraryBook.libraryBookNum }"></span></li>

							<li><strong>서지주기</strong><span><input type="text"
									id="libraryBookNote" name='libraryBookNote' class="form-control"
									style="width: 50%" value="${libraryBook.libraryBookNote }"></span></li>
									
							<li><strong>등록자</strong><span><input type="text"
									id="libraryBookMangerId" name='libraryBookMangerId' class="form-control"
									style="width: 50%" value="${libraryBook.libraryBookManagerId }" readonly></span></li>
						</ul>
					</div>

				</div>

			</div>
		</div>
		
		<div
					style="cursor: pointer; display: flex; justify-content: flex-end; margin-top:0">
					<button style="height: 51px;"class="bd_btn_area center mt30 btn_gray" onclick="modify_submit();">수정하기</button>
					<div class="bd_btn_area center mt30 ">
						<a onclick="CloseWindow();" class="btn_blue_green bt_icon arr_w"><span>목록보기</span></a>
					</div>
</div>
	</form>
</div>
<!-- //컨텐츠 영역 -->

<!-- //contents e -->

<script>
function modify_submit(){
	//alert("modify btn click");
	var form = $('form[name="modifyForm"]');
	
	//유효성 체크
	if($("input[name='libraryBookTitle']").val()==""){
		alert(input.name+"은 필수입니다.");
		$("input[name='libraryBookTitle']").focus();
		return;
	}
	form.submit();
}
</script>
