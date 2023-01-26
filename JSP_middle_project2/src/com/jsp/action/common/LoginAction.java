package com.jsp.action.common;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.jsp.action.Action;
import com.jsp.dto.MemberVO;
import com.jsp.service.MemberService;

public class LoginAction implements Action {

	private MemberService service;
	public void setMemberService(MemberService service) { 
		this.service = service;
	}
	

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String url="redirect:/index.do";
		
		String memberId = request.getParameter("memberId");
		System.out.println(memberId);
		String memberPwd = request.getParameter("memberPwd");
		System.out.println(memberPwd);
		String retUrl = request.getParameter("retUrl");
		System.out.println(retUrl);

		String errorMsg="";
		HttpSession session = request.getSession();
		
		try {
			MemberVO member = service.getMember(memberId);
			if(member!=null) {
				if(memberPwd.equals(member.getMemberPwd())) {
					session.setAttribute("loginUser", member);
					//session.setMaxInactiveInterval(1*6);
					url = retUrl !=null ? "redirect:"+retUrl : url;
					
				}else {// 패스워드 불일치
					errorMsg = "패스워드가 일치하지 않습니다.";						
				}
			}else { //아이디 불일치
				errorMsg = "아이디가 존재하지 않습니다.";
			}
			
			if(!errorMsg.isEmpty()) {
				url="/common/loginFail";
				
				request.setAttribute("retUrl",retUrl);
				request.setAttribute("errorMsg", errorMsg);
//				request.getRequestDispatcher(url).forward(request, response);
			}
			return url;
			
		}catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
		
	}

}
