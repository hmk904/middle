package com.jsp.service;

import java.sql.SQLException;
import java.util.Map;

import com.jsp.command.SearchCriteria;
import com.jsp.dto.QuestionVO;

public interface QuestionService {

			// 리스트조회
			Map<String, Object> getQuestionList(SearchCriteria cri) throws SQLException;

			// 글작성
			void regist(QuestionVO question) throws SQLException;

			// 글읽기(조회수증가)
			QuestionVO read(int questionNum) throws SQLException;

			// 글조회
			QuestionVO getQuestionNum(int questionNum) throws SQLException;

			// 글수정
			void modify(QuestionVO questionNum) throws SQLException;

			// 글삭제
			void remove(int questionNum) throws SQLException;
	
}
