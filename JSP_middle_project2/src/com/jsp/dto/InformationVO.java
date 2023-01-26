package com.jsp.dto;

import java.util.Date;
import java.util.List;

public class InformationVO {
	private int infoNum; // 글번호
	private String infoTitle; // 제목
	private String infoWriter; // 작성자
	private Date infoDate; // 날짜
	private int infoSearch; // 조회수
	private String infoContent; //내용
	
	private List<AttachInformationVO> attachList;

	public List<AttachInformationVO> getAttachList() {
		return attachList;
	}

	public void setAttachinformationList(List<AttachInformationVO> attachinformationList) {
		this.attachList = attachinformationList;
	}

	public int getInfoNum() {
		return infoNum;
	}

	public void setInfoNum(int infoNum) {
		this.infoNum = infoNum;
	}

	public String getInfoTitle() {
		return infoTitle;
	}

	public void setInfoTitle(String infoTitle) {
		this.infoTitle = infoTitle;
	}

	public String getInfoWriter() {
		return infoWriter;
	}

	public void setInfoWriter(String infoWriter) {
		this.infoWriter = infoWriter;
	}

	public Date getInfoDate() {
		return infoDate;
	}

	public void setInfoDate(Date infoDate) {
		this.infoDate = infoDate;
	}

	public int getInfoSearch() {
		return infoSearch;
	}

	public void setInfoSearch(int infoSearch) {
		this.infoSearch = infoSearch;
	}

	public String getInfoContent() {
		return infoContent;
	}

	public void setInfoContent(String infoContent) {
		this.infoContent = infoContent;
	}
	
	
}
