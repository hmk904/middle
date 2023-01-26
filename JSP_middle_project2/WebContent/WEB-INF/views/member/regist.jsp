<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<script src="<%=request.getContextPath() %>/resources/js/jquery.min.js"></script>
<script src="<%=request.getContextPath() %>/resources/js/common.min.js"></script>

<title>회원가입</title>

<Style>
body {
      min-height: 100vh;

      background: -webkit-gradient(linear, left bottom, right top, from(#2C2F3E), to(#2C2F3E));
      background: -webkit-linear-gradient(bottom left, #2C2F3E 0%, #2C2F3E 100%);
      background: -moz-linear-gradient(bottom left, #2C2F3E 0%, #2C2F3E 100%);
      background: -o-linear-gradient(bottom left, #2C2F3E 0%, #2C2F3E 100%);
      background: linear-gradient(to top right, #2C2F3E 0%, #2C2F3E 100%);
    }

    .input-form {
      max-width: 680px;

      margin-top: 80px;
      padding: 32px;

      background: #fff;
      -webkit-border-radius: 10px;
      -moz-border-radius: 10px;
      border-radius: 10px;
      -webkit-box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.15);
      -moz-box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.15);
      box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.15)
    }
  </style>


<body>
  <div class="container">
    <div class="input-form-backgroud row">
      <div class="input-form col-md-12 mx-auto">
        <h4 class="mb-3">회원가입</h4>
        <form class="validation-form" role="form" action="<%=request.getContextPath() %>/member/regist.do" method="post">
          <div class="row">
          
          <div class="pic-box" style="width: 100%; display:block; text-align:center;">
		
		</div>
		
            <div class="col-md-6 mb-3 grid grid-5" style="">
              <label style="display:block;" for="memberId">아이디</label>
              <input style="width: calc(100% - 95px); display:inline-block;" 
              type="text" name="memberId" class="form-control" id="memberId" onkeyup="this.value=this.value.replace(/[\ㄱ-ㅎㅏ-ㅣ가-힣]/g, &#39;&#39;);" placeholder="아이디" >
              <div class="invalid-feedback"></div>
              <button class="" type="button" onclick="idCheck_go();" style="display:; width:80px; height:40px; background:#2B2F3E; border-radius:5px; border:1px solid navy; color:white;">중복확인</button>
            </div> <!-- id end -->
            
            
            
            <div class="col-md-6 mb-3">
              <label for="memberPwd">패스워드</label>
              <input type="text" name="memberPwd" class="form-control" id="memberPwd" placeholder="" value="" required>
              <div class="invalid-feedback">
               	패스워드를 입력해주세요.
              </div>
            </div>
          </div>

			<div class="row">
            <div class="col-md-6 mb-3">
              <label for="memberName">이름</label>
              <input type="text" class="form-control" name="memberName" id="memberName" placeholder="" value="" required>
              <div class="invalid-feedback">
                이름을 입력해주세요.
              </div>
            </div>
			
					
				<div class="" style="margin: 0 auto;">	
					<label for="memberPhone" class=" control-label">전화번호</label>
						<div class="input-group-sm" style="">
							<select style="border: 1px solid #2B2F3E;height:40px;width:80px;" name="memberPhone" id="memberPhone" class="form-control float-left">
								<option value="">-선택-</option>
								<option value="010">010</option>
								<option value="011">011</option>
								<option value="017">017</option>
								<option value="018">018</option>
							</select>							
							<label class="float-left" style="padding: 0; text-align: center;">&nbsp;-&nbsp;</label>
							<input style="height:40px;width:160px;" name="phone" type="text" class="form-control float-right" maxlength='8'/>						
						</div>
					</div>
				</div>




          <div class="mb-3">
            <label for="memberEmail">이메일</label>
            <input type="memberEmail" class="form-control" name="memberEmail" id="memberEmail" placeholder="email@example.com" required>
            <div class="invalid-feedback">
             	 이메일을 입력해주세요.
            </div>
          </div>

          <div class="mb-3" style="">
            <label for="memberAddress">주소</label>
            <input type="text" class="form-control" name="memberAddress" id="memberAddress" placeholder="주소을 입력해주세요." required>
            <div class="invalid-feedback">
            	  주소를 입력해주세요.
            </div>
          </div>

          <div class="mb-3" style="">
                     <label for="memberAuthority" class="" style="" >권한</label>
                     <div class="">
                        <select name="memberAuthority" id="memberAuthority" class="form-control" style="height:40px;">
                           <option value="ROLE_USER">사용자</option>
                           <option value="ROLE_ADMIN">관리자</option>
                        </select>
                     </div>
                  </div>      
      </form>

          
          <hr class="mb-4">
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="aggrement" required>
          </div>
          <div class="mb-4">
          <button class="btn btn-primary btn-lg btn-block" type="button" onclick="regist_go();" style="background:#2B2F3E; color:white;">가입 완료</button>
      </div>
    
    <footer class="my-3 text-center text-small">
      <p class="mb-1">&copy; 2023 한밭도서관</p>
    </footer>
<script>
function regist_go(){
	
	if($('input[name="memberId"]').val()!=checkedID){
	    alert("아이디는 중복 확인이 필요합니다.");
	    return;
	}
	if(!$('input[name="memberPwd"]').val()){
	   alert("패스워드는 필수입니다.");
	   return;
    }
	if(!$('input[name="memberName"]').val()){
       alert("이름은 필수입니다.");
       return;
    }
	if(!$('input[name="memberEmail"]').val()){
	   alert("이메일은 필수입니다.");
	   return;
	}
	var form = $('form[role="form"]');
	form.submit();
}
</script>

<script>
var checkedID ="";
function idCheck_go(){
	//alert("id check btn click");
	
 	var input_ID=$('input[name="memberId"]');
	
 	if(!input_ID.val()){
        alert("아이디를 입력하시오");
        input_ID.focus();
        return;
 	}
	
	 $.ajax({
		 url : "idCheck.do?memberId="+input_ID.val().trim(),    	 	
    	 success : function(result){
    	
    	  console.log(result);
   		  if(result.toUpperCase() == "DUPLICATED"){
                 alert("중복된 아이디 입니다.");
                 $('input[name="memberId"]').focus();
   		  }else{
              alert("사용가능한 아이디 입니다.");
              checkedID=input_ID.val().trim();
              $('input[name="memberId"]').val(input_ID.val().trim());             
           } 
    	 },
    	 error:function(error){
    		 //AjaxErrorSecurityRedirectHandler(error.status);	
    	 }
	 });
}
</script>
</body>
