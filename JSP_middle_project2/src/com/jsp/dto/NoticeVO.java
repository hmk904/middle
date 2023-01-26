package com.jsp.dto;

import java.util.Date;
import java.util.List;

public class NoticeVO {

	private int noticeNum;			//글번호
	private String noticeTitle;		//글제목
	private String noticeWriter;	//작성자
	private Date noticeDate;		//작성일
	private int noticeSearch;		//조회수
	private String noticeContent;	//내용


	private List<AttachNoticeVO> attachList;

	public List<AttachNoticeVO> getAttachList() {
		return attachList;
	}

	public void setAttachList(List<AttachNoticeVO> attachList) {
		this.attachList = attachList;
	}

	public int getNoticeNum() {
		return noticeNum;
	}

	public void setNoticeNum(int noticeNum) {
		this.noticeNum = noticeNum;
	}

	public String getNoticeTitle() {
		return noticeTitle;
	}

	public void setNoticeTitle(String noticeTitle) {
		this.noticeTitle = noticeTitle;
	}

	public String getNoticeWriter() {
		return noticeWriter;
	}

	public void setNoticeWriter(String noticeWriter) {
		this.noticeWriter = noticeWriter;
	}

	public Date getNoticeDate() {
		return noticeDate;
	}

	public void setNoticeDate(Date noticeDate) {
		this.noticeDate = noticeDate;
	}

	public int getNoticeSearch() {
		return noticeSearch;
	}

	public void setNoticeSearch(int noticeSearch) {
		this.noticeSearch = noticeSearch;
	}
	public String getNoticeContent() {
		return noticeContent;
	}
	
	public void setNoticeContent(String noticeContent) {
		this.noticeContent = noticeContent;
	}

}
