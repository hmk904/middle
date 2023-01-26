package com.jsp.service;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import com.jsp.command.PageMaker;
import com.jsp.command.SearchCriteria;
import com.jsp.dao.AttachInformationDAO;
import com.jsp.dao.InformationDAO;
import com.jsp.dto.AttachInformationVO;
import com.jsp.dto.InformationVO;

public class InformationServiceImpl implements InformationService{
	private SqlSessionFactory sqlSessionFactory;
	private InformationDAO informationDAO;
	private AttachInformationDAO attachinformationDAO;
	
	public void setSqlSessionFactory(SqlSessionFactory sqlSessionFactory) {
		this.sqlSessionFactory = sqlSessionFactory;
	}

	public void setInformationDAO(InformationDAO informationDAO) {
		this.informationDAO = informationDAO;
	}
	public void setAttachinformationDAO(AttachInformationDAO attachinformationDAO) {
		this.attachinformationDAO = attachinformationDAO;
	}
	@Override
	public Map<String, Object> getInformationList(SearchCriteria cri) throws SQLException {
		SqlSession session = sqlSessionFactory.openSession();
		try {
			List<InformationVO> informationList = informationDAO.selectInformationCriteria(session, cri);
			if (informationList != null)
				for (InformationVO information : informationList)
					addAttachInformationList(session, information);
			
			
			PageMaker pageMaker = new PageMaker();
			pageMaker.setCri(cri);
			pageMaker.setTotalCount(informationDAO.selectInformationCriteriaTotalCount(session, cri));

			Map<String, Object> dataMap = new HashMap<String, Object>();
			dataMap.put("informationList", informationList);
			dataMap.put("pageMaker", pageMaker);

			return dataMap;
		} finally {
			session.close();
		}
	}

	@Override
	public void regist(InformationVO information) throws SQLException {
		SqlSession session = sqlSessionFactory.openSession();
		try {

			int infoNum = informationDAO.selectSeqNextValue(session);
			information.setInfoNum(infoNum);
			informationDAO.insertInformation(session, information);

			if (information.getAttachList() != null)
				for (AttachInformationVO attachinformation : information.getAttachList()) {
					attachinformation.setAttachInformationnum(infoNum);
					attachinformation.setAttachInformationattacher(attachinformation.getAttachInformationattacher());
					attachinformationDAO.insertAttachInformation(session, attachinformation);
				}

		} finally {
			session.close();
		}
		
	}
	@Override
	public InformationVO read(int infonum) throws SQLException {
		SqlSession session = sqlSessionFactory.openSession();
		try {

			InformationVO information = informationDAO.selectInformationByInfoNum(session, infonum);
			informationDAO.increaseinformationSearch(session, infonum);

			addAttachInformationList(session, information);
			
			return information;

		} finally {
			session.close();
		}
	}

	@Override
	public InformationVO getInformation(int infonum) throws SQLException {
		SqlSession session = sqlSessionFactory.openSession();
		try {

			InformationVO information = informationDAO.selectInformationByInfoNum(session, infonum);

			addAttachInformationList(session, information);
			
			return information;
		} finally {
			session.close();
		}
	}

	@Override
	public void modify(InformationVO infonum) throws SQLException {
		SqlSession session = sqlSessionFactory.openSession();
		try {

			informationDAO.updateInformation(session, infonum);

			if (infonum.getAttachList() != null)
				for (AttachInformationVO attachinformation : infonum.getAttachList()) {					
					attachinformationDAO.insertAttachInformation(session, attachinformation);
				}
			
		} finally {
			session.close();
		}
	}


	@Override
	public void remove(int infonum) throws SQLException {
		SqlSession session = sqlSessionFactory.openSession();
		try {

			informationDAO.deleteInformation(session, infonum);

		} finally {
			session.close();
		}
		
	}
	private void addAttachInformationList(SqlSession session, InformationVO information)throws SQLException {

		if (information == null)
			return;

		int infoNum = information.getInfoNum();
		List<AttachInformationVO> attachList = 
				attachinformationDAO.selectAttachInformationByAttachInformationNum(session, infoNum);

		information.setAttachinformationList(attachList);
	}

	@Override
	public AttachInformationVO getAttachInformationByAttachInformationano(int AttachInformationano)
			throws SQLException {
		SqlSession session = sqlSessionFactory.openSession();
		try {

			AttachInformationVO attachinformation = attachinformationDAO.selectAttachInformationByAttachInformationano(session, AttachInformationano);

			return attachinformation;
		} finally {
			session.close();
		}
	}

	@Override
	public void removeAttachInformationByAttachInformationano(int AttachInformationano) throws SQLException {
		SqlSession session = sqlSessionFactory.openSession();
		try {

			attachinformationDAO.deleteAttachInformation(session, AttachInformationano);

		} finally {
			session.close();
		}
		
	}

}
		
	