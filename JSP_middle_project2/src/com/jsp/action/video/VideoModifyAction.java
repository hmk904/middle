package com.jsp.action.video;

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
import com.jsp.dto.VideoVO;
import com.jsp.exception.NotMultipartFormDataException;
import com.jsp.service.VideoService;

public class VideoModifyAction implements Action{

	private VideoService	videoService;
	public void setVideoService(VideoService videoService) {
		this.videoService = videoService;
	}

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String url = "/video/modify_success";

		


		VideoVO video = new VideoVO();
		
		video.setVideoTitle(request.getParameter("videoTitle"));
		video.setVideoWriter(request.getParameter("videoWriter"));
		video.setVideoContent(request.getParameter("videoContent"));
		
		int videoNum=Integer.parseInt(request.getParameter("videoNum"));
		video.setVideoNum(videoNum);
		request.setAttribute("video", video);

		try {

			// DB 수정
			videoService.modify(video);

			

			

		} catch (Exception e) {
			// Exception 처리
			e.printStackTrace();
			throw e;
		}
		return url;
	}

}
