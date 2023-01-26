package com.jsp.dto;

import java.util.Date;

public class AttachInformationVO {
	private int AttachInformationano; 			 //등록번호
	private String AttachInformationuploadPath;	 //저장경로
	private String AttachInformationfileName;  	 //파일명
	private String AttachInformationfileType;//파일형식
	private String AttachInformationattacher;//아이디
	private Date AttachInformationregDate;    	 //등록일
	private int AttachInformationnum; 			 //글번호
	public int getAttachInformationano() {
		return AttachInformationano;
	}
	public String getAttachInformationuploadPath() {
		return AttachInformationuploadPath;
	}
	public void setAttachInformationano(int attachInformationano) {
		AttachInformationano = attachInformationano;
	}
	public void setAttachInformationuploadPath(String attachInformationuploadPath) {
		AttachInformationuploadPath = attachInformationuploadPath;
	}
	public String getAttachInformationfileName() {
		return AttachInformationfileName;
	}
	public void setAttachInformationfileName(String attachInformationfileName) {
		AttachInformationfileName = attachInformationfileName;
	}
	public String getAttachInformationfileType() {
		return AttachInformationfileType;
	}
	public void setAttachInformationfileType(String attachInformationfileType) {
		AttachInformationfileType = attachInformationfileType;
	}
	public String getAttachInformationattacher() {
		return AttachInformationattacher;
	}
	public void setAttachInformationattacher(String attachInformationattacher) {
		AttachInformationattacher = attachInformationattacher;
	}
	public Date getAttachInformationregDate() {
		return AttachInformationregDate;
	}
	public void setAttachInformationregDate(Date attachInformationregDate) {
		AttachInformationregDate = attachInformationregDate;
	}
	public int getAttachInformationnum() {
		return AttachInformationnum;
	}
	public void setAttachInformationnum(int attachInformationnum) {
		AttachInformationnum = attachInformationnum;
	}
	
}
