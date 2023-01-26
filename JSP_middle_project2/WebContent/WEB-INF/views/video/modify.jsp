<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<div class="contents">
            
               <form id="form" name="form" method="post"  action="modify.do">
               
               <input type="hidden" name="videoNum" value="${video.videoNum }">
               
               <div class="bd_type01_view">
                  <table class="bd_tbl mob_row">
                     <caption>질문의 내용 공개여부 내용을 입력하는 화면입니다</caption>
                     <colgroup><col class="bd_type01_tit">
                     <col class="bd_type01_cont">
                     <col class="bd_type01_tit">
                     <col>
                     </colgroup>
                     
                     <tbody>
                        <tr>
                           <th scope="row">제목</th>
                           <td colspan="3"><input type="text" name="videoTitle" value="${video.videoTitle }" class="full_size" ></td>
                        </tr>
                        <tr>
                           <th scope="row">작성자</th>
                           <td colspan="3">${video.videoWriter }</td>
                        </tr>
                        
                        <tr>
                           <th scope="row">연락처<font color="red"></font></th>
                           <td colspan="3">
                              <input type="text" id="tel" name="tel" value="" maxlength="20" ><font color="red">연락처는 - 없이 숫자로만 기입해주시기 바랍니다.</font>
                           </td>
                        </tr>
                        
                        
                        
                     </tbody>
                  </table>
                  
                  <div class="bd_desc02">
                     <textarea id="videoContent" name="videoContent">${video.videoContent }</textarea>
                  </div>
                  
               
               </div>
               
               <div class="bd_btn_area right">
                  
                  
                  <button class="btn_blue bt_icon arr_w" onclick="modify_submit();">수정하기</button>
                     
                  
                  <a href="/JSP_middle_project/video/list.do" class="btn_blue_green bt_icon arr_w"><span>목록보기</span></a>
               </div>
               
                 </form>
                  
               <!-- 해당메뉴 담당부서 출력 -->
               
                       <link rel='stylesheet' type='text/css' href='/css/drh/layout/charge.css' media='all'/><div class='charge'><ul class='h7_ul'><li><strong>담당부서 :&nbsp;</strong>관리과</li><li><strong>담당자 :&nbsp;</strong>김우철</li><li><strong>문의전화 :&nbsp;</strong>042-270-7414</li></ul></div>
                    
                    
            </div>
      
   
   <script>    
function modify_submit(){
	
	var form = $('form[name="modifyForm"]');
	
	form.submit();
}
</script>
   
      