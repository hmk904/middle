package com.jsp.service;

import java.util.Map;

import com.jsp.command.SearchCriteria;
import com.jsp.dto.NewBookVO;

public interface NewBookService {

	// 리스트조회
	Map<String, Object> getList(SearchCriteria cri) throws Exception;

	// 글작성
	void regist(NewBookVO newBook) throws Exception;

	// 글읽기(조회수증가)
//	CountRankVO read(int rankBookNum) throws SQLException;

	// 글조회
	NewBookVO getCountRank(int newBookNum) throws Exception;

	// 글수정
	void modify(NewBookVO newBook) throws Exception;

	// 글삭제
	void remove(int newBookNum) throws Exception;

}
