package com.jsp.service;

import java.util.Map;

import com.jsp.command.SearchCriteria;
import com.jsp.dto.LibraryBookVO;

public interface LibraryBookService {

	// 리스트조회
	Map<String, Object> getList(SearchCriteria cri) throws Exception;

	// 글작성
	void regist(LibraryBookVO libraryBook) throws Exception;

	// 글읽기(조회수증가)
//	CountRankVO read(int rankBookNum) throws Exception;

	// 글조회
	LibraryBookVO getNewBook(int libraryBookNum) throws Exception;

	// 글수정
	void modify(LibraryBookVO libraryBook) throws Exception;

	// 글삭제
	void remove(int libraryBookNum) throws Exception;

}
