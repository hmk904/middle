package com.jsp.action.librarybook;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.jsp.action.Action;
import com.jsp.command.SearchCriteria;
import com.jsp.service.LibraryBookService;
import com.jsp.service.NewBookService;

public class LibraryBookListAction implements Action {
	
	private LibraryBookService libraryBookService;
	public void setLibraryBookService(LibraryBookService libraryBookService) {
		this.libraryBookService = libraryBookService;
	}

	
	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response)
			throws Exception {
		String url="/librarybook/list";
		
//		if(!LoginCheckUtils.proccess(request, response)) return;
		
		String searchType = request.getParameter("searchType");
		String keyword = request.getParameter("keyword");
		String perPageNumParam = request.getParameter("perPageNum");
		String pageParam=request.getParameter("page");
		
		SearchCriteria cri = new SearchCriteria();
		cri.setKeyword(keyword);
		cri.setSearchType(searchType);
		
		boolean criFlag = true;
		criFlag = criFlag && pageParam !=null
				          && !pageParam.isEmpty()
				          && perPageNumParam !=null
				          && !perPageNumParam.isEmpty();
		if(criFlag) {
			try {
				cri.setPage(Integer.parseInt(pageParam));
				cri.setPerPageNum(Integer.parseInt(perPageNumParam));
			}catch(Exception e) {
				response.sendError(response.SC_BAD_REQUEST);
				return null;
			}
		}
			
		
		try {
			Map<String,Object> dataMap = libraryBookService.getList(cri);
			request.setAttribute("dataMap", dataMap);
			return url;
			
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
	}

}
