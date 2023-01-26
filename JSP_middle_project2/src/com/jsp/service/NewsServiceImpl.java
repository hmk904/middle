package com.jsp.service;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import com.jsp.command.PageMaker;
import com.jsp.command.SearchCriteria;
import com.jsp.dao.AttachNewsDAO;
import com.jsp.dao.NewsDAO;
import com.jsp.dto.AttachNewsVO;
import com.jsp.dto.NewsVO;

public class NewsServiceImpl implements NewsService{

	private SqlSessionFactory sqlSessionFactory;
	private NewsDAO newsDAO;
	private AttachNewsDAO attachnewsDAO;
	
	public void setSqlSessionFactory(SqlSessionFactory sqlSessionFactory) {
		this.sqlSessionFactory = sqlSessionFactory;
	}

	public void setNewsDAO(NewsDAO newsDAO) {
		this.newsDAO = newsDAO;
	}

	public void setAttachnewsDAO(AttachNewsDAO attachnewsDAO) {
		this.attachnewsDAO = attachnewsDAO;
	}

	@Override
	public Map<String, Object> getNewsList(SearchCriteria cri) throws SQLException {
		SqlSession session = sqlSessionFactory.openSession();
		try {
			List<NewsVO> newsList = newsDAO.selectNewsCriteria(session, cri);
			if (newsList != null)
				for (NewsVO news : newsList)
					addAttachNewsList(session, news);
			
			
			PageMaker pageMaker = new PageMaker();
			pageMaker.setCri(cri);
			pageMaker.setTotalCount(newsDAO.selectNewsCriteriaTotalCount(session, cri));

			Map<String, Object> dataMap = new HashMap<String, Object>();
			dataMap.put("newsList", newsList);
			dataMap.put("pageMaker", pageMaker);

			return dataMap;
		} finally {
			session.close();
		}
	}

	
	@Override
	public void regist(NewsVO news) throws SQLException {
		SqlSession session = sqlSessionFactory.openSession();
		try {

			int newsNum = newsDAO.selectSeqNextValue(session);
			news.setNewsNum(newsNum);
			newsDAO.insertNews(session, news);

			if (news.getAttachList() != null)
				for (AttachNewsVO attachnews : news.getAttachList()) {
					attachnews.setAttachNewsnum(newsNum);
					attachnews.setAttachNewsattacher(attachnews.getAttachNewsattacher());
					attachnewsDAO.insertAttachNews(session, attachnews);
				}

		} finally {
			session.close();
		}
		
	}

	@Override
	public NewsVO read(int newsNum) throws SQLException {
		SqlSession session = sqlSessionFactory.openSession();
		try {

			NewsVO news = newsDAO.selectNewsByNewsNum(session, newsNum);
			newsDAO.increaseNewsSearch(session, newsNum);

			addAttachNewsList(session, news);
			
			return news;

		} finally {
			session.close();
		}
	}

	@Override
	public NewsVO getNews(int newsnum) throws SQLException {
		SqlSession session = sqlSessionFactory.openSession();
		try {

			NewsVO news = newsDAO.selectNewsByNewsNum(session, newsnum);

			addAttachNewsList(session, news);
			
			return news;
		} finally {
			session.close();
		}
	}

	@Override
	public void modify(NewsVO newsnum) throws SQLException {
		SqlSession session = sqlSessionFactory.openSession();
		try {

			newsDAO.updateNews(session, newsnum);

			if (newsnum.getAttachList() != null)
				for (AttachNewsVO attachnews : newsnum.getAttachList()) {					
					attachnewsDAO.insertAttachNews(session, attachnews);
				}
			
		} finally {
			session.close();
		}
	}

	@Override
	public void remove(int newsNum) throws SQLException {
		SqlSession session = sqlSessionFactory.openSession();
		try {

			newsDAO.deleteNews(session, newsNum);

		} finally {
			session.close();
		}
		
	}

	private void addAttachNewsList(SqlSession session, NewsVO news)throws SQLException {

		if (news == null)
			return;

		int newsNum = news.getNewsNum();
		List<AttachNewsVO> attachList = 
				attachnewsDAO.selectAttachNewsByAttachNewsNum(session, newsNum);

		news.setAttachNewsList(attachList);
	}
	
	@Override
	public AttachNewsVO getAttachNewsByAttachNewsano(int AttachNewsano) throws SQLException {
		SqlSession session = sqlSessionFactory.openSession();
		try {

			AttachNewsVO attachnews = attachnewsDAO.selectAttachNewsByAttachNewsano(session, AttachNewsano);

			return attachnews;
		} finally {
			session.close();
		}
	}


	@Override
	public void removeAttachNewsByAttachNewsano(int AttachNewsano) throws SQLException {
		SqlSession session = sqlSessionFactory.openSession();
		try {

			attachnewsDAO.deleteAttachNews(session, AttachNewsano);

		} finally {
			session.close();
		}
		
	}

}
