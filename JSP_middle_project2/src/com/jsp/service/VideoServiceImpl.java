package com.jsp.service;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import com.jsp.command.PageMaker;
import com.jsp.command.SearchCriteria;
import com.jsp.dao.VideoDAO;
import com.jsp.dto.VideoVO;

public class VideoServiceImpl implements VideoService{

	private SqlSessionFactory sqlSessionFactory;
	private VideoDAO videoDAO;
	
	public void setSqlSessionFactory(SqlSessionFactory sqlSessionFactory) {
		this.sqlSessionFactory = sqlSessionFactory;
	}

	public void setVideoDAO(VideoDAO videoDAO) {
		this.videoDAO = videoDAO;
	}

	
	
	
	@Override
	public Map<String, Object> getVideoList(SearchCriteria cri) throws SQLException {
		Map<String, Object> dataMap = new HashMap<String, Object>();
		
		SqlSession session = sqlSessionFactory.openSession(false);
		
		try {
			List<VideoVO> videoList = videoDAO.selectVideoCriteria(session, cri);			
			dataMap.put("videoList", videoList);
			
			PageMaker pageMaker = new PageMaker();
			pageMaker.setCri(cri);
			pageMaker.setTotalCount(videoDAO.selectVideoCriteriaTotalCount(session, cri));
			dataMap.put("pageMaker",pageMaker);

			session.commit();
			
		} finally {
			if (session != null)
				session.close();
		}
		return dataMap;
	}

	
	
	
	
	
	@Override
	public void regist(VideoVO video) throws SQLException {
		SqlSession session = sqlSessionFactory.openSession();
		try {
			int videoNum = videoDAO.selectVideoSeqNext(session);
			video.setVideoNum(videoNum);
			videoDAO.insertVideo(session, video);
			
			
		} finally {
			if (session != null)
				session.close();
		}
		
	}

	@Override
	public VideoVO read(int videoNum) throws SQLException {
		SqlSession session = sqlSessionFactory.openSession();
		try {

			VideoVO video = videoDAO.selectVideoByVideoNum(session, videoNum);
			videoDAO.increasevideoSearch(session, videoNum);

			
			return video;

		} finally {
			session.close();
		}
	}

	@Override
	public VideoVO getVideo(int videoNum) throws SQLException {
		SqlSession session = sqlSessionFactory.openSession();
		try {
			VideoVO member = videoDAO.selectVideoByVideoNum(session, videoNum);
			return member;
		} finally {
			if (session != null)
				session.close();
		}
	}

	@Override
	public void modify(VideoVO videoNum) throws SQLException {
		SqlSession session = sqlSessionFactory.openSession();
		try {

			videoDAO.updateVideo(session, videoNum);

		} finally {
			session.close();
		}
		
	}

	@Override
	public void remove(int videoNum) throws SQLException {
		SqlSession session = sqlSessionFactory.openSession();
		try {

			videoDAO.deleteVideo(session, videoNum);

		} finally {
			session.close();
		}
		
	}

}
