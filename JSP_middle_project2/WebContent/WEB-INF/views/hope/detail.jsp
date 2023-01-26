<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

<!-- contents -->
<div class="contents">
 
             
	
	<div class="bd_type01_view">
		<h4 class="bd_view_tit">${hope.hopeTitle}</h4>
		<table class="bd_tbl mob_row">
			<caption>식당 불편 불친절 에 대한 정보목록으로 작성자, 작성일, 조회수, 첨부파일이 확인됩니다.
			</caption>
			<colgroup>
				<col class="bd_type01_tit">
				<col class="bd_type01_cont">
				<col class="bd_type01_tit">
				<col>
			</colgroup>
			<tbody>
				<tr>
					<th scope="row">작성자</th>
					<td>${hope.hopeWriter }</td>
					<th scope="row">작성일</th>
					<td><fmt:formatDate value="${hope.hopeDate }"
							pattern="yyyy-MM-dd" /></td>

					</td>
				</tr>
				<tr>
					<th scope="row">첨부파일</th>
					<td colspan="3">
						<!-- 											<p> --> <!-- 											</p> -->



						<ul class="file">

						</ul>


					</td>
				</tr>
			</tbody>
		</table>

		<div class="bd_desc">${hope.hopeContent }</div>
	</div>






	<div style="display: flex; text-align: center; justify-content: flex-end;">
<div class="">
	<a href="<%=request.getContextPath() %>/hope/modifyForm.do?hopeNum=${hope.hopeNum}"class="btn_gray bt_icon arr_w"> <span>수정</span></a>
</div>
<div class="">
	<a href="/JSP_middle_project/hope/remove.do?hopeNum=${hope.hopeNum }" class="btn_red bt_icon arr_w"><span>삭제하기</span></a>
</div>
<div class="">
	<a href="/JSP_middle_project/hope/list.do" class="btn_blue_green bt_icon arr_w"><span>목록보기</span></a>
</div>
	</div>	

	
	</div>

		
			
			


<script>
function submit_go(url,hopeNum){	
	location.href=url+"?hopeNum="+hopeNum;
}
</script>






