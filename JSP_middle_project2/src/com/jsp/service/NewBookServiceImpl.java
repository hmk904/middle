package com.jsp.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import com.jsp.command.PageMaker;
import com.jsp.command.SearchCriteria;
import com.jsp.dao.NewBookDAO;
import com.jsp.dto.NewBookVO;

public class NewBookServiceImpl implements NewBookService {

	private SqlSessionFactory sqlSessionFactory;
	private NewBookDAO newBookDAO;

	public void setSqlSessionFactory(SqlSessionFactory sqlSessionFactory) {
		this.sqlSessionFactory = sqlSessionFactory;
	}

	public void setNewBookDAO(NewBookDAO newBookDAO) {
		this.newBookDAO = newBookDAO;
	}

	@Override
	public Map<String, Object> getList(SearchCriteria cri) throws Exception {
		Map<String, Object> dataMap = new HashMap<String, Object>();

		SqlSession session = sqlSessionFactory.openSession(false);
		try {
			List<NewBookVO> newBookList = newBookDAO.selectNewBookCriteria(session, cri);		
			dataMap.put("newBookList", newBookList);
			
			PageMaker pageMaker = new PageMaker();
			pageMaker.setCri(cri);
			pageMaker.setTotalCount(newBookDAO.selectNewBookCriteriaTotalCount(session, cri));
			dataMap.put("pageMaker",pageMaker);

			session.commit();
		} finally {
			session.close();
		}
		return dataMap;
	}

	@Override
	public NewBookVO getCountRank(int newBookNum) throws Exception {
		SqlSession session = sqlSessionFactory.openSession();
		try {
			NewBookVO member = newBookDAO.selectNewBookByISBN(session, newBookNum);
			return member;
		} finally {
			if (session != null)
				session.close();
		}

	}

	@Override
	public void regist(NewBookVO newBook) throws Exception {
		SqlSession session = sqlSessionFactory.openSession();
		try {
			newBookDAO.insertNewBook(session, newBook);
		} finally {
			if (session != null)
				session.close();
		}

	}

	@Override
	public void modify(NewBookVO newBook) throws Exception {
		SqlSession session = sqlSessionFactory.openSession();
		try {
			newBookDAO.updateNewBook(session, newBook);
		} finally {
			if (session != null)
				session.close();
		}

	}

	@Override
	public void remove(int newBookNum) throws Exception {
		SqlSession session = sqlSessionFactory.openSession();
		try {
			newBookDAO.deleteNewBook(session, newBookNum);
		} finally {
			if (session != null)
				session.close();
		}

	}
}
