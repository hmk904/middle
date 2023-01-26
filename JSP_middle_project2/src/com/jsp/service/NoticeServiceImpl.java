package com.jsp.service;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import com.jsp.command.SearchCriteria;
import com.jsp.dao.AttachNoticeDAO;
import com.jsp.dao.NoticeDAO;
import com.jsp.dto.AttachNoticeVO;
import com.jsp.dto.NoticeVO;

public class NoticeServiceImpl implements NoticeService{
	

	private SqlSessionFactory sqlSessionFactory;
	private NoticeDAO noticeDAO;
	private AttachNoticeDAO attachnoticeDAO;
	
	public void setSqlSessionFactory(SqlSessionFactory sqlSessionFactory) {
		this.sqlSessionFactory = sqlSessionFactory;
	}

	public void setNoticeDAO(NoticeDAO noticeDAO) {
		this.noticeDAO = noticeDAO;
	}

	public void setAttachnoticeDAO(AttachNoticeDAO attachnoticeDAO) {
		this.attachnoticeDAO = attachnoticeDAO;
	}

	@Override
	public Map<String, Object> getNoticeList(SearchCriteria cri) throws SQLException {
		SqlSession session = sqlSessionFactory.openSession();
		try {
			List<NoticeVO> noticeList = noticeDAO.selectNoticeCriteria(session, cri);
			/*
			 * if (noticeList != null) for (NoticeVO notice : noticeList)
			 * addAttachNoticeList(session, notice);
			 */
//			
//			PageMaker pageMaker = new PageMaker();
//			pageMaker.setCri(cri);
//			pageMaker.setTotalCount(noticeDAO.selectNoticeCriteriaTotalCount(session, cri));

			Map<String, Object> dataMap = new HashMap<String, Object>();
			dataMap.put("noticeList", noticeList);
//			dataMap.put("pageMaker", pageMaker);
			System.out.println(noticeList);
			return dataMap;
		} finally {
			session.close();
		}
	}

	@Override
	public void regist(NoticeVO notice) throws SQLException {
		SqlSession session = sqlSessionFactory.openSession();
		try {

			int noticeNum = noticeDAO.selectSeqNextValue(session);
			notice.setNoticeNum(noticeNum);
			noticeDAO.insertNotice(session, notice);

			if (notice.getAttachList() != null)
				for (AttachNoticeVO attachnotice : notice.getAttachList()) {
					attachnotice.setAttachNoticenum(noticeNum);
					attachnotice.setAttachNoticeattacher(notice.getNoticeWriter());
					attachnoticeDAO.insertAttachNotice(session, attachnotice);
				}

		} finally {
			session.close();
		}
		
	}

	@Override
	public NoticeVO read(int noticeNum) throws SQLException {

		SqlSession session = sqlSessionFactory.openSession();
		try {

			NoticeVO notice = noticeDAO.selectNoticeBynoticeNum(session, noticeNum);
			noticeDAO.increasenoticeSearch(session, noticeNum);

			addAttachNoticeList(session, notice);
			
			return notice;

		} finally {
			session.close();
		}
	}

	@Override
	public NoticeVO getNotice(int noticeNum) throws SQLException {
		SqlSession session = sqlSessionFactory.openSession();
		try {

			NoticeVO notice = noticeDAO.selectNoticeBynoticeNum(session, noticeNum);

			addAttachNoticeList(session, notice);
			
			return notice;
		} finally {
			session.close();
		}
	}

	@Override
	public void modify(NoticeVO noticeNum) throws SQLException {
		SqlSession session = sqlSessionFactory.openSession();
		try {

			noticeDAO.updateNotice(session, noticeNum);

			if (noticeNum.getAttachList() != null)
				for (AttachNoticeVO attachnotice : noticeNum.getAttachList()) {					
					attachnoticeDAO.insertAttachNotice(session, attachnotice);
				}
			
		} finally {
			session.close();
		}
	}
		
	

	@Override
	public void remove(int noticeNum) throws SQLException {
		SqlSession session = sqlSessionFactory.openSession();
		try {

			noticeDAO.deleteNotice(session, noticeNum);

		} finally {
			session.close();
		}
		
	}
	
	private void addAttachNoticeList(SqlSession session, NoticeVO notice) throws SQLException {

		if (notice == null) {
			
			return;
		}

		int noticeNum = notice.getNoticeNum();
		List<AttachNoticeVO> attachList = 
				attachnoticeDAO.selectAttachNoticeByAttachNoticeNum(session, noticeNum);

		notice.setAttachList(attachList);
	}

	@Override
	public AttachNoticeVO getAttachByAttachNoticeAno(int AttachNoticeano) throws SQLException {
		SqlSession session = sqlSessionFactory.openSession();
		try {

			AttachNoticeVO attachnotice = attachnoticeDAO.selectAttachNoticeByAttachNoticeano(session, AttachNoticeano);

			return attachnotice;
		} finally {
			session.close();
		}
	}

	@Override
	public void removeAttachNoticeByAttachNoticeAno(int AttachNoticeano) throws SQLException {
		SqlSession session = sqlSessionFactory.openSession();
		try {

			attachnoticeDAO.deleteAttachNotice(session, AttachNoticeano);

		} finally {
			session.close();
		}
		
	}

}
