package com.jsp.action.news;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.jsp.action.Action;
import com.jsp.service.NewsService;


public class NewsRemoveAction implements Action{
	private NewsService newsService;
	public void setNewsService(NewsService newsService) {
		this.newsService = newsService;
	}
	
	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String url = "/news/remove_success";
		
		int newsNum = Integer.parseInt(request.getParameter("newsNum"));
		
		try {
			//DB 내용 삭제
			newsService.remove(newsNum);		
			return url;
		}catch (Exception e) {			
			e.printStackTrace();			
			throw e;
		}
	}

}

