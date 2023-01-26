package com.jsp.dto;

public class LibraryBookVO {
	
	private int LibraryBookNum;
	private String LibraryBookTitle;
	private String LibraryBookWriter;
	private String LibraryBookCompany;
	private String LibraryBookManagerId;
	private String LibraryBookDataType;
	private String LibraryBookIssue;
	private String LibraryBookFormal;
	private String LibraryBookGeneral;
	private String LibraryBookNote;
	
	public LibraryBookVO() {}
	
	public LibraryBookVO(int libraryBookNum, String libraryBookTitle, String libraryBookWriter,
			String libraryBookCompany, String libraryBookManagerId, String libraryBookDataType, String libraryBookIssue,
			String libraryBookFormal, String libraryBookGeneral, String libraryBookNote) {
		super();
		LibraryBookNum = libraryBookNum;
		LibraryBookTitle = libraryBookTitle;
		LibraryBookWriter = libraryBookWriter;
		LibraryBookCompany = libraryBookCompany;
		LibraryBookManagerId = libraryBookManagerId;
		LibraryBookDataType = libraryBookDataType;
		LibraryBookIssue = libraryBookIssue;
		LibraryBookFormal = libraryBookFormal;
		LibraryBookGeneral = libraryBookGeneral;
		LibraryBookNote = libraryBookNote;
	}

	public int getLibraryBookNum() {
		return LibraryBookNum;
	}

	public void setLibraryBookNum(int libraryBookNum) {
		LibraryBookNum = libraryBookNum;
	}

	public String getLibraryBookTitle() {
		return LibraryBookTitle;
	}

	public void setLibraryBookTitle(String libraryBookTitle) {
		LibraryBookTitle = libraryBookTitle;
	}

	public String getLibraryBookWriter() {
		return LibraryBookWriter;
	}

	public void setLibraryBookWriter(String libraryBookWriter) {
		LibraryBookWriter = libraryBookWriter;
	}

	public String getLibraryBookCompany() {
		return LibraryBookCompany;
	}

	public void setLibraryBookCompany(String libraryBookCompany) {
		LibraryBookCompany = libraryBookCompany;
	}

	public String getLibraryBookManagerId() {
		return LibraryBookManagerId;
	}

	public void setLibraryBookManagerId(String libraryBookManagerId) {
		LibraryBookManagerId = libraryBookManagerId;
	}

	public String getLibraryBookDataType() {
		return LibraryBookDataType;
	}

	public void setLibraryBookDataType(String libraryBookDataType) {
		LibraryBookDataType = libraryBookDataType;
	}

	public String getLibraryBookIssue() {
		return LibraryBookIssue;
	}

	public void setLibraryBookIssue(String libraryBookIssue) {
		LibraryBookIssue = libraryBookIssue;
	}

	public String getLibraryBookFormal() {
		return LibraryBookFormal;
	}

	public void setLibraryBookFormal(String libraryBookFormal) {
		LibraryBookFormal = libraryBookFormal;
	}

	public String getLibraryBookGeneral() {
		return LibraryBookGeneral;
	}

	public void setLibraryBookGeneral(String libraryBookGeneral) {
		LibraryBookGeneral = libraryBookGeneral;
	}

	public String getLibraryBookNote() {
		return LibraryBookNote;
	}

	public void setLibraryBookNote(String libraryBookNote) {
		LibraryBookNote = libraryBookNote;
	}

	
}
