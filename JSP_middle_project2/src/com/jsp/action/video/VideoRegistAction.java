package com.jsp.action.video;


import static org.hamcrest.CoreMatchers.theInstance;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.jsp.action.Action;
import com.jsp.action.utils.MultipartHttpServletRequestParser;
import com.jsp.dto.VideoVO;
import com.jsp.service.VideoService;

public class VideoRegistAction implements Action{

	private VideoService videoService;
	public void setVideoService(VideoService videoService) {
		this.videoService = videoService;
	}

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String url = "/video/regist_success";

		
		
		//DB
		VideoVO video = new VideoVO();
		video.setVideoContent(request.getParameter("videoContent"));
		video.setVideoWriter(request.getParameter("videoWriter"));
		video.setVideoTitle(request.getParameter("videoTitle"));

		//int videoNum = Integer.parseInt(request.getParameter("videoNum"));
		//video.setVideoNum(videoNum);
		
		
		try {
			videoService.regist(video);
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
		return url;
		
		
	}

}
