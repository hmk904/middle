package com.jsp.dao;

import java.sql.SQLException;
import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.jsp.command.SearchCriteria;
import com.jsp.dto.LibraryBookVO;

public interface LibraryBookDAO {

	// 검색결과일반 리스트
	List<LibraryBookVO> selectLibraryBookCriteria(SqlSession session, SearchCriteria cri) throws Exception;

	// 검색 결과의 전체 리스트 개수
	int selectLibraryBookCriteriaTotalCount(SqlSession session, SearchCriteria cri) throws SQLException;

	// 회원정보 조회
	LibraryBookVO selectLibraryBookByISBN(SqlSession session, int libraryBookNum) throws SQLException;

	// 회원 추가
	public void insertLibraryBook(SqlSession session, LibraryBookVO libraryBook) throws SQLException;

	// 회원 수정
	public void updateLibraryBook(SqlSession session, LibraryBookVO libraryBook) throws SQLException;

	// 회원정보 삭제
	public void deleteLibraryBook(SqlSession session, int libraryBookNum) throws SQLException;

}
