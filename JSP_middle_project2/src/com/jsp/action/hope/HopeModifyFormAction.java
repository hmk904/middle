package com.jsp.action.hope;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.jsp.action.Action;
import com.jsp.dto.HopeVO;
import com.jsp.service.HopeService;


public class HopeModifyFormAction implements Action{
	
	public HopeService hopeService;
	
	public void setHopeService(HopeService hopeService) {
		this.hopeService = hopeService;
	}

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String url = "/hope/modify";

		int hopenum = Integer.parseInt(request.getParameter("hopeNum"));

		try {
			HopeVO hope = hopeService.getHope(hopenum);

			
			
			request.setAttribute("hope", hope);

			
		} catch (Exception e) {
			// error 작성
			e.printStackTrace();
			throw e;
		}
		return url;
	}

}
