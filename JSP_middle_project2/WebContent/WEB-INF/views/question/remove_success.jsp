<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>


<script>
	alert("정상적으로 삭제되었습니다.");
	window.close();
		
	location.href="<%=request.getContextPath()%>/question/list.do";
</script>