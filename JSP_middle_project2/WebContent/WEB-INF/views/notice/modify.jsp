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
				
					<form id="detailForm" name="detailForm" method="post" enctype="multipart/form-data" action="">
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
									<td colspan="3">${notice.noticeTitle }</td>
								</tr>
								<tr>
									<th scope="row">작성자</th>
									<td colspan="3">${loginUser.id }</td>
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
							<textarea id="content" name="content">${notice.noticeContent }</textarea>
						</div>
						
					</div>
					
					<div class="bd_btn_area right">
						<button type="button" class="btn_st st_line_blue_green bt_icon arr_g" id="modifyBtn" onclick="modify_submit();">수정하기</button>
						<button type="button" class="btn_blue_green bt_icon arr_w" id="cancelBtn" onclick="history.go(-1);">뒤로가기</button>
						
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
function modify_submit(){
	//alert("modify btn click");
	var form = $('form[name="modifyForm"]');
	
	//파일 첨부확인
	var files = $('input[name="AttachNoticefileName"]');
	for(var file of files){
		console.log(file.name+" : "+file.value);
		if(file.value==""){
			alert("파일을 선택하세요.");
			file.focus();
			return false;
		}
	}	
	
	form.submit();
}

</script>

<script>
function removeFile_go(className){
	var li = $('li.'+className);
	
	if(!confirm(li.attr("file-name")+"을 정말 삭제하시겠습니까?")){
		return;
	}    
	
	li.remove();
	
	var input=$('<input>').attr({"type":"hidden",
		 "name":"deleteFile",
		 "value":li.attr("target-ano")
		}); 
	$('form[role="form"]').prepend(input);
}

var dataNum=0;

function addFile_go(){
	//alert("add file btn");
	
	var attachedFile=$('a[name="attachedFile"]').length; //기존파일
	var inputFile=$('input[name="AttachNoticefileName"]').length;	 //추가된 파일
	var attachCount=attachedFile+inputFile; //기존파일 + 추가된파일 개수
	
	if(attachCount >=5){
		alert("파일추가는 5개까지만 가능합니다.");
		return;
	}
	
	var div=$('<div>').addClass("inputRow").attr("data-no",dataNum);
	var input=$('<input>').attr({"type":"file","name":"uploadFile"}).css("display","inline");
	div.append(input).append("<button onclick='remove_go("+dataNum+");' style='border:0;outline:0;' class='badge bg-red' type='button'>X</button>");	
	$('.fileInput').append(div);	
	dataNum++;
}
</script>	

