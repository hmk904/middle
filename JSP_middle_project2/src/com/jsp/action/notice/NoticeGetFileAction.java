package com.jsp.action.notice;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.jsp.action.Action;
import com.jsp.controller.FileDownloadResolver;
import com.jsp.dto.AttachNoticeVO;
import com.jsp.service.NoticeService;

public class NoticeGetFileAction implements Action{
	
	private NoticeService noticeService;
	public void setPdsService(NoticeService noticeService) {
		this.noticeService = noticeService;
	}
	
	
	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String url=null;
		
		int ano = Integer.parseInt(request.getParameter("AttachNoticeano"));
		
		AttachNoticeVO attach = noticeService.getAttachByAttachNoticeAno(ano);
		
		String fileName = attach.getAttachNoticefileName();
		String savedPath = attach.getAttachNoticeuploadPath();
		
		FileDownloadResolver.sendFile(fileName, savedPath, request, response);
		
		return url;
	}

}







