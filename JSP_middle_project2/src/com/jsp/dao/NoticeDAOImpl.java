package com.jsp.dao;

import java.sql.SQLException;
import java.util.List;

import org.apache.ibatis.session.RowBounds;
import org.apache.ibatis.session.SqlSession;

import com.jsp.command.SearchCriteria;
import com.jsp.dto.NoticeVO;

public class NoticeDAOImpl implements NoticeDAO {

	@Override
	public List<NoticeVO> selectNoticeCriteria(SqlSession session, SearchCriteria cri) throws SQLException {
		int offset=cri.getStartRowNum();
		int limit=cri.getPerPageNum();
		RowBounds rowBounds=new RowBounds(offset,limit);
		
		List<NoticeVO> NoticeList=
		   session.selectList("Notice-Mapper.selectSearchNoticeList",cri,rowBounds);	
			
		return NoticeList;
	}

	@Override
	public int selectNoticeCriteriaTotalCount(SqlSession session, SearchCriteria cri) throws SQLException {
		int count=session.selectOne("Notice-Mapper.selectSearchNoticeListCount",cri);
		return count;
	}

	@Override
	public NoticeVO selectNoticeBynoticeNum(SqlSession session, int noticeNum) throws SQLException {
		NoticeVO notice = session.selectOne("Notice-Mapper.selectNoticeBynoticeNum",noticeNum);
		return notice;
	}

	@Override
	public void insertNotice(SqlSession session, NoticeVO notice) throws SQLException {
		session.update("Notice-Mapper.insertNotice", notice);
		
	}

	@Override
	public void updateNotice(SqlSession session, NoticeVO notice) throws SQLException {
		session.update("Notice-Mapper.updateNotice",notice);
		
	}


	@Override
	public void deleteNotice(SqlSession session, int noticeNum) throws SQLException {
		session.update("Notice-Mapper.deleteNotice", noticeNum);
		
	}

	@Override
	public int selectSeqNextValue(SqlSession session) throws SQLException {
		int noticeNum = session.selectOne("Notice-Mapper.selectNoticeSeqNext");
		return noticeNum;
	}

	@Override
	public void increasenoticeSearch(SqlSession session, int noticeNum) throws SQLException {
		session.update("Notice-Mapper.increasenoticeSearch",noticeNum);
		
	}

}
