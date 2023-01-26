package com.jsp.dao;

import java.sql.SQLException;
import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.jsp.command.SearchCriteria;
import com.jsp.dto.QuestionVO;

public interface QuestionDAO {

	List<QuestionVO> selectQuestionCriteria(SqlSession session,SearchCriteria cri) throws SQLException;
	int selectQuestionCriteriaTotalCount(SqlSession session,SearchCriteria cri) throws SQLException;
	
	QuestionVO selectQuestionByquestionNum(SqlSession session,int questionNum)throws SQLException;
	void insertQuestion(SqlSession session,QuestionVO question)throws SQLException;
	void updateQuestion(SqlSession session,QuestionVO question)throws SQLException;
	void deleteQuestion(SqlSession session,int questionNum)throws SQLException;
	
	
	//Question_seq.nextval 가져오기
	int selectSeqNextValue(SqlSession session) throws SQLException;
	//questionSearch  증가
	void increasequestionSearch(SqlSession session,int questionNum)throws SQLException;
	
}
