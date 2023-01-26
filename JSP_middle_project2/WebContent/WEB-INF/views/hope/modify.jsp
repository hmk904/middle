<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>  

<div class="contents">
            
               <form id="detailForm" name="detailForm" method="post" action="modify.do">
               <input type="hidden" name="dupkey" value="MC0GCCqGSIb3DQIJAyEABFoKRhqz2RGQ82Jkhr90JMw/7RLyqyU6jyR2YowHVAU=">
               <input type="hidden" name="hopeNum" value="${hope.hopeNum }" />
               
               <div class="bd_type01_view">
                  <table class="bd_tbl mob_row">
                     <caption>질문의 내용 공개여부 첨부파일 내용을 입력하는 화면입니다</caption>
                     <colgroup><col class="bd_type01_tit">
                     <col class="bd_type01_cont">
                     <col class="bd_type01_tit">
                     <col>
                     </colgroup><tbody>
                        <tr>
                           <th scope="row">제목</th>
                           <td colspan="3"><input type="text" name="hopeTitle" value=" ${hope.hopeTitle }" class="full_size" ></td>
                        </tr>
                        <tr>
                           <th scope="row">작성자</th>
                           <td colspan="3">${hope.hopeWriter }</td>
                        </tr>
                        <tr>
                           <th scope="row">공개여부</th>
                           <td colspan="3">
                              <input type="radio" name="colmn1Cont" id="viewFlagY" title="공개" value="Y"  style="vertical-align: middle">  <label for="viewFlagY">공개</label>&nbsp;&nbsp;&nbsp;
                              <input type="radio" name="colmn1Cont" id="viewFlagN" title="비공개" value="N"  style="vertical-align: middle"> <label for="viewFlagN">비공개</label>
                           </td>
                        </tr>
                        <tr>
                           <th scope="row">연락처<font color="red">(필수)</font></th>
                           <td colspan="3">
                              <input type="text" id="tel" name="tel" value="" maxlength="20" ><font color="red">연락처는 - 없이 숫자로만 기입해주시기 바랍니다.</font>
                           </td>
                        </tr>
                        
                     </tbody>
                  </table>
                  
                  <div class="bd_desc02">
                     <textarea id="hopeContent" name="hopeContent">${hope.hopeContent }</textarea>
                  </div>
                  
              
               </div>
               
					<div class="bd_btn_area right">
						
						<button class="btn_blue" onclick="modify_submit();">수정하기</button>
                  
                  
                  
                  <a href="/JSP_middle_project/hope/list.do" class="btn_blue_green bt_icon arr_w"><span>목록보기</span></a>
               </div>
               
                 </form>
                  
               <!-- 해당메뉴 담당부서 출력 -->
               
                       <link rel='stylesheet' type='text/css' href='/css/drh/layout/charge.css' media='all'/><div class='charge'><ul class='h7_ul'><li><strong>담당부서 :&nbsp;</strong>관리과</li><li><strong>담당자 :&nbsp;</strong>김우철</li><li><strong>문의전화 :&nbsp;</strong>042-270-7414</li></ul></div>
                    
                    
            </div>
            <!-- //contents e -->
       
        <script>    
function modify_submit(){
	
	var form = $('form[name="modifyForm"]');
	
	form.submit();
}
</script>


         