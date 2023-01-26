package com.jsp.dao;

import java.sql.SQLException;
import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.jsp.dto.AttachInformationVO;



public class AttachInformationDAOImpl implements AttachInformationDAO{

	@Override
	public List<AttachInformationVO> selectAttachInformationByAttachInformationNum(SqlSession session,
			int attachInformationnum) throws SQLException {
		List<AttachInformationVO> attachinformationList = session.selectList("AttachInformation-Mapper.selectAttachInformationByAttachInformationNum",
				attachInformationnum);
		return attachinformationList;
	}

	@Override
	public AttachInformationVO selectAttachInformationByAttachInformationano(SqlSession session,
			int attachInformationano) throws SQLException {
		AttachInformationVO attachinformation = session.selectOne("Attach-Mapper.selectAttachByAno", attachInformationano);
		return attachinformation;
	}

	@Override
	public void insertAttachInformation(SqlSession session, AttachInformationVO attachInformation) throws SQLException {
		session.update("AttachInformation-Mapper.insertAttachInformation", attachInformation);

	}

	@Override
	public void deleteAttachInformation(SqlSession session, int attachInformationano) throws SQLException {
		session.update("AttachNews-Mapper.deleteAttachNews", attachInformationano);

	}

	@Override
	public void deleteAllAttachInformation(SqlSession session, int attachInformationnum) throws SQLException {
		session.update("AttachNews-Mapper.deleteAllAttachNews", attachInformationnum);
		}
	}


