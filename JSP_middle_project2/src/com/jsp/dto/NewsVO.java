package com.jsp.dto;

import java.util.Date;
import java.util.List;

public class NewsVO {

	private int newsNum; // 글번호
	private String newsTitle; // 제목
	private String newsWriter; // 작성자
	private Date newsDate; // 날짜
	private int newsSearch; // 조회수
	private String newsContent; //내용

	private List<AttachNewsVO> attachList;

	public List<AttachNewsVO> getAttachList() {
		return attachList;
	}

	public void setAttachNewsList(List<AttachNewsVO> attachnewsList) {
		this.attachList = attachnewsList;
	}

	public int getNewsNum() {
		return newsNum;
	}

	public void setNewsNum(int newsNum) {
		this.newsNum = newsNum;
	}

	public String getNewsTitle() {
		return newsTitle;
	}

	public void setNewsTitle(String newsTitle) {
		this.newsTitle = newsTitle;
	}

	public String getNewsWriter() {
		return newsWriter;
	}

	public void setNewsWriter(String newsWriter) {
		this.newsWriter = newsWriter;
	}

	public Date getNewsDate() {
		return newsDate;
	}

	public void setNewsDate(Date newsDate) {
		this.newsDate = newsDate;
	}

	public int getNewsSearch() {
		return newsSearch;
	}

	public void setNewsSearch(int newsSearch) {
		this.newsSearch = newsSearch;
	}

	public String getNewsContent() {
		return newsContent;
	}

	public void setNewsContent(String newsContent) {
		this.newsContent = newsContent;
	}
}