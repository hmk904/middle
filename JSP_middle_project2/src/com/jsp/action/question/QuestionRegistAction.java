package com.jsp.action.question;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.jsp.action.Action;
import com.jsp.dto.QuestionVO;
import com.jsp.service.QuestionService;

public class QuestionRegistAction implements Action {

	private QuestionService questionService;
	public void setQuestionService(QuestionService questionService) {
		this.questionService = questionService;
	}
	
	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String url = "/question/regist_success";
		
//		String title = request.getParameter("title");
//		String writer = request.getParameter("writer");
//		String content = request.getParameter("content");

		//DB
		QuestionVO question = new QuestionVO();
		question.setQuestionContent(request.getParameter("questionContent"));;
		question.setQuestionWriter(request.getParameter("questionWriter"));
		question.setQuestionTitle(request.getParameter("questionTitle"));
		questionService.regist(question);
		
		
		return url;
	}

}







