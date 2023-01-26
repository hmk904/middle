<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!-- 타이틀 시작 -->

<c:set var="hopeList" value="${dataMap.hopeList }" />
<c:set var="cri" value="${pageMaker.cri }" />

<!-- 타이틀 시작 -->
<div class="conTitle">
	<h3>도서관에 바란다</h3>
	<!-- 현재위치 표시 -->
	<ul class="snavi02">
		<li class="home"><a href="/hanbatlibrary/index.do">Home</a></li>




		<li><a
			href="/hanbatlibrary/board/boardNormalList.do?boardId=normal_1020&menuSeq=6242">참여안내</a>



		</li>



		<li><a href="/hanbatlibrary/hanlibHopeList.do?menuSeq=6246">도서관에
				바란다</a></li>

	</ul>
	<!-- 현재위치표시 끝 -->

</div>
<!-- 타이틀 끝 -->

<!-- // leftmenu -->

<!-- contents -->
<div class="contents">

	<!-- 컨텐츠 영역 -->
	<div class="bd_top_type01">
		<div class="area_left">
			<p class="bd_info_page">
				총 <span>3,665</span>건 <strong><em>1</em>/<span>367</span>페이지</strong>
			</p>
		</div>

		<fieldset class="bd_sel_search">
			<form id="searchForm" name="searchForm" method="post"
				action="/hanbatlibrary/hanlibHopeList.do">
				<input type="hidden" name="boardId" value="hanlib_002"> <input
					type="hidden" name="menuSeq" value="6246"> <input
					type="hidden" name="pageIndex" value="1">

				<legend>검색</legend>
				<input type="text" id="searchKeyword" name="searchKeyword"
					style="color: rgb(163, 163, 163);" title="검색어를 입력하세요" value="">
				<input type="button" value="검색" onclick="form.submit();">
			</form>
		</fieldset>
	</div>

	<table class="bd_tbl center bd_type03">
		<caption>공지사항 목록으로 번호, 제목, 작성자, 첨부파일, 작성일, 조회 정보가 확인되며 제목선택
			시 상세페이지로 이동됩니다.</caption>
		<colgroup>
			<col class="bd_num">
			<col>
			<col class="bd_department">
			<col class="bd_file">
			<col class="bd_date">
			<col class="bd_process">
		</colgroup>
		<thead>
			<tr>
				<th scope="col" class="bd_num">번호</th>
				<th scope="col" class="bd_title">제목</th>
				<th scope="col" class="bd_department">작성자</th>
				<th scope="col" class="bd_file">첨부파일</th>
				<th scope="col" class="bd_date">작성일</th>
				<th scope="col" class="bd_process">조회</th>
			</tr>
		</thead>
		<tbody>



			<c:if test="${empty hopeList}">
				<td colspan="6">해당내용이 없습니다.</td>
			</c:if>
			<c:forEach items="${hopeList }" var="hope">

				<tr>
					<td class="hope">${hope.hopeNum }</td>
					<td class="left hope"><a
						href="<%=request.getContextPath() %>/hope/detail.do?hopeNum=${hope.hopeNum }&from=list">
							${hope.hopeTitle } </a></td>
					<td class="hope">${hope.hopeWriter }</td>
					<td>
					<c:if test="${!empty hopeList }">
							<i class="nav-icon fas fa-file"></i>
						</c:if> 
						<c:if test="${empty hopeList }">
							<span>-</span>
						</c:if>
						</td>
					<td class="hope"><fmt:formatDate value="${hope.hopeDate }"
							pattern="yyyy-MM-dd" /></td>

					<td class="hope">${hope.hopeSearch }</td>

				</tr>
			</c:forEach>
		</tbody>
	</table>

	<!-- paging -->
	<div class="bd_pagination">
		<!-- 				        <div class="boardbtn"> -->
		<!-- 			       			<div class="pagination"> -->
		<a class="direction" href="#this"
			onclick="fn_link_page(1); return false;"><img
			src="/images/common/page_01.gif" alt="처음 페이지으로"></a><a
			class="direction first" href="#this"
			onclick="fn_link_page(1); return false;"><img
			src="/images/common/page_02.gif" alt="이전 페이지로"></a><strong>1</strong><a
			href="#this" onclick="fn_link_page(2); return false;">2</a><a
			href="#this" onclick="fn_link_page(3); return false;">3</a><a
			href="#this" onclick="fn_link_page(4); return false;">4</a><a
			href="#this" onclick="fn_link_page(5); return false;">5</a><a
			href="#this" onclick="fn_link_page(6); return false;">6</a><a
			href="#this" onclick="fn_link_page(7); return false;">7</a><a
			href="#this" onclick="fn_link_page(8); return false;">8</a><a
			href="#this" onclick="fn_link_page(9); return false;">9</a><a
			href="#this" onclick="fn_link_page(10); return false;">10</a><a
			class="direction last" href="#this"
			onclick="fn_link_page(11); return false;"><img
			src="/images/common/page_03.gif" alt="다음 페이지로"></a><a
			class="direction" href="#this"
			onclick="fn_link_page(367); return false;"><img
			src="/images/common/page_04.gif" alt="끝 페이지로"></a>

		<!-- 							</div> -->
		<!-- 				        </div> -->
	</div>

	<div class="bd_btn_area right">
		<a href="<%=request.getContextPath() %>/hope/registForm.do"class="btn_green btn_list">글쓰기</a>
	</div>


	<form id="pageForm" name="pageForm" method="post"
		action="/hanbatlibrary/hanlibHopeList.do">
		<input type="hidden" name="menuSeq" value="6246"> <input
			type="hidden" name="pageIndex" value=""> <input type="hidden"
			name="searchCondition" value=""> <input type="hidden"
			name="searchKeyword" value="">
	</form>

	<!-- 해당메뉴 담당부서 출력 -->

	<link rel='stylesheet' type='text/css'
		href='/css/drh/layout/charge.css' media='all' />
	<div class='charge'>
		<ul class='h7_ul'>
			<li><strong>담당부서 :&nbsp;</strong>관리과</li>
			<li><strong>담당자 :&nbsp;</strong>김우철</li>
			<li><strong>문의전화 :&nbsp;</strong>042-270-7414</li>
		</ul>
	</div>


</div>
<!-- //contents e -->
</div>
<!--// conRight e -->
<div class="clear"></div>
</div>
<!--// contents_layout e -->
</div>