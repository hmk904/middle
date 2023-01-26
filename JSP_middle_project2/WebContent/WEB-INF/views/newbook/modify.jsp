<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

<c:set var="newBookList" value="${dataMap.newBookList }" />
<c:set var="cri" value="${dataMap.pageMaker.cri }" />

<!-- 타이틀 시작 -->
<div class="conTitle">
	<h3>&nbsp;&nbsp;&nbsp;수정하기</h3>
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
	<form role="modifyForm" class="form-horizontal" action="modify.do"
		method="post">
		<div class="">
			<div style="margin:0 35px;"class="">
				

				<div class="cal_view02">
					<div class="bk_info" style="width: 100%">
						<h4>
							제목&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<input style="width: 38%;" type="text" id="newTitle" name='newTitle' class="form-control" value="${newBook.newTitle} ">
							
						</h4>

						<ul class="h6_ul">
							<li><strong>자료유형</strong><span><input type="text"
									id="newDataType" name='newDataType' class="form-control"
									style="width: 50%" value="${newBook.newDataType }"></span></li>

							<li><strong>개인저자</strong> <span><input type="text"
									id="newWriter" name='newWriter' class="form-control"
									style="width: 50%" value="${newBook.newWriter }"></span></li>
							<li><strong>출판사</strong> <span><input type="text"
									id="newCompany" name='newCompany' class="form-control"
									style="width: 50%" value="${newBook.newCompany }"></span></li>

							<li><strong>단체저자명</strong><span><input type="text"
									id="newWriter" name='newWriter' class="form-control"
									style="width: 50%" value="${newBook.newWriter }"></span></li>

							<li><strong>발행사항</strong><span><input type="text"
									id="newIssue" name='newIssue' class="form-control"
									style="width: 50%" value="${newBook.newIssue }"></span></li>

							<li><strong>형태사항</strong><span><input type="text"
									id="newFormal" name='newFormal' class="form-control"
									style="width: 50%" value="${newBook.newFormal }"></span></li>

							<li><strong>총서사항</strong><span><input type="text"
									id="newGeneral" name='newGeneral' class="form-control"
									style="width: 50%" value="${newBook.newGeneral }"></span></li>

							<li><strong>ISBN</strong><span><input type="text"
									id="newBookNum" name='newBookNum' class="form-control"
									style="width: 50%" value="${newBook.newBookNum }"></span></li>

							<li><strong>서지주기</strong><span><input type="text"
									id="newNote" name='newNote' class="form-control"
									style="width: 50%" value="${newBook.newNote }"></span></li>
									
							<li><strong>등록자</strong><span><input type="text"
									id="newMangerId" name='newMangerId' class="form-control"
									style="width: 50%" value="${newBook.newBookNum }" readonly></span></li>
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
	if($("input[name='newTitle']").val()==""){
		alert(input.name+"은 필수입니다.");
		$("input[name='newTitle']").focus();
		return;
	}
	form.submit();
}
</script>
