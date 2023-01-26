package com.jsp.action.hope;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.jsp.action.Action;
import com.jsp.action.utils.MultipartHttpServletRequestParser;
import com.jsp.dto.HopeVO;
import com.jsp.service.HopeService;


public class HopeModifyAction implements Action{
	
	private HopeService hopeService;

	public void setHopeService(HopeService hopeService) {
		this.hopeService = hopeService;
	}



	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String url = "/hope/modify_success";


		HopeVO hope = new HopeVO();
		
		hope.setHopeTitle(request.getParameter("hopeTitle"));
		hope.setHopeWriter(request.getParameter("hopeWriter"));
		hope.setHopeContent(request.getParameter("hopeContent"));
		int hopeNum=Integer.parseInt(request.getParameter("hopeNum"));
		hope.setHopeNum(hopeNum);
		request.setAttribute("hope", hope);
		try {

			// DB 수정
			hopeService.modify(hope);

			


		} catch (Exception e) {
			// Exception 처리
			e.printStackTrace();
			throw e;
		}

		return url;
	}

}
