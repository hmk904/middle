package com.jsp.dao;

import java.sql.SQLException;
import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.jsp.dto.AttachInformationVO;

public interface AttachInformationDAO {
	public List<AttachInformationVO> selectAttachInformationByAttachInformationNum(SqlSession session, int attachInformationnum)throws SQLException;
	public AttachInformationVO selectAttachInformationByAttachInformationano(SqlSession session,int attachInformationano)throws SQLException;
	
	public void insertAttachInformation(SqlSession session,AttachInformationVO attachInformation) throws SQLException;

	public void deleteAttachInformation(SqlSession session,int attachInformationano) throws SQLException;

	
	public void deleteAllAttachInformation(SqlSession session,int attachInformationattacher)throws SQLException;
	
	
}

