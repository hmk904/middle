<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>


<div class="contents">
	<div class="b_table view">












		<div class="bd_type01_view">
			<h4 class="bd_view_tit">${information.infoTitle }</h4>
			<table class="bd_tbl mob_row">
				<caption>작성자, 작성일, 조회수, 첨부파일이 확인됩니다.</caption>
				<colgroup>
					<col class="bd_type01_tit">
					<col class="bd_type01_cont">
					<col class="bd_type01_tit">
					<col>
				</colgroup>
				<tbody>
					<tr>
						<th scope="row">작성자</th>
						<td colspan="3">${information.infoWriter }</td>
					</tr>
					<tr>
						<th scope="row">작성일</th>
						<td class="news">
						<fmt:formatDate value="${information.infoDate }" pattern="yyyy-MM-dd" /></td>

						<th scope="row">조회수</th>
						<td>${information.infoSearch }</td>
					</tr>



					<tr>
						<th scope="row">첨부파일</th>
						<td colspan="3">
							<ul class="file">

								<liclass="first" }> 
								<a href="" target="_new"
									title="" style="width: auto;">
									${attachinformation.attachinformationano } </a> &nbsp; <a href="javascript:filePreView('${attachinformation.attachinformationano }', '${attachinformationuploadpath }', '${attachinformationfilename }');">
									<img src="/images/common/btn_preview_view.gif" alt="미리보기" />
								</a>

								</li>
							</ul>
						</td>
					</tr>
				</tbody>
			</table>

			<div class="bd_desc">
				<p style="margin-right: 0px; margin-left: 0px; border: 0px; padding: 0px; font-size: 13px; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; color: rgb(102, 102, 102); line-height: 23.4px; font-family: 나눔고딕, Nanumgothic, 돋움, Dotum, Verdana, Arial, AppleGothic, sans-serif;">
					<span style="margin: 0px; border: 0px; padding: 0px; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; font-family: '맑은 고딕';">${information.infoContent }</span>
				</p>
			</div>

			<br>

			<div style="display: flex; text-align: center; justify-content: flex-end;">
				<a href="<%=request.getContextPath() %>/information/modifyForm.do?infonum=${information.infoNum }"
					class="btn_blue_green bt_icon arr_w" ><span>수정하기</span></a> 
				<a href="/JSP_middle_project/information/remove.do?infonum=${information.infoNum }"
					class="btn_red bt_icon arr_w"><span>삭제하기</span></a> 
				<a href="/JSP_middle_project/information/list.do"
					class="btn_blue_green bt_icon arr_w"><span>목록보기</span></a>


			</div>

		</div>
		<!-- body section -->

	</div>
	</div>
	
	<!-- contents -->