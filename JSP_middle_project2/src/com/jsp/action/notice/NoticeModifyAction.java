package com.jsp.action.notice;

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
import com.jsp.dto.AttachNoticeVO;
import com.jsp.dto.NoticeVO;
import com.jsp.exception.NotMultipartFormDataException;
import com.jsp.service.NoticeService;

public class NoticeModifyAction implements Action {

	private NoticeService noticeService;
	public void setPdsService(NoticeService noticeService) {
		this.noticeService = noticeService;
	}


	// 업로드 파일 환경 설정
	private static final int MEMORY_THRESHOLD = 1024 * 1024 * 3; // 3MB
	private static final int MAX_FILE_SIZE = 1024 * 1024 * 40; // 40MB
	private static final int MAX_REQUEST_SIZE = 1024 * 1024 * 200; // 200MB

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String url = "/pds/modify_success";

		MultipartHttpServletRequestParser multi = null;
		List<AttachNoticeVO> attachList = null;

		try {
			multi = new MultipartHttpServletRequestParser(request, MEMORY_THRESHOLD, MAX_FILE_SIZE, MAX_REQUEST_SIZE);

			// 파일 삭제 및 DB삭제
			String[] deleteFiles = multi.getParameterValues("deleteFile");
			if (deleteFiles != null && deleteFiles.length > 0) {
				for (String anoStr : deleteFiles) {
					int ano = Integer.parseInt(anoStr);
					AttachNoticeVO attach = noticeService.getAttachByAttachNoticeAno(ano);
					String filePath = attach.getAttachNoticeuploadPath() + File.separator + attach.getAttachNoticefileName();
					File targetFile = new File(filePath);
					if (targetFile.exists()) {
						targetFile.delete(); // 파일 삭제
					}
					noticeService.removeAttachNoticeByAttachNoticeAno(ano); // DB 삭제
				}
			}

			// 추가된 파일 저장
			FileItem[] fileItems = multi.getFileItems("uploadFile");
			if (fileItems != null && fileItems.length > 0) {
				// 파일저장
				String uploadPath = GetUploadPath.getUploadPath("pds.upload");
				List<File> fileList = FileUploadResolver.fileUpload(fileItems, uploadPath);

				// attaches
				attachList = new ArrayList<AttachNoticeVO>();
				if (fileList.size() > 0)
					for (File file : fileList) {
						AttachNoticeVO attach = new AttachNoticeVO();
						attach.setAttachNoticefileName(file.getName());
						attach.setAttachNoticeuploadPath(uploadPath);
						attach.setAttachNoticefileType(file.getName().substring(file.getName().lastIndexOf(".") + 1));
						attachList.add(attach);
						attach.setAttachNoticenum(Integer.parseInt(multi.getParameter("noticeNum")));
						attach.setAttachNoticeattacher(multi.getParameter("noticeWriter"));
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

		NoticeVO notice = new NoticeVO();
		notice.setNoticeNum(Integer.parseInt(multi.getParameter("noticeNum")));
		notice.setNoticeTitle(multi.getParameter("noticeTitle"));
		notice.setNoticeWriter(multi.getParameter("noticeWriter"));
		notice.setNoticeContent(multi.getParameter("noticeContent"));
		notice.setAttachList(attachList);

		try {

			// DB 수정
			noticeService.modify(notice);

			request.setAttribute("notice", notice);

			return url;

		} catch (Exception e) {
			// Exception 처리
			e.printStackTrace();
			throw e;
		}

	}

}
