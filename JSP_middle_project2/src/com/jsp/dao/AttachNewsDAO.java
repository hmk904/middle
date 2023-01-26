package com.jsp.dao;

import java.sql.SQLException;
import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.jsp.command.SearchCriteria;
import com.jsp.dto.AttachNewsVO;

public interface AttachNewsDAO {
	public List<AttachNewsVO> selectAttachNewsByAttachNewsNum(SqlSession session, int attachNewsnum)throws SQLException;
	public AttachNewsVO selectAttachNewsByAttachNewsano(SqlSession session,int attachNewsano)throws SQLException;
	
	public void insertAttachNews(SqlSession session,AttachNewsVO attachNews) throws SQLException;

	public void deleteAttachNews(SqlSession session,int attachNewsano) throws SQLException;

	
	public void deleteAllAttachNews(SqlSession session,int attachNewsattacher)throws SQLException;
	
	
}




