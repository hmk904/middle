package com.jsp.action.librarybook;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.jsp.action.Action;
import com.jsp.service.LibraryBookService;
import com.jsp.service.NewBookService;

public class LibraryBookRemoveAction implements Action{

	private LibraryBookService libraryBookService;
	public void setLibraryBookService(LibraryBookService libraryBookService) {
		this.libraryBookService = libraryBookService;
	}
	
	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String url = "/librarybook/remove";
		
		int libraryBookNum = Integer.parseInt(request.getParameter("libraryBookNum"));
		
		try {
			//DB 내용 삭제
			libraryBookService.remove(libraryBookNum);		
			return url;
		}catch (Exception e) {			
			e.printStackTrace();			
			throw e;
		}
	}

}
