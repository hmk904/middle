package com.jsp.action.question;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.jsp.action.Action;
import com.jsp.dto.QuestionVO;
import com.jsp.service.QuestionService;

public class QuestionModifyAction implements Action {

	private QuestionService questionService;
	public void setQuestionService(QuestionService questionService) {
		this.questionService = questionService;
	}

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String url = "/question/modify_success";

		QuestionVO question = new QuestionVO();
		question.setQuestionTitle(request.getParameter("questionTitle"));
		question.setQuestionWriter(request.getParameter("questionWriter"));
		question.setQuestionContent(request.getParameter("questionContent"));
		
		int questionNum = Integer.parseInt(request.getParameter("questionNum"));
		question.setQuestionNum(questionNum);
		request.setAttribute("question", question);

		try {

			// DB 수정
			questionService.modify(question);

		


		} catch (Exception e) {
			// Exception 처리
			e.printStackTrace();
			throw e;
		}

		return url;
	}
}
