package com.jsp.action.librarybook;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.jsp.action.Action;
import com.jsp.dto.LibraryBookVO;
import com.jsp.dto.NewBookVO;
import com.jsp.service.LibraryBookService;
import com.jsp.service.NewBookService;

public class LibraryBookRegistAction implements Action {

	private LibraryBookService libraryBookService;
	public void setLibraryBookService(LibraryBookService libraryBookService) {
		this.libraryBookService = libraryBookService;
	}

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String url = "/librarybook/regist_success";

		LibraryBookVO libraryBook = new LibraryBookVO();
		libraryBook.setLibraryBookCompany(request.getParameter("libraryBookCompany"));
		libraryBook.setLibraryBookDataType(request.getParameter("libraryBookDataType"));
		libraryBook.setLibraryBookFormal(request.getParameter("libraryBookFormal"));
		libraryBook.setLibraryBookGeneral(request.getParameter("libraryBookGeneral"));
		libraryBook.setLibraryBookIssue(request.getParameter("libraryBookIssue"));
		libraryBook.setLibraryBookNote(request.getParameter("libraryBookNote"));
		libraryBook.setLibraryBookTitle(request.getParameter("libraryBookTitle"));
		libraryBook.setLibraryBookWriter(request.getParameter("libraryBookWriter"));
		libraryBook.setLibraryBookManagerId(request.getParameter("libraryBookMangerId"));
		
		int libraryBookNum = Integer.parseInt(request.getParameter("libraryBookNum"));
		libraryBook.setLibraryBookNum(libraryBookNum);
		
		
		try {
			libraryBookService.regist(libraryBook);		
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
		return url;
	}

}
