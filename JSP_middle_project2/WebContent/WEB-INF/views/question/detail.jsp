<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<!-- contents -->
<div class="contents">
  <div class="b_table view">

    <div class="bd_type01_view">
      <h4 class="bd_view_tit">${question.questionTitle }</h4>
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
            <td colspan="3">${question.questionWriter }</td>
          </tr>
          <tr>
            <th scope="row">작성일</th>
            <td class="notice"><fmt:formatDate value="${question.questionDate }" pattern="yyyy-MM-dd"/></td>
            <th scope="row">조회수</th>
            <td>${question.questionSearch }</td>
          </tr>

          <tr>
            <th scope="row">첨부파일</th>
            <td colspan="3">
              <ul class="file">

              </ul>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="bd_desc">
        <p style="line-height: 23px; margin-right: 0px; margin-left: 0px; font-size: 12px;"><span style="font-size: 16pt;"><span style="color: rgb(0, 0, 0); font-size: 16pt;">${question.questionContent }</span></span></p>
      </div>
    </div>

	  <div class="bd_btn_area right">
      <a href="<%=request.getContextPath() %>/question/modifyForm.do?questionNum=${question.questionNum}"  style="display:inline-block;" class="btn_blue_green bt_icon arr_w"><span>수정하기</span></a>
    
      <a href="<%=request.getContextPath() %>/question/remove_success.do?questionNum=${question.questionNum}"  style="display:inline-block;" class="btn_blue_green bt_icon arr_w"><span>삭제하기</span></a>
      <a href="/JSP_middle_project/question/list.do" class="btn_blue_green bt_icon arr_w"  style="display:inline-block;"><span>목록보기</span></a>
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

 