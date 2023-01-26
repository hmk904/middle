package com.jsp.action.member;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.jsp.action.Action;
import com.jsp.dto.MemberVO;
import com.jsp.service.MemberService;

public class MemberRegistAction implements Action{
	
	private MemberService service;// = new MemberServiceImpl();
	public void setMemberService(MemberService service) { 
		this.service = service;
	}
	
	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String url="/member/regist_success";		
		//request.setCharacterEncoding("UTF-8");		
		
		
		MemberVO member = new MemberVO();
		member.setMemberId(request.getParameter("memberId"));
		member.setMemberPwd(request.getParameter("memberPwd"));
		member.setMemberName(request.getParameter("memberName"));
		member.setMemberEmail(request.getParameter("memberEmail"));
		member.setMemberAuthority(request.getParameter("memberAuthority"));
		member.setMemberAddress(request.getParameter("memberAddress"));
		member.setMemberPhone(request.getParameter("memberPhone"));
		
		try {
			service.regist(member);			
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
		
		
		return url;
	}

}
