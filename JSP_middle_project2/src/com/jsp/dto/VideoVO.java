package com.jsp.dto;

import java.util.Date;

public class VideoVO {

	private int VideoNum; //글번호
	private String VideoTitle; //제목
	private String VideoWriter; //작성자
	private Date VideoDate; //작성일
	private int VideoSearch; //조회수
	private String VideoContent; //내용
	
	public VideoVO() {}
	
	public VideoVO(int VideoNum, String VideoTitle, String VideoWriter, String VideoContent) {
		super();
		this.VideoNum = VideoNum;
		this.VideoTitle = VideoTitle;
		this.VideoWriter = VideoWriter;
		this.VideoContent = VideoContent;
	}
	
	
	
	public int getVideoNum() {
		return VideoNum;
	}
	public void setVideoNum(int videoNum) {
		VideoNum = videoNum;
	}
	public String getVideoTitle() {
		return VideoTitle;
	}
	public void setVideoTitle(String videoTitle) {
		VideoTitle = videoTitle;
	}
	public String getVideoWriter() {
		return VideoWriter;
	}
	public void setVideoWriter(String videoWriter) {
		VideoWriter = videoWriter;
	}
	public Date getVideoDate() {
		return VideoDate;
	}
	public void setVideoDate(Date videoDate) {
		VideoDate = videoDate;
	}
	public int getVideoSearch() {
		return VideoSearch;
	}
	public void setVideoSearch(int videoSearch) {
		VideoSearch = videoSearch;
	}
	public String getVideoContent() {
		return VideoContent;
	}
	public void setVideoContent(String videoContent) {
		VideoContent = videoContent;
	}
	
	
	
}
