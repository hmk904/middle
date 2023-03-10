/**
 * 문자열 ReplaceAll
 * @param regex 교체 대상 문자열 
 * @param replacement 교체 문자열
 * @return String
 */
String.prototype.replaceAll = function(regex, replacement) {
	return this.split(regex).join(replacement);
};

/**
 * 문자열 좌우 공백 제거
 * @return String
 */
String.prototype.trim = function() {		
	return this.replace(/^\s+|\s*$/g, "");		
};

/**
 * 문자의 좌 공백 제거	
 * @return String
 */
String.prototype.ltrim = function() {		
	return this.replace(/(^\\s*)/, "");		
};		

/**
 * 문자의 우 공백 제거	
 * @return String
 */
String.prototype.rtrim = function() {		
	return this.replace(/(\\s*$)/, "");		
};

/**
 * 숫자만 가져 오기
 * @return Integer
 */
String.prototype.num = function() {		
	return parseInt((this.trim().replace(/[^0-9]/g, "")));		
};

/**
 * 숫자에 3자리마다 , 를 찍어서 반환
 * @return String
 */
String.prototype.money = function() {		
	var num = this.trim();		
	while((/(-?[0-9]+)([0-9]{3})/).test(num)) {		
		num = num.replace((/(-?[0-9]+)([0-9]{3})/), "$1,$2");		
	}		
	return num;		
};

/**
 * 숫자의 자리수(cnt)에 맞도록 반환
 * @param cnt 자릿수
 * @return String
 */
String.prototype.digits = function(cnt) {		
	var digit = "";		
	if (this.length < cnt) {		
		for(var i = 0; i < cnt - this.length; i++) {		
			digit += "0";		
		}		
	}		
	return digit + this;		
};

/**
 * 공백이나 널인지 확인
 * @return Boolean
 */
String.prototype.isBlank = function() {		
	var str = this.trim();		
	for(var i = 0; i < str.length; i++) {		
		if ((str.charAt(i) != "\\t") && (str.charAt(i) != "\\n") && (str.charAt(i)!="\\r")) {		
			return false;		
		}		
	}		
	return true;		
};

/**
 * 숫자로 구성되어 있는지 학인
 * arguments[0] : 허용할 문자
 * @return Boolean
 */
String.prototype.isNum = function() {		
	return (/^[0-9]+$/).test(this.remove(arguments[0])) ? true : false;		
};

/**
 * 영어만 허용 
 * arguments[0] : 허용할 문자
 * @return Boolean
 */
String.prototype.isEng = function() {		
	return (/^[a-zA-Z]+$/).test(this.remove(arguments[0])) ? true : false;		
};

/**
 * 숫자와 영어만 허용 
 * arguments[0] : 허용할 문자
 * @return Boolean
 */		
String.prototype.isEngNum = function() {
	return (/^[0-9a-zA-Z]+$/).test(this.remove(arguments[0])) ? true : false;		
};

/**
 * 아이디 체크 영어와 숫자만 체크 첫글자는 영어로 시작 
 * arguments[0] : 허용할 문자
 * @return
 */
String.prototype.isUserid = function() {		
	return (/^[a-zA-z]{1}[0-9a-zA-Z]+$/).test(this.remove(arguments[0])) ? true : false;		
};

/**
 * 한글 체크 
 * arguments[0] : 허용할 문자
 * @return Boolean
 */
String.prototype.isKor = function() {		
	return (/^[가-힣]+$/).test(this.remove(arguments[0])) ? true : false;		
};

/**
 * 공백이나 널 체크
 * @returns {Boolean}
 */
String.prototype.isEmpty = function() {		
	return typeof this == "undefined" || this == null || this.trim().length == 0;		
};



/**
 * 정규식에 쓰이는 특수문자를 찾아서 이스케이프 한다.
 * @return String
 */
String.prototype.meta = function() {
	var str = this;
	var result = "";
	for(var i = 0; i < str.length; i++) {
		if((/([\$\(\)\*\+\.\[\]\?\\\^\{\}\|]{1})/).test(str.charAt(i))) {
			result += str.charAt(i).replace((/([\$\(\)\*\+\.\[\]\?\\\^\{\}\|]{1})/), "\\$1");
		}
		else {
			result += str.charAt(i);
		}
	}
	return result;
}

/**
 * 정규식에 쓰이는 특수문자를 찾아서 이스케이프 한다.
 * @param pattern
 * @return
 */
String.prototype.remove = function(pattern) {
	if( pattern != null ) {
		return eval("this.replace(/[" + pattern.meta() + "]/g, \"\")");
	}
	return this;
};

/**
 * 이메일의 유효성을 체크
 * @return
 */
String.prototype.isEmail = function() {	
	var em = this.trim().match(/^[_\-\.0-9a-zA-Z]{3,}@[-.0-9a-zA-z]{2,}\.[a-zA-Z]{2,4}$/);
	return (em) ? true : false;		
};

/**
 * 전화번호 체크 
 * arguments[0] : 전화번호 구분자
 * @return Stirng
 */
String.prototype.isPhone = function() {		
	var arg = arguments[0] ? arguments[0] : "";		
	return eval("(/(02|0505|070|0[3-9]{1}[0-9]{1})" + arg + "[1-9]{1}[0-9]{2,3}" + arg + "[0-9]{4}$/).test(this)");		
};

/**
 * 핸드폰번호 체크 
 * arguments[0] : 핸드폰 구분자
 * @return String
 */
String.prototype.isMobile = function() {		
	var arg = arguments[0] ? arguments[0] : "";		
	return eval("(/01[016789]" + arg + "[1-9]{1}[0-9]{2,3}" + arg + "[0-9]{4}$/).test(this)");		
};

/**
 * 사업자번호 체크 
 * arguments[0] : 등록번호 구분자
 * @return Boolean
 */
String.prototype.isBiznum = function() {
	
	var arg = arguments[0] ? arguments[0] : "";		
	var biznum = eval("this.match(/[0-9]{3}" + arg + "[0-9]{2}" + arg + "[0-9]{5}$/)");		
	if(biznum == null) {		
		return false;		
	}		
	else {		
		biznum = biznum.toString().num().toString();		
	}		
	var sum = parseInt(biznum.charAt(0));		
	var num = [0, 3, 7, 1, 3, 7, 1, 3];		
	for(var i = 1; i < 8; i++) sum += (parseInt(biznum.charAt(i)) * num[i]) % 10;		
	sum += Math.floor(parseInt(parseInt(biznum.charAt(8))) * 5 / 10);		
	sum += (parseInt(biznum.charAt(8)) * 5) % 10 + parseInt(biznum.charAt(9));		
	return (sum % 10 == 0) ? true : false;		
};

/**		
 /* 주민번호 체크 - arguments[0] : 주민번호 구분자		
 /* XXXXXX-XXXXXXX		
 /* @return : boolean		
 */		
String.prototype.isJumin = function() {	
	
	var arg = arguments[0] ? arguments[0] : "";
	
	var jumin = eval("this.match(/[0-9]{2}[01]{1}[0-9]{1}[0123]{1}[0-9]{1}" + arg + "[1234]{1}[0-9]{6}$/)");

	if(jumin == null) {		
		return false;
	}		
	else {		
		jumin = jumin.toString();		
	}

	// 생년월일 체크		
	var birthYY = (parseInt(jumin.charAt(6)) == (1 ||2)) ? "19" : "20";		
	birthYY += jumin.substr(0, 2);		
	var birthMM = jumin.substr(2, 2) - 1;		
	var birthDD = jumin.substr(4, 2);		
	var birthDay = new Date(birthYY, birthMM, birthDD);
	
	if(birthDay.getYear() % 100 != jumin.substr(0,2) || birthDay.getMonth() != birthMM || birthDay.getDate() != birthDD) {		
		return false;		
	}
	
	var sum = 0;		
	var num = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];	
	var last = parseInt(jumin.charAt(12));		
	for(var i = 0; i < 12; i++) {		
		sum += parseInt(jumin.charAt(i)) * num[i];		
	}		
	return ((11 - sum % 11) % 10 == last) ? true : false;		
}		


/**
 * Round
 * arguments[0] : 소숫점 자릿수
 */
String.prototype.round = function() {
	var arg = arguments[0] ? arguments[0] : "";
	var arg = Math.pow(10, arg);
	return Math.round(this * arg)/arg;
};

/**
 * 최소 최대 길이인지 검증	
 * @Usage str.isLength(min [,max])
 */
String.prototype.isLength = function() {	

	var min = arguments[0];		
	var max = arguments[1] ? arguments[1] : null;		
	var success = true;		
	if(this.length < min) {		
		success = false;		
	}		
	if(max && this.length > max) {		
		success = false;		
	}
	return success;		
}

/**
* 문자열 길이 조정 (Lpad)	
* @return String
*/
String.prototype.lpad = function(totalLen,strReplace){ //lpad(최대크기,대체문자열)
	var strAdd  = "";
	var diffLen = totalLen - this.length; //최대크기에서 원본 문자열의 크기를 뺀 후 저장

	for(var i = 0; i < diffLen; ++i)
		strAdd += strReplace;  //대체 문자열을 원본 문자열 앞에 추가하여 저장
	
	return strAdd + this; //대체 문자열로 채운 문자열과 원본 문자열을 반환
};


/**
* 문자열 길이 조정 (Rpad)	
* @return String
*/
String.prototype.rpad = function(totalLen,strReplace){ //rpad(최대크기,대체문자열)
	var strAdd  = "";
	var diffLen = totalLen - this.length; //최대크기에서 원본 문자열의 크기를 뺀 후 저장

	for(var i = 0; i < diffLen; ++i)
		strAdd += strReplace;  //대체 문자열을 원본 문자열 앞에 추가하여 저장
	
	return this + strAdd; //대체 문자열로 채운 문자열과 원본 문자열을 반환
};


/**
* 텍스트 필드에 숫자와 .만 입력되게 하기
* @Usage <input type="text" name="text" onkeydown="numCheck();">
*/
function cfNumCheck(e)
{
   var txt  = (window.event) ? window.event.keyCode : e.which;
   
   	if((txt >= 48 && txt <=57) || (txt >= 96 && txt <=105) || txt == 190 || txt == 46 || txt == 8 || txt == 9 || txt == 37 || txt == 39 || txt == 110){
	   	//window.event.returnValue = true;
   	}else{
	   
		if(window.event) {
			
			window.event.returnValue = false;
		} else {
			e.preventDefault();
		}
   	}
}

/**
* 텍스트 필드에 숫자와 영어만 입력되게 하기
* @Usage <input type="text" name="text" onkeydown="numCheck();">
*/
function cfEngNumCheck(e)
{
   var txt  = (window.event) ? window.event.keyCode : e.which;
   
   	if((txt >= 48 && txt <=57) || (txt >= 96 && txt <=105) || txt == 190 || txt == 8 || txt == 9 || txt == 37 || txt == 39 || txt == 110 || (txt >= 65 && txt <=90) || (txt >= 97 && txt <=122)){
	   	//window.event.returnValue = true;
   	}else{
	   
		if(window.event) {
			
			window.event.returnValue = false;
		} else {
			e.preventDefault();
		}
   	}
}

function cfNumCheckUp(obj) {
	$(obj).val( $(obj).val().toString().replace(/[^0-9]/g, "") );
}

function cfNumberOnly(e, obj, isCash) {
    if(window.event){
        var lkeycode = e.keyCode;
    } else {
        var lkeycode = e.charCode;
    }
    //alert(lkeycode);
    
    var returnValue = ""; 
	var prevNum = "";
	var afterNum = "";

	if (obj.value == "" || obj.value == NaN) {
		return;
	}
	
	var arrValue = obj.value.split(".");
	prevNum = arrValue[0].num();
	if (prevNum.toString() == "NaN") {
		obj.value = "";
		return;
	}
	
	if( arrValue.length > 1 ) {
		afterNum = arrValue[1];
	}
		
	if (isCash){ 
		prevNum = prevNum.toString().money();
	} 
	
	returnValue = arrValue.length > 1 ? prevNum + "." + afterNum : prevNum;
	
	obj.value = returnValue;
}


function cutMsg(str,maxLen){
	var ret='';
	var i;
	var msglen=0;
	
	for(i=0;i<str.length;i++){
		var ch=str.charAt(i);
		
		if(escape(ch).length >4){
			msglen += 2;
		}else{
			msglen++;
		}
		
		if(msglen > maxLen) break;
		ret += ch;
	}
	
	return ret;
}
 
/**
 * 입력받은 문자열의 길이를 구한다. 한글은 2바이트로 계산한다.
 * @param str - 문자열길이 구할 문자열
 * @returns {Number} - 문자열의 구한 길이
 */
function reCount(str){
	var i;
	var msglen=0;
	 
	for(i=0;i<str.length;i++){
		var ch=str.charAt(i);
		 
		if(escape(ch).length >4){
			msglen += 2;
		}else{
			msglen++;
		}
	}
	
	return msglen;
}

/**
 * 영문/한글/특수문자 받아서 문자열 길이 체크하는 함수이다.
 * 예)
 *  <input name="pd_tmnt_desc" id="pd_tmnt_desc" type="text" onChange='byteCheck(regFrm.pd_tmnt_desc,18);' onKeyUp='byteCheck(regFrm.pd_tmnt_desc,18);'/>
 *  
 * @param chID - form의 텍스트박스의 아이디 (예. form.txtID)
 * @param MaxLen - 체크할 최대길이
 * 
 * */
function byteCheck(chID,MaxLen){
	var text = chID.value;
	var msglen=0;
	
	msglen = reCount(text);
	          
	if(msglen > MaxLen){
		rem = msglen - MaxLen;
		alert('해당 컬럼은 최대 영문 '+MaxLen+'자, 한글 '+MaxLen/2+'자만 입력가능합니다.');
		chID.value = cutMsg(text,MaxLen);               
	}
}

/**
 * jquery obj의 값에 대한 날짜형식 체크하기
 */
function isDateByObj(obj, token){
	if(token == undefined){
		token = "-";
	}
	if( $(obj).val() != "" ) {
		var aDate = $(obj).val().split(token);
		var year = aDate[0];
		if( $.trim(year) != "" ) {
			var month = aDate[1].replace(' ','').digits(2);
			var day = aDate[2].replace(' ','').digits(2);			

			if( month == 0 || day == 0 ) return false;
			
			var dt = year+token+month+token+day;
			if( !isDate(dt, token) ) return false;
			
			$(obj).val(year+token+month+token+day);
		} else {
			//$(obj).val("");
			return false;
		}
	}
	else{
		return false;
	}
	
	return true;
}

/**
 * jquery obj의 값에 대한 날짜형식 체크하기
 */
function isDateById(id, token){
	if(token == undefined){
		token = "-";
	}
	if( $("#"+id).val() != "" ) {
		var aDate = $("#"+id).val().split(token);
		var year = aDate[0];
		if( $.trim(year) != "" ) {
			var month = aDate[1].replace(' ','').digits(2);
			var day = aDate[2].replace(' ','').digits(2);			

			if( month == 0 || day == 0 ) return false;
			
			var dt = year+token+month+token+day;
			if( !isDate(dt, token) ) return false;
			
			$("#"+id).val(year+token+month+token+day);
		} else {
			//$("#"+id).val("");
			return false;
		}
	}
	else{
		return false;
	}
	
	return true;
}

/**
 * 날짜 유효성체크 
 * param : 체크할 날짜 (yyyy-mm-dd 형식으로 입력)
 * @return Boolean
 */		
 function isDate(data, token){
 	var aDate = data.split(token);
 	oDate = new Date();
 	var month;
	if(aDate[1].substring(0,1) == '0')
		month = parseInt(aDate[1].substring(1,2))-1;
	else
		month = parseInt(aDate[1])-1;
	
	oDate.setFullYear(aDate[0], month, aDate[2]);
 	
 	if(oDate.getFullYear() != aDate[0]
 	      || oDate.getMonth()+1 != aDate[1]
 	      || oDate.getDate() != aDate[2]){
 		return false;
 	}else{
 		return true;
 	}           
 }
 
 /**
  * 시작일자와 종료일자의 유효성 체크 
  * 
  * @param fromDate
  * @param toDate
  */
 function chkStartEndDateValueById(fromDate, toDate, token){
	 if(token == undefined){
		 token = '-';
	 }
	var $fromVal = $("#"+fromDate).val();
	var $toVal = $("#"+toDate).val();
	
	if(($fromVal != undefined && $fromVal != "")
			&& ($toVal != undefined && $toVal != "")
			&& ($fromVal.replaceAll(token,"") > $toVal.replaceAll(token,""))){
		//alert('시작일자가 종료일자보다 큽니다');
		//$("#"+fromDate).focus();
		return false;
	}
	return true;
}
 
 /* 
  * FUNCTION 명 : checkFileExtension by 조길환
  * FUNCTION 기능설명 : 파일 확장자를 체크하여 경고 메시지를 띄운다.
   */
 function checkFileExtension(str, extStr, focusFlag){
	 //alert(str);
	 var arr = str.split("\\");
	 var extArr = extStr.split("\,");
	 var fileName = arr[arr.length-1];
	 var ext = fileName.substring(fileName.lastIndexOf(".")+1).toLowerCase();
	 var chk = false;
	 for(var i=0; i<extArr.length; i++){
		 if(extArr[i] == ext){
			 chk = true;
			 break;
		 }
	 }
	 if(!chk){
		 alert("업로드할 수 없는 파일 형식 입니다.\n업로드 허용 파일 ["+extStr+"]");
		 if(focusFlag != undefined && focusFlag){
			 $("input[type=file][value="+str+"]").focus();
		 }
		 return false;
	 }
	 return true;
 }
 
 /* 
  * FUNCTION 명 : checkFileExtension by 조길환
  * FUNCTION 기능설명 : 파일 확장자를 체크한다.
  */
 function checkFileExtension2(str, extStr){
	 var arr = str.split("\\");
	 var extArr = extStr.split("\,");
	 var fileName = arr[arr.length-1];
	 var ext = fileName.substring(fileName.lastIndexOf(".")+1).toLowerCase();
	 var chk = false;
	 for(var i=0; i<extArr.length; i++){
		 if(extArr[i] == ext){
			 chk = true;
			 break;
		 }
	 }
	 if(!chk){
		 //alert("업로드할 수 없는 파일 형식 입니다.\n업로드 허용 파일 ["+extStr+"]");
		 //$("input[type=file][value="+str+"]").focus();
		 return false;
	 }
	 return true;
 }
 
 /* 
  * FUNCTION 명 : getFileExtension by 조길환
  * FUNCTION 기능설명 : 파일 확장자를 구한다. 
   */
 function getFileExtension(str){
 	var arr = str.split("\\");
 	var fileName = arr[arr.length-1];
 	var ext = fileName.substring(fileName.lastIndexOf(".")).toLowerCase();
 	return ext;
 }
 
 /**
  * 전화번호로 받은 인자의 길이를 확인해 그에 맞는 전화번호 포맷으로 변환해준다.
  * 두번째 인자로 포맷팅
  * 
  * @param str
  * @param token
  * @return
  */
 function makePhoneNumberFormat(obj, token){
 	//alert(obj.value + " : " + token);
 	if(obj == undefined || trim(obj.value) == ""){
 		return false;
 	}
 	var str = obj.value;
 	
 	if(str.length < 7){
 		if(!confirm("입력된 정보가 전화번호가 맞습니까?")){
 			obj.focus();
 		}
 	}
 	else if(str.indexOf(token) > -1){
 		obj.value = trim(str);
 	}
 	else if(str.length == 7){//지역번호 없는 전화번호 타입 531-0000
 		obj.value = str.substring(0, 3) + token + str.substring(3);
 	}
 	else if(str.length == 8){//지역번호 없는 8자리 전화번호 타입 1577-1577
 		obj.value = str.substring(0, 4) + token + str.substring(4);
 	}
 	else if(str.length == 9){//두자리 지역번호 있는 8자리 전화번호 타입 02-577-1577
 		obj.value = str.substring(0, 2) + token + str.substring(2, 5) + token + str.substring(5);
 	}
 	else if(str.length == 10){//세자리 지역번호 있는 전화번호 타입 042-000-0000
 		obj.value = str.substring(0, 3) + token + str.substring(3, 6) + token + str.substring(6);
 	}
 	else if(str.length == 11){//휴대폰 내지 070 전화번호 타입 010-0000-0000
 		obj.value = str.substring(0, 3) + token + str.substring(3, 7) + token + str.substring(7);
 	}
 	else{
 		if(!confirm("입력된 정보가 전화번호가 맞습니까?\n정확히 입력해주세요.")){
 			obj.focus();
 		}
 	}
 }
 
 /* 
 * FUNCTION 명 : checkNumberOnkeyup by JKH
 * FUNCTION 기능설명 : 입력된 값이 숫자인지를 체크 숫자가 아니면 지워버린다.
 * 추가로 허용할 수 있는 문자를 두번째 인자에 배열로 넣을 수 있다. 필수인자 아님
  */
 function checkNumberOnkeyup(obj, availCharArr){
 	var oStr = obj.value;
 	var str = oStr.substring(oStr.length-1);
 	var availArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
 	if(availCharArr != undefined && availCharArr.length > 0){
 		for(var i=0; i<availCharArr.length; i++){
 			availArr.push(availCharArr[i]);
 		}
 	}
 	var check = false;
 	for(var i=0; i<availArr.length; i++){
 		if(availArr[i] == str){
 			check = true;
 			break;
 		}
 	}
 	if(!check){
 		obj.value = oStr.substring(0, oStr.length-1);
 	}
 }
 
/** 공통 프로그래스바 보이기 */ 
function  showProgressBar(){
	$('.wrap_loadingbar').show();
}

/** 공통 프로그래스바 감추기 */
function  hideProgressBar(){
	$('.wrap_loadingbar').hide();
}