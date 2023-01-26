package com.jsp.service;

import java.sql.SQLException;
import java.util.Map;

import com.jsp.command.SearchCriteria;
import com.jsp.dto.VideoVO;

public interface VideoService {

		// 리스트조회
		Map<String, Object> getVideoList(SearchCriteria cri) throws SQLException;

		// 글작성
		void regist(VideoVO video) throws SQLException;

		// 글읽기(조회수증가)
		VideoVO read(int videoNum) throws SQLException;

		// 글조회
		VideoVO getVideo(int videoNum) throws SQLException;

		// 글수정
		void modify(VideoVO videoNum) throws SQLException;

		// 글삭제
		void remove(int videoNum) throws SQLException;
	
	
}
