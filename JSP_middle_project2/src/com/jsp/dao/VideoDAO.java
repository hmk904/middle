package com.jsp.dao;

import java.sql.SQLException;
import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.jsp.command.SearchCriteria;
import com.jsp.dto.VideoVO;

public interface VideoDAO {

	List<VideoVO> selectVideoCriteria(SqlSession session,SearchCriteria cri) throws SQLException;
	int selectVideoCriteriaTotalCount(SqlSession session,SearchCriteria cri) throws SQLException;
	
	VideoVO selectVideoByVideoNum(SqlSession session,int VideoNum)throws SQLException;
	
	void insertVideo(SqlSession session,VideoVO video)throws SQLException;
	void updateVideo(SqlSession session,VideoVO video)throws SQLException;
	void deleteVideo(SqlSession session,int VideoNum)throws SQLException;
	
	
	//pds_seq.nextval 가져오기
	int selectVideoSeqNext(SqlSession session) throws SQLException;
	//viewcnt  증가
	void increasevideoSearch(SqlSession session,int VideoNum)throws SQLException;
	
	
}
