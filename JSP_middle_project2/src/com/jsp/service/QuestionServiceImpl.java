package com.jsp.service;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import com.jsp.command.PageMaker;
import com.jsp.command.SearchCriteria;
import com.jsp.dao.QuestionDAO;
import com.jsp.dto.QuestionVO;

public class QuestionServiceImpl implements QuestionService {

	private SqlSessionFactory sqlSessionFactory;
	private QuestionDAO questionDAO;

	public void setSqlSessionFactory(SqlSessionFactory sqlSessionFactory) {
		this.sqlSessionFactory = sqlSessionFactory;
	}

	public void setQuestionDAO(QuestionDAO questionDAO) {
		this.questionDAO = questionDAO;
	}

	@Override
	public Map<String, Object> getQuestionList(SearchCriteria cri) throws SQLException {
		SqlSession session = sqlSessionFactory.openSession();
		
		Map<String, Object> dataMap = new HashMap<String, Object>();

		try {
			List<QuestionVO> questionList = questionDAO.selectQuestionCriteria(session, cri);
			dataMap.put("questionList", questionList);

			PageMaker pageMaker = new PageMaker();
			pageMaker.setCri(cri);
			pageMaker.setTotalCount(questionDAO.selectQuestionCriteriaTotalCount(session, cri));
			dataMap.put("quesetionList", questionList);
			dataMap.put("pageMaker", pageMaker);

			session.commit();
		} finally {
			session.close();
		}
		return dataMap;
	}

	@Override
	public void regist(QuestionVO question) throws SQLException {
		SqlSession session = sqlSessionFactory.openSession();
		try {
			
			int questionNum = questionDAO.selectSeqNextValue(session);
			question.setQuestionNum(questionNum);
			questionDAO.insertQuestion(session, question);

		} finally {
			session.close();
		}

	}

	@Override
	public QuestionVO read(int questionNum) throws SQLException {
		SqlSession session = sqlSessionFactory.openSession();
		try {

			QuestionVO question = questionDAO.selectQuestionByquestionNum(session, questionNum);
			questionDAO.increasequestionSearch(session, questionNum);

			return question;

		} finally {
			session.close();
		}
	}

	@Override
	public QuestionVO getQuestionNum(int questionNum) throws SQLException {
		SqlSession session = sqlSessionFactory.openSession();
		try {

			QuestionVO question = questionDAO.selectQuestionByquestionNum(session, questionNum);

			return question;
		} finally {
			session.close();
		}
	}

	@Override
	public void modify(QuestionVO questionNum) throws SQLException {
		SqlSession session = sqlSessionFactory.openSession();
		try {

			questionDAO.updateQuestion(session, questionNum);

		} finally {
			session.close();
		}

	}

	@Override
	public void remove(int questionNum) throws SQLException {
		SqlSession session = sqlSessionFactory.openSession();
		try {

			questionDAO.deleteQuestion(session, questionNum);

		} finally {
			session.close();
		}

	}

}
