package com.jsp.dao;

import java.sql.SQLException;
import java.util.List;

import org.apache.ibatis.session.RowBounds;
import org.apache.ibatis.session.SqlSession;

import com.jsp.command.SearchCriteria;
import com.jsp.dto.NewsVO;

public class NewsDAOImpl implements NewsDAO{

	@Override
	public List<NewsVO> selectNewsCriteria(SqlSession session, SearchCriteria cri) throws SQLException {
		int offset=cri.getStartRowNum();
		int limit=cri.getPerPageNum();
		RowBounds rowBounds=new RowBounds(offset,limit);
		
		List<NewsVO> NewsList=
		   session.selectList("News-Mapper.selectSearchNewsList",cri,rowBounds);	
			
		return NewsList;
	}

	@Override
	public int selectNewsCriteriaTotalCount(SqlSession session, SearchCriteria cri) throws SQLException {
		
		int count=session.selectOne("News-Mapper.selectSearchNewsListCount",cri);
		return count;
	}

	
	@Override
	public void insertNews(SqlSession session, NewsVO news) throws SQLException {
		session.update("News-Mapper.insertNews",news);		
	}
		
	

	@Override
	public void updateNews(SqlSession session, NewsVO news) throws SQLException {
		
		session.update("News-Mapper.updateNews",news);
		}

	@Override
	public void deleteNews(SqlSession session, int newsNum) throws SQLException {
		
		session.update("News-Mapper.deleteNews",newsNum);
	}

	@Override
	public int selectSeqNextValue(SqlSession session) throws SQLException {
		
		int NewsNum=session.selectOne("News-Mapper.selectNewsSeqNext");
		return NewsNum;
	}


	@Override
	public NewsVO selectNewsByNewsNum(SqlSession session, int newsNum) throws SQLException {
		NewsVO News=session.selectOne("News-Mapper.selectNewsBynewsNum",newsNum);
		return News;
	}

	@Override
	public void updateNewsByWriterId(SqlSession session, NewsVO news) throws SQLException {
		session.update("News-Mapper.updateNewsByWriterId",news);		
	}

	@Override
	public void increaseNewsSearch(SqlSession session, int newsNum) throws SQLException {
		session.update("News-Mapper.increaseNewsSearch",newsNum);
	}

}
