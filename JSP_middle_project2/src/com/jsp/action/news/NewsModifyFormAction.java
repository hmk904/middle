package com.jsp.action.news;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.jsp.action.Action;
import com.jsp.action.utils.MakeFileName;
import com.jsp.dto.AttachNewsVO;
import com.jsp.dto.NewsVO;
import com.jsp.service.NewsService;


public class NewsModifyFormAction implements Action{
	
	public NewsService newsService;
	
	public void setNewsService(NewsService newsService) {
		this.newsService = newsService;
	}

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String url = "/news/modify";

		int newsnum = Integer.parseInt(request.getParameter("newsNum"));

		try {
			NewsVO news = newsService.getNews(newsnum);

//			List<AttachNewsVO> renamedAttachnewsList=
//					MakeFileName.parseFileNameFromAttaches(news.getAttachList(), "\\$\\$");
//			news.setAttachNewsList(renamedAttachnewsList);
			
			request.setAttribute("news", news);

			
		} catch (Exception e) {
			// error 작성
			e.printStackTrace();
			throw e;
		}
		return url;
	}

}
