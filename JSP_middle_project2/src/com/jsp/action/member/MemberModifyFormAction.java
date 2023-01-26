package com.jsp.action.member;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.jsp.action.Action;
import com.jsp.dto.MemberVO;
import com.jsp.service.MemberService;

public class MemberModifyFormAction implements Action{

	private MemberService service;
	public void setMemberService(MemberService service) {
		this.service = service;
	}
	
	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String url = "/member/modify";

		String memberId = request.getParameter("memberId");
		try {
			MemberVO member = service.getMember(memberId);
			request.setAttribute("member", member);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return url;
	}

}
