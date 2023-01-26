<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

    
<script>
	alert("글쓰기에 성공했습니다.\n 소식리스트 페이지로 이동합니다.");
	
	location.href="list.do?newsnum=${news.newsnum}"; 
</script>