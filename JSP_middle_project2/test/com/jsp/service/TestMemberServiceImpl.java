package com.jsp.service;

import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.junit.Test;

import com.jsp.command.SearchCriteria;
import com.jsp.context.ApplicationContext;
import com.jsp.context.ApplicationContextLoader;
import com.jsp.dto.MemberVO;

public class TestMemberServiceImpl {

	private MemberService memberService;// = new MemberServiceImpl();
	{
		String beanConfigXml = "build/classes/com/jsp/context/application-context.xml";
		try {
			ApplicationContextLoader.build(beanConfigXml);
			Map<String, Object> container = ApplicationContext.getApplicationContext();
			memberService = (MemberService) container.get("memberService");
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Test
	public void testGetMember() throws Exception {
		String id = "bibi";

		MemberVO member = memberService.getMember(id);

		Assert.assertEquals(id, member.getMemberId());
	}

	@Test
	public void testMemberList() throws Exception {
		SearchCriteria cri = new SearchCriteria();
		Map<String, Object> dataMap = memberService.getMemberListForPage(cri);

		List<MemberVO> memberList = (List<MemberVO>) dataMap.get("memberList");

		Assert.assertEquals(cri.getPerPageNum(), memberList.size());
	}

//	// 저장
//	@Test
//	public void testInsertMember()throws Exception{
//		MemberVO insertMember = new MemberVO();
//		insertMember.setMemberId("hanmin");
//		insertMember.setMemberPwd("hanmin");
//		insertMember.setMemberName("hanmin");
//		insertMember.setMemberPhone("010-7777-4256");
//		insertMember.setMemberEmail("hanmin@naver.com");
//		insertMember.setMemberAuthority("manager");
//		insertMember.setMemberAddress("hanmin");
//		
//		memberService.regist(insertMember);
//		
//		MemberVO getMember 
//				= memberService.getMember(insertMember.getMemberId());
//		
//		Assert.assertEquals(insertMember.getMemberId(), getMember.getMemberId());
//		
//	}
//	
//	@Test
//	public void testUpdateMember()throws Exception{
//		
//		String targetID = "hanmin";
//		
//		MemberVO targetMember = memberService.getMember(targetID);
//		targetMember.setMemberName("qwe");
//		targetMember.setMemberPwd("qwe");
//		
//		memberService.modify(targetMember);
//		MemberVO getMember = memberService.getMember(targetID);
//		
//		Assert.assertEquals(targetMember.getMemberName(), getMember.getMemberName());		
//		Assert.assertEquals(targetMember.getMemberPwd(), getMember.getMemberPwd());
//	}
	
	@Test
	public void testDeleteMember()throws Exception {
		String target = "hanmin";
		
		MemberVO deleteMember = memberService.getMember(target);		
		Assert.assertNotNull(deleteMember);
		
		memberService.remove(target);
		
		MemberVO getMember =memberService.getMember(target);
		Assert.assertNull(getMember);
	}
}