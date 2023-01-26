package com.jsp.action.information;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.jsp.action.Action;
import com.jsp.controller.FileDownloadResolver;
import com.jsp.dto.AttachInformationVO;
import com.jsp.service.InformationService;

public class InformationGetFileAction implements Action{

	private InformationService informationService;
	public void setInformationService(InformationService informationService) {
		this.informationService = informationService;
	}



	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String url=null;
		
		int AttachInformationano = Integer.parseInt(request.getParameter("AttachInformationano"));
		
		AttachInformationVO attach = informationService.getAttachInformationByAttachInformationano(AttachInformationano);
		
		String fileName = attach.getAttachInformationfileName();
		String savedPath = attach.getAttachInformationuploadPath();
		
		FileDownloadResolver.sendFile(fileName, savedPath, request, response);
		
		
		return url;
	}

}
