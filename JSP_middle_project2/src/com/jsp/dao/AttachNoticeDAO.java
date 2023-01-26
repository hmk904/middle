package com.jsp.dao;

import java.sql.SQLException;
import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.jsp.dto.AttachNoticeVO;

public interface AttachNoticeDAO {

	public List<AttachNoticeVO> selectAttachNoticeByAttachNoticeNum(SqlSession session, int AttachNoticeNum)throws SQLException;
	public AttachNoticeVO selectAttachNoticeByAttachNoticeano(SqlSession session,int AttachNoticeano)throws SQLException;
	
	public void insertAttachNotice(SqlSession session, AttachNoticeVO AttachNotice) throws SQLException;

	public void deleteAttachNotice(SqlSession session,int AttachNoticeano) throws SQLException;

	public void deleteAllAttachNotice(SqlSession session,int AttachNoticeNum)throws SQLException;
	
}
