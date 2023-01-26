package com.jsp.dao;

import java.sql.SQLException;
import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.jsp.command.SearchCriteria;
import com.jsp.dto.NoticeVO;

public interface NoticeDAO {

	List<NoticeVO> selectNoticeCriteria(SqlSession session, SearchCriteria cri) throws SQLException;

	int selectNoticeCriteriaTotalCount(SqlSession session, SearchCriteria cri) throws SQLException;

	NoticeVO selectNoticeBynoticeNum(SqlSession session, int noticeNum) throws SQLException;

	void insertNotice(SqlSession session, NoticeVO notice) throws SQLException;

	void updateNotice(SqlSession session, NoticeVO notice) throws SQLException;

	void deleteNotice(SqlSession session, int noticeNum) throws SQLException;

	// Notice_seq.nextval 가져오기
	int selectSeqNextValue(SqlSession session) throws SQLException;

	// noticeSearch 증가
	void increasenoticeSearch(SqlSession session, int noticeNum) throws SQLException;

}
