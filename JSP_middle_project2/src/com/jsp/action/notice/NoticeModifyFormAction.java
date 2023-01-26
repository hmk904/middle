package com.jsp.action.notice;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.jsp.action.Action;
import com.jsp.action.utils.MakeFileName;
import com.jsp.dto.AttachNoticeVO;
import com.jsp.dto.NoticeVO;
import com.jsp.service.NoticeService;

public class NoticeModifyFormAction implements Action {

	private NoticeService noticeService;
	public void setPdsService(NoticeService noticeService) {
		this.noticeService = noticeService;
	}


	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String url = "/notice/modify";

		int Num = Integer.parseInt(request.getParameter("noticeNum"));

		try {
			NoticeVO notice = noticeService.getNotice(Num);

			List<AttachNoticeVO> renamedAttachList=
					MakeFileName.parseFileNameFromAttaches(notice.getAttachList(), "\\$\\$");
			notice.setAttachList(renamedAttachList);
			
			request.setAttribute("notice", notice);

			return url;
		} catch (Exception e) {
			// error 작성
			e.printStackTrace();
			throw e;
		}
	}

}
