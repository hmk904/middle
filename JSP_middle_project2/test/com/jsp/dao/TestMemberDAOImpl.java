package com.jsp.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import com.jsp.command.SearchCriteria;
import com.jsp.datasource.MySqlSessionFactory;
import com.jsp.dto.MemberVO;


public class TestMemberDAOImpl {

	private MySqlSessionFactory sqlSessionFactory = new MySqlSessionFactory();
	private MemberDAO memberDAO = new MemberDAOImpl();
	private SqlSession session;
	
	@Before
	public void init() {
		session = sqlSessionFactory.openSession(false);
		session.commit();
	}
	
	@After
	public void destroy() {
		if(session!=null) {
			session.rollback();
			session.close();
		}
		
	}
	
	@Test
	public void testMemberList()throws Exception{
		
		SearchCriteria cri = new SearchCriteria(1,100,"p","5");
		
		List<MemberVO> memberList 
			= memberDAO.selectSearchMemberList(session, cri);
		
		Assert.assertEquals(2, memberList.size());
		
	}
	
	@Test
	public void testSelectMemberById()throws Exception {
		
		String memberId = "bibi";		
		
		MemberVO member = memberDAO.selectMemberById(session, memberId);
		
		Assert.assertEquals(memberId, member.getMemberId());
	}
	
	@Test
	public void testInsertMember()throws Exception{
		MemberVO insertMember = new MemberVO();
		insertMember.setMemberId("hanmin");
		insertMember.setMemberPwd("hanmin");
		insertMember.setMemberName("asdfw");
		insertMember.setMemberPhone("010-1234-4256");
		insertMember.setMemberEmail("hanmin@naver.com");
		insertMember.setMemberAuthority("manager");
		insertMember.setMemberAddress("vvvvv");
		
		memberDAO.insertMember(session, insertMember);
		
		MemberVO getMember 
				= memberDAO.selectMemberById(session, insertMember.getMemberId());
		
		Assert.assertEquals(insertMember.getMemberId(), getMember.getMemberId());
		
	}
	
	@Test
	public void testUpdateMember()throws Exception{
		
		String targetID = "bibi";
		
		MemberVO targetMember = memberDAO.selectMemberById(session, targetID);
		targetMember.setMemberName("kakaka");
		targetMember.setMemberPwd("kakaka");
		
		memberDAO.updateMember(session, targetMember);
		MemberVO getMember = memberDAO.selectMemberById(session, targetID);
		
		Assert.assertEquals(targetMember.getMemberName(), getMember.getMemberName());		
		Assert.assertEquals(targetMember.getMemberPwd(), getMember.getMemberPwd());
	}
	
	@Test
	public void testDeleteMember()throws Exception {
		String target = "bibi";
		
		MemberVO deleteMember = memberDAO.selectMemberById(session, target);		
		Assert.assertNotNull(deleteMember);
		
		memberDAO.deleteMember(session, target);
		
		MemberVO getMember =memberDAO.selectMemberById(session, target);
		Assert.assertNull(getMember);
	}
	
	
}
