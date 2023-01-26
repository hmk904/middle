package com.jsp.action.question;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.jsp.action.Action;
import com.jsp.service.QuestionService;

public class QuestionRemoveAction implements Action{
	private QuestionService questionService;
	public void setQuestionService(QuestionService questionService) {
		this.questionService = questionService;
	}
	
	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String url = "/question/remove_success";
		
		int Num = Integer.parseInt(request.getParameter("questionNum"));
		
		try {
			//DB 내용 삭제
			questionService.remove(Num);		
			return url;
		}catch (Exception e) {			
			e.printStackTrace();			
			throw e;
		}
	}

}
