package com.jsp.dao;

import java.sql.SQLException;
import java.util.List;

import org.apache.ibatis.session.RowBounds;
import org.apache.ibatis.session.SqlSession;

import com.jsp.command.SearchCriteria;
import com.jsp.dto.LibraryBookVO;

public class LibraryBookDAOImpl implements LibraryBookDAO {

	@Override
	public List<LibraryBookVO> selectLibraryBookCriteria(SqlSession session, SearchCriteria cri) throws Exception {
		int offset = cri.getStartRowNum();
		int limit = cri.getPerPageNum();
		
		RowBounds rowBounds = new RowBounds(offset,limit);
		
		List<LibraryBookVO> librayBookList 
			= session.selectList("LibraryBook-Mapper.selectSearchLibraryBookList",cri,rowBounds);
		return librayBookList;
	}

	@Override
	public int selectLibraryBookCriteriaTotalCount(SqlSession session, SearchCriteria cri) throws SQLException {
		int count=0;		
		count=session.selectOne("LibraryBook-Mapper.selectSearchLibraryBookListCount",cri);
		return count;
	}

	@Override
	public LibraryBookVO selectLibraryBookByISBN(SqlSession session, int libraryBookNum) throws SQLException {
		LibraryBookVO librayBook = session.selectOne("LibraryBook-Mapper.selectLibraryBookByISBN",libraryBookNum);
		return librayBook;
	}

	@Override
	public void insertLibraryBook(SqlSession session, LibraryBookVO libraryBook) throws SQLException {
		session.update("LibraryBook-Mapper.insertLibraryBook",libraryBook);
		
	}

	@Override
	public void updateLibraryBook(SqlSession session, LibraryBookVO libraryBook) throws SQLException {
		session.update("LibraryBook-Mapper.updateLibraryBook",libraryBook);
		
	}

	@Override
	public void deleteLibraryBook(SqlSession session, int libraryBookNum) throws SQLException {
		session.update("LibraryBook-Mapper.deleteLibraryBook",libraryBookNum);
		
	}
	

}
