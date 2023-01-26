<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>


<c:set var="informationList" value="${dataMap.informationList }" />
<c:set var="cri" value="${pageMaker.cri }" />




<!-- 타이틀 시작 -->
<div class="conTitle">
	<h3>자료마당</h3>
	<!-- 현재위치 표시 -->
	
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
        </p>
      </div>
      <!-- <form id="searchForm" name="searchForm" method="post" action="/hanbatlibrary/board/boardNormalList.do">
        <fieldset class="bd_sel_search">
          <legend>검색</legend>
          <input type="submit" style="display: none;" />
          <input type="hidden" id="pageIndex" name="pageIndex" value="1" />
          <input type="hidden" id="boardId" name="boardId" value="normal_1020" />
          <input type="hidden" id="categorySeq" name="categorySeq" value="" />
          <input type="hidden" id="menuSeq" name="menuSeq" value="6242" />

          <label for="sear_word" class="focus_tit" style="position: absolute; z-index: 1; display: block; visibility: visible;">검색어를 입력하세요</label>
          <input type="text" id="sear_word" name="searchKeyword" style="color: rgb(163, 163, 163);"> <input type="button" value="검색" onclick="fn_search()">
        </fieldset>
      </form> -->
    </div>
	<table class="bd_tbl center bd_type01">
		<caption> 번호, 제목, 작성자, 첨부파일, 작성일, 조회 정보가 확인되며 제목선택
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
		
		
		<c:if test="${empty informationList}">
						<td colspan="6">해당내용이 없습니다.</td>
					</c:if>
		<c:forEach items="${informationList }" var="information"> 
        <tr>
          <td class="information">${information.infoNum }</td>
          <td class="left information">
            <a href="<%=request.getContextPath() %>/information/detail.do?infonum=${information.infoNum }&from=list">
              ${information.infoTitle }
            </a>
          </td>
          <td class="information">
            ${information.infoWriter } 
          </td>
          <td>

								<c:if test="${!empty information.attachList }">
									<i class="nav-icon fas fa-file"></i>
								</c:if>
								<c:if test="${empty information.attachList }">
									<span>-</span>
								</c:if>
 
          </td>
          <td class="information"><fmt:formatDate value="${information.infoDate }" pattern="yyyy-MM-dd"/></td>

          <td class="information">${information.infoSearch }</td>

        </tr>
</c:forEach>



		</tbody>
	</table>

	<div class="bd_pagination">
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
			onclick="fn_link_page(24); return false;"><img
			src="/images/common/page_04.gif" alt="끝 페이지로"></a>

	</div>


	<div style="display: none;">
		<form id="pageForm" name="pageForm" method="get">
			<input type="submit" style="display: none;" /> <input type="hidden"
				id="pageIndex2" name="pageIndex" value="1" /> <input type="hidden"
				id="boardId2" name="boardId" value="normal_1023" /> <input
				type="hidden" id="searchCondition" name="searchCondition" value="" />
			<input type="hidden" id="searchKeyword" name="searchKeyword" value="" />
			<input type="hidden" id="categorySeq2" name="categorySeq" value="" />
			<input type="hidden" id="menuSeq2" name="menuSeq" value="6249" />
		</form>
	</div>

	<!-- //컨텐츠 영역 -->
	<div class="bd_btn_area right">
    	<a href="<%=request.getContextPath() %>/information/registForm.do">글쓰기</a>
    </div>


<link rel='stylesheet' type='text/css' href='/css/drh/layout/charge.css' media='all'/>


	<div class='charge'>
		<ul class='h7_ul'>
			<li><strong>담당부서 :&nbsp;</strong>관리과</li>
			<li><strong>담당자 :&nbsp;</strong>김우철</li>
			<li><strong>문의전화 :&nbsp;</strong>042-270-7414</li>
		</ul>
	</div>

</div>

<!-- 컨텐츠 끝 -->
</div>
<!--// contents -->
<div class="clear"></div>
</div>
<!--// contents_layout -->

