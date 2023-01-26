<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

<c:set var="newBookList" value="${dataMap.newBookList }" />
<c:set var="cri" value="${dataMap.pageMaker.cri }" />
<!-- 타이틀 시작 -->
<div class="conTitle">
	<h3>새로들어온책</h3>
	<!-- 현재위치 표시 -->
	<ul class="snavi02">
		<li class="home"><a href="<%=request.getContextPath()%>/main.jsp">Home</a></li>

		<li><a href="<%=request.getContextPath()%>/librarybook/list.do">정보검색</a></li>

		<li><a href="<%=request.getContextPath()%>/newbook/list.do">새로들어온책</a></li>

	</ul>
	<!-- 현재위치표시 끝 -->

</div>
<!-- 타이틀 끝 -->
<div style="margin-left: 480px;">
	<div id="keyword" class="card-tools" style="width: 450px;">
		<div class="input-group row">
			<select class="form-control col-md-3" name="perPageNum"
				id="perPageNum">
				<option value="10" ${cri.perPageNum==10 ? 'selected':'' }>정렬개수</option>
				<option value="20" ${cri.perPageNum==20 ? 'selected':'' }>20개씩</option>
				<option value="30" ${cri.perPageNum==30 ? 'selected':'' }>30개씩</option>
				<option value="50" ${cri.perPageNum==50 ? 'selected':'' }>50개씩</option>

			</select> <select class="form-control col-md-3" name="searchType"
				id="searchType">
				<option value="tcw" ${cri.searchType eq 'tcw' ? 'selected':'' }>전
					체</option>
				<option value="t" ${cri.searchType eq 't' ? 'selected':'' }>제
					목</option>
				<option value="w" ${cri.searchType eq 'w' ? 'selected':'' }>작성자</option>
				<option value="c" ${cri.searchType eq 'c' ? 'selected':'' }>내
					용</option>
				<option value="tc" ${cri.searchType eq 'tc' ? 'selected':'' }>제목+내용</option>
				<option value="cw" ${cri.searchType eq 'cw' ? 'selected':'' }>작성자+내용</option>
			</select> <input class="form-control" type="text" name="keyword"
				placeholder="검색어를 입력하세요." value="${cri.keyword }"
				style="margin: 1px;" /> <i onclick="list_go(1);"
				class="fa fa-fw fa-search" style="font-size: 20px; cursor: pointer;"></i>

			<span class="input-group-append"> </span>
		</div>
	</div>
</div>
<!-- // leftmenu -->

<!-- contents s -->
<div class="contents">
	<!-- 컨텐츠 영역 -->

	<div class="book_search">
	</div>

	<div class="book_list">
		<c:forEach items="${newBookList }" var="newBook">
			<ul>

				<li><a style="cursor: pointer;"
					onclick="javascript:OpenWindow('detail.do?newBookNum=${newBook.newBookNum }','상세보기',800,700);">

						<div class="book_info" style="width: 100%">
							<h4>${newBook.newTitle }</h4>
							<ul>
								<li><strong>저자</strong>${newBook.newWriter }</li>
								<li><strong>출판사</strong>${newBook.newCompany }</li>
								<li><strong>ISBN</strong>${newBook.newBookNum }</li>
							</ul>
						</div>
				</a></li>

			</ul>
		</c:forEach>

	</div>


	<c:if test="${loginUser == null }">
	<div class="bd_btn_area right" style="cursor: pointer;" hidden="">
		<a onclick="javascript:OpenWindow('registForm.do','상세보기',800,700);">책
			등록</a>
	</div>
	</c:if>
	
		<c:if test="${loginUser != null }">
	<div class="bd_btn_area right" style="cursor: pointer;" >
		<a onclick="javascript:OpenWindow('registForm.do','상세보기',800,700);">책
			등록</a>
	</div>
	</c:if>
	
	<%@ include file="/WEB-INF/module/pagination.jsp"%>
</div>

<!-- //컨텐츠 영역 -->

<link rel='stylesheet' type='text/css' href='/css/drh/layout/charge.css'
	media='all' />
<div class='charge'>
	<ul class='h7_ul'>
		<li><strong>담당부서 :&nbsp;</strong>자료운영과</li>
		<li><strong>담당자 :&nbsp;</strong>조혜림</li>
		<li><strong>문의전화 :&nbsp;</strong>042-270-7507</li>
	</ul>
</div>

<!-- //해당메뉴 담당부서 출력 -->

</div>
<!-- //contents e -->

</div>
<!--// contents -->
<div class="clear"></div>
</div>