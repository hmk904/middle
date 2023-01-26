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

      <a href="#">참여안내</a>

    </li>

    <li>

      <a href="#">공지사항</a>

    </li>

  </ul>
  <!-- 현재위치표시 끝 -->

</div>
<!-- 타이틀 끝 -->
<!-- contents -->
<div class="contents">
						<form enctype="multipart/form-data" role="form" method="post" action="regist.do" name="registForm">
 					<div class="bd_tbl mob_row">
							<colgroup><col class="bd_type01_tit">
							<col class="bd_type01_cont">
							<col class="bd_type01_tit">
							<col>
							</colgroup>
							<br>
							 <div class="form-group">
								<label for="title">제 목</label> 
								<input type="text" id="title"
									name='title' class="full_size" placeholder="제목을 쓰세요">
							</div>
							<div class="form-group">
								<label for="writer">작성자</label> 
								<input type="text" id="writer" 
									name="writer" class="full_size" value="${notice.noticeWriter }">
							</div>
							<div class="form-group">
							<label for="phone">연락처<font color="red">(필수)</font></label>
							<input type="text" id="tel" name="tel" value="${member.phone }" maxlength="20" ><font color="red">연락처는 - 없이 숫자로만 기입해주시기 바랍니다.</font>
							</div>
							<div class="form-group">								
								<div class="card card-outline card-success">
									<div class="card-header">
										<h5 style="display:inline;line-height:40px;">첨부파일 : </h5><br>
										&nbsp;&nbsp;<button class="btn btn-xs btn-primary"
										onclick="addFile_go();"	type="button" id="addFileBtn">Add File</button>
									</div>									
									<div class="card-footer fileInput">
									</div>
								</div>
							</div>
							<div class="form-group">
								<label for="content">내 용</label>
								<textarea class="form-control" name="content" id="content" rows="5"
									placeholder="1500자 내외로 작성하세요."></textarea>
							</div>
					<div class="bd_btn_area right">
						<button type="button" class="btn_st st_line_blue_green bt_icon arr_g" id="registBtn" onclick="regist_go();">저장하기</button>
						<button type="button" class="btn_st st_line_blue_green bt_icon arr_g" id="cancelBtn" onclick="CloseWindow();">목록보기</button>
					</div><!--end card-footer  -->
						</form>
					</div><!--end card-body  -->

  <!-- 해당메뉴 담당부서 출력 -->

  <link rel='stylesheet' type='text/css' href='<%=request.getContextPath() %>/resources/css/drh/layout/charge.css' media='all' />
  <div class='charge'>
    <ul class='h7_ul'>
      <li><strong>담당부서 :&nbsp;</strong>관리과</li>
      <li><strong>담당자 :&nbsp;</strong>김우철</li>
      <li><strong>문의전화 :&nbsp;</strong>042-270-7414</li>
    </ul>
  </div>

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
  function regist_go() {
    var inputs = $('input[name="AttachNoticefileName"]');
    for (var input of inputs) {
      //console.log(input.name+" : "+input.value);
      if (input.value == "") {
        alert("파일을 선택하세요.");
        input.focus();
        input.click();
        return;
      }
    }
    var formData = {
      title: "제목은 필수입니다."
    }
    var flag = true;
    Object.keys(formData).forEach(function(name) {
      if ($("input[name='" + name + "']").val() == "") { //form.title.value
        $("input[name='" + name + "']").attr("placeholder", formData[name]);
        $("input[name='" + name + "']").attr("class", "form-control is-invalid");
        $("input[name='" + name + "']").focus();
        flag = flag && false;
      } else {
        $("input[name='" + name + "']").attr("class", "form-control");
      }
    });
    if (flag) $("form[role='form']").submit();
    
    
  }
  var dataNum = 0;

  function addFile_go() {
    var div = $('<div>').addClass("inputRow").attr("data-no", dataNum);
    var input = $('<input>').attr({
      "type": "file",
      "name": "AttachNoticefileName"
    }).css("display", "inline");
    div.append(input).append("<button onclick='remove_go(" + dataNum + ");' style='border:0;outline:0;' class='badge bg-red' type='button'>X</button>");
    $('.fileInput').append(div);
    dataNum++;
  }

  function remove_go(dataNum) {
    //alert(dataNum);
    $('div[data-no="' + dataNum + '"]').remove();
  }
  window.onload = function() {
    $('.fileInput').on('change', "input[name='AttachNoticefileName']", function(event) {
      //alert($(this).val());			
      var input = $(this)[0];
      //alert(input.files[0].size);
      if (input.files[0].size > 1024 * 1024 * 40) {
        alert("첨부파일크기는 40MB 이하만 가능합니다.");
        input.value = "";
      }
    });
  }
</script>