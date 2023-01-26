<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<div class="contents">
            
               <form id="Form" name="Form" method="post" enctype="multipart/form-data" action="regist.do">
               <input type="hidden" name="dupkey" value="MC0GCCqGSIb3DQIJAyEABFoKRhqz2RGQ82Jkhr90JMw/7RLyqyU6jyR2YowHVAU=">
                <input type="hidden" name="menuSeq" value="6246">
                <input type="hidden" name="ntatcSeq" value="">
                <input type="hidden" name="uprNtatcSeq" value="">
                <input type="hidden" name="commentDepth" value="">
               <input type="hidden" name="deleteAtchFileList" id="deleteAtchFileList" value="">
               <input type="hidden" name="colmn2Cont" value="">
                <input type="hidden" name="searchCondition" value="">
               <input type="hidden" name="searchKeyword" value="">
               
               <div class="bd_type01_view">
                  <table class="bd_tbl mob_row">
                     <caption>내용을 입력하는 화면입니다</caption>
                     <colgroup><col class="bd_type01_tit">
                     <col class="bd_type01_cont">
                     <col class="bd_type01_tit">
                     <col>
                     </colgroup><tbody>
                        <tr>
                           <th scope="row">제목</th>
                           <td colspan="3"><input type="text" name="infoTitle" value="" class="full_size" ></td>
                        </tr>
                        <tr>
                           <th scope="row">작성자</th>
                           <td colspan="3"><input type="text" id="infoWriter" name="infoWriter" value="${information.infoWriter }" class="full_size" ></td>
                        </tr>
                        
                        <tr>
                           <th scope="row">연락처<font color="red"></font></th>
                           <td colspan="3">
                              <input type="text" id="infoPhone" name="infoPhone" value="${member.phone }" maxlength="20" ><font color="red">연락처는 - 없이 숫자로만 기입해주시기 바랍니다.</font>
                           </td>
                        </tr> 
                        
                        
                        <tr>
                           <th scope="row">첨부파일</th>
                           <td colspan="3">
                              <ul id="fileContainer">
                                 <li class="first">
                                    <input type="file" onclick="addFile_go();" id="AttachInformationano" name="AttachInformationano" class="file_size">
                                 </li>
                              </ul>
                              <a class="file_plus" href="javascript:fn_appendFileInput_wapper();"> + &nbsp;추가하기</a>
                              <p>※ 파일형식은 gif, jpg, jpeg, pdf, hwp, hwpx, doc, docx 형식으로 최대 7Mbyte 까지 가능합니다</p>
                           </td>
                        </tr>
                        
                        
                        
                        
                        
                     </tbody>
                  </table>
                  
                  <div class="bd_desc02">
                     <textarea id="infoContent" name="infoContent"></textarea>
                  </div>
                  
                  
               </div>
               
               <div class="bd_btn_area right">
                <div style=" display: flex; justify-content: flex-end; margin-top:0 !important;">
					
					<button class="btn_blue bt_icon arr_w" onclick="regist_go();">저장하기</button>
					
					<a href="/JSP_middle_project/information/list.do" class="btn_blue_green bt_icon arr_w"><span>목록보기</span></a>
					
               </div>
                  
               <!-- 해당메뉴 담당부서 출력 -->
               
                       <link rel='stylesheet' type='text/css' href='/css/drh/layout/charge.css' media='all'/><div class='charge'><ul class='h7_ul'><li><strong>담당부서 :&nbsp;</strong>관리과</li><li><strong>담당자 :&nbsp;</strong>김우철</li><li><strong>문의전화 :&nbsp;</strong>042-270-7414</li></ul></div>
                    
                    
            </div>
            <!-- //contents e -->
         </div>
         <!--// conRight e --> 
         <div class="clear"></div>
      <!--// contents_layout e -->
   <!--// container_wrap --> 
   
<script>
	function regist_go() {

		var input_infoTitle = $('input[name="infoTitle"]');
		if (!$('input[name="infoTitle"]').val()) {
			alert("제목은 필수입니다.");
			input_infoTitle.focus();
			return;
		}
		
		var input_infoContent = $('input[name="infoContent"]');
		if (!$('input[name="infoContent"]').val()) {
			alert("내용은 필수입니다.");
			input_infoContent.focus();
			return;
		}
		var input_infoPhone = $('input[name="infoPhone"]');
		if (!$('input[name="infoPhone"]').val()) {
			alert("연락처는 필수입니다.");
			input_infoPhone.focus();
			return;
		}
		var input_infoWriter = $('input[name="infoWriter"]');
		if (!$('input[name="infoWriter"]').val()) {
			alert("연락처는 필수입니다.");
			input_infoWriter.focus();
			return;
		}
		
	}
</script>

      