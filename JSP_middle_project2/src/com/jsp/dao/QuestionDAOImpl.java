package com.jsp.dao;

import java.sql.SQLException;
import java.util.List;

import org.apache.ibatis.session.RowBounds;
import org.apache.ibatis.session.SqlSession;

import com.jsp.command.SearchCriteria;
import com.jsp.dto.QuestionVO;

public class QuestionDAOImpl implements QuestionDAO {

	@Override
	public List<QuestionVO> selectQuestionCriteria(SqlSession session, SearchCriteria cri) throws SQLException {
		int offset=cri.getStartRowNum();
		int limit=cri.getPerPageNum();
		RowBounds rowBounds=new RowBounds(offset,limit);
		
		List<QuestionVO> questionList=
		   session.selectList("Question-Mapper.selectSearchQuestionList",cri,rowBounds);	
			
		return questionList;
	}

	@Override
	public int selectQuestionCriteriaTotalCount(SqlSession session, SearchCriteria cri) throws SQLException {
		int count = session.selectOne("Question-Mapper.selectSearchQuestionListCount",cri);
		return count;
	}


	@Override
	public void insertQuestion(SqlSession session, QuestionVO question) throws SQLException {
		session.update("Question-Mapper.insertQuestion", question);	
		
	}

	@Override
	public void updateQuestion(SqlSession session, QuestionVO question) throws SQLException {
		session.update("Question-Mapper.updateQuestion", question);
		
	}


	@Override
	public void deleteQuestion(SqlSession session, int questionNum) throws SQLException {
		session.update("Question-Mapper.deleteQuestion", questionNum);
		
	}

	@Override
	public int selectSeqNextValue(SqlSession session) throws SQLException {
		int questionNum = session.selectOne("Question-Mapper.selectQuestionSeqNext");
		return questionNum;
	}

	@Override
	public void increasequestionSearch(SqlSession session, int questionNum) throws SQLException {
		session.update("Question-Mapper.increaseQuestionSearch", questionNum);
		
	}

	@Override
	public QuestionVO selectQuestionByquestionNum(SqlSession session, int questionNum) throws SQLException {
		QuestionVO question =session.selectOne("Question-Mapper.selectQuestionByquestionNum",questionNum);
		return question;
	}

}
