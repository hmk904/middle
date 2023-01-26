<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

		
	<!-- 타이틀 시작 -->
<div class="conTitle">
  <h3>

   도서관소식지

  </h3>
  <!-- 현재위치 표시 -->
  <ul class="snavi02">
    <li class="home"><a href="/hanbatlibrary/index.do">Home</a></li>

    <li>

      <a href="/hanbatlibrary/board/boardNormalList.do?boardId=normal_1020&menuSeq=6242">참여안내</a>

    </li>

    <li>

      <a href="/hanbatlibrary/hanlibHopeList.do?menuSeq=6246">도서관소식지</a>

    </li>

  </ul>
  <!-- 현재위치표시 끝 -->

</div>
<!-- 타이틀 끝 -->			
				<!-- contents -->
				<div class="contents">
				<form id="registForm" enctype="multipart/form-data" role="form" method="post" action="regist.do" name="registForm">
					
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
									<td colspan="3"><input type="text" name="newsTitle" value="" class="full_size" ></td>
								</tr>
								<tr>
									<th scope="row">작성자</th>
									<td colspan="3"><input type="text" name="newsWriter" value="${news.newsWriter }" class="full_size" ></td>
								</tr>
								<tr>
									<th scope="row">연락처<font color="red">(필수)</font></th>
									<td colspan="3">
										<input type="text" id="tel" name="tel" value="${member.phone }" maxlength="20" ><font color="red">연락처는 - 없이 숫자로만 기입해주시기 바랍니다.</font>
									</td>
								</tr>
								<tr>
									<th scope="row">첨부파일</th>
									<td colspan="3">
								
 
 										
										<ul id="fileContainer">
											<li class="first">
												<input type="file" name="AttachNewsfileName"class="file_size">
											</li>
										</ul>
										<a type="file"class="file_plus" href="javascript:fn_appendFileInput_wapper();"> + &nbsp;추가하기</a>
										<p>※ 파일형식은 gif, jpg, jpeg, pdf, hwp, hwpx, doc, docx 형식으로 최대 7Mbyte 까지 가능합니다</p>
									</td>
								</tr>
							</tbody>
						</table>
						
						<div class="bd_desc02">
							<textarea id="newsContent" name="newsContent"></textarea>
						</div>
						
					</div>
					
					<div class="bd_btn_area right">
						
						
							<button class="btn_st st_line_blue_green bt_icon arr_g" id="registBtn" onclick="regist_go();">저장하기</button>
						&nbsp;&nbsp;&nbsp;&nbsp;
						
						
						
						<a href="/JSP_middle_project/news/list.do" class="btn_blue_green bt_icon arr_w"><span>목록보기</span></a>
					</div>
					
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
function regist_go(){
	
	var inputs = $('input[name="AttachNewsfileName"]');
	for(var input of inputs){
		//console.log(input.name+" : "+input.value);
		if(input.value==""){
			alert("파일을 선택하세요.");
			input.focus();
			input.click();
			return;
		}
	}	
	
	
	var formData = {
			newsWriter : "작성자는 필수입니다.",
			newsTitle : "제목은 필수입니다."					
	}
	
	var flag=true;
	Object.keys(formData).forEach(function(name){			
		if($("input[name='"+name+"']").val()==""){ //form.title.value
			$("input[name='"+name+"']").attr("placeholder",formData[name]);
			$("input[name='"+name+"']").attr("class","form-control is-invalid");
			$("input[name='"+name+"']").focus();
			flag = flag && false; 
		}else{
			$("input[name='"+name+"']").attr("class","form-control");
		}			
	});
	
	if(flag) $("form[role='form']").submit();
	
}






window.onload=function(){
	$('.fileInput').on('change',"input[name='AttachNewsfileName']",function(event){
		//alert($(this).val());			
		var input = $(this)[0];
		//alert(input.files[0].size);
		if(input.files[0].size > 1024*1024*40){
			alert("첨부파일크기는 40MB 이하만 가능합니다.");
			input.value="";				
		}
		
	});	
	


</script>	













	

