package com.jsp.action.hope;



import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.jsp.action.Action;

import com.jsp.dto.HopeVO;
import com.jsp.service.HopeService;

public class HopeRegistAction implements Action {

	private HopeService hopeService;
	public void setHopeService(HopeService hopeService) {
		this.hopeService = hopeService;
	}
	

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String url = "/hope/regist_success";
		
		//DB
		HopeVO hope = new HopeVO();
		
		hope.setHopeTitle(request.getParameter("hopeTitle"));
		hope.setHopeContent(request.getParameter("hopeContent"));
		hope.setHopeWriter(request.getParameter("hopeWriter"));
		
		
				
//		  int hopeNum = Integer.parseInt(request.getParameter("hopeNum"));
//		  hope.setHopeNum(hopeNum);
		 
		
		try {
			hopeService.regist(hope);		
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
		return url;
		
		
	}

}








