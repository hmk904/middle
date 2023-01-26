<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>


<script>
	alert("공지사항 등록이 완료했습니다.\n공지사항페이지로 이동합니다.");
	alert(${AttachNotice.attachnoticeFileName});
	window.onload=function(){

		location.href="<%=request.getContextPath()%>/notice/list.do";
	}
</script>