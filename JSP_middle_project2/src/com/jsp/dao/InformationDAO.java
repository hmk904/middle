package com.jsp.dao;

import java.sql.SQLException;
import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.jsp.command.SearchCriteria;
import com.jsp.dto.InformationVO;


public interface InformationDAO {
	List<InformationVO> selectInformationCriteria(SqlSession session,SearchCriteria cri) throws SQLException;
	int selectInformationCriteriaTotalCount(SqlSession session,SearchCriteria cri) throws SQLException;
	
	InformationVO selectInformationByInfoNum(SqlSession session,int infoNum)throws SQLException;
	void insertInformation(SqlSession session,InformationVO information)throws SQLException;
	
	void updateInformation(SqlSession session,InformationVO information)throws SQLException;
	void updateInformationByWriterId(SqlSession session,InformationVO information)throws SQLException;
	void deleteInformation(SqlSession session,int information)throws SQLException;
	
	
	//News_seq.nextval 가져오기
	int selectSeqNextValue(SqlSession session) throws SQLException;
	//viewcnt  증가
	void increaseinformationSearch(SqlSession session,int infoNum)throws SQLException;
	
	

}
