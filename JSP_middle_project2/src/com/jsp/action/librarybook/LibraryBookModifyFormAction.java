package com.jsp.action.librarybook;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.jsp.action.Action;
import com.jsp.dto.LibraryBookVO;
import com.jsp.service.LibraryBookService;

public class LibraryBookModifyFormAction implements Action{
	
	private LibraryBookService libraryBookService;
	public void setLibraryBookService(LibraryBookService libraryBookService) {
		this.libraryBookService = libraryBookService;
	}

	
	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String url = "/librarybook/modify";
		
		int libraryBookNum = Integer.parseInt(request.getParameter("libraryBookNum"));
		try {
			LibraryBookVO libraryBook = libraryBookService.getNewBook(libraryBookNum);
			request.setAttribute("libraryBook", libraryBook);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return url;
	}
	
}
