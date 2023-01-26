package com.jsp.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import com.jsp.command.PageMaker;
import com.jsp.command.SearchCriteria;
import com.jsp.dao.LibraryBookDAO;
import com.jsp.dto.LibraryBookVO;

public class LibraryBookServiceImpl implements LibraryBookService {

	private SqlSessionFactory sqlSessionFactory;
	private LibraryBookDAO libraryBookDAO;

	public void setSqlSessionFactory(SqlSessionFactory sqlSessionFactory) {
		this.sqlSessionFactory = sqlSessionFactory;
	}

	public void setLibraryBookDAO(LibraryBookDAO libraryBookDAO) {
		this.libraryBookDAO = libraryBookDAO;
	}



	@Override
	public Map<String, Object> getList(SearchCriteria cri) throws Exception {
		SqlSession session = sqlSessionFactory.openSession();
		Map<String, Object> dataMap = new HashMap<String, Object>();
		try {
			List<LibraryBookVO> libraryBookList = libraryBookDAO.selectLibraryBookCriteria(session, cri);		
			dataMap.put("libraryBookList", libraryBookList);
			
			PageMaker pageMaker = new PageMaker();
			pageMaker.setCri(cri);
			pageMaker.setTotalCount(libraryBookDAO.selectLibraryBookCriteriaTotalCount(session, cri));

			dataMap.put("pageMaker", pageMaker);

			return dataMap;
		} finally {
			session.close();
		}
	}

	@Override
	public LibraryBookVO getNewBook(int libraryBookNum) throws Exception {
		SqlSession session = sqlSessionFactory.openSession();
		try {
			LibraryBookVO newBook = libraryBookDAO.selectLibraryBookByISBN(session, libraryBookNum);
			return newBook;
		} finally {
			if (session != null)
				session.close();
		}
	}

	@Override
	public void regist(LibraryBookVO libraryBook) throws Exception {
		SqlSession session = sqlSessionFactory.openSession();
		try {
			libraryBookDAO.insertLibraryBook(session, libraryBook);
		} finally {
			session.close();
		}
	}

	@Override
	public void modify(LibraryBookVO libraryBook) throws Exception {
		SqlSession session = sqlSessionFactory.openSession();
		try {
			libraryBookDAO.updateLibraryBook(session, libraryBook);
		} finally {
			session.close();
		}
	}

	@Override
	public void remove(int libraryBookNum) throws Exception {
		SqlSession session = sqlSessionFactory.openSession();
		try {
			libraryBookDAO.deleteLibraryBook(session, libraryBookNum);
		} finally {
			session.close();
		}
	}

}
