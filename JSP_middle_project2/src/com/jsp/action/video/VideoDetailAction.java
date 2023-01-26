package com.jsp.action.video;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.jsp.action.Action;
import com.jsp.action.utils.MakeFileName;
import com.jsp.dto.VideoVO;
import com.jsp.service.VideoService;

public class VideoDetailAction implements Action{

	private VideoService videoService;
	public void setVideoService(VideoService videoService) {
		this.videoService = videoService;
	}


	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String url="/video/detail";

		int videoNum = Integer.parseInt(request.getParameter("videoNum"));
		String from = request.getParameter("from");
		
		try {
			VideoVO video = null;
			if(from!=null && from.equals("list")) {
				video = videoService.read(videoNum);
				
				url="redirect:/video/detail.do?videoNum="+videoNum;
			}else {				
				video = videoService.getVideo(videoNum);
			}			
			

			
			
			request.setAttribute("video", video);
		
			return url;
			
		} catch (Exception e) {			
			e.printStackTrace();			
			url=null;
			throw e;
		}	
	}

}
