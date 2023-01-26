package com.jsp.action.news;

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
import com.jsp.dto.AttachNewsVO;
import com.jsp.dto.NewsVO;
import com.jsp.exception.NotMultipartFormDataException;
import com.jsp.service.NewsService;


public class NewsModifyAction implements Action{
	
	private NewsService newsService;

	public void setNewsService(NewsService newsService) {
		this.newsService = newsService;
	}

	// 업로드 파일 환경 설정
	private static final int MEMORY_THRESHOLD = 1024 * 1024 * 3; // 3MB
	private static final int MAX_FILE_SIZE = 1024 * 1024 * 40; // 40MB
	private static final int MAX_REQUEST_SIZE = 1024 * 1024 * 200; // 200MB


	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String url = "/news/modify_success";

		MultipartHttpServletRequestParser multi = null;
		List<AttachNewsVO> attachnewsList = null;

		try {
			multi = new MultipartHttpServletRequestParser(request, MEMORY_THRESHOLD, MAX_FILE_SIZE, MAX_REQUEST_SIZE);

			// 파일 삭제 및 DB삭제
			String[] deleteFiles = multi.getParameterValues("deleteFile");
			if (deleteFiles != null && deleteFiles.length > 0) {
				for (String attachNewsanoStr : deleteFiles) {
					int attachNewsano = Integer.parseInt(attachNewsanoStr);
					AttachNewsVO attachNews = newsService.getAttachNewsByAttachNewsano(attachNewsano);
					String filePath = attachNews.getAttachNewsuploadPath() + File.separator + attachNews.getAttachNewsfileName();
					File targetFile = new File(filePath);
					if (targetFile.exists()) {
						targetFile.delete(); // 파일 삭제
					}
					newsService.removeAttachNewsByAttachNewsano(attachNewsano); // DB 삭제
				}
			}

			// 추가된 파일 저장
			FileItem[] fileItems = multi.getFileItems("uploadFile");
			if (fileItems != null && fileItems.length > 0) {
				// 파일저장
				String uploadPath = GetUploadPath.getUploadPath("news.upload");
				List<File> fileList = FileUploadResolver.fileUpload(fileItems, uploadPath);

				// attaches
				attachnewsList = new ArrayList<AttachNewsVO>();
				if (fileList.size() > 0)
					for (File file : fileList) {
						AttachNewsVO attachnews = new AttachNewsVO();
						attachnews.setAttachNewsfileName(file.getName());
						attachnews.setAttachNewsuploadPath(uploadPath);
						attachnews.setAttachNewsfileType(file.getName().substring(file.getName().lastIndexOf(".") + 1));
						attachnewsList.add(attachnews);
						attachnews.setAttachNewsnum(Integer.parseInt(multi.getParameter("attachNewsnum")));
						attachnews.setAttachNewsattacher(multi.getParameter("attachNewsattacher"));
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

		NewsVO news = new NewsVO();
		news.setNewsNum(Integer.parseInt(multi.getParameter("newsNum")));
		news.setNewsTitle(multi.getParameter("newsTitle"));
		news.setNewsWriter(multi.getParameter("newsWriter"));
		news.setNewsContent(multi.getParameter("newsContent"));
		news.setAttachNewsList(attachnewsList);

		try {

			// DB 수정
			newsService.modify(news);

			request.setAttribute("news", news);

			return url;

		} catch (Exception e) {
			// Exception 처리
			e.printStackTrace();
			throw e;
		}

	}

}
