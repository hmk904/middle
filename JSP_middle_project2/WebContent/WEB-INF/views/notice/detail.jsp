<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<!-- contents -->
<div class="contents">
  <div class="b_table view">

    <div class="bd_type01_view">
      <h4 class="bd_view_tit">${notice.noticeTitle }</h4>
      <table class="bd_tbl mob_row">
        <colgroup>
          <col class="bd_type01_tit">
          <col class="bd_type01_cont">
          <col class="bd_type01_tit">
          <col>
        </colgroup>
        <tbody>
          <tr>
            <th scope="row">작성자</th>
            <td colspan="3">${notice.noticeWriter }</td>
          </tr>
          <tr>
            <th scope="row">작성일</th>
            <td class="notice"><fmt:formatDate value="${notice.noticeDate }" pattern="yyyy-MM-dd"/></td>
            <th scope="row">조회수</th>
            <td>${notice.noticeSearch }</td>
          </tr>

          <tr>
            <th scope="row">첨부파일</th>
            <td colspan="3">
              <ul class="file">
						<c:forEach items="${notice.attachList }" var="attach">
										<div class="col-md-4 col-sm-4 col-xs-12"  style="cursor:pointer;"
												 onclick="location.href='<%=request.getContextPath()%>/notice/getFile.do?AttachNoticeano=${attachnotice.Attachnoticeano }';">
												<div class="info-box">	
												 	<span class="info-box-icon bg-yellow"><i class="fa fa-copy"></i></span>
													<div class="info-box-content">
														<span class ="info-box-text">
															<fmt:formatDate value="${attachnotice.attachnoticeregDate }" pattern="yyyy-MM-dd" />	
														</span>
														<span class ="info-box-number">${attachnotice.attachnoticeFileName }</span>
													</div>
												</div>
											 </div>				
										</c:forEach>
							
              </ul>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="bd_desc">
        <p style="line-height: 23px; margin-right: 0px; margin-left: 0px; font-size: 15px;"><span style="font-size: 16pt;"><span style="color: rgb(0, 0, 0); font-size: 16pt;">${notice.noticeContent }</span></span></p>
      </div>
    </div>

   <br>
<div style=" display:flex; justify-content:flex-end;" >
<div class="">
	<a href="<%=request.getContextPath() %>/notice/modifyForm.do?noticeNum=${notice.noticeNum}"class="btn_blue_green bt_icon arr_w"> <span>수정하기</span></a>
</div>
<div class="" >
	<a href="/JSP_middle_project/notice/remove_success.do" class="btn_blue_green bt_icon arr_w"><span>삭제하기</span></a>
</div>

<div class="">
	<a href="/JSP_middle_project/notice/list.do" class="btn_blue_green bt_icon arr_w"><span>목록보기</span></a>
</div>
	</div>

  </div>

</div>
<!-- body section -->

</div>
<!-- contents -->

</div>
<!-- container -->
</div>

<script>
function submit_go(url,noticeNum){	
	location.href=url+"?noticeNum="+noticeNum;
}
</script>  