package com.jsp.dao;

import java.sql.SQLException;
import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.jsp.dto.AttachNewsVO;
import com.jsp.dto.AttachNoticeVO;

public class AttachNewsDAOImpl implements AttachNewsDAO {

	@Override
	public List<AttachNewsVO> selectAttachNewsByAttachNewsNum(SqlSession session, int attachNewsnum)
			throws SQLException {
		List<AttachNewsVO> attachnewsList = session.selectList("AttachNews-Mapper.selectAttachNewsByAttachNewsNum",
				attachNewsnum);
		return attachnewsList;
	}

	@Override
	public AttachNewsVO selectAttachNewsByAttachNewsano(SqlSession session, int attachNewsano) throws SQLException {
		AttachNewsVO attachnews = session.selectOne("Attach-Mapper.selectAttachByAno", attachNewsano);
		return attachnews;
	}

	@Override
	public void insertAttachNews(SqlSession session, AttachNewsVO attachNews) throws SQLException {
		session.update("AttachNews-Mapper.insertAttachNews", attachNews);

	}

	@Override
	public void deleteAttachNews(SqlSession session, int attachNewsano) throws SQLException {
		session.update("AttachNews-Mapper.deleteAttachNews", attachNewsano);

	}

	@Override
	public void deleteAllAttachNews(SqlSession session, int attachNewsnum) throws SQLException {
		session.update("AttachNews-Mapper.deleteAllAttachNews", attachNewsnum);
	}
}
