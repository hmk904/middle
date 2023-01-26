package com.jsp.action.video;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.jsp.action.Action;
import com.jsp.action.utils.MakeFileName;
import com.jsp.dto.VideoVO;
import com.jsp.service.VideoService;

public class VideoModifyFormAction implements Action{

	public VideoService videoService;
	public void setVideoService(VideoService videoService) {
		this.videoService = videoService;
	}


	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String url = "/video/modify";

		int videoNum = Integer.parseInt(request.getParameter("videoNum"));

		try {
			VideoVO video = videoService.getVideo(videoNum);

			
			
			request.setAttribute("video", video);

			
		} catch (Exception e) {
			// error 작성
			e.printStackTrace();
			throw e;
		}
		return url;
	}

}
