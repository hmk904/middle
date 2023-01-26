package com.jsp.dto;

import java.util.Date;

public class AttachNewsVO {
	
	private int AttachNewsano; 			 //등록번호
	private String AttachNewsuploadPath;	 //저장경로
	private String AttachNewsfileName;  	 //파일명
	private String AttachNewsfileType;//파일형식
	private String AttachNewsattacher;//아이디
	private Date AttachNewsregDate;    	 //등록일
	private int AttachNewsnum; 			 //글번호
	public int getAttachNewsano() {
		return AttachNewsano;
	}
	public void setAttachNewsano(int attachNewsano) {
		AttachNewsano = attachNewsano;
	}
	public String getAttachNewsuploadPath() {
		return AttachNewsuploadPath;
	}
	public void setAttachNewsuploadPath(String attachNewsuploadPath) {
		AttachNewsuploadPath = attachNewsuploadPath;
	}
	public String getAttachNewsfileName() {
		return AttachNewsfileName;
	}
	public void setAttachNewsfileName(String attachNewsfileName) {
		AttachNewsfileName = attachNewsfileName;
	}
	public String getAttachNewsfileType() {
		return AttachNewsfileType;
	}
	public void setAttachNewsfileType(String attachNewsfileType) {
		AttachNewsfileType = attachNewsfileType;
	}
	public String getAttachNewsattacher() {
		return AttachNewsattacher;
	}
	public void setAttachNewsattacher(String attachNewsattacher) {
		AttachNewsattacher = attachNewsattacher;
	}
	public Date getAttachNewsregDate() {
		return AttachNewsregDate;
	}
	public void setAttachNewsregDate(Date attachNewsregDate) {
		AttachNewsregDate = attachNewsregDate;
	}
	public int getAttachNewsnum() {
		return AttachNewsnum;
	}
	public void setAttachNewsnum(int attachNewsnum) {
		AttachNewsnum = attachNewsnum;
	}
	
	
}
