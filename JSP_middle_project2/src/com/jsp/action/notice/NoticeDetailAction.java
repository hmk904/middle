package com.jsp.action.notice;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.jsp.action.Action;
import com.jsp.action.utils.MakeFileName;
import com.jsp.dto.AttachNoticeVO;
import com.jsp.dto.NoticeVO;
import com.jsp.service.NoticeService;

public class NoticeDetailAction implements Action{

	private NoticeService noticeService;
	public void setNoticeService(NoticeService noticeService) {
		this.noticeService = noticeService;
	}

	
	
	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String url="/notice/detail";
		
		int noticeNum = Integer.parseInt(request.getParameter("noticeNum"));
		String from = request.getParameter("from");
		
		try {
			NoticeVO notice = null;
			if(from!=null && from.equals("list")) {
				notice = noticeService.read(noticeNum);
				
				url="redirect:/notice/detail.do?noticeNum="+noticeNum;
			}else {				
				notice = noticeService.getNotice(noticeNum);
			}			
			

			List<AttachNoticeVO> renamedAttachList=
					MakeFileName.parseFileNameFromAttaches(notice.getAttachList(), "\\$\\$");
			notice.setAttachList(renamedAttachList);
			
			request.setAttribute("notice", notice);
		
			return url;
			
		} catch (Exception e) {			
			e.printStackTrace();			
			url=null;
			throw e;
		}	
	}

}






