<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
				
	<!-- 타이틀 시작 -->
<div class="conTitle">
  <h3>

    공지사항

  </h3>
  <!-- 현재위치 표시 -->
  <ul class="snavi02">
    <li class="home"><a href="/hanbatlibrary/index.do">Home</a></li>

    <li>

      <a href="/hanbatlibrary/board/boardNormalList.do?boardId=normal_1020&menuSeq=6242">참여안내</a>

    </li>

    <li>

      <a href="/hanbatlibrary/hanlibHopeList.do?menuSeq=6246">공지사항</a>

    </li>

  </ul>
  <!-- 현재위치표시 끝 -->

</div>
<!-- 타이틀 끝 -->			
				<!-- contents -->
				<div class="contents">
				
					<form id="detailForm" name="detailForm" method="post"  action="modify.do">
					<input type="hidden" name="dupkey" value="MC0GCCqGSIb3DQIJAyEABFoKRhqz2RGQ82Jkhr90JMw/7RLyqyU6jyR2YowHVAU=">
    				<input type="hidden" name="questionNum" value=${question.questionNum }>
					
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
									<td colspan="3"><input type="text" name="questionTitle" value="${question.questionTitle }" class="full_size"" ></td>
								</tr>
								<tr>
									<th scope="row">작성자</th>
									<td colspan="3">${question.questionWriter }</td>
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
							<textarea id="questionContent" name="questionContent">${question.questionContent }</textarea>
						</div>
						
					</div>
					
					<div class="bd_btn_area right">
						
						<button class="btn_blue"  onclick="modify_submit();">수정하기</button>

						
						
<a href="<%=request.getContextPath() %>/question/list.do" class="btn_blue_green bt_icon arr_w"><span>목록보기</span></a>					</div>
					
				  	</form>
						
					<!-- 해당메뉴 담당부서 출력 -->
					
	                 	<link rel='stylesheet' type='text/css' href='<%=request.getContextPath() %>/resources/css/drh/layout/charge.css' media='all'/><div class='charge'><ul class='h7_ul'><li><strong>담당부서 :&nbsp;</strong>관리과</li><li><strong>담당자 :&nbsp;</strong>김우철</li><li><strong>문의전화 :&nbsp;</strong>042-270-7414</li></ul></div>
	                 
	                 
				</div>
				<!-- //contents e -->
			</div>
			<!--// conRight e --> 
			<div class="clear"></div>
		</div>
		<!--// contents_layout e -->
	</div>
	<!--// container_wrap --> 
	

<script>    
function modify_submit(){
	//alert("modify btn click");
	var form = $('form[name="modifyForm"]');

	form.submit();
}
</script>
