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
//public class InformationDetailAction implements Action{
//
//	private InformationService informationService;
//	public void setInformationService(InformationService informationService) {
//		this.informationService = informationService;
//	}
//
//
//	@Override
//	public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
//		String url="/information/detail";
//
//		int infonum = Integer.parseInt(request.getParameter("infonum"));
//		String from = request.getParameter("from");
//		
//		try {
//			InformationVO information = null;
//			if(from!=null && from.equals("list")) {
//				information = informationService.read(infonum);
//				
//				url="redirect:/information/detail.do?infonum="+infonum;
//			}else {				
//				information = informationService.getInformation(infonum);
//			}			
//			
//
//			List<AttachInformationVO> renamedAttachList=
//					MakeFileName.parseFileNameFromAttaches(information.getAttachList(), "\\$\\$");
//			information.setAttachinformationList(renamedAttachList);
//			
//			request.setAttribute("information", information);
//		
//			return url;
//			
//		} catch (Exception e) {			
//			e.printStackTrace();			
//			url=null;
//			throw e;
//		}	
//	}
//
//
