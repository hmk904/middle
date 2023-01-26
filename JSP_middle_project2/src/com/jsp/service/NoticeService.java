package com.jsp.service;

import java.sql.SQLException;
import java.util.Map;

import com.jsp.command.SearchCriteria;
import com.jsp.dto.AttachNoticeVO;
import com.jsp.dto.NoticeVO;

public interface NoticeService {

		// 리스트조회
		Map<String, Object> getNoticeList(SearchCriteria cri) throws SQLException;

		// 글작성
		void regist(NoticeVO notice) throws SQLException;

		// 글읽기(조회수증가)
		NoticeVO read(int noticeNum) throws SQLException;

		// 글조회
		NoticeVO getNotice(int noticeNum) throws SQLException;

		// 글수정
		void modify(NoticeVO noticeNum) throws SQLException;

		// 글삭제
		void remove(int noticeNum) throws SQLException;
		
		//첨부파일 조회
		AttachNoticeVO getAttachByAttachNoticeAno(int AttachNoticeano)throws SQLException;
		
		//파일정보 삭제
		void removeAttachNoticeByAttachNoticeAno(int AttachNoticeano)throws SQLException;
	}
	

