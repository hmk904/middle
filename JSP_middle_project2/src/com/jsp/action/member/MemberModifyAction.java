package com.jsp.action.member;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.jsp.action.Action;
import com.jsp.dto.MemberVO;
import com.jsp.service.MemberService;

public class MemberModifyAction implements Action{

	private MemberService service;
	public void setMemberService(MemberService service) {
		this.service = service;
	}
	
	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String url="/member/modify_success";
		
		//request.setCharacterEncoding("utf-8");
				
		MemberVO member = new MemberVO();
		member.setMemberId(request.getParameter("memberId"));
		member.setMemberPwd(request.getParameter("memberPwd"));
		member.setMemberName(request.getParameter("memberName"));
		member.setMemberPhone(request.getParameter("memberPhone"));
		member.setMemberEmail(request.getParameter("memberEmail"));
		member.setMemberAuthority(request.getParameter("memberAuthority"));
		member.setMemberAddress(request.getParameter("memberAddress"));
	
		try {
			service.modify(member);
			request.setAttribute("member", service.getMember(member.getMemberId()));
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
		
		return url;
	}

}
