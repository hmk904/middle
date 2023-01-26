package com.jsp.dao;

import java.sql.SQLException;
import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.jsp.dto.AttachNoticeVO;

public class AttachNoticeDAOImpl implements AttachNoticeDAO {

	@Override
	public List<AttachNoticeVO> selectAttachNoticeByAttachNoticeNum(SqlSession session, int AttachNoticeNum)
			throws SQLException {
		List<AttachNoticeVO> attachnoticeList = session.selectList("AttachNotice-Mapper.selectAttachNoticeByAttachNoticeNum",AttachNoticeNum);
		return attachnoticeList;
	}

	@Override
	public AttachNoticeVO selectAttachNoticeByAttachNoticeano(SqlSession session, int AttachNoticeano)
			throws SQLException {
		AttachNoticeVO attachnotice = session.selectOne("AttachNotice-Mapper.selectAttachNoticeByAttachNoticeano",AttachNoticeano);
		return attachnotice;
	}

	@Override
	public void insertAttachNotice(SqlSession session, AttachNoticeVO AttachNotice) throws SQLException {
		session.update("AttachNotice-Mapper.insertAttachNotice",AttachNotice);
		
	}

	@Override
	public void deleteAttachNotice(SqlSession session, int AttachNoticeano) throws SQLException {
		session.update("AttachNotice-Mapper.deleteAttachNotice",AttachNoticeano);
		
	}

	@Override
	public void deleteAllAttachNotice(SqlSession session, int AttachNoticeNum) throws SQLException {
		session.update("AttachNotice-Mapper.deleteAllAttachNotice",AttachNoticeNum);
		
	}

}
