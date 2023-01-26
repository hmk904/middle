package com.jsp.action.information;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.fileupload.FileItem;

import com.jsp.action.Action;
import com.jsp.action.utils.GetUploadPath;
import com.jsp.action.utils.MultipartHttpServletRequestParser;
import com.jsp.controller.FileUploadResolver;
import com.jsp.dto.AttachInformationVO;
import com.jsp.dto.InformationVO;
import com.jsp.exception.NotMultipartFormDataException;
import com.jsp.service.InformationService;

public class InformationRegistAction implements Action{

	private InformationService informationService;
	public void setInformationService(InformationService informationService) {
		this.informationService = informationService;
	}

	final private int MEMORY_THRESHOLD = 1024 * 1024 * 3; // 3MB
	final private int MAX_FILE_SIZE = 1024 * 1024 * 40; // 40MB
	final private int MAX_REQUEST_SIZE = 1024 * 1024 * 200; // 200MB

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {

		String url = "/information/regist_success";

		MultipartHttpServletRequestParser multi = null;
		
		List<AttachInformationVO> attachList = null;
		
		try {
			multi = new MultipartHttpServletRequestParser(request, MEMORY_THRESHOLD, 
															MAX_FILE_SIZE,MAX_REQUEST_SIZE);
			// 파일처리
			// 실제 저장 경로를 설정.
			String uploadPath = GetUploadPath.getUploadPath("information.upload");
			
			// 파일 저장후 List<File>를 리턴..
			FileItem[] fileItems = multi.getFileItems("uploadFile");
					
			List<File> fileList = FileUploadResolver.fileUpload(fileItems,uploadPath);
			
			// List<File> -> List<AttachVO>
			if (fileList != null) {
				attachList = new ArrayList<AttachInformationVO>();
				for (File file : fileList) {
					AttachInformationVO attach = new AttachInformationVO();
					// DB에 저장할 attach에 file 내용 추가.
					attach.setAttachInformationfileName(file.getName());
					attach.setAttachInformationuploadPath(uploadPath);
					attach.setAttachInformationfileType(file.getName().substring(file.getName().lastIndexOf(".") + 1));

					attachList.add(attach);
				}
			}
			
		} catch (NotMultipartFormDataException e) {
			e.printStackTrace();
			response.sendError(HttpServletResponse.SC_BAD_REQUEST);
			return null;
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
		
		//DB
		InformationVO information = new InformationVO();
		information.setInfoContent(multi.getParameter("infoContent"));;
		information.setInfoWriter(multi.getParameter("infoWriter"));
		information.setInfoTitle(multi.getParameter("infoTitle"));
		information.setAttachinformationList(attachList);
		
		
		try {
			informationService.regist(information);
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
		return url;
		
		
	}

}
