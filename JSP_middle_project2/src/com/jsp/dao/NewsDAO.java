package com.jsp.dao;

import java.sql.SQLException;
import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.jsp.command.SearchCriteria;
import com.jsp.dto.NewsVO;

public interface NewsDAO {

	List<NewsVO> selectNewsCriteria(SqlSession session,SearchCriteria cri) throws SQLException;
	int selectNewsCriteriaTotalCount(SqlSession session,SearchCriteria cri) throws SQLException;
	
	NewsVO selectNewsByNewsNum(SqlSession session,int newsNum)throws SQLException;
	void insertNews(SqlSession session,NewsVO news)throws SQLException;
	
	void updateNews(SqlSession session,NewsVO news)throws SQLException;
	void updateNewsByWriterId(SqlSession session,NewsVO news)throws SQLException;
	void deleteNews(SqlSession session,int news)throws SQLException;
	
	
	//News_seq.nextval 가져오기
	int selectSeqNextValue(SqlSession session) throws SQLException;
	//viewcnt  증가
	void increaseNewsSearch(SqlSession session,int newsNum)throws SQLException;
	
	
}



