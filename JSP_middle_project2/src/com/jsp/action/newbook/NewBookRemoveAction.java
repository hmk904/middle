package com.jsp.action.newbook;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.jsp.action.Action;
import com.jsp.service.NewBookService;

public class NewBookRemoveAction implements Action{
	private NewBookService newBookService;
	public void setPdsService(NewBookService newBookService) {
		this.newBookService = newBookService;
	}
	
	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String url = "/newbook/remove";
		
		int newBookNum = Integer.parseInt(request.getParameter("newBookNum"));
		
		try {
			//DB 내용 삭제
			newBookService.remove(newBookNum);		
			return url;
		}catch (Exception e) {			
			e.printStackTrace();			
			throw e;
		}
	}

}
