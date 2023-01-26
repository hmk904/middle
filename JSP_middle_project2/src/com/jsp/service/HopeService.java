package com.jsp.service;

import java.sql.SQLException;
import java.util.Map;

import com.jsp.command.SearchCriteria;
import com.jsp.dto.HopeVO;

public interface HopeService {
	// 리스트조회
	Map<String, Object> getHopeList(SearchCriteria cri) throws SQLException;

	// 글작성
	void regist(HopeVO hope) throws SQLException;

	// 글읽기(조회수증가)
	HopeVO read(int hopeNum) throws SQLException;

	// 글조회
	HopeVO getHope(int hopenum) throws SQLException;

	// 글수정
	void modify(HopeVO hope) throws SQLException;

	// 글삭제
	void remove(int hopeNum) throws SQLException;


	
}
