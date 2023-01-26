package com.jsp.action.question;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.jsp.action.Action;
import com.jsp.dto.QuestionVO;
import com.jsp.service.QuestionService;

public class QuestionModifyFormAction implements Action {

	private QuestionService questionService;
	public void setQuestionService(QuestionService questionService) {
		this.questionService = questionService;
	}


	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String url = "/question/modify";

		int questionNum = Integer.parseInt(request.getParameter("questionNum"));

		try {
			QuestionVO question = questionService.getQuestionNum(questionNum);

			
			request.setAttribute("question", question);

			
		} catch (Exception e) {
			// error 작성
			e.printStackTrace();
			throw e;
		}
		return url;
	}

}
