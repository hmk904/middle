package com.jsp.service;

import java.sql.SQLException;
import java.util.Map;

import com.jsp.command.SearchCriteria;
import com.jsp.dto.AttachInformationVO;
import com.jsp.dto.InformationVO;

public interface InformationService {

	// 리스트조회
	Map<String, Object> getInformationList(SearchCriteria cri) throws SQLException;

	// 글작성
	void regist(InformationVO information) throws SQLException;

	// 글읽기(조회수증가)
	InformationVO read(int infonum) throws SQLException;

	// 글조회
	InformationVO getInformation(int infonum) throws SQLException;

	// 글수정
	void modify(InformationVO infonum) throws SQLException;

	// 글삭제
	void remove(int infonum) throws SQLException;
	
	
	//첨부파일 조회
	AttachInformationVO getAttachInformationByAttachInformationano(int AttachInformationano)throws SQLException;

	//파일정보 삭제
	void removeAttachInformationByAttachInformationano(int AttachInformationano)throws SQLException;

}


