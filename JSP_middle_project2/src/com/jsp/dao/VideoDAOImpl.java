package com.jsp.dao;

import java.sql.SQLException;
import java.util.List;

import org.apache.ibatis.session.RowBounds;
import org.apache.ibatis.session.SqlSession;

import com.jsp.command.SearchCriteria;
import com.jsp.dto.VideoVO;

public class VideoDAOImpl implements VideoDAO{

	@Override
	public List<VideoVO> selectVideoCriteria(SqlSession session, SearchCriteria cri) throws SQLException {
		int offset=cri.getStartRowNum();
		int limit=cri.getPerPageNum();
		RowBounds rowBounds=new RowBounds(offset,limit);
		
		List<VideoVO> videoList=
		   session.selectList("Video-Mapper.selectSearchVideoList",cri,rowBounds);	
			
		return videoList;
	}

	@Override
	public int selectVideoCriteriaTotalCount(SqlSession session, SearchCriteria cri) throws SQLException {
		int count=session.selectOne("Video-Mapper.selectSearchVideoListCount",cri);
		return count;
	}

	@Override
	public VideoVO selectVideoByVideoNum(SqlSession session, int VideoNum) throws SQLException {
		VideoVO video=session.selectOne("Video-Mapper.selectVideoByVideoNum",VideoNum);
		return video;
	}

	@Override
	public void insertVideo(SqlSession session, VideoVO video) throws SQLException {
		session.update("Video-Mapper.insertVideo",video);
		
	}

	@Override
	public void updateVideo(SqlSession session, VideoVO video) throws SQLException {
		session.update("Video-Mapper.updateVideo",video);
		
	}

	@Override
	public void deleteVideo(SqlSession session, int VideoNum) throws SQLException {
		session.delete("Video-Mapper.deleteVideo",VideoNum);
		
	}

	@Override
	public int selectVideoSeqNext(SqlSession session) throws SQLException {
		int VideoNum=session.selectOne("Video-Mapper.selectVideoSeqNext");
		return VideoNum;
	}

	@Override
	public void increasevideoSearch(SqlSession session, int VideoNum) throws SQLException {
		session.update("Video-Mapper.increasevideoSearch",VideoNum);
		
	}


}
