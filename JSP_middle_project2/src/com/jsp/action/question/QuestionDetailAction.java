package com.jsp.action.question;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.jsp.action.Action;
import com.jsp.dto.QuestionVO;
import com.jsp.service.QuestionService;

public class QuestionDetailAction implements Action{

	private QuestionService questionService;
	public void setQuestionService(QuestionService questionService) {
		this.questionService = questionService;
	}

	
	
	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String url="/question/detail";
		
		int questionNum = Integer.parseInt(request.getParameter("questionNum"));
		String from = request.getParameter("from");
		
		try {
			QuestionVO question = null;
			if(from!=null && from.equals("list")) {
				question = questionService.read(questionNum);
				
				url="redirect:/question/detail.do?questionNum="+questionNum;
			}else {				
				question = questionService.getQuestionNum(questionNum);
			}			
			

			
			request.setAttribute("question", question);
		
			return url;
			
		} catch (Exception e) {			
			e.printStackTrace();			
			url=null;
			throw e;
		}	
	}

}






