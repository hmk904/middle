/** 노드타입 : 엘리먼트 노드 */
var ELEMENT_NODE = 1;
/** 노드타입 : 텍스트 노드 */
var TEXT_NODE = 3;

/**
 * Pagination Link 
 * @param pageNo 페이지번호
 */
function fn_link_page (pageNo){
	var pageForm     = document.getElementById('pageForm');
	pageForm.pageIndex.value = pageNo;
	pageForm.submit();
}

/** 페이지 링크 */
function fn_linkPage(page){
	var pageForm = document.getElementById('pageFrm');
	pageForm.pageIndex.value = page;
	pageForm.submit();
}

/**
 * 검색 
 */
function fn_search (){
	
	if(document.getElementById("boardId").value != "itm_0001"){
		var searchForm     = document.getElementById('searchForm');
		if(searchForm.pageIndex != undefined){
			searchForm.pageIndex.value = 1;
		}
		searchForm.submit();
	}
	
	if(document.getElementById("boardId").value == "itm_0001"){
		var searchForm     = document.getElementById('searchForm');
		if(searchForm.pageIndex != undefined){
			searchForm.pageIndex.value = 1;
		}
		searchForm.action = document.getElementById("searchUrl").value ;
		searchForm.submit() ; 
	}
	
}

/**
 * 게시물 등록, 수정 
 * @param board_type 'normal' | 'blog' | 'gallery' | 'minwon'  | 'text' | 'vod' | 'comments'
 */
function fn_submit (boardType){
	var boardForm     = document.getElementById(boardType);
	
	var isValidated = false;
	
/*	// 유효성 검증 (validator.xml 을 통한 검증)
	isValidated = 
		(boardType == 'normal' 	 && validateNormalBoardVO(boardForm)) ||
		(boardType == 'blog' 	 && validateBlogBoardVO(boardForm)) ||
		(boardType == 'gallery'  && validateGalleryBoardVO(boardForm));
	
	try {
		// 사용자 유효성 검증 
		isValidated = isValidated && validateBoardByUser();
	} catch (e) {
		
	}*/
	
	if(document.getElementById("boardId").value == "djPol_0011"){ //대전자치경찰(홍보자료) 추가
		var catgry = $("#categorySeq").val() ; 
		if( catgry == ''){
			alert("분류선택을 선택해주세요.");
			document.getElementById("categorySeq").focus();
			return false;
		}
		
		if($("#writeMode").val() == 'ADD'){
			if(catgry == '1'){
				if($('[name="fileData"]').val() == null || $('[name="fileData"]').val() == ''){
					alert("카드뉴스 사진파일을 선택해주세요.");
					return false;
				}
			}else if(catgry == '2'){
				if($('[name="imageData"]').val() == null || $('[name="imageData"]').val() == ''){
					alert("동영상 사진파일을 선택해주세요.");
					return false;
				}
			}
		}
		
	}
	
	if(document.getElementById("boardId").value != "minwon_0005"){
		if($.trim($('input[id="title"]').val()).length == 0){
			if(document.getElementById("boardId").value == "minwon_0004"){
				alert("제안제목을 입력해주세요.");
			}else if(document.getElementById("boardId").value == "compe_01"){
				alert("제안명을 입력해주세요.");
				$("#title").focus();
				
			}else{
				alert("제목을 입력해주세요.");
			}
			return false;
		}
	}
	if(document.getElementById("boardId").value == "minwon_0005"){
		if($('input[id="listUrl"]').val().indexOf("/itm/") == -1){
			if (document.getElementById("birthday1").value.length == 0 || document.getElementById("birthday2").value.length == 0 || document.getElementById("birthday3").value.length == 0) {
				alert("생년월일를 선택하십시요.");
				document.getElementById("birthday1").focus();
				return;
			}
			
			if($.trim($('input[id="tel"]').val()).length == 0){
				alert("휴대전화를 입력해주세요.");
				$('input[id="tel"]').focus();
				return false;
			}
			
			if($.trim($('input[id="colmn2Cont"]').val()).length == 0){
				alert("용도를 입력해주세요.");
				$('input[id="colmn2Cont"]').focus();
				return false;
			}
			
			if(document.getElementById("colmn3Cont").value.length == 0){
				alert("귀속년도를 입력해주세요.");
				document.getElementById("colmn3Cont").focus();
				return false;
			}
			
			/*if($.trim($('input[id="colmn4Cont"]').val()).length == 0){
				alert("근로소득를 입력해주세요.");
				$('input[id="colmn4Cont"]').focus();
				return false;
			}*/
			
			if($("input[name=colmn5Cont]:checked").val() == undefined){
				alert("수령방법을 입력해주세요.");
				document.getElementById("colmn5Cont1").focus();
				return false;
			}
			
			if($.trim($('textarea[id="colmn6Cont"]').val()).length == 0){
				alert("수령방법 추가정보를 입력해주세요.");
				document.getElementById("colmn6Cont").focus();
				return false;
			}
			
			if($('input[id="listUrl"]').val().indexOf("/itm/") == -1){
				if(document.getElementById("chk_clause").checked == false){
					alert('개인정보이용동의에 동의 하셔야 진행할 수 있습니다.');
					$('input[id="chk_clause"]').focus();
					return false;
				}
				if(document.getElementById("chk_clause2").checked == false){
					alert('글 주의사항을 확인하셔야 접수됩니다.');
					$('input[id="chk_clause2"]').focus();
					return false;
				}
			}
		
			if ($('#birthday3').val().length > 0 ){
				boardForm.colmn1Cont.value =  $('#birthday1').val() + "-" + $('#birthday2').val() + "-" + $('#birthday3').val();
			}
		}
	}
	
	if(document.getElementById("boardId").value == "HEA_normal_0013"){
		if($('input[id="listUrl"]').val().indexOf("/itm/") == -1){
			if($("input[name=colmn1Cont]:checked").val() == undefined){
				alert("공개여부를 입력해주세요.");
				$('input[id="colmn1Cont1"]').focus();
				return false;
			}
			if($.trim($('textarea[id="content"]').val()).length == 0){
				alert("내용을 입력해주세요.");
				$('input[id="content"]').focus();
				return false;
			}
		}
	}
	
	if(document.getElementById("boardId").value == "minwon_0001" || document.getElementById("boardId").value == "homepage_0001"){
		if($.trim($('input[id="writerNm"]').val()).length == 0){
			alert("작성자를 입력해주세요.");
			$('input[id="writerNm"]').focus();
			return false;
		}
		
		if($.trim($('input[id="tel"]').val()).length == 0){
			alert("연락처를 입력해주세요.");
			$('input[id="tel"]').focus();
			return false;
		}
		
		if(document.getElementById("boardId").value == "homepage_0001"){
			if($.trim($('input[id="categorySeq"]').val()).length == 0){
				alert("분류선택를 입력해주세요.");
				$('input[id="categorySeq"]').focus();
				return false;
			}
		}
		
		if($('input[id="listUrl"]').val().indexOf("/itm/") == -1){
			
			if(document.getElementById("boardId").value == "minwon_0001"){
			boardForm.email.value =  boardForm.email1.value + "@" + boardForm.email2.value;
				if($.trim($('input[id="email1"]').val()).length == 0 || $.trim($('input[id="email2"]').val()).length == 0){
					if(!boardForm.email.value.isEmail()){
						alert("메일주소를 입력해주세요.");
						boardForm.email1.focus();
				     	return false;
				    }
			    }
			}
			if($.trim($('textarea[id="content"]').val()).length == 0){
				alert("내용을 입력해주세요.");
				$('input[id="content"]').focus();
				return false;
			}
		}
		
		if($('input[id="listUrl"]').val().indexOf("/itm/") == -1){
			if(document.getElementById("chk_clause").checked == false){
				alert('개인정보이용동의에 동의 하셔야 진행할 수 있습니다.');
				$('input[id="chk_clause"]').focus();
				return false;
			}
			if(document.getElementById("chk_clause2").checked == false){
				alert('글 주의사항을 확인하셔야 접수됩니다.');
				$('input[id="chk_clause2"]').focus();
				return false;
			}
		}
	}
	
	if(document.getElementById("boardId").value == "minwon_0002" || document.getElementById("boardId").value == "minwon_0003" || document.getElementById("boardId").value == "minwon_0004" || document.getElementById("boardId").value == "tram_05" || document.getElementById("boardId").value == "reform_01"){
		
		if($.trim($('input[id="writerNm"]').val()).length == 0){
			alert("작성자를 입력해주세요.");
			$('input[id="writerNm"]').focus();
			return false;
		}
		if($('input[id="listUrl"]').val().indexOf("/itm/") == -1){
			if($.trim($('input[id="zipCd"]').val()).length == 0){
				alert("우편번호를 입력해주세요.");
				$('input[id="colmn5Cont"]').focus();
				return false;
			}
			
			if($.trim($('input[id="defaultAddr"]').val()).length == 0){
				alert("기본주소를 입력해주세요.");
				$('input[id="colmn6Cont"]').focus();
				return false;
			}
		}
		
		if($.trim($('input[id="tel"]').val()).length == 0){
			alert("휴대전화를 입력해주세요.");
			$('input[id="tel"]').focus();
			return false;
		}  

		if($("#email1").val() != null && $("#email1").val() != ''){

			if($("#email2").val() == null || $("#email2").val() == ''){
				
				alert("이메일 형식을 선택해주세요.");
				$("email_domain").focus();
				return false;
			}
		}
			
		if(document.getElementById("boardId").value == "reform_01"){
			
			if($("#colmn1Cont").val().trim() == "" || $("#colmn2Cont").val().trim() == ""){
				
				alert("자치법규 정보를 입력해주세요.");;
				return false;
			}
			
		}



		if(document.getElementById("boardId").value == "minwon_0003" || document.getElementById("boardId").value == "minwon_0004"){
			if($('input[id="listUrl"]').val().indexOf("/itm/") == -1){
				
				if(document.getElementById("boardId").value == "reform_01"){
					
					if($("input[name=secretYn]:checked").val() == undefined){
						alert("공개여부를 입력해주세요.");
						$('input[id="secretYn"]').focus();
						return false;
					}
				}else{
					
					if($("input[name=colmn3Cont]:checked").val() == undefined){
						alert("공개여부를 입력해주세요.");
						$('input[id="colmn3Cont1"]').focus();
						return false;
					}
				}
			}
		}
		
		
		if($('input[id="listUrl"]').val().indexOf("/itm/") == -1){
			boardForm.email.value =  boardForm.email1.value + "@" + boardForm.email2.value;
			
			if(document.getElementById("boardId").value != "minwon_0004"){
				if($.trim($('textarea[id="content"]').val()).length == 0){
					alert("내용을 입력해주세요.");
					$('input[id="content"]').focus();
					return false;
				}
			}
		}
		
		if($('input[id="listUrl"]').val().indexOf("/itm/") == -1){
			if(document.getElementById("chk_clause").checked == false){
				alert('개인정보이용동의에 동의 하셔야 진행할 수 있습니다.');
				$('input[id="chk_clause"]').focus();
				return false;
			}
			if(document.getElementById("chk_clause2").checked == false){
				alert('글 주의사항을 확인하셔야 접수됩니다.');
				$('input[id="chk_clause2"]').focus();
				return false;
			}
			if(document.getElementById("boardId").value == "minwon_0004" || document.getElementById("boardId").value == "reform_01"){
				if(document.getElementById("chk_clause3").checked == false){
					alert('개인정보 제3자 제공동의를 동의하셔야 접수됩니다.');
					$('input[id="chk_clause3"]').focus();
					return false;
				}
				if($('[name="editMode"]').val() == 'ADD'){
					if($('[name="fileData"]').val() == null || $('[name="fileData"]').val() == ''){
						alert("첨부파일을 선택해주세요.");
						return false;
					}
				}
			}
		}
	}
	
	if(document.getElementById("boardId").value == "localJoin_0001" || document.getElementById("boardId").value == "localJoin_0002" || document.getElementById("boardId").value == "compe_01"){
		
		if($.trim($('input[id="tel"]').val()).length == 0){
			alert("연락처를 입력해주세요.");
			$('input[id="tel"]').focus();
			return false;
		}
		
		if($('input[id="listUrl"]').val().indexOf("/itm/") == -1){
			
			if(document.getElementById("boardId").value != "compe_01"){
				
				boardForm.email.value =  boardForm.email1.value + "@" + boardForm.email2.value;
				if($.trim($('input[id="email1"]').val()).length == 0 || $.trim($('input[id="email2"]').val()).length == 0){
					if(!boardForm.email.value.isEmail()){
						alert("메일주소를 입력해주세요.");
						boardForm.email1.focus();
				     	return false;
				    }
			    }
			}
			
			
			
			if($('[name="editMode"]').val() == 'ADD'){
				if($('[name="fileData"]').val() == null || $('[name="fileData"]').val() == ''){
					alert("첨부파일을 선택해주세요.");
					return false;
				}
			}
			
			if(document.getElementById("boardId").value == "compe_01"){
				
				if($("#agree").is(":checked") == false){
			 		alert("개인정보 수집/이용에 동의하셔야 합니다");
			 		$("#agree").focus();
					return;
			 	}
			}else{
				
				if(document.getElementById("chk_clause").checked == false){
					alert('개인정보이용동의에 동의 하셔야 진행할 수 있습니다.');
					$('input[id="chk_clause"]').focus();
					return false;
				}
			}
			
		}
	}
	
	if(document.getElementById("boardId").value == "sel_0007"){
		if($.trim($('input[id="colmn2Cont"]').val()).length == 0){
			alert("일시를 입력해주세요.");
			$('input[id="colmn2Cont"]').focus();
			return false;
		}
		
		if($.trim($('input[id="colmn3Cont"]').val()).length == 0){
			alert("장소를 입력해주세요.");
			$('input[id="colmn3Cont"]').focus();
			return false;
		}
		
		if($("input[name=colmn5Cont]:checked").val() == undefined){
			alert("타기관 접수여부를 선택하여 주시기 바랍니다.");
			$('input[id="colmn5Cont"]').focus();
			return false;
		}
		
	}
	
	if(document.getElementById("boardId").value == "tax_0006" || document.getElementById("boardId").value == "tou_0009"){
		
		if($.trim($('input[id="tel"]').val()).length == 0){
			
			alert("전화번호를 입력해주세요.");
			return false;
		}
		
		if($('input[id="listUrl"]').val().indexOf("/itm/") == -1){
			
			if(document.getElementById("boardId").value == "tax_0006"){
				if($.trim($('input[id="email"]').val()).length == 0){
					
					alert("E-mail을 입력해주세요.");
					return false;
				}
			}
			
				
			if(document.getElementById("chk_clause").checked == false){
				
				alert('개인정보이용동의에 동의 하셔야 진행할 수 있습니다.');
				return false;
			}
			
		}
	}
	
	if(document.getElementById("boardId").value == "normal_0082" && $("#listUrl").val().indexOf('gar') != -1){
		
		if(document.getElementById("chk_clause").checked == false){
			
			alert('개인정보이용동의에 동의 하셔야 진행할 수 있습니다.');
			return false;
		}
	}


	/*20181217 대전관광 js추가 */
	if(document.getElementById("boardId").value == "tou_0012" || document.getElementById("boardId").value == "tou_0013" || document.getElementById("boardId").value == "tou_0014" || document.getElementById("boardId").value == "tou_0016"){
		
		
		if($('[name="imageData2"]').val() == null || $('[name="imageData2"]').val() == ''){
			
			/*수정화면을 구분하기위한 조건*/
			if($('[name="colmn2Cont"]').val() == null || $('[name="colmn2Cont"]').val() == ''){
				alert("대표이미지를 선택해주세요");
				return false;
			}
		}else{
			
			var uploadYn = true;
			$('[name="imageData2"]').each(function(){
				if(!fn_cmmfileUploadCheck($(this))) {
					uploadYn = false;
				}
			});
			
			if(!uploadYn) {
				
				alert('첨부가능한 파일포맷은 아래와 같습니다.\n jpg, png, gif');
				$('[name="imageData2"]').focus();
				return;
			}
		}	
		
		
		if(document.getElementById("boardId").value == "tou_0014"){

			if($('[name="editModeYn"]').val() == 'MODIFY'){
				
				if(tourbookGubun == true){	
					if($('[name="fileData"]').val() == null || $('[name="fileData"]').val() == ''){
						
						alert("첨부파일을 선택해주세요.");
						return false;
					}
				}	
			}else{
				
				if($('[name="fileData"]').val() == null || $('[name="fileData"]').val() == ''){
					
					alert("첨부파일을 선택해주세요.");
					return false;
				}
				
			}
			
		}
	}
	
	if(document.getElementById("boardId").value == "gallery_0013"){
		if($.trim($("#hisSearchTimesCd").val()) == ""){
	     	alert("대전의역사 시대를 선택하세요.");
	     	$("#hisSearchTimesCd").focus();
	     	return;
	    }
		if($.trim($("#hisSearchSubjectCd").val()) == ""){
	     	alert("대전의역사 주제를 선택하세요.");
	     	$("#hisSearchSubjectCd").focus();
	     	return;
	    }
	}
	
	// 임시로 무조건 true
	isValidated = true;
	
	var contents;
	
	if($("#boardId").val().substring(0,3) == 'itm' || $("#boardId").val() == 'VEH_normal001'){
		
		contents = encodeURIComponent(CrossEditor.GetBodyValue());
		$('#content').val(contents);
	}else if(document.getElementById("boardId").value == "sel_0007"){

		contents = encodeURIComponent(CrossEditor.GetBodyValue());
		$('#content').val(contents);

		if(contents == null || contents.trim() == ""){
			boardForm.content.value = encodeURIComponent(boardForm.content.value);
		}else{
			boardForm.content.value = encodeURIComponent(contents);
		}
	}else{
		
		if(typeof(CrossEditor) == 'undefined'){
			contents = "";
		}
		else{
			contents = getEditorBodyValue(CrossEditor);
		}
		
		if(contents == null || contents.trim() == ""){
			if(document.getElementById("boardId").value != "minwon_0001"){
				boardForm.content.value = encodeURIComponent(boardForm.content.value);
			}
		}else{
			boardForm.content.value = encodeURIComponent(contents);
		}
	}
	
	if(!isValidated){
        return;
    }else{
    	
    	if(boardType == 'boardForm'){
    		
    		var ntatcSeq = boardForm.ntatcSeq;
    		
    		//등록
    		if(ntatcSeq == undefined){
    			
				var cnt = -1;
				if(document.getElementById("boardId").value == "minwon_0004" || document.getElementById("boardId").value == "localJoin_0001" || document.getElementById("boardId").value == "localJoin_0002" || document.getElementById("boardId").value == "compe_01"){
					$("input[type=file][name=fileData]").each(function(i){
						//alert($(this).val());
						if(!$(this).val().isEmpty() && !checkFileExtension2($(this).val(), 'hwp,zip,hwpx')){
							cnt = i;
						}
					});
					
					if(cnt > -1){
						alert("업로드할 수 없는 파일 형식 입니다.\n업로드 허용 파일 [hwp,zip,hwpx]");
						$("input[type=file][name=fileData]").get()[cnt].focus();
						return;
					}
				}else if(document.getElementById("boardId").value == "normal_0153"){

					$("input[type=file][name=fileData]").each(function(i){
						//alert($(this).val());
						if(!$(this).val().isEmpty() && !checkFileExtension2($(this).val(), 'jpg,gif,png,hwp,pdf,zip,doc,docx,ppt,pptx,xls,xlsx,wmv,avi,mp4,mp3,bbf,hwpx')){
							cnt = i;
						}
					});
					
					if(cnt > -1){
						alert("업로드할 수 없는 파일 형식 입니다.\n업로드 허용 파일 [jpg,gif,png,hwp,pdf,zip,doc,docx,ppt,pptx,xls,xlsx,wmv,avi,mp4,mp3,bbf,hwpx]");
						$("input[type=file][name=fileData]").get()[cnt].focus();
						return;
					}
				}else{
					$("input[type=file][name=fileData]").each(function(i){
						//alert($(this).val());
						if(!$(this).val().isEmpty() && !checkFileExtension2($(this).val(), 'jpg,gif,png,hwp,pdf,zip,doc,docx,ppt,pptx,xls,xlsx,wmv,avi,mp4,mp3,hwpx')){
							cnt = i;
						}
					});
					
					if(cnt > -1){
						alert("업로드할 수 없는 파일 형식 입니다.\n업로드 허용 파일 [jpg,gif,png,hwp,pdf,zip,doc,docx,ppt,pptx,xls,xlsx,wmv,avi,mp4,mp3,hwpx]");
						$("input[type=file][name=fileData]").get()[cnt].focus();
						return;
					}
				}
				
    		}else{//수정
    			
				var cnt = -1;
				if(document.getElementById("boardId").value == "minwon_0004" || document.getElementById("boardId").value == "localJoin_0001" || document.getElementById("boardId").value == "localJoin_0002" || document.getElementById("boardId").value == "compe_01"){
					$("input[type=file][name=fileData]").each(function(i){
						if(!$(this).val().isEmpty() && !checkFileExtension2($(this).val(), 'hwp,zip,hwpx')){
							cnt = i;
						}
					});
					
					if(cnt > -1){
						alert("업로드할 수 없는 파일 형식 입니다.\n업로드 허용 파일 [hwp,zip,hwpx]");
						$("input[type=file][name=fileData]").get()[cnt].focus();
						return;
					}
				}else if(document.getElementById("boardId").value == "normal_0153"){

					$("input[type=file][name=fileData]").each(function(i){
						if(!$(this).val().isEmpty() && !checkFileExtension2($(this).val(), 'jpg,gif,png,hwp,pdf,zip,doc,docx,ppt,pptx,xls,xlsx,wmv,avi,mp4,mp3,bbf,hwpx')){
							cnt = i;
						}
					});
					
					if(cnt > -1){
						alert("업로드할 수 없는 파일 형식 입니다.\n업로드 허용 파일 [jpg,gif,png,hwp,pdf,zip,doc,docx,ppt,pptx,xls,xlsx,wmv,avi,mp4,mp3,bbf,hwpx]");
						$("input[type=file][name=fileData]").get()[cnt].focus();
						return;
					}
				}else{
					$("input[type=file][name=fileData]").each(function(i){
						if(!$(this).val().isEmpty() && !checkFileExtension2($(this).val(), 'jpg,gif,png,hwp,pdf,zip,doc,docx,ppt,pptx,xls,xlsx,wmv,avi,mp4,mp3,hwpx')){
							cnt = i;
						}
					});
					
					if(cnt > -1){
						alert("업로드할 수 없는 파일 형식 입니다.\n업로드 허용 파일 [jpg,gif,png,hwp,pdf,zip,doc,docx,ppt,pptx,xls,xlsx,wmv,avi,mp4,mp3,hwpx]");
						$("input[type=file][name=fileData]").get()[cnt].focus();
						return;
					}
				}
    		}
    	}
    	
    	if(boardType == 'gallery'){// 갤러리 게시판 수정의 경우 사진 첨부가 없어도 
    		var ntatcSeq = boardForm.ntatcSeq;
    		//등록
    		if(ntatcSeq == undefined){
				var chk = false;
				$("input[type=file][name=fileData]").each(function(i){
					if(!$.trim($(this).val()).isEmpty()){
						chk = true;
					}
				});
				if($("#boardId").val() != "gallery_0027" && document.getElementById("boardId").value != "djPol_0011"){
					if(!chk){
						alert("사진첨부는 필수 입력값입니다.");
						$("input[type=file][name=fileData]").get()[0].focus();
						return;
					}
				}
				var cnt = -1;
				var fileFormatChk;
				if($("#boardId").val() == "gallery_0024"){
					
					fileFormatChk = 'gif,jpg,jpeg,png';
				}else{
					
					fileFormatChk = 'jpg,gif,png,hwp,pdf,zip,doc,docx,ppt,pptx,xls,xlsx,wmv,avi,mp4,mp3,hwpx';
				}
				$("input[type=file][name=fileData]").each(function(i){
					//alert($(this).val());
					if(!$(this).val().isEmpty() && !checkFileExtension2($(this).val(), fileFormatChk)){
						cnt = i;
					}
				});
				if(cnt > -1){
					alert("업로드할 수 없는 파일 형식 입니다.\n업로드 허용 파일 ["+fileFormatChk+"]");
					$("input[type=file][name=fileData]").get()[cnt].focus();
					return;
				}
    		}else{//수정
    			
    			var oldFileArr = $("span[id^=spanOldFile]").get();
    			
    			if(oldFileArr != undefined && oldFileArr.length > 0){
    				
    				var oldFileSize = oldFileArr.length;
    				var deletedSize = 0;
    				
    				$("span[id^=spanOldFile]").each(function(){
    					
    					if($(this).html().indexOf("<strike") > -1){
    						deletedSize++;
    					}
    				});
    				
    				if(oldFileSize == deletedSize){// 모두 지워졌으므로 첨부파일 필수임
    					
    					var chk = false;
    					$("input[type=file][name=fileData]").each(function(i){
    						if(!$.trim($(this).val()).isEmpty()){
    							chk = true;
    						}
    					});
    					
    					if($("#boardId").val() != "gallery_0027" && document.getElementById("boardId").value != "djPol_0011"){
	    					if(!chk){
	    						alert("사진첨부는 필수 입력값입니다.");
	    						$("input[type=file][name=fileData]").get()[0].focus();
	    						return;
	    					}
    					}
    					
    					var cnt = -1;
						var fileFormatChk;
						if($("#boardId").val() == "gallery_0024"){
							
							fileFormatChk = 'gif,jpg,jpeg,png';
						}else{
							
							fileFormatChk = 'jpg,gif,png,hwp,pdf,zip,doc,docx,ppt,pptx,xls,xlsx,wmv,avi,mp4,mp3,hwpx';
						}
    					$("input[type=file][name=fileData]").each(function(i){
    						if(!$(this).val().isEmpty() && !checkFileExtension2($(this).val(), fileFormatChk)){
    							cnt = i;
    						}
    					});
    					
    					if(cnt > -1){
    						alert("업로드할 수 없는 파일 형식 입니다.\n업로드 허용 파일 ["+fileFormatChk+"]");
    						$("input[type=file][name=fileData]").get()[cnt].focus();
    						return;
    					}
    				}else{// 첨부파일 유효성 체크
    					var cnt = -1;
						var fileFormatChk;
						if($("#boardId").val() == "gallery_0024"){
							
							fileFormatChk = 'gif,jpg,jpeg,png';
						}else{
							
							fileFormatChk = 'jpg,gif,png,hwp,pdf,zip,doc,docx,ppt,pptx,xls,xlsx,wmv,avi,mp4,mp3,hwpx';
						}
    					$("input[type=file][name=fileData]").each(function(i){
    						if(!$(this).val().isEmpty() && !checkFileExtension2($(this).val(), fileFormatChk)){
    							cnt = i;
    						}
    					});
    					if(cnt > -1){
    						alert("업로드할 수 없는 파일 형식 입니다.\n업로드 허용 파일 ["+fileFormatChk+"]");
    						$("input[type=file][name=fileData]").get()[cnt].focus();
    						return;
    					}
    				}
    			}
    		}
    	}
    	
    	if(boardType == 'vod'){// VOD 게시판 수정의 경우 동영상 첨부가 없어도 
    		var ntatcSeq = boardForm.ntatcSeq;
    		//등록
    		if(ntatcSeq == undefined){
				var chk = false;
				$("input[type=text][name=vodPath]").each(function(i){
					if(!$.trim($(this).val()).isEmpty()){
						chk = true;
					}
				});
				if(!chk){
					alert("동영상 첨부는 필수 입력값입니다.");
					$("input[type=text][name=vodPath]").get()[0].focus();
					return;
				}
    		}
    		else{//수정
    			var oldFileArr = $("span[id^=spanOldFile]").get();
    			if(oldFileArr != undefined && oldFileArr.length > 0){
    				var oldFileSize = oldFileArr.length;
    				var deletedSize = 0;
    				$("span[id^=spanOldFile]").each(function(){
    					if($(this).html().indexOf("<strike") > -1){
    						deletedSize++;
    					}
    				});
    				if(oldFileSize == deletedSize){// 모두 지워졌으므로 첨부파일 필수임
    					var chk = false;
    					$("input[type=text][name=vodPath]").each(function(i){
    						if(!$.trim($(this).val()).isEmpty()){
    							chk = true;
    						}
    					});
    					if(!chk){
    						alert("동영상 첨부는 필수 입력값입니다.");
    						$("input[type=text][name=vodPath]").get()[0].focus();
    						return;
    					}
    				}
    			}
    		}
    	}
    	boardForm.submit();
//    	fn_fileCheckAndSubmit(boardForm);
    }
}

function fn_fileCheckAndSubmit(boardForm){
	var ac = boardForm.action;
	boardForm.action = "/custom/ajaxCoolfilterFileUploadCheck.do";
	$("#"+boardForm.id).ajaxForm({
		data:{location:location.href},
		dataType: "json",
        success: function(result){
        	var nm = result.resultNm;
        	var val = result.resultVal;
        	boardForm.action = ac;
        	if(result.resultCount+1 > 0){
        		boardForm.submit();
        	}else{
        		if(confirm("개인정보가 포함되어 있습니다. 그래도 등록하시겠습니까?")){
        			var hiddenField = document.createElement("input");
        	        hiddenField.setAttribute("type", "hidden");
        	        hiddenField.setAttribute("name", nm);
        	        hiddenField.setAttribute("value", val);
        	        boardForm.appendChild(hiddenField);
        			boardForm.submit();
        		}else{
        			return false;
        		}
        	}
        },
		error:function(xhr){
			alert(xhr.responseText);
		},
		complete: function (xhr) {
        	boardForm.action = ac;
        }
    }).submit();
}


/**
 * 신규 파일입력 input 을 append 한다.
 */
function fn_appendFileInput(name) {
	var newId = 'spanFile' + fn_nextId();
	var htmlText = "";
	
	//var htmlText = "<input type=\"file\" name=\"fileData\"  class=\"wf07 inft02\" /><a href=\"javascript:fn_appendFileInput();\" class=\"btn02 cssbtn add\">추가</a><a href=\"javascript:fn_removeFileInput('" + newId + "');\" class=\"btn02 cssbtn del\">삭제</a>";
	if(name == 'imageData')
		htmlText = "<input type=\"file\" name=\"imageData\" class=\"file_input w90\" title=\"첨부파일 "+fileInputSeq+"을 선택해주세요 \" /><a href=\"javascript:fn_removeFileInput('" + newId + "');\" class='file_edit'>삭제</a>";
	else if(name == 'movieData')
		htmlText = "<input type=\"file\" name=\"movieData\" class=\"file_input w90\" title=\"첨부파일 "+fileInputSeq+"을 선택해주세요 \" /><a href=\"javascript:fn_removeFileInput('" + newId + "');\" class='file_edit'>삭제</a>";
	else
		htmlText = "<input type=\"file\" name=\"fileData\" class=\"file_input w90\" title=\"첨부파일 "+fileInputSeq+"을 선택해주세요 \" /><a href=\"javascript:fn_removeFileInput('" + newId + "');\" class='file_edit'>삭제</a>";
	
	var nodeSpan = document.createElement('LI');
	nodeSpan.id = newId;
	
	document.getElementById("fileContainer").appendChild(nodeSpan);
	document.getElementById(newId).innerHTML = htmlText;
}

/**
 * 신규 파일입력 input 을 append 한다.
 */
function fn_appendFileInput2(name,inputCss, atagCss, viewText) {
	var newId = 'spanFile' + fn_nextId();
	var htmlText = "";
	
	if(name == 'imageData')
		htmlText = "<input type=\"file\" name=\"imageData\" class=\""+inputCss+"\" title=\"첨부파일 "+fileInputSeq+"을 선택해주세요 \" /><a href=\"javascript:fn_removeFileInput('" + newId + "');\" class='"+atagCss+"'>"+viewText+"</a>";
	else if(name == 'movieData')
		htmlText = "<input type=\"file\" name=\"movieData\" class=\""+inputCss+"\" title=\"첨부파일 "+fileInputSeq+"을 선택해주세요 \" /><a href=\"javascript:fn_removeFileInput('" + newId + "');\" class='"+atagCss+"'>"+viewText+"</a>";
	else
		htmlText = "<input type=\"file\" name=\"fileData\" class=\""+inputCss+"\" title=\"첨부파일 "+fileInputSeq+"을 선택해주세요 \" /><a href=\"javascript:fn_removeFileInput('" + newId + "');\" class='"+atagCss+"'>"+viewText+"</a>";
	
	var nodeSpan = document.createElement('LI');
	nodeSpan.id = newId;
	
	document.getElementById("spanFile1").parentNode.appendChild(nodeSpan);
	document.getElementById(newId).innerHTML = htmlText;
}

/**
 * 파일입력을 삭제한다.
 * 
 * @param fileInputId
 * @returns
 */
function fn_removeFileInput (fileInputId) {
	var fileInput = document.getElementById(fileInputId);
	
	fileInput.parentNode.removeChild(fileInput);
}

/**
 * 파일입력폼의 부모 노드를 반환한다.
 * @returns
 * TODO
 * 쓰이지 않는 듯.. 나중에 삭제 예정
 */
/*function fn_getFileInputParent () {
	return document.getElementById("spanFile1").parentNode;
}*/

/** 첨부파일 input 생성을 위한 sequence */
var fileInputSeq = 1;

/**
 * 다음 sequence 아이디를 반환한다.
 * @returns 다음 sequence 아이디
 */
function fn_nextId () {
	return ++fileInputSeq;
}

/**
 * 삭제할 첨부파일을 가운데 취소선처리하고 해당 첨부파일의 atflSeq 를  deleteAtchFileList 히든 input 의 값으로 세팅한다.
 * 
 * @param LI id
 * @param atflSeq
 */

var tourbookGubun = false;
function fn_removeToggleOldFile (liId, atflSeq) {
	// 1. strike 처리
	var liOjb = document.getElementById(liId);
	var firstElemChild = fn_getFirstElementChild(liOjb);
	var isDelete = false;
	try {
		if (firstElemChild.nodeName == "STRIKE" || firstElemChild.nodeName == "S") {
			var tempHTML = firstElemChild.innerHTML;
			liOjb.removeChild(firstElemChild);
			liOjb.innerHTML = tempHTML;
		} else {
			liOjb.innerHTML = "<strike style=\"color:red\">" + liOjb.innerHTML + "</strike>";
			isDelete = true;
		}
	} catch (e) {
		// firstElemChild == null || firstElemChild == 'undefined' 
		liOjb.innerHTML = "<strike style=\"color:red\">" + liOjb.innerHTML + "</strike>";
		isDelete = true;
	}
	
	var deleteAtchFileList = document.getElementById('deleteAtchFileList');
	var isFound = false;
	// 2. input hidden 처리 
	if (isDelete) {
		// 삭제 case
		if (deleteAtchFileList.value == '') {
			deleteAtchFileList.value = atflSeq;
		} else {
			var aryDelAtchFileList = deleteAtchFileList.value.split(',');
			for (var inx = 0; inx < aryDelAtchFileList.length; inx ++) {
				if (aryDelAtchFileList[inx] == atflSeq) {
					isFound = true;
					break;
				}
			}
			if (!isFound) {
				deleteAtchFileList.value = deleteAtchFileList.value.length > 0 ? deleteAtchFileList.value  + ',' + atflSeq : atflSeq;
			}
		}
		
		tourbookGubun = true;
	} else {
		// 삭제취소 case
		if (deleteAtchFileList.value == '') {
		} else {
			var aryDelAtchFileList = deleteAtchFileList.value.split(',');
			deleteAtchFileList.value = '';
			for (var inx = 0; inx < aryDelAtchFileList.length; inx ++) {
				if (aryDelAtchFileList[inx] != atflSeq) {
					deleteAtchFileList.value = deleteAtchFileList.value.length > 0 ? deleteAtchFileList.value  + ',' + aryDelAtchFileList[inx] : aryDelAtchFileList[inx];
				}
			}
		}
		
		tourbookGubun = false;
	}
//	alert(deleteAtchFileList.value);
}


/**
 * 삭제할 이미지를 가운데 취소선처리하고 해당 이미지의 atflSeq 를  deleteAtchImageList 히든 input 의 값으로 세팅한다.
 * 
 * @param spanId
 * @param atflSeq
 */
function fn_removeToggleOldImage (spanId, atflSeq) {
	// 1. strike 처리
	var spanObj = document.getElementById(spanId);
	var firstElemChild = fn_getFirstElementChild(spanObj);
	var isDelete = false;
	try {
		if (firstElemChild.nodeName == "STRIKE" || firstElemChild.nodeName == "S") {
			var tempHTML = firstElemChild.innerHTML;
			spanObj.removeChild(firstElemChild);
			spanObj.innerHTML = tempHTML;
		} else {
			spanObj.innerHTML = "<strike style=\"color:red\" name='cancleLine'>" + spanObj.innerHTML + "</strike>";
			isDelete = true;
		}
	} catch (e) {
		// firstElemChild == null || firstElemChild == 'undefined' 
		spanObj.innerHTML = "<strike style=\"color:red\" name='cancleLine'>" + spanObj.innerHTML + "</strike>";
		isDelete = true;
	}
	
	var deleteAtchImageList = document.getElementById('deleteAtchImageList');
	var isFound = false;
	// 2. input hidden 처리 
	if (isDelete) {
		// 삭제 case
		if (deleteAtchImageList.value == '') {
			deleteAtchImageList.value = atflSeq;
		} else {
			var aryDelAtchImageList = deleteAtchImageList.value.split(',');
			for (var inx = 0; inx < aryDelAtchImageList.length; inx ++) {
				if (aryDelAtchImageList[inx] == atflSeq) {
					isFound = true;
					break;
				}
			}
			if (!isFound) {
				deleteAtchImageList.value = deleteAtchImageList.value.length > 0 ? deleteAtchImageList.value  + ',' + atflSeq : atflSeq;
			}
		}
	} else {
		// 삭제취소 case
		if (deleteAtchImageList.value == '') {
		} else {
			var aryDelAtchImageList = deleteAtchImageList.value.split(',');
			deleteAtchImageList.value = '';
			for (var inx = 0; inx < aryDelAtchImageList.length; inx ++) {
				if (aryDelAtchImageList[inx] != atflSeq) {
					deleteAtchImageList.value = deleteAtchImageList.value.length > 0 ? deleteAtchImageList.value  + ',' + aryDelAtchImageList[inx] : aryDelAtchImageList[inx];
				}
			}
		}
	}
}

function fn_removeToggleOldImage2 (spanId, atflSeq) {
	// 1. strike 처리
	var spanObj = document.getElementById(spanId);
	var firstElemChild = fn_getFirstElementChild(spanObj);
	var isDelete = false;
	try {
		if (firstElemChild.nodeName == "STRIKE" || firstElemChild.nodeName == "S") {
			var tempHTML = firstElemChild.innerHTML;
			spanObj.removeChild(firstElemChild);
			spanObj.innerHTML = tempHTML;
		} else {
			spanObj.innerHTML = "<strike style=\"color:red\">" + spanObj.innerHTML + "</strike>";
			isDelete = true;
		}
	} catch (e) {
		// firstElemChild == null || firstElemChild == 'undefined' 
		spanObj.innerHTML = "<strike style=\"color:red\">" + spanObj.innerHTML + "</strike>";
		isDelete = true;
	}
	
	var deleteAtchImageList2 = document.getElementById('deleteAtchImageList2');
	var isFound = false;
	// 2. input hidden 처리 
	if (isDelete) {
		// 삭제 case
		if (deleteAtchImageList2.value == '') {
			deleteAtchImageList2.value = atflSeq;
		} else {
			var aryDelAtchImageList2 = deleteAtchImageList2.value.split(',');
			for (var inx = 0; inx < aryDelAtchImageList2.length; inx ++) {
				if (aryDelAtchImageList2[inx] == atflSeq) {
					isFound = true;
					break;
				}
			}
			if (!isFound) {
				deleteAtchImageList2.value = deleteAtchImageList2.value.length > 0 ? deleteAtchImageList2.value  + ',' + atflSeq : atflSeq;
			}
		}
	} else {
		// 삭제취소 case
		if (deleteAtchImageList2.value == '') {
		} else {
			var aryDelAtchImageList2 = deleteAtchImageList2.value.split(',');
			deleteAtchImageList2.value = '';
			for (var inx = 0; inx < aryDelAtchImageList2.length; inx ++) {
				if (aryDelAtchImageList2[inx] != atflSeq) {
					deleteAtchImageList2.value = deleteAtchImageList2.value.length > 0 ? deleteAtchImageList2.value  + ',' + aryDelAtchFileList2[inx] : aryDelAtchFileList2[inx];
				}
			}
		}
	}
}

function fn_removeToggleOldMovie (spanId, atflSeq) {
	// 1. strike 처리
	var spanObj = document.getElementById(spanId);
	var firstElemChild = fn_getFirstElementChild(spanObj);
	var isDelete = false;
	try {
		if (firstElemChild.nodeName == "STRIKE" || firstElemChild.nodeName == "S") {
			var tempHTML = firstElemChild.innerHTML;
			spanObj.removeChild(firstElemChild);
			spanObj.innerHTML = tempHTML;
		} else {
			spanObj.innerHTML = "<strike style=\"color:red\">" + spanObj.innerHTML + "</strike>";
			isDelete = true;
		}
	} catch (e) {
		// firstElemChild == null || firstElemChild == 'undefined' 
		spanObj.innerHTML = "<strike style=\"color:red\">" + spanObj.innerHTML + "</strike>";
		isDelete = true;
	}
	
	var deleteAtchMovieList = document.getElementById('deleteAtchMovieList');
	var isFound = false;
	// 2. input hidden 처리 
	if (isDelete) {
		// 삭제 case
		if (deleteAtchMovieList.value == '') {
			deleteAtchMovieList.value = atflSeq;
		} else {
			var aryDelAtchMovieList = deleteAtchMovieList.value.split(',');
			for (var inx = 0; inx < aryDelAtchMovieList.length; inx ++) {
				if (aryDelAtchMovieList[inx] == atflSeq) {
					isFound = true;
					break;
				}
			}
			if (!isFound) {
				deleteAtchMovieList.value = deleteAtchMovieList.value.length > 0 ? deleteAtchMovieList.value  + ',' + atflSeq : atflSeq;
			}
		}
	} else {
		// 삭제취소 case
		if (deleteAtchMovieList.value == '') {
		} else {
			var aryDelAtchMovieList = deleteAtchMovieList.value.split(',');
			deleteAtchMovieList.value = '';
			for (var inx = 0; inx < aryDelAtchMovieList.length; inx ++) {
				if (aryDelAtchMovieList[inx] != atflSeq) {
					deleteAtchMovieList.value = deleteAtchMovieList.value.length > 0 ? deleteAtchMovieList.value  + ',' + aryDelAtchMovieList[inx] : aryDelAtchMovieList[inx];
				}
			}
		}
	}
}

/**
 * 주어진 노드의 첫번째 엘리먼트 자식노드를 반환한다.
 * @param node
 * @returns
 */
function fn_getFirstElementChild (node) {
	var firstElemChild = null;
	for (var inx = 0; inx < node.childNodes.length; inx ++) {
		if(node.childNodes[inx].nodeType == ELEMENT_NODE) {
			firstElemChild = node.childNodes[inx];
			break;
		}
	}
	return firstElemChild;
}

/**
 * 공통게시판 게시글 삭제
 * @param ntatcSeq 게시물 아이디
 * @param doUrl 삭제 수행할 Ajax url
 * @param listUrl 목록 url
 */
function fn_deleteCmmBoard (ntatcSeq, doUrl, listUrl) {
		
	if (confirm('정말 삭제하시겠습니까?')) {
		var url = doUrl == null || doUrl == '' ? '/cmm/RemoveCmmBoardJson.do' : doUrl;
		 var query = 
		        'ntatcSeq=' + ntatcSeq ;
		
		 $.ajax({
				url:url,
				type:"post",		
				dataType : "json",
				data : query,
				beforeSend:function(request){
					//showProgress();
				},
				success : function(data, status){
					var resultCode = data.resultCode;					
					if (resultCode == 'SUCCESS') {
						alert("삭제되었습니다.");
						location.href = listUrl;
					} else if (resultCode == 'NO_ARTICLE') {
						alert("<spring:message code='info.nodata.msg'/>");
					} else if (resultCode == 'NO_AUTORITY') {
						alert("<spring:message code='common.message.noautharticle'/>");
					} else {
						alert("서비스에 실패하였습니다. Error Code ["+status+"]");
					}
				},
				error : function(request, status, opt){
					//closeProgress();
					alert("서비스에 실패하였습니다. Error Code ["+status+"]");
				},
				complete: function(request,status){
					//closeProgress();
				} 
			});	
		}
}

/**
 * 민원게시판 게시글 삭제
 * @param ntatcSeq 게시물 아이디
 * @param doUrl 삭제 수행할 Ajax url
 * @param listUrl 목록 url
 */
function fn_deleteMinwon (minwonSeq, doUrl, listUrl) {
	if (confirm('정말 삭제하시겠습니까?')) {
		var url = doUrl == null || doUrl == '' ? '/cmm/RemoveMinwonJson.do' : doUrl;
		 var query = 
		        'minwonSeq=' + minwonSeq ;
		
		 $.ajax({
				url:url,
				type:"post",		
				dataType : "json",
				data : query,
				beforeSend:function(request){
					//showProgress();
				},
				success : function(data, status){
					var resultCode = data.resultCode;
					if (resultCode == 'SUCCESS') {
						location.href = listUrl;
					} else {
						alert(data.errMsg);
					}
				},
				error : function(request, status, opt){
					//closeProgress();
					alert("서비스에 실패하였습니다. Error Code ["+status+"]");
				},
				complete: function(request,status){
					//closeProgress();
				} 
			});	
		}
}


/**
 * 2014.05.27 박지은 추가
 * 이미지 확장자 체크 (jpg만 가능)
 * @param fileName imageData
 * @return imageMsg != "" 이면 alert(imageMsg); 
 */
function fn_checkImageTypeJpg(fileName){
	
	var imageMsg = "";
	var arrExt = ['jpg'];
	var objFile =  $("input[type=file][name$="+ fileName + "]");
	
	if(objFile.length > 0){
	 
		if(objFile.length == 1 && objFile.val() == ""){
			isCheckd = true;
		}
		else{
			objFile.each(function(i){
				if($(this).val() != ""){
					
					var extName = $(this).val().substring($(this).val().lastIndexOf(".") + 1).toLowerCase();
					
					if($.inArray(extName, arrExt) == -1){
						imageMsg = "이미지 파일은 [" + arrExt.join(',') + "] 형식만 업로드 가능합니다.";
						$(this).focus();
						return false;
					}
				}
			});
		}
	}
	
	return imageMsg;
}

/**
 * 2013.10.28 송명근 추가
 * 이미지 확장자 체크
 * @param fileName imageData
 * @return imageMsg != "" 이면 alert(imageMsg); 
 */
function fn_checkImageType(fileName){
	
	var imageMsg = "";
	var arrExt = ['jpg','jpeg','png','gif'];
	var objFile =  $("input[type=file][name$="+ fileName + "]");
	
	if(objFile.length > 0){
	 
		if(objFile.length == 1 && objFile.val() == ""){
			isCheckd = true;
		}
		else{
			objFile.each(function(i){
				if($(this).val() != ""){
					
					var extName = $(this).val().substring($(this).val().lastIndexOf(".") + 1).toLowerCase();
					
					if($.inArray(extName, arrExt) == -1){
						imageMsg = "이미지 파일은 [" + arrExt.join(',') + "] 형식만 업로드 가능합니다.";
						$(this).focus();
						return false;
					}
				}
			});
		}
	}
	
	return imageMsg;
}

/**
 * 2022.05.17 노대현 추가
 * 첨부 허용 이미지 확장자 추가(아이폰 사진 확장자)
 * 이미지 확장자 체크
 * @param fileName imageData
 * @return imageMsg != "" 이면 alert(imageMsg); 
 */
function fn_checkImageIosType(fileName){
	
	var imageMsg = "";
	var arrExt = ['jpg','jpeg','png','gif','heic','heif'];
	var objFile =  $("input[type=file][name$="+ fileName + "]");
	
	if(objFile.length > 0){
	 
		if(objFile.length == 1 && objFile.val() == ""){
			isCheckd = true;
		}
		else{
			objFile.each(function(i){
				if($(this).val() != ""){
					
					var extName = $(this).val().substring($(this).val().lastIndexOf(".") + 1).toLowerCase();
					
					if($.inArray(extName, arrExt) == -1){
						imageMsg = "이미지 파일은 [" + arrExt.join(',') + "] 형식만 업로드 가능합니다.";
						$(this).focus();
						return false;
					}
				}
			});
		}
	}
	
	return imageMsg;
}

/**
 * 2013.10.28 송명근 추가
 * 이미지리스트 확장자 체크
 * @param imageData
 * @return imageMsg != "" 이면 alert(imageMsg); 
 */
function fn_checkImageTypeList(file){
	
	var imageMsg = "";
	var arrExt = ['jpg','jpeg','png','gif'];
	
	file.each(function(i){
		if($(this).val() != ""){
			
			var extName = $(this).val().substring($(this).val().lastIndexOf(".") + 1).toLowerCase();
			
			if($.inArray(extName, arrExt) == -1){
				imageMsg = "이미지 파일은 [" + arrExt.join(',') + "] 형식만 업로드 가능합니다.";
				$(this).focus();
				return false;
			}
		}
	});
	
	return imageMsg;
}


/**
 * 첨부리스트 확장자 체크
 * @param fileData
 * @return fileMsg != "" 이면 alert(fileMsg); 
 */
function fn_checkFileTypeList(file){
	
	var fileMsg = "";
	var arrExt = ['doc','docx','hwp','pdf','xlsx','xls','hwpx'];
	
	file.each(function(i){
		if($(this).val() != ""){
			
			var extName = $(this).val().substring($(this).val().lastIndexOf(".") + 1).toLowerCase();
			
			if($.inArray(extName, arrExt) == -1){
				fileMsg = "첨부 파일은 [" + arrExt.join(',') + "] 형식만 업로드 가능합니다.";
				$(this).focus();
				return false;
			}
		}
	});
	
	return fileMsg;
}

/**
 * 2013.10.28 송명근 추가
 * 첨부물 확장자 체크
 * @param fileName fileData
 * @return fileMsg != "" 이면 alert(fileMsg); 
 */
function fn_checkFileType(fileName){
	
	var fileMsg = "";
	var arrExt = ['doc','docx','hwp','pdf','xlsx','xls','hwpx'];
	var objFile =  $("input[type=file][name="+fileName + "]");
	
	if(objFile.length > 0){
	 
		if(objFile.length == 1 && objFile.val() == ""){
			isCheckd = true;
		}
		else{
			objFile.each(function(i){
				if($(this).val() != ""){
					
					var extName = $(this).val().substring($(this).val().lastIndexOf(".") + 1).toLowerCase();
					
					if($.inArray(extName, arrExt) == -1){
						fileMsg = "첨부파일은 [" + arrExt.join(',') + "] 형식만 업로드 가능합니다.";
						$(this).focus();
						return false;
					}
					
				}
			});
		}
	}
	
	return fileMsg;
}

/**
 * 2013.10.28 송명근 추가
 * 동영상 확장자 체크
 * @param fileName movieData
 * @return movieMsg != "" 이면 alert(movieMsg); 
 */
function fn_checkMovieType(fileName){
	
	var movieMsg = "";
	var arrExt = ['swf'];
	var objFile =  $("input[type=file][name="+fileName + "]");
	
	if(objFile.length > 0){
		
		if(objFile.length == 1 && objFile.val() == ""){
			isCheckd = true;
		}
		else{
			objFile.each(function(i){
				if($(this).val() != ""){
					
					var extName = $(this).val().substring($(this).val().lastIndexOf(".") + 1).toLowerCase();
					
					if($.inArray(extName, arrExt) == -1){
						movieMsg = "동영상은 [" + arrExt.join(',') + "] 형식만 업로드 가능합니다.";
						$(this).focus();
						return false;
					}
				}
			});
		}
	}
	
	return movieMsg;
}


/**
 * 2013.11.27 정용현 추가
 * 모든 첨부파일 확장자 체크
 * @param fileName movieData
 * @return movieMsg != "" 이면 alert(movieMsg); 
 */
function fn_checkAllFileType(fileName){
	
	var fileMsg = "";
	var arrExt = ['doc','docx','hwp','pdf','xlsx','xls','jpg','jpeg','png','gif','hwpx'];
	var objFile =  $("input[type=file][name="+fileName + "]");
	
	if(objFile.length > 0){
	 
		if(objFile.length == 1 && objFile.val() == ""){
			isCheckd = true;
		}
		else{
			objFile.each(function(i){
				if($(this).val() != ""){
					
					var extName = $(this).val().substring($(this).val().lastIndexOf(".") + 1).toLowerCase();
					
					if($.inArray(extName, arrExt) == -1){
						fileMsg = "첨부파일은 [" + arrExt.join(',') + "] 형식만 업로드 가능합니다.";
						$(this).focus();
						return false;
					}
					
				}
			});
		}
	}
	
	return fileMsg;
}


/**
 * 2013.11.27 정용현 추가
 * 모든 첨부파일 확장자 체크
 * @param fileName movieData
 * @return movieMsg != "" 이면 alert(movieMsg); 
 */
function fn_qnaCheckFileType(fileName){
	
	var fileMsg = "";
	var arrExt = ['doc','docx','hwp','pdf','jpg','jpeg','gif','hwpx'];
	
	
	var objFile =  $("input[type=file][name="+fileName + "]");
	
	if(objFile.length > 0){
	 
		if(objFile.length == 1 && objFile.val() == ""){
			isCheckd = true;
		}
		else{
			objFile.each(function(i){
				if($(this).val() != ""){
					
					var extName = $(this).val().substring($(this).val().lastIndexOf(".") + 1).toLowerCase();					
					
					if($.inArray(extName, arrExt) == -1){
						fileMsg = "첨부파일은 [" + arrExt.join(',') + "] 형식만 업로드 가능합니다.";
						$(this).focus();
						return false;
					}
					
				}
			});
		}
	}
	
	return fileMsg;
}

/**
 * 2013.10.28 송명근 추가
 * 한글, 영문 구문 글자수 체크
 * @param maxlen 최대문자수
 * @param strValue value값
 * @return isOverlen 
 */
function fn_checkLen(maxlen, strValue){ // 최대글자수, val값
	var isOverlen = false;
	var temp;
	var msglen = maxlen*2;
	
	if(strValue.length > 0){
		for(var i=0;i<strValue.length;i++){
			temp = strValue.charAt(i);
			
			if (escape(temp).length > 4) 
				msglen -= 2; 
			else 
				msglen--;
			
			if(msglen < 0){ 
				isOverlen = true; 
				break; 
			}
		}	
	}
	return isOverlen;		
}

/* 20181217 파일확장자 체크 추가 */
var enabledUploadFile = new Array('jpg', 'png', 'gif');
function fn_cmmfileUploadCheck(obj){
	if(obj.val() == '') return true;
	
	var fileNm = obj.val();
	var startPoint = 0;
	var uploadYn = false;
	
	for(var i=fileNm.length-1; i>=0; i--) {
		if(fileNm.charAt(i) == '.') {
			startPoint = i;
			break;
		}
	}
	
	var fileFormat = fileNm.substring(startPoint + 1, fileNm.length);
	
	for(i=0; i<enabledUploadFile.length; i++) {
		if(fileFormat.toLowerCase() == enabledUploadFile[i]) {
			uploadYn = true;
			break;
		}
	}
	
	return uploadYn;
}