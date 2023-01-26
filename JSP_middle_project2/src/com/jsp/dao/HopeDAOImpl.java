package com.jsp.dao;

import java.sql.SQLException;
import java.util.List;

import org.apache.ibatis.session.RowBounds;
import org.apache.ibatis.session.SqlSession;

import com.jsp.command.SearchCriteria;
import com.jsp.dto.HopeVO;

public class HopeDAOImpl implements HopeDAO{

	@Override
	public List<HopeVO> selectHopeCriteria(SqlSession session, SearchCriteria cri) throws SQLException {
		int offset=cri.getStartRowNum();
		int limit=cri.getPerPageNum();
		RowBounds rowBounds=new RowBounds(offset,limit);
		
		List<HopeVO> hopeList=
		   session.selectList("Hope-Mapper.selectSearchHopeList",cri,rowBounds);	
			
		return hopeList;
	}

	@Override
	public int selectHopeCriteriaTotalCount(SqlSession session, SearchCriteria cri) throws SQLException {
		
		int count=session.selectOne("Hope-Mapper.selectSearchHopeListCount",cri);
		return count;
	}

	
	@Override
	public void insertHope(SqlSession session, HopeVO hope) throws SQLException {
		session.update("Hope-Mapper.insertHope",hope);		
	}
		
	

	@Override
	public void updateHope(SqlSession session, HopeVO hope) throws SQLException {
		
		session.update("Hope-Mapper.updateHope",hope);
		}
	//추가
	@Override
	public void updateHopeByWriterId(SqlSession session, HopeVO hope) throws SQLException {
		session.update("Hope-Mapper.updateHopeByWriterId",hope);		
	}

	@Override
	public void deleteHope(SqlSession session, int HopeNum) throws SQLException {
		
		session.update("Hope-Mapper.deleteHope",HopeNum);
	}

	@Override
	public int selectSeqNextValue(SqlSession session) throws SQLException {
		
		int HopeNum=session.selectOne("Hope-Mapper.selectHopeSeqNext");
		return HopeNum;
	}

	@Override
	public void increasehopeSearch(SqlSession session, int hopeNum) throws SQLException {
		
		session.update("Hope-Mapper.increaseHopeSearch",hopeNum);
	}

	@Override
	public HopeVO selectHopeByHopeNum(SqlSession session, int HopeNum) throws SQLException {
		HopeVO Hope=session.selectOne("Hope-Mapper.selectHopeByHopeNum",HopeNum);
		return Hope;
	}

}
