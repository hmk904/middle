<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

<!-- 타이틀 시작 -->
<div class="conTitle">
	<h3>&nbsp;&nbsp;&nbsp;보유도서</h3>
	<!-- 현재위치 표시 -->
	<ul class="snavi02">
		<li class="home"><a href="<%=request.getContextPath()%>/index.do">Home</a></li>

		<li><a href="/hanbatlibrary/dataSearch.do?menuSeq=6222">정보검색</a></li>

		<li><a href="/hanbatlibrary/new.do?menuSeq=6224">보유도서</a></li>

	</ul>
	<!-- 현재위치표시 끝 -->

</div>
<!-- 타이틀 끝 -->

<!-- // leftmenu -->

<!-- contents s -->
<div class="contents">
	<!-- 컨텐츠 영역 -->
	<form action="/hanbatlibrary/miniPrint.do " id="miniPrint"
		target="miniPrint">
		<input type="hidden" name="title" value="영화 프로듀서 매뉴얼"> <input
			type="hidden" name="author" value="박대희"> <input type="hidden"
			name="publisher" value="KOFIC(영화진흥위원회)"> <input type="hidden"
			name="publisher_year" value="2022"> <input type="hidden"
			name="call_no" value=""> <input type="hidden" name="place"
			value="">
	</form>

	<div class="box_calendar">
		<div class="box_calendar_area">

			<div class="cal_view02">
				<div class="bk_info" style="width: 100%">
					<h4>${libraryBook.libraryBookTitle }</h4>
					<ul class="h6_ul">

						<li><strong>자료유형</strong><span>${libraryBook.libraryBookDataType }</span></li>

						<li><strong>개인저자</strong><span>${libraryBook.libraryBookWriter }</span></li>

						<li><strong>서명/저자사항</strong><span>영화 프로듀서 매뉴얼 /박대희
								;어지연 ;유은정 [공] 저 ;영화진흥위원회 연구주관</span></li>

						<li><strong>발행사항</strong><span>${libraryBook.libraryBookIssue }</span></li>

						<li><strong>형태사항</strong><span>${libraryBook.libraryBookFormal }</span></li>

						<li><strong>총서사항</strong><span>${libraryBook.libraryBookGeneral }
								</span></li>

						<li><strong>ISBN</strong><span>${libraryBook.libraryBookNum }</span></li>

						<li><strong>서지주기</strong><span>${libraryBook.libraryBookNote }</span></li>

					</ul>
				</div>
			</div>

		</div>
	</div>
	
				<div
					style="cursor: pointer; display: flex; justify-content: flex-end; margin-top:0 !important;">
					<div class="bd_btn_area center mt30">
						<a onclick="OpenWindow('modifyForm.do?libraryBookNum=${libraryBook.libraryBookNum}','상세보기',800,200);" class="btn_gray">수정하기</a>
					</div>
					<div class="bd_btn_area center mt30">
						<a onclick="location.href='remove.do?libraryBookNum=${libraryBook.libraryBookNum}';" id="deleteBtn" class="btn_red">삭 제</a>
					</div>
					<div class="bd_btn_area center mt30">
						<a onclick="CloseWindow();" class="btn_blue_green bt_icon arr_w"><span>목록보기</span></a>
					</div>
				</div>

	<!-- //컨텐츠 영역 -->
</div>
<!-- //contents e -->