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

public class InformationModifyAction implements Action{

	private InformationService	informationService;
	public void setInformationService(InformationService informationService) {
		this.informationService = informationService;
	}

	// 업로드 파일 환경 설정
		private static final int MEMORY_THRESHOLD = 1024 * 1024 * 3; // 3MB
		private static final int MAX_FILE_SIZE = 1024 * 1024 * 40; // 40MB
		private static final int MAX_REQUEST_SIZE = 1024 * 1024 * 200; // 200MB
	

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String url = "/information/modify_success";

		MultipartHttpServletRequestParser multi = null;
		List<AttachInformationVO> attachList = null;

		try {
			multi = new MultipartHttpServletRequestParser(request, MEMORY_THRESHOLD, MAX_FILE_SIZE, MAX_REQUEST_SIZE);

			// 파일 삭제 및 DB삭제
			String[] deleteFiles = multi.getParameterValues("deleteFile");
			if (deleteFiles != null && deleteFiles.length > 0) {
				for (String anoStr : deleteFiles) {
					int AttachInformationano = Integer.parseInt(anoStr);
					AttachInformationVO attach = informationService.getAttachInformationByAttachInformationano(AttachInformationano);
					String filePath = attach.getAttachInformationuploadPath() + File.separator + attach.getAttachInformationfileName();
					File targetFile = new File(filePath);
					if (targetFile.exists()) {
						targetFile.delete(); // 파일 삭제
					}
					informationService.removeAttachInformationByAttachInformationano(AttachInformationano); // DB 삭제
				}
			}

			// 추가된 파일 저장
			FileItem[] fileItems = multi.getFileItems("uploadFile");
			if (fileItems != null && fileItems.length > 0) {
				// 파일저장
				String uploadPath = GetUploadPath.getUploadPath("information.upload");
				List<File> fileList = FileUploadResolver.fileUpload(fileItems, uploadPath);

				// attaches
				attachList = new ArrayList<AttachInformationVO>();
				if (fileList.size() > 0)
					for (File file : fileList) {
						AttachInformationVO attach = new AttachInformationVO();
						attach.setAttachInformationfileName(file.getName());
						attach.setAttachInformationuploadPath(uploadPath);
						attach.setAttachInformationfileType(file.getName().substring(file.getName().lastIndexOf(".") + 1));
						attachList.add(attach);
						attach.setAttachInformationnum(Integer.parseInt(multi.getParameter("AttachInformationnum")));
						attach.setAttachInformationattacher(multi.getParameter("AttachInformationattacher"));
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

		InformationVO information = new InformationVO();
		information.setInfoNum(Integer.parseInt(multi.getParameter("infoNum")));
		information.setInfoTitle(multi.getParameter("infoTitle"));
		information.setInfoWriter(multi.getParameter("infoWriter"));
		information.setInfoContent(multi.getParameter("infoContent"));
		information.setAttachinformationList(attachList);

		try {

			// DB 수정
			informationService.modify(information);       

			request.setAttribute("information", information);

			return url;

		} catch (Exception e) {
			// Exception 처리
			e.printStackTrace();
			throw e;
		}

	}

}
