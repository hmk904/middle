package com.jsp.service;

import java.sql.SQLException;
import java.util.Map;

import com.jsp.command.SearchCriteria;
import com.jsp.dto.AttachNewsVO;
import com.jsp.dto.NewsVO;

public interface NewsService {

	// 리스트조회
	Map<String, Object> getNewsList(SearchCriteria cri) throws SQLException;

	// 글작성
	void regist(NewsVO news) throws SQLException;

	// 글읽기(조회수증가)
	NewsVO read(int newsNum) throws SQLException;

	// 글조회
	NewsVO getNews(int newsnum) throws SQLException;

	// 글수정
	void modify(NewsVO newsnum) throws SQLException;

	// 글삭제
	void remove(int newsnum) throws SQLException;
	
	
	//첨부파일 조회
	AttachNewsVO getAttachNewsByAttachNewsano(int AttachNewsano)throws SQLException;

	//파일정보 삭제
	void removeAttachNewsByAttachNewsano(int AttachNewsano)throws SQLException;

}


