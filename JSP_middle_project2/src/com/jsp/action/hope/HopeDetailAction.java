package com.jsp.action.hope;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.jsp.action.Action;
import com.jsp.dto.HopeVO;
import com.jsp.service.HopeService;


public class HopeDetailAction implements Action {

	private HopeService hopeService;
	public void setHopeService(HopeService hopeService) {
		this.hopeService = hopeService;
	}

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String url = "/hope/detail";

		
		int hopeNum = Integer.parseInt(request.getParameter("hopeNum"));
		String from =request.getParameter("from");
		
		try {
			HopeVO hope =null;
			if(from!=null&& from.equals("list")) {
				hope = hopeService.read(hopeNum);
				url="redirect:/hope/detail.do?hopeNum="+hopeNum;
				
			}else {
				hope= hopeService.getHope(hopeNum);
				
			}
		
		request.setAttribute("hope", hope);
		
		return url;
	} catch(Exception e) {
		e.printStackTrace();
		url=null;
		throw e;
	}

}
}
