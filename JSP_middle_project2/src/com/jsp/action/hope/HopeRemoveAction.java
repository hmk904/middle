package com.jsp.action.hope;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.jsp.action.Action;
import com.jsp.service.HopeService;

public class HopeRemoveAction implements Action{

	
		private HopeService hopeService;
		public void setHopeService(HopeService hopeService) {
			this.hopeService = hopeService;
		}
		
		@Override
		public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
			String url = "/hope/remove_success";
			
			int hopeNum = Integer.parseInt(request.getParameter("hopeNum"));
			
			try {
				//DB 내용 삭제
				hopeService.remove(hopeNum);		
				return url;
			}catch (Exception e) {			
				e.printStackTrace();			
				throw e;
			}
			
		}
		

	}
