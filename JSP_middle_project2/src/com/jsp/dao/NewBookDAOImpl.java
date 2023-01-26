package com.jsp.dao;

import java.sql.SQLException;
import java.util.List;

import org.apache.ibatis.session.RowBounds;
import org.apache.ibatis.session.SqlSession;

import com.jsp.command.SearchCriteria;
import com.jsp.dto.NewBookVO;

public class NewBookDAOImpl implements NewBookDAO {

	@Override
	public List<NewBookVO> selectNewBookCriteria(SqlSession session, SearchCriteria cri) throws Exception {
		int offset = cri.getStartRowNum();
		int limit = cri.getPerPageNum();
		
		RowBounds rowBounds = new RowBounds(offset,limit);
		
		List<NewBookVO> memberList 
			= session.selectList("NewBook-Mapper.selectSearchNewBookList",cri,rowBounds);
		return memberList;
	}

	@Override
	public int selectNewBookCriteriaTotalCount(SqlSession session, SearchCriteria cri) throws SQLException {
		int count=0;		
		count=session.selectOne("NewBook-Mapper.selectSearchNewBookListCount",cri);
		return count;
	}

	@Override
	public NewBookVO selectNewBookByISBN(SqlSession session, int newBookNum) throws SQLException {
		NewBookVO countRank = session.selectOne("NewBook-Mapper.selectNewBookByISBN",newBookNum);
		return countRank;
	}

	@Override
	public void insertNewBook(SqlSession session, NewBookVO newBook) throws SQLException {
		session.update("NewBook-Mapper.insertNewBook",newBook);

	}

	@Override
	public void updateNewBook(SqlSession session, NewBookVO newBook) throws SQLException {
		session.update("NewBook-Mapper.updateNewBook",newBook);

	}

	@Override
	public void deleteNewBook(SqlSession session, int newBookNum) throws SQLException {
		session.update("NewBook-Mapper.deleteNewBook",newBookNum);	

	}

}
