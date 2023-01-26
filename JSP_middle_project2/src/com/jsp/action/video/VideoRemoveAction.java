package com.jsp.action.video;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.jsp.action.Action;
import com.jsp.service.VideoService;

public class VideoRemoveAction implements Action{

	private VideoService videoService;
	public void setVideoService(VideoService videoService) {
		this.videoService = videoService;
	}
	

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String url = "/video/remove_success";
		
		int videoNum = Integer.parseInt(request.getParameter("videoNum"));
		
		try {
			//DB 내용 삭제
			videoService.remove(videoNum);		
			return url;
		}catch (Exception e) {			
			e.printStackTrace();			
			throw e;
		}
	}

}
