package com.jsp.action.information;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.jsp.action.Action;
import com.jsp.service.InformationService;

public class InformationRemoveAction implements Action{

	private InformationService	informationService;
	public void setInformationService(InformationService informationService) {
		this.informationService = informationService;
	}


	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String url = "/information/remove_success";
		
		int infoNum = Integer.parseInt(request.getParameter("infonum"));
		
		try {
			//DB 내용 삭제
			informationService.remove(infoNum);		
			return url;
		}catch (Exception e) {			
			e.printStackTrace();			
			throw e;
		}
	}

	
}
