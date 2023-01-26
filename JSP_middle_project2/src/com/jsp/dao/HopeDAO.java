package com.jsp.dao;

import java.sql.SQLException;
import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.jsp.command.SearchCriteria;
import com.jsp.dto.HopeVO;

public interface HopeDAO {
	
		
		List<HopeVO> selectHopeCriteria(SqlSession session,SearchCriteria cri) throws SQLException;
		int selectHopeCriteriaTotalCount(SqlSession session,SearchCriteria cri) throws SQLException;
		
		HopeVO selectHopeByHopeNum(SqlSession session,int hopeNum)throws SQLException;
		
		
		void insertHope(SqlSession session,HopeVO hope)throws SQLException;
		
		void updateHope(SqlSession session,HopeVO hope)throws SQLException;
     //추가
		void updateHopeByWriterId(SqlSession session,HopeVO hope)throws SQLException;
		
		void deleteHope(SqlSession session,int hope)throws SQLException;
		
		
		//hope_seq.nextval 가져오기
		int selectSeqNextValue(SqlSession session) throws SQLException;
		//viewcnt  증가
		void increasehopeSearch(SqlSession session,int hopeNum)throws SQLException;
		
	}


