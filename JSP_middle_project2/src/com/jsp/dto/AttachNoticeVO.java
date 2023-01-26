package com.jsp.dto;

import java.util.Date;

public class AttachNoticeVO {

	private int AttachNoticeano;			//고유번호
	private String AttachNoticeuploadPath;  //저장경로
	private String AttachNoticefileName;	//파일명
	private String AttachNoticefileType;	//파일형식
	private int AttachNoticeNum;			//자료실 글번호
	private String AttachNoticeattacher;	//등록자
	private Date AttachNoticeregDate;		//등록일
	
	public int getAttachNoticeano() {
		return AttachNoticeano;
	}
	public void setAttachNoticeano(int attachNoticeano) {
		AttachNoticeano = attachNoticeano;
	}
	public String getAttachNoticeuploadPath() {
		return AttachNoticeuploadPath;
	}
	public void setAttachNoticeuploadPath(String attachNoticeuploadPath) {
		AttachNoticeuploadPath = attachNoticeuploadPath;
	}
	public String getAttachNoticefileName() {
		return AttachNoticefileName;
	}
	public void setAttachNoticefileName(String attachNoticefileName) {
		AttachNoticefileName = attachNoticefileName;
	}
	public String getAttachNoticefileType() {
		return AttachNoticefileType;
	}
	public void setAttachNoticefileType(String attachNoticefileType) {
		AttachNoticefileType = attachNoticefileType;
	}
	public int getAttachNoticeNum() {
		return AttachNoticeNum;
	}
	public void setAttachNoticenum(int attachNoticeNum) {
		AttachNoticeNum = attachNoticeNum;
	}
	public String getAttachNoticeattacher() {
		return AttachNoticeattacher;
	}
	public void setAttachNoticeattacher(String attachNoticeattacher) {
		AttachNoticeattacher = attachNoticeattacher;
	}
	public Date getAttachNoticeregDate() {
		return AttachNoticeregDate;
	}
	public void setAttachNoticeregDate(Date attachNoticeregDate) {
		AttachNoticeregDate = attachNoticeregDate;
	}
	
	
	
}
