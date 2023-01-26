package com.jsp.action.librarybook;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.jsp.action.Action;

public class LibraryBookRegistFormAction implements Action{
	
	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String url="/librarybook/regist";
		
		
		return url;
	}
	
	
}
