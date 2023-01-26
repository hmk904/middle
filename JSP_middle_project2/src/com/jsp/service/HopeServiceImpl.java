package com.jsp.service;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import com.jsp.command.PageMaker;
import com.jsp.command.SearchCriteria;
import com.jsp.dao.HopeDAO;
import com.jsp.dto.HopeVO;



public class HopeServiceImpl implements HopeService{

	private SqlSessionFactory sqlSessionFactory;
	private HopeDAO hopeDAO;


	

	public void setSqlSessionFactory(SqlSessionFactory sqlSessionFactory) {
		this.sqlSessionFactory = sqlSessionFactory;
	}

	public void setHopeDAO(HopeDAO hopeDAO) {
		this.hopeDAO = hopeDAO;
	}
	@Override
	public Map<String, Object> getHopeList(SearchCriteria cri) throws SQLException {
		
		Map<String, Object> dataMap = new HashMap<String, Object>();

		SqlSession session = sqlSessionFactory.openSession(false);
		try {
			List<HopeVO> hopeList = hopeDAO.selectHopeCriteria(session, cri);			
			dataMap.put("hopeList", hopeList);
			
			PageMaker pageMaker = new PageMaker();
			pageMaker.setCri(cri);
			pageMaker.setTotalCount(hopeDAO.selectHopeCriteriaTotalCount(session, cri));
			dataMap.put("pageMaker",pageMaker);

			session.commit();
		} finally {
			if (session != null)
				session.close();
		}
		return dataMap;
	}



	@Override
	public void modify(HopeVO hope) throws SQLException {
		SqlSession session = sqlSessionFactory.openSession();
		try {

			hopeDAO.updateHope(session, hope);

		} finally {
			session.close();
		}
	}

	@Override
	public void remove(int hopeNum) throws SQLException {
		SqlSession session = sqlSessionFactory.openSession();
		try {

			hopeDAO.deleteHope(session, hopeNum);

		} finally {
			session.close();
		}
	}


	@Override
	public void regist(HopeVO hope) throws SQLException {
		SqlSession session = sqlSessionFactory.openSession();
		try {
			int hopeNum = hopeDAO.selectSeqNextValue(session);
			hope.setHopeNum(hopeNum);
			hopeDAO.insertHope(session, hope);
		} finally {
			if (session != null)
				session.close();
		}

	}


	@Override
	public HopeVO getHope(int hopenum) throws SQLException {
		SqlSession session = sqlSessionFactory.openSession();
		try {
			HopeVO member = hopeDAO.selectHopeByHopeNum(session, hopenum);
			return member;
		} finally {
			if (session != null)
				session.close();
	}

	}

	@Override
	public HopeVO read(int hopeNum) throws SQLException {
		SqlSession session = sqlSessionFactory.openSession();
		try {

			HopeVO hope = hopeDAO.selectHopeByHopeNum(session, hopeNum);
			hopeDAO.increasehopeSearch(session, hopeNum);
			
			return hope;

		} finally {
			session.close();
		}
	}

	
}

	

	
	

	



