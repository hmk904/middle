package com.jsp.action.news;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.jsp.action.Action;
import com.jsp.controller.FileDownloadResolver;
import com.jsp.dto.AttachNewsVO;
import com.jsp.service.NewsService;

public class NewsGetFileAction implements Action{
	
		
		private NewsService newsService;	
		public void setNewsService(NewsService newsService) {
			this.newsService = newsService;
		}
		
		
		@Override
		public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
			String url=null;
			
			int attachNewsano = Integer.parseInt(request.getParameter("attachNewsano"));
			
			AttachNewsVO attachnews = newsService.getAttachNewsByAttachNewsano(attachNewsano);
			
			String fileName = attachnews.getAttachNewsfileName();
			String savedPath = attachnews.getAttachNewsuploadPath();
			
			FileDownloadResolver.sendFile(fileName, savedPath, request, response);
			
			
			return url;
		}

	}




