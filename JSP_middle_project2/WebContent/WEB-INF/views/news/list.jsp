 <%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!-- 타이틀 시작 -->

<c:set var="newsList" value="${dataMap.newsList }" />
<c:set var="cri" value="${pageMaker.cri }" />

<!-- 타이틀 시작 -->
<div class="conTitle">
  <h3>도서관소식지</h3>
  <!-- 현재위치 표시 -->
  <ul class="snavi02">
    <li class="home"><a href="/hanbatlibrary/index.do">Home</a></li>

    <li><a href="/hanbatlibrary/board/boardNormalList.do?boardId=normal_1020&menuSeq=6242">참여안내</a>

    </li>

    <li><a href="/hanbatlibrary/board/boardNormalList.do?boardId=normal_1022&amp;menuSeq=6248">도서관소식지</a>

    </li>
    <!-- 현재위치표시 끝 -->

</div>
<!-- 타이틀 끝 -->

<!-- 컨텐츠 시작 -->
<div class="contents">
  <script type="text/javascript">
    /**
     * 카테고리 선택
     */
    function fn_select_category(object) {
      var frm = document.getElementById('searchForm');
      frm.categorySeq.value = object.options[object.selectedIndex].value;
    }
  </script>

  <div class="bd_top_type01">
    <div class="area_left">
      <p class="bd_info_page">
        총 <span>133</span>건 <strong><em>1</em>/<span>14</span>페이지</strong>
      </p>
    </div>
    <form id="searchForm" name="searchForm" method="post" action="/hanbatlibrary/board/boardNormalList.do">
      <fieldset class="bd_sel_search">
        <legend>검색</legend>
        <input type="submit" style="display: none;" /> <input type="hidden" id="pageIndex" name="pageIndex" value="1" /> <input type="hidden" id="boardId" name="boardId" value="normal_1022" />
        <input type="hidden" id="categorySeq" name="categorySeq" value="" />
        <input type="hidden" id="menuSeq" name="menuSeq" value="6248" /> <label for="sear_word" class="focus_tit" style="position: absolute; z-index: 1; display: block; visibility: visible;">검색어를
          입력하세요</label> <input type="text" id="sear_word" name="searchKeyword" style="color: rgb(163, 163, 163);"> <input type="button" value="검색" onclick="fn_search()">
      </fieldset>
    </form>
  </div>
  <table class="bd_tbl center bd_type01">
    <caption>공지사항 목록으로 번호, 제목, 작성자, 첨부파일, 작성일, 조회 정보가 확인되며 제목선택
      시 상세페이지로 이동됩니다.</caption>
    <colgroup>
      <col class="bd_num">
      <col>
      <col class="bd_department">
      <col class="bd_file">
      <col class="bd_date">
      <col class="bd_num_inquiry">
    </colgroup>
    <thead>
      <tr>
        <th scope="col" class="bd_num">번호</th>
        <th scope="col" class="bd_title">제목</th>
        <th scope="col" class="bd_department">작성자</th>
        <th scope="col" class="bd_file">첨부파일</th>
        <th scope="col" class="bd_date">작성일</th>
        <th scope="col" class="bd_num_inquiry">조회</th>
      </tr>
    </thead>
    <tbody>

      <c:if test="${empty newsList}">
        <td colspan="6">해당내용이 없습니다.</td>
      </c:if>
      <c:forEach items="${newsList }" var="news">

        <tr>
          <td class="news">${news.newsNum }</td>
          <td class="left news">
           <a
						href="<%=request.getContextPath() %>/news/detail.do?newsNum=${news.newsNum }&from=list">
							${news.newsTitle } </a>
          </td>
          <td class="news">
            ${news.newsWriter }
          </td>
          <td>

            <c:if test="${!empty news.attachList }">
              <i class="nav-icon fas fa-file"></i>
            </c:if>
            <c:if test="${empty news.attachList }">
              <span>-</span>
            </c:if>

          </td>
          <td class="news">
            <fmt:formatDate value="${news.newsDate }" pattern="yyyy-MM-dd" />
          </td>

          <td class="news">${news.newsSearch }</td>

        </tr>
      </c:forEach>

    </tbody>
  </table>

  <div class="bd_pagination">
    <a class="direction" href="#this" onclick="fn_link_page(1); return false;"><img src="/images/common/page_01.gif" alt="처음 페이지으로"></a><a class="direction first" href="#this" onclick="fn_link_page(1); return false;"><img src="/images/common/page_02.gif" alt="이전 페이지로"></a><strong>1</strong><a href="#this" onclick="fn_link_page(2); return false;">2</a><a href="#this" onclick="fn_link_page(3); return false;">3</a><a href="#this" onclick="fn_link_page(4); return false;">4</a><a href="#this" onclick="fn_link_page(5); return false;">5</a><a href="#this" onclick="fn_link_page(6); return false;">6</a><a href="#this" onclick="fn_link_page(7); return false;">7</a><a href="#this" onclick="fn_link_page(8); return false;">8</a><a href="#this" onclick="fn_link_page(9); return false;">9</a><a href="#this" onclick="fn_link_page(10); return false;">10</a><a class="direction last" href="#this" onclick="fn_link_page(11); return false;"><img src="/images/common/page_03.gif" alt="다음 페이지로"></a><a class="direction" href="#this" onclick="fn_link_page(14); return false;"><img src="/images/common/page_04.gif" alt="끝 페이지로"></a>

  </div>

  <div style="display: none;">
    <form id="pageForm" name="pageForm" method="get">
      <input type="submit" style="display: none;" /> <input type="hidden" id="pageIndex2" name="pageIndex" value="1" /> <input type="hidden" id="boardId2" name="boardId" value="normal_1022" /> <input type="hidden" id="searchCondition" name="searchCondition" value="" />
      <input type="hidden" id="searchKeyword" name="searchKeyword" value="" /> <input type="hidden" id="categorySeq2" name="categorySeq" value="" /> <input type="hidden" id="menuSeq2" name="menuSeq" value="6248" />
    </form>
  </div>
<div class="bd_btn_area right">
			<a href="<%=request.getContextPath() %>/news/registForm.do?newsNum=${news.newsNum}"
			class="btn_black btn_list">글쓰기</a>
	</div>
  <!-- //컨텐츠 영역 -->

  <link rel='stylesheet' type='text/css' href='/css/drh/layout/charge.css' media='all' />
  <div class='charge'>
    <ul class='h7_ul'>
      <li><strong>담당부서 :&nbsp;</strong>자료운영과</li>
      <li><strong>담당자 :&nbsp;</strong>김상희</li>
      <li><strong>문의전화 :&nbsp;</strong>042-270-7503</li>
    </ul>
  </div>

</div>
<!-- 컨텐츠 끝 -->
</div>
<!--// contents -->
<div class="clear"></div>
</div>
<!--// contents_layout -->