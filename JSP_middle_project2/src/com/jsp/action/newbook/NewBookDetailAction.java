package com.jsp.action.newbook;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.jsp.action.Action;
import com.jsp.dto.NewBookVO;
import com.jsp.service.NewBookService;

public class NewBookDetailAction implements Action {

	private NewBookService newBookService;

	public void setNewBookService(NewBookService newBookService) {
		this.newBookService = newBookService;
	}

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String url = "/newbook/detail";

		int newBookNum = Integer.parseInt(request.getParameter("newBookNum"));

		try {
			NewBookVO newBook = newBookService.getCountRank(newBookNum);

			request.setAttribute("newBook", newBook);

		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
		return url;
	}

}
