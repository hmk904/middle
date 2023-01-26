
package com.jsp.dto;

public class NewBookVO {

	
	private int NewBookNum; //ISBN
	private String NewTitle; //책제목
	private String NewWriter; //저자
	private String NewCompany; //출판사
	private String NewManagerId; //아이디
	private String NewDataType; //자료유형
	private String NewIssue; //발행사항
	private String NewFormal; //형태사항
	private String NewGeneral; //총서사항
	private String NewNote; //서지주기
	
	public NewBookVO() {}
	
	public NewBookVO(int newBookNum, String newTitle, String newWriter, String newCompany, String newManagerId,
			String newDataType, String newIssue, String newFormal, String newGeneral, String newNote) {
		super();
		NewBookNum = newBookNum;
		NewTitle = newTitle;
		NewWriter = newWriter;
		NewCompany = newCompany;
		NewManagerId = newManagerId;
		NewDataType = newDataType;
		NewIssue = newIssue;
		NewFormal = newFormal;
		NewGeneral = newGeneral;
		NewNote = newNote;
	}



	public int getNewBookNum() {
		return NewBookNum;
	}
	public void setNewBookNum(int newBookNum) {
		NewBookNum = newBookNum;
	}
	public String getNewTitle() {
		return NewTitle;
	}
	public void setNewTitle(String newTitle) {
		NewTitle = newTitle;
	}
	public String getNewWriter() {
		return NewWriter;
	}
	public void setNewWriter(String newWriter) {
		NewWriter = newWriter;
	}
	public String getNewCompany() {
		return NewCompany;
	}
	public void setNewCompany(String newCompany) {
		NewCompany = newCompany;
	}
	public String getNewManagerId() {
		return NewManagerId;
	}
	public void setNewManagerId(String newManagerId) {
		NewManagerId = newManagerId;
	}
	public String getNewDataType() {
		return NewDataType;
	}
	public void setNewDataType(String newDataType) {
		NewDataType = newDataType;
	}
	public String getNewIssue() {
		return NewIssue;
	}
	public void setNewIssue(String newIssue) {
		NewIssue = newIssue;
	}
	public String getNewFormal() {
		return NewFormal;
	}
	public void setNewFormal(String newFormal) {
		NewFormal = newFormal;
	}
	public String getNewGeneral() {
		return NewGeneral;
	}
	public void setNewGeneral(String newGeneral) {
		NewGeneral = newGeneral;
	}
	public String getNewNote() {
		return NewNote;
	}
	public void setNewNote(String newNote) {
		NewNote = newNote;
	}
}
