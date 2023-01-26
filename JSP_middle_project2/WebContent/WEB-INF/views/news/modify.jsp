<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>  

<div class="contents">
            
               <form id="detailForm" name="detailForm" method="post" enctype="multipart/form-data" action="modify.do">
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
                     <caption>질문의 내용 공개여부 첨부파일 내용을 입력하는 화면입니다</caption>
                     <colgroup><col class="bd_type01_tit">
                     <col class="bd_type01_cont">
                     <col class="bd_type01_tit">
                     <col>
                     </colgroup><tbody>
                        <tr>
                           <th scope="row">제목</th>
                           <td colspan="3"><input type="text" name="title" value=" ${news.newsTitle }" class="full_size"" ></td>
                        </tr>
                        <tr>
                           <th scope="row">작성자</th>
                           <td colspan="3"> ${news.newsWriter}</td>
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
                        <tr>
                           <th scope="row">첨부파일</th>
                           <td colspan="3">
                        
 
                               
                              <ul id="fileContainer">
                                 <li class="first">
                                    <input type="file" name="fileData" class="file_size">
                                 </li>
                              </ul>
                              <a class="file_plus" href="javascript:fn_appendFileInput_wapper();"> + &nbsp;추가하기</a>
                              <p>※ 파일형식은 gif, jpg, jpeg, pdf, hwp, hwpx, doc, docx 형식으로 최대 7Mbyte 까지 가능합니다</p>
                           </td>
                        </tr>
                     </tbody>
                  </table>
                  
                  <div class="bd_desc02">
                     <textarea id="content" name="content"> ${news.newsContent }</textarea>
                  </div>
                  
                  <div class="box mt10">
                     <div class="box_cont">
                        <p class="mt10">
                        ■ 개인정보 수집(성명,휴대전화,메일 등) 및 활용(신고처리)에 동의합니다. (미동의 시 접수불가)
                        <label for="chk_clause1">
                           <input  id="chk_clause1" type="checkbox"> 동의함
                        </label>
                        <br>
                        ■ 글작성 후 담당자가 접수하여 처리중,처리완료일 경우 글 수정 및 삭제가 불가합니다. (미확인 시 접수불가)
                        <label for="chk_clause2">
                           <input  id="chk_clause2" type="checkbox"> 확인함
                        </label>
                        <br>
                        </p>
                     </div>
                  </div>
               </div>
               
               <div class="bd_btn_area right">
                  
                  
                  
                     <a href="#" onclick="fn_Save('ADD'); return false;" class="btn_st st_line_blue_green bt_icon arr_g"><span>저장하기</span></a>
                  
                   <a href="/JSP_middle_project/news/list.do" class="btn_blue_green bt_icon arr_w"><span>목록보기</span></a>
               </div>
               
                 </form>
                  
               <!-- 해당메뉴 담당부서 출력 -->
               
                       <link rel='stylesheet' type='text/css' href='/css/drh/layout/charge.css' media='all'/><div class='charge'><ul class='h7_ul'><li><strong>담당부서 :&nbsp;</strong>관리과</li><li><strong>담당자 :&nbsp;</strong>김우철</li><li><strong>문의전화 :&nbsp;</strong>042-270-7414</li></ul></div>
                    
                    
            </div>
            <!-- //contents e -->
           