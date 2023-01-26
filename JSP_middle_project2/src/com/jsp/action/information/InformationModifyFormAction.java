//package com.jsp.action.information;
//
//import java.util.List;
//
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//
//import com.jsp.action.Action;
//import com.jsp.action.utils.MakeFileName;
//import com.jsp.dto.AttachInformationVO;
//import com.jsp.dto.InformationVO;
//import com.jsp.service.InformationService;
//
//public class InformationModifyFormAction implements Action{
//
//	public InformationService informationService;
//	public void setInformationService(InformationService informationService) {
//		this.informationService = informationService;
//	}
//
//
//
//
//	@Override
//	public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
//		String url = "/information/modify";
//
//		int infonum = Integer.parseInt(request.getParameter("infonum"));
//
//		try {
//			InformationVO information = informationService.getInformation(infonum);
//
//			List<AttachInformationVO> renamedAttachList=
//					MakeFileName.parseFileNameFromAttaches(information.getAttachList(), "\\$\\$");
//			information.setAttachinformationList(renamedAttachList);
//			
//			request.setAttribute("information", information);
//
//			return url;
//		} catch (Exception e) {
//			// error 작성
//			e.printStackTrace();
//			throw e;
//		}
//	}
//	
//
//}
