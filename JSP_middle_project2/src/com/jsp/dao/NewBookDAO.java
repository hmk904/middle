package com.jsp.dao;

import java.sql.SQLException;
import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.jsp.command.SearchCriteria;
import com.jsp.dto.NewBookVO;

public interface NewBookDAO {

	// 검색결과일반 리스트  selectPdsCriteria
	List<NewBookVO> selectNewBookCriteria(SqlSession session, SearchCriteria cri) throws Exception;

	// 검색 결과의 전체 리스트 개수 selectPdsCriteriaTotalCount
	int selectNewBookCriteriaTotalCount(SqlSession session, SearchCriteria cri) throws SQLException;

	// 회원정보 조회 
	NewBookVO selectNewBookByISBN(SqlSession session, int newBookNum) throws SQLException;

	// 회원 추가
	public void insertNewBook(SqlSession session, NewBookVO newBook) throws SQLException;

	// 회원 수정
	public void updateNewBook(SqlSession session, NewBookVO newBook) throws SQLException;

	// 회원정보 삭제
	void deleteNewBook(SqlSession session, int newBookNum) throws SQLException;

}
