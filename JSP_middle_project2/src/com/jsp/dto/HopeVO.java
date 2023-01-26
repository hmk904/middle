package com.jsp.dto;

import java.util.Date;

public class HopeVO {

	private int hopeNum;  //글번호
	private String hopeTitle; //제목
	private String hopeWriter; //작성자
	private Date hopeDate; //날짜
	private int hopeSearch; //조회수
	private String hopeContent; // 내용(추가)
	
	


	public int getHopeNum() {
		return hopeNum;
	}
	public void setHopeNum(int hopeNum) {
		this.hopeNum = hopeNum;
	}
	public String getHopeTitle() {
		return hopeTitle;
	}
	public void setHopeTitle(String hopeTitle) {
		this.hopeTitle = hopeTitle;
	}
	public String getHopeWriter() {
		return hopeWriter;
	}
	public void setHopeWriter(String hopeWriter) {
		this.hopeWriter = hopeWriter;
	}
	public Date getHopeDate() {
		return hopeDate;
	}
	public void setHopeDate(Date hopeDate) {
		this.hopeDate = hopeDate;
	}
	public int getHopeSearch() {
		return hopeSearch;
	}
	public void setHopeSearch(int hopeSearch) {
		this.hopeSearch = hopeSearch;
	}
	public String getHopeContent() {
		return hopeContent;
	}
	public void setHopeContent(String hopeContent) {
		this.hopeContent = hopeContent;
	}
	
	
}