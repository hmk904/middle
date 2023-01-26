package com.jsp.action.news;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.jsp.action.Action;
import com.jsp.action.utils.MakeFileName;
import com.jsp.dto.AttachNewsVO;
import com.jsp.dto.NewsVO;
import com.jsp.service.NewsService;


public class NewsDetailAction implements Action {

	private NewsService newsService;
	public void setNewsService(NewsService newsService) {
		this.newsService = newsService;
	}
	
	 
	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String url="/news/detail";

		int newsNum = Integer.parseInt(request.getParameter("newsNum"));
		String from = request.getParameter("from");
		
		try {
			NewsVO news = null;
			if(from!=null && from.equals("list")) {
				news = newsService.read(newsNum);
				
				url="redirect:/news/detail.do?newsNum="+newsNum;
			}else {				
				news = newsService.getNews(newsNum);
			}			
			

//			List<AttachNewsVO> renamedAttachList=
//					MakeFileName.parseFileNameFromAttaches(news.getAttachList(), "\\$\\$");
//			news.setAttachNewsList(renamedAttachList);
			
			request.setAttribute("news", news);
		
			return url;
			
		} catch (Exception e) {			
			e.printStackTrace();			
			url=null;
			throw e;
		}	
		
	}
}







