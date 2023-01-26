package com.jsp.dto;

import java.util.Date;

public class QuestionVO {

	private int questionNum;			//글번호
	private String questionTitle;		//글제목
	private String questionWriter;		//작성자
	private Date questionDate;			//작성일
	private int questionSearch;			//조회수
	private String questionContent;		//내용
	
	public String getQuestionContent() {
		return questionContent;
	}
	public void setQuestionContent(String questionContent) {
		this.questionContent = questionContent;
	}
	public int getQuestionNum() {
		return questionNum;
	}
	public void setQuestionNum(int questionNum) {
		this.questionNum = questionNum;
	}
	public String getQuestionTitle() {
		return questionTitle;
	}
	public void setQuestionTitle(String questionTitle) {
		this.questionTitle = questionTitle;
	}
	public String getQuestionWriter() {
		return questionWriter;
	}
	public void setQuestionWriter(String questionWriter) {
		this.questionWriter = questionWriter;
	}
	public Date getQuestionDate() {
		return questionDate;
	}
	public void setQuestionDate(Date questionDate) {
		this.questionDate = questionDate;
	}
	public int getQuestionSearch() {
		return questionSearch;
	}
	public void setQuestionSearch(int questionSearch) {
		this.questionSearch = questionSearch;
	}
	
	
	
}
