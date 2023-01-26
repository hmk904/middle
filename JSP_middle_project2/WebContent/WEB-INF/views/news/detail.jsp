<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>


<div class="contents">
	<div class="b_table view">

		<div class="bd_type01_view">
			<h4 class="bd_view_tit">${news.newsTitle }</h4>
			<table class="bd_tbl mob_row">
				<caption>정기적 안정적 생활폐기물 처리대책 마련정기적 안정적 생활폐기물 처리대책 마련에 대한
					정보목록으로 작성자, 작성일, 조회수, 첨부파일이 확인됩니다.</caption>
				<colgroup>
					<col class="bd_type01_tit">
					<col class="bd_type01_cont">
					<col class="bd_type01_tit">
					<col>
				</colgroup>
				<tbody>
					<tr>
						<th scope="row">작성자</th>
						<td colspan="3">${news.newsWriter }</td>
					</tr>
					<tr>
						<th scope="row">작성일</th>
						<td class="news"><fmt:formatDate value="${news.newsDate }"
								pattern="yyyy-MM-dd" /></td>

						<th scope="row">조회수</th>
						<td>${news.newsSearch }</td>
					</tr>



					<tr>
						<th scope="row">첨부파일</th>
						<td colspan="3">
							<ul class="file">

								<li class="first" > <a
									href="/biz/board/file/down.do?atflSeq=414247" target="_new"
									title="한밭도서관 소식 - 2023년 1월호 첨부파일 다운로드" style="width: auto;">
									${attachnews.attachnewsfilename} </a> &nbsp; <a
									href="javascript:filePreView('414247', 'FileUpload/CommonBoard/normal_1022/20230103041805204.pdf', '한밭도서관 소식지 1월 웹용.pdf');">
									<img src="/images/common/btn_preview_view.gif" alt="미리보기" />
								</a>

								</li>
							</ul>
						</td>
					</tr>
				</tbody>
			</table>

			<div class="bd_desc">
				<p
					style="margin-right: 0px; margin-left: 0px; border: 0px; padding: 0px; font-size: 13px; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; color: rgb(102, 102, 102); line-height: 23.4px; font-family: 나눔고딕, Nanumgothic, 돋움, Dotum, Verdana, Arial, AppleGothic, sans-serif;">
					<span
						style="margin: 0px; border: 0px; padding: 0px; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; font-family: '맑은 고딕';">${news.newsContent }</span>
				</p>
			</div>
			<br>
			<div
				style="display: flex; text-align: center; justify-content: flex-end;">
				<div class="">
					<a
						href="<%=request.getContextPath() %>/news/modifyForm.do?newsNum=${news.newsNum}"
						class="btn_blue_green bt_icon arr_w"> <span>수정</span></a>
				</div>
				<div class="">
					<a href="/JSP_middle_project/news/modify.do"
						class="btn_blue_green bt_icon arr_w"><span>삭제</span></a>
				</div>

				<div class="">
					<a href="/JSP_middle_project/news/list.do"
						class="btn_blue_green bt_icon arr_w"><span>목록보기</span></a>
				</div>
			</div>
		</div>

	</div>
	<!-- body section -->

</div>
<!-- contents -->