package com.jsp.action.notice;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.fileupload.FileItem;

import com.josephoconnell.html.HTMLInputFilter;
import com.jsp.action.Action;
import com.jsp.action.utils.GetUploadPath;
import com.jsp.action.utils.MultipartHttpServletRequestParser;
import com.jsp.controller.FileUploadResolver;
import com.jsp.dto.AttachNoticeVO;
import com.jsp.dto.NoticeVO;
import com.jsp.exception.NotMultipartFormDataException;
import com.jsp.service.NoticeService;

public class NoticeRegistAction implements Action {

	private NoticeService noticeService;
	public void setPdsService(NoticeService noticeService) {
		this.noticeService = noticeService;
	}
	

	// 1. 입력 : commons-fileupload.jar 패키지를 이용하여 FileItem 형태로 변화된 MultipartResolver 를
	// 받아 PdsVO 를 완성함.
	// 업로드 파일 환경 설정
	final private int MEMORY_THRESHOLD = 1024 * 1024 * 3; // 3MB
	final private int MAX_FILE_SIZE = 1024 * 1024 * 40; // 40MB
	final private int MAX_REQUEST_SIZE = 1024 * 1024 * 200; // 200MB
	
	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String url = "/notice/regist_success";
		
//		String title = request.getParameter("title");
//		String writer = request.getParameter("writer");
//		String content = request.getParameter("content");

		MultipartHttpServletRequestParser multi = null;
		
		List<AttachNoticeVO> attachList = null;
		
		try {
			multi = new MultipartHttpServletRequestParser(request, MEMORY_THRESHOLD, 
															MAX_FILE_SIZE,MAX_REQUEST_SIZE);
			// 파일처리
			// 실제 저장 경로를 설정.
			String uploadPath = GetUploadPath.getUploadPath("notice.upload");
			
			// 파일 저장후 List<File>를 리턴..
			FileItem[] fileItems = multi.getFileItems("uploadFile");
					
			List<File> fileList = FileUploadResolver.fileUpload(fileItems,uploadPath);
			
			// List<File> -> List<AttachVO>
			if (fileList != null) {
				attachList = new ArrayList<AttachNoticeVO>();
				for (File file : fileList) {
					AttachNoticeVO attach = new AttachNoticeVO();
					// DB에 저장할 attach에 file 내용 추가.
					attach.setAttachNoticefileName(file.getName());
					attach.setAttachNoticeuploadPath(uploadPath);
					attach.setAttachNoticefileType(file.getName().substring(file.getName().lastIndexOf(".") + 1));

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
		NoticeVO notice = new NoticeVO();
		notice.setNoticeContent(multi.getParameter("content"));;
		notice.setNoticeWriter(multi.getParameter("writer"));
		String noticetitle = HTMLInputFilter.htmlSpecialChars(multi.getParameter("title"));
		notice.setNoticeTitle(noticetitle);
		notice.setNoticeTitle(multi.getParameter("title"));
		notice.setAttachList(attachList);
		noticeService.regist(notice);
		
		
		return url;
	}

}







