package com.jsp.action.newbook;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.jsp.action.Action;
import com.jsp.dto.NewBookVO;
import com.jsp.service.NewBookService;

public class NewBookModifyAction implements Action {

	private NewBookService newBookService;

	public void setNewBookService(NewBookService newBookService) {
		this.newBookService = newBookService;
	}

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String url = "/newbook/modify_success";

		NewBookVO newBook = new NewBookVO();
		newBook.setNewCompany(request.getParameter("newCompany"));
		newBook.setNewDataType(request.getParameter("newDataType"));
		newBook.setNewFormal(request.getParameter("newFormal"));
		newBook.setNewGeneral(request.getParameter("newGeneral"));
		newBook.setNewIssue(request.getParameter("newIssue"));
		newBook.setNewNote(request.getParameter("newNote"));
		newBook.setNewTitle(request.getParameter("newTitle"));
		newBook.setNewWriter(request.getParameter("newWriter"));
		newBook.setNewManagerId(request.getParameter("newMangerId"));
		
		int newBookNum = Integer.parseInt(request.getParameter("newBookNum"));
		newBook.setNewBookNum(newBookNum);
		request.setAttribute("newBookNum", newBookNum);
		

		try {
			newBookService.modify(newBook);
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
		return url;
	}
}