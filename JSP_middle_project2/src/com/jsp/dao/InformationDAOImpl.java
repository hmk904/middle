package com.jsp.dao;

import java.sql.SQLException;
import java.util.List;

import org.apache.ibatis.session.RowBounds;
import org.apache.ibatis.session.SqlSession;

import com.jsp.command.SearchCriteria;
import com.jsp.dto.InformationVO;

public class InformationDAOImpl implements InformationDAO{

	@Override
	public List<InformationVO> selectInformationCriteria(SqlSession session, SearchCriteria cri) throws SQLException {
		int offset=cri.getStartRowNum();
		int limit=cri.getPerPageNum();
		RowBounds rowBounds=new RowBounds(offset,limit);
		
		List<InformationVO> InformationList=
		   session.selectList("Information-Mapper.selectSearchInformationList",cri,rowBounds);	
			
		return InformationList;
	}

	@Override
	public int selectInformationCriteriaTotalCount(SqlSession session, SearchCriteria cri) throws SQLException {
		int count=session.selectOne("Information-Mapper.selectSearchInformaionListCount",cri);
		return count;
	}

	@Override
	public InformationVO selectInformationByInfoNum(SqlSession session, int infoNum) throws SQLException {
		InformationVO Information=session.selectOne("Information-Mapper.selectInformationByinfoNum",infoNum);
		return Information;
	}

	@Override
	public void insertInformation(SqlSession session, InformationVO information) throws SQLException {
		session.update("Information-Mapper.insertInformation",information);		
		}

	@Override
	public void updateInformation(SqlSession session, InformationVO information) throws SQLException {
		session.update("Information-Mapper.updateInformation",information);
	}

	@Override
	public void updateInformationByWriterId(SqlSession session, InformationVO information) throws SQLException {
		session.update("Information-Mapper.updateInformationByWriterId",information);		
	}

	@Override
	public void deleteInformation(SqlSession session, int infoNum) throws SQLException {
		session.delete("Information-Mapper.deleteInformation",infoNum);
		}

	@Override
	public int selectSeqNextValue(SqlSession session) throws SQLException {
		int InfoNum=session.selectOne("Information-Mapper.selectInformationSeqNext");
		return InfoNum;
	}

	@Override
	public void increaseinformationSearch(SqlSession session, int infoNum) throws SQLException {
		session.update("Information-Mapper.increaseinformationSearch",infoNum);
	}


}
	
