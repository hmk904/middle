
var ELEMENT_NODE = 1;
var TEXT_NODE = 3;

// Cross Editor의 사용자 정의 툴바를 위한 정의
var EDITOR_MENU = "newdoc|saveas|print|spacebar|undo|redo|cut|copy|paste|pastetext|spacebar|search|replace|selectall|spacebar|hyperlink|inserthorizontalrule|image|photoeditor|backgroundimage|flash|specialchars|emoticon|customMenu1|enter|word_style|space|word_color|space|cancelattribute|spacebar|word_justify|space|word_indentset|spacebar|word_listset|spacebar|tableinsert|spacebar|tablerowinsert|tablerowdelete|tablecolumninsert|tablecolumndelete|tablecellmerge|tablecellsplit|tablecellattribute|enter|fontname|space|formatblock|space|fontname|space|fontsize|space|lineheight|spacebar|fullscreen|help";

//daum API 지도 표시를 위한 변수
var map; 

/**
 * left trim : 왼쪽 공백 제거
 * */
if (!String.prototype.ltrim) {
    String.prototype.ltrim = function() {
     var re = /\s*((\S+\s*)*)/;
     return this.replace(re, "$1");
    };
}


/**
 * right trim : 오른쪽 공백 제거
 * */
if (!String.prototype.rtrim) {
    String.prototype.rtrim = function() {
     var re = /((\s*\S+)*)\s*/;
     return this.replace(re, "$1");
    };
}

/**
 * trim : 양쪽 공백 제거
 *
 */
if (!String.prototype.trim) {
    String.prototype.trim = function() {
        return this.replace(/(^\s*)|(\s*$)/g, "");
    };
}

/**
 * removeSpace : 모든 공백 제거
 *
 */
if (!String.prototype.removeSpace) {
    String.prototype.removeSpace = function() {
        return this.replace(/\s*/g, "");
    };
}

/**
 * removeNonDigit : 숫자를 제외한 모든 글자 제거
 *
 */
if (!String.prototype.removeNonDigit) {
    String.prototype.removeNonDigit = function() {
        return this.replace(/[^\d]*/g, "");
    };
}

/**
 * removeDigit : 모든 숫자 제거
 *
 */
if (!String.prototype.removeDigit) {
    String.prototype.removeDigit = function() {
        return this.replace(/\d*/g, "");
    };
}


/**
 * removeAlphabet : 모든 영문자 제거
 *
 */
if (!String.prototype.removeAlphabet) {
    String.prototype.removeAlphabet = function() {
        return this.replace(/[a-zA-Z]*/g, "");
    };
}


/**
 * div 태그를 보여준다.
 * @param compnentId 해당 컴포넌트의 아이디
 */
function showLayer (componentId) {
    var obj;
    if (document.getElementById) {
        obj = document.getElementById(componentId);
        if (obj) {
            obj.style.display = 'block';
        }
    }
}

/**
 * div 태그를 숨긴다.
 * @param compnentId 해당 컴포넌트의 아이디
 */
function hideLayer (componentId) {
    var obj;
    if (document.getElementById) {
        obj = document.getElementById(componentId);
        if (obj) {
            obj.style.display = 'none';
        }
    }
}


/**
 * 특정 엘리먼트의 자식노드 중 name 이 attrName 값을 갖는 엘리먼트를 반환한다.
 * 
 * @param parentElementId 조회할 엘리먼트의 아이디 
 * @param attrName 자식노드의 속성값
 */
function getChildNodesByAttrName (parentElementId, attrName) {
    var parentObject;
    var res = new Array();
    var resultCount = 0;
    if (document.getElementById) {
        parentObject    = document.getElementById(parentElementId);
        if (parentObject != 'undefined') {
            for (var inx = 0; inx < parentObject.childNodes.length; inx ++) {
                if (parentObject.childNodes[inx].name == attrName) {
                    res[resultCount ++] = parentObject.childNodes[inx];
                }
            }
        }
    }
    
    return res;
}

/**
 * 특정 엘리먼트의 자식노드 중 name 이 attrName 값을 갖는 엘리먼트를 반환한다.
 * 
 * @param parentElementId 조회할 엘리먼트의 아이디 
 * @param attrName 자식노드의 속성값
 */
function getElementByIdAndAttrName (targetObjectId, attrName) {
    var targetObject;
    var res;
    
    if (document.getElementById) {
        targetObject    = document.getElementById(targetObjectId);
        res = getElementByAttrName(targetObject, attrName);
    }
    
    return res;
}


/**
 * 특정 엘리먼트의 자식노드 중 name 이 attrName 값을 갖는 엘리먼트를 반환한다.
 * 
 * @param parentElementId 조회할 엘리먼트의 아이디 
 * @param attrName 자식노드의 속성값
 */
function getElementByAttrName (targetObject, attrName) {
    var res;
    if (targetObject != 'undefined') {
        if (targetObject.name && targetObject.name != 'undefined' && targetObject.name != '' && targetObject.name == attrName) {
            if (targetObject.nodeName == 'INPUT' && targetObject.type == 'radio') {
                if (targetObject.checked == true) {
                    res = targetObject;
                }
            } else {
                res = targetObject;
            }
        } else {
            for (var inx = 0; inx < targetObject.childNodes.length; inx ++) {
                if (targetObject.childNodes[inx].nodeType == ELEMENT_NODE) {
                    res = getElementByAttrName(targetObject.childNodes[inx], attrName);
                    if (res != null && res != '' && res != 'undefined') {
                        break;
                    }
                }
            }
        }
    }
    
    return res;
}


/**
 * 특정 엘리먼트의 자식노드 중 name 이 attrName 값을 갖는 엘리먼트 목록를 반환한다.
 * 
 * @param parentElementId 조회할 엘리먼트의 아이디 
 * @param attrName 자식노드의 속성값
 */
function getElementsByAttrName (targetObject, attrName) {
    var objList = new Array();
    if (targetObject != 'undefined') {
        if (targetObject.name && targetObject.name != 'undefined' && targetObject.name != '' && targetObject.name == attrName) {
            objList.push(targetObject);
        }
        
        for (var inx = 0; inx < targetObject.childNodes.length; inx ++) {
            if (targetObject.childNodes[inx].nodeType == ELEMENT_NODE) {
                objList = getElementsByAttrNameChild(targetObject.childNodes[inx], attrName, objList);
            }
        }
    }
    
    return objList;
}

/**
 * 특정 엘리먼트의 자식노드 중 name 이 attrName 값을 갖는 엘리먼트를 반환한다.
 * 
 * @param parentElementId 조회할 엘리먼트의 아이디 
 * @param attrName 자식노드의 속성값
 * @param objList (in, out)엘리먼트 목록을 담을 배열
 */
function getElementsByAttrNameChild (targetObject, attrName, objList) {
    if (targetObject != 'undefined') {
        if (targetObject.name && targetObject.name != 'undefined' && targetObject.name != '' && targetObject.name == attrName) {
            objList.push(targetObject);
        }
        
        for (var inx = 0; inx < targetObject.childNodes.length; inx ++) {
            if (targetObject.childNodes[inx].nodeType == ELEMENT_NODE) {
                objList = getElementsByAttrNameChild(targetObject.childNodes[inx], attrName, objList);
            }
        }
    }
    
    return objList;
}

/**
 * 특정 엘리먼트의 자식노드 중 name 이 attrName 값을 갖는 엘리먼트의 value값을 반환한다.
 * 
 * @param parentElementId 조회할 엘리먼트의 아이디 
 * @param attrName 자식노드의 속성값
 */
function getValueByIdAndAttrName (targetObjectId, attrName) {
    var targetObject;
    var res;
    
    if (document.getElementById) {
        targetObject    = document.getElementById(targetObjectId);
        res = getValueByAttrName(targetObject, attrName);
    }
    return res;
}



/**
 * 특정 엘리먼트의 자식노드 중 name 이 attrName 값을 갖는 엘리먼트의 value값을  반환한다.
 * 
 * @param parentElementId 조회할 엘리먼트의 아이디 
 * @param attrName 자식노드의 속성값
 */
function getValueByAttrName (targetObject, attrName) {
    var res;
    
    if (targetObject != 'undefined') {
        if (targetObject.name && targetObject.name != 'undefined' && targetObject.name != '' && targetObject.name == attrName) {
            if (targetObject.nodeName == 'INPUT' && targetObject.type == 'radio') {
                if (targetObject.checked == true) {
                    res = targetObject.value;
                }
            } else {
                res = targetObject.value;
            }
        } else {
            for (var inx = 0; inx < targetObject.childNodes.length; inx ++) {
                if (targetObject.childNodes[inx].nodeType == ELEMENT_NODE) {
                    res = getValueByAttrName(targetObject.childNodes[inx], attrName);
                    if (res != null && res != '' && res != 'undefined') {
                        break;
                    }
                }
            }
        }
    }
    
    return res;
}

/**
 * select는 첫번째, 주어진 오브젝트의 모든 하위오브젝트의 value 를 null 로 만든다.
 * 
 * @param targetObject 대상 오브젝트
 */
function cleanValuesAllNotSelect (targetObject) {
    if (targetObject != 'undefined') {
        if(targetObject.nodeType == ELEMENT_NODE) {
            for (var inx = 0; inx < targetObject.childNodes.length; inx ++) {
                if(targetObject.childNodes[inx].nodeType == ELEMENT_NODE) {
                    cleanValuesNodeNotSelect (targetObject.childNodes[inx]);
                }
            }
        }
    }
}

/**
 * select는 첫번째, 주어진 오브젝트의  value 를 null 로 만든다.
 * 
 * @param targetObject 대상 오브젝트
 */
function cleanValuesNodeNotSelect (targetObject) {
    if (targetObject != 'undefined') {
        if (targetObject.name && targetObject.name != 'undefined' && targetObject.name != '') {
            if (targetObject.nodeName != 'SELECT') {
                if (targetObject.nodeName == 'INPUT' && targetObject.type == 'radio') {
                    targetObject.checked = false;
                } else if (targetObject.nodeName == 'INPUT' && targetObject.type == 'checkbox') {
                    targetObject.checked = false;
                } else {
                    targetObject.value = '';
                }
            } else {
                targetObject.selectedIndex = 0;
            }
        }
    }
    
    for (var inx = 0; inx < targetObject.childNodes.length; inx ++) {
        if (targetObject.childNodes[inx].nodeType == ELEMENT_NODE) {
            if (targetObject.nodeName != 'SELECT') {
                cleanValuesNodeNotSelect (targetObject.childNodes[inx]);
            }
        }
    }
    
}



/**
 * 주어진 오브젝트의 모든 하위오브젝트의 value 를 null 로 만든다.
 * 
 * @param targetObject 대상 오브젝트
 */
function cleanValuesAll (targetObject) {
    if (targetObject != 'undefined') {
        if(targetObject.nodeType == ELEMENT_NODE) {
            for (var inx = 0; inx < targetObject.childNodes.length; inx ++) {
                if(targetObject.childNodes[inx].nodeType == ELEMENT_NODE) {
                    cleanValuesNode (targetObject.childNodes[inx]);
                }
            }
        }
    }
}

/**
 * 주어진 오브젝트의  value 를 null 로 만든다.
 * 
 * @param targetObject 대상 오브젝트
 */
function cleanValuesNode (targetObject) {
    if (targetObject != 'undefined') {
        if (targetObject.name && targetObject.name != 'undefined' && targetObject.name != '') {
            
            if (targetObject.nodeName == 'INPUT' && targetObject.type == 'radio') {
                targetObject.checked = false;
            } else if (targetObject.nodeName == 'INPUT' && targetObject.type == 'checkbox') {
                targetObject.checked = false;
            } else {
                targetObject.value = '';
            }
        }
    }
    
    for (var inx = 0; inx < targetObject.childNodes.length; inx ++) {
        if (targetObject.childNodes[inx].nodeType == ELEMENT_NODE) {
            cleanValuesNode (targetObject.childNodes[inx]);
        }
    }
    
}


/**
 * 
 * 
 * @param parentElementId 조회할 엘리먼트의 아이디 
 */
function getParameterString (targetObject) {
    var res = '';
    
    if (targetObject != 'undefined') {
        if(targetObject.nodeType == ELEMENT_NODE) {
            for (var inx = 0; inx < targetObject.childNodes.length; inx ++) {
                if(targetObject.childNodes[inx].nodeType == ELEMENT_NODE) {
                    res = res + (res.length > 0 ? '&' : '') + getParameterStringNode (targetObject.childNodes[inx]);
                } else if(targetObject.nodeType == TEXT_NODE) {
                }
            }
        }
    }
    
    return res;
}

/**
 * 
 * 
 * @param parentElementId 조회할 엘리먼트의 아이디 
 */
function getParameterStringNode (targetObject) {
    var res = '';
    
    if (targetObject != 'undefined') {
        if (targetObject.name && targetObject.name != 'undefined' && targetObject.name != '') {
            
            if (targetObject.nodeName == 'INPUT' && targetObject.type == 'radio') {
                if (targetObject.checked == true) {
                    res = targetObject.name + '=' + targetObject.value;
                }
            } else {
                res = targetObject.name + '=' + targetObject.value;
            }
        }
    }
    
    for (var inx = 0; inx < targetObject.childNodes.length; inx ++) {
        if (targetObject.childNodes[inx].nodeType == ELEMENT_NODE) {
            res = res + (res.length > 0 ? '&' : '') + getParameterStringNode (targetObject.childNodes[inx]);
        }
    }
    
    return res;
}

/**
 * 주어진 폼을 팝업으로 연다.
 * 
 * @param objForm 폼
 * @param target 
 * @param width 폭
 * @param height 높이
 * @param top top
 * @param left left
 * @param resizable 사이즈조정가능여부 ['yes'(default) | 'no'] - 
 * @param scrollbars 스크롤바 생성여부 ['yes' | 'no'(default)]
 */
function openSimplePopup (objForm, target, width, height, top, left, resizable, scrollbars) {
    resizable = (resizable == null || resizable == '') ? 'yes' : resizable;
    scrollbars = (scrollbars == null || scrollbars == '') ? 'no' : scrollbars;
    
    var popup    = window.open('', target, 'width=' + width + ', height=' + height + ', top=' + top + ', left=' + left + ', resizable=' + resizable + ', scrollbars=' + scrollbars + ', toolbar=0, status=0, menubar=0, argument=0');
    try {objForm.target = target;} catch (e) {}
    objForm.submit();
    
    popup.focus();
}

/**
 * 주어진 URL 을 팝업으로 연다.
 * 
 * @param url 대상URL
 * @param target 
 * @param width 폭
 * @param height 높이
 * @param top top
 * @param left left
 * @param resizable 사이즈조정가능여부 ['yes'(default) | 'no'] - 
 * @param scrollbars 스크롤바 생성여부 ['yes' | 'no'(default)]
 */
function openSimplePopup (url, target, width, height, top, left, resizable, scrollbars) {
	resizable = (resizable == null || resizable == '') ? 'yes' : resizable;
	scrollbars = (scrollbars == null || scrollbars == '') ? 'no' : scrollbars;
	
	var popup    = window.open(url, target, 'width=' + width + ', height=' + height + ', top=' + top + ', left=' + left + ', resizable=' + resizable + ', scrollbars=' + scrollbars + ', toolbar=0, status=0, menubar=0, argument=0');
	
	popup.focus();
}

/**
 * 숫자만 입력가능하도록 체크
 * */
function fn_input_only_number(obj){
	try{
		var chars = "0123456789";
		var rtn = "";
		var flag = false;
		var str = obj.value;
		for(var i=0;i<str.length;i++){
			if(chars.indexOf(str.charAt(i)) != -1){
				rtn += str.charAt(i);
			} else {
				flag = true;
			}
		}
	
		if(flag){
			obj.value = rtn;
		}
	} catch (e){
		alert(e);		
	}
}

/**
 * 전화번호만 입력 가능 (숫자와 '-' 만)
 * */
function fn_input_only_tel_number(obj){
	try{
		var chars = "0123456789-";
		var rtn = "";
		var flag = false;
		var str = obj.value;
		for(var i=0;i<str.length;i++){
			if(chars.indexOf(str.charAt(i)) != -1){
				rtn += str.charAt(i);
			} else {
				flag = true;
			}
		}
	
		if(flag){
			obj.value = rtn;
		}
	} catch (e){
		alert(e);		
	}
}

/**
 * 소수점 있는 숫자만 입력 가능 (숫자와 '.' 만)
 * */
function fn_input_only_number_dot(obj){
	try{
		var chars = "0123456789.";
		var rtn = "";
		var flag = false;
		var str = obj.value;
		for(var i=0;i<str.length;i++){
			if(chars.indexOf(str.charAt(i)) != -1){
				rtn += str.charAt(i);
			} else {
				flag = true;
			}
		}
		
		if(flag){
			obj.value = rtn;
		}
	} catch (e){
		alert(e);		
	}
}

/**
Cookie Function
[Howto]
var cookie = new Cookie();
cookie.Read("name") ==> read
cookie.Save("name", "nphur"); ==> save
cookie.Delete("name") ==> delete;
**/
var Cookie = function()
{
};

Cookie.prototype.MaxSize = 4000; //size in KB

Cookie.prototype.$GetValue = function( startIndex )
{  
	var endIndex = document.cookie.indexOf( ";", startIndex );  
	if( endIndex == -1 )    
		endIndex = document.cookie.length;
	var cookieValue = document.cookie.substring(startIndex, endIndex);
	if( cookieValue == "" )
		return null;
	else
		return unescape( cookieValue );
};

Cookie.prototype.Read = function(key)
{  
	var arg = key + "=";  
	var alen = arg.length;  
	var clen = document.cookie.length;  
	
	var i = 0;  
	while( i < clen )
	{    
		var j = i + alen;    
		if( document.cookie.substring(i, j) == arg )
		{
			return this.$GetValue(j);
		}
		i = document.cookie.indexOf( " ", i ) + 1;    
		if( i == 0 ) break;
	}  
	
	return null;
};

Cookie.prototype.Save = function(key, value, path, expires, domain, secure)
{
	var newCookie = key + "=" + escape(value) +
	((expires == null) ? "" : ("; expires=" + expires)) +
	((path == null) ? "; path=/" : ("; path=" + path)) +
	((domain == null) ? "; domain=istyle24.com" : ("; domain=" + domain)) +
	((secure == true) ? "; secure" : "");
	
	if( newCookie.length > Cookie.MaxSize )
		throw Error("Cookie length was " + newCookie.length + "kb but cookies cannot exceed " + Cookie.MaxSize + "kb");
	
	document.cookie = newCookie;
};

Cookie.prototype.Delete = function(key)
{  
	var exp = new Date();  
	exp.setTime(exp.getTime() - 1);
	document.cookie = key + "=null;expires=" + exp.toGMTString();
};

/*
 * Welcome Slide Popup
 * 모든 사이트 메인에서 사용되는 팝업 보여주는 부분
 */
var WelcomeSlide = {
		
	contentSuffix : "<div style='float:left; padding:2px 0 0 5px;'><input type='checkbox' onclick='javascript:WelcomeSlide.noMoreToday();' />오늘 하루 이 창을 열지 않음</div>	<div style='float:right; padding:6px 10px 0 0;'><a href='javascript:WelcomeSlide.hide()'>닫기</a></div>"
		
	, show : function() {
		$('#welcomeSlide').show();
	}

	, hide : function() {
		$('#welcomeSlide').hide();
	}

	, noMoreToday : function() {
	    cookie = new Cookie();
	    welcomeSlide = cookie.Save('welcomeSlide', 'nomore', '/');
	    this.hide();
	}		
};

/**
 * alert 대용으로 사용. alert 대신 div에 내용을 쓴다.
 *  
 * @param 쓸 텍스트 string
 */
function debug(something){
	var debugElement = document.getElementById('debug');
	var newBr = document.createElement('BR');
	var newTextNode = document.createTextNode(something);
	
	if (debugElement == 'undefined' || debugElement == null)
	{
		var newDiv = document.createElement('DiV');
		
		newDiv.setAttribute('id', 'debug');
		newDiv.appendChild(newTextNode);
		newDiv.appendChild(newBr);
		
		document.body.insertBefore(newDiv, document.body.firstChild);
	}else{
		debugElement.appendChild(newTextNode);
		debugElement.appendChild(newBr);
	}
}


/**
 * 요소ID로 페이지의 부분 인쇄 
 * @param elementId 요소ID
 */
function printPart(elementId){
	var printHtml = document.getElementById(elementId).innerHTML;//$('<div>').append($('#' + elementId).clone()).html();			
	var winPrint = window.open('', '', 'letf=0,top=0,width=800,height=900,toolbar=0,scrollbars=1,status=0');
	winPrint.document.write('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">');
	winPrint.document.write('<html>');
	winPrint.document.write('<head>');
	winPrint.document.write('<title>인쇄</title>');
	
	$('head link').each(function(){
		winPrint.document.write('<link rel="stylesheet" type="text/css" href="' + $(this).attr('href') + '"></link>');
	});
	winPrint.document.write('<style type="text/css">');
	$('head style').each(function(){
		winPrint.document.write($(this).text());
	});
	winPrint.document.write('</style>');
	winPrint.document.write('</head>');
	winPrint.document.write('<body class="popup_x">');
	winPrint.document.write(printHtml);
	winPrint.document.write('</body>');
	winPrint.document.write('</html>');
	winPrint.document.close();
	winPrint.focus();
	winPrint.print();
	winPrint.close();
}

/**
 * Cross Editor 값 가져오기
 * @param editor Cross Editor 객체
 * @returns Cross Editor body value
 */
function getEditorBodyValue(editor){
	if (!editor)
		return '';
	
	var value = editor.GetBodyValue();
	
	return value.replaceAll('<p>&nbsp;</p>', '') //ie
			.replaceAll('<p><br /></p>', '') //chrome, ff
			.replaceAll('<p><br></p>', '') //chrome, ff
			.trim();
}

/**
 * Cross Editor 값 설정
 * @param editor Cross Editor 객체
 * @param value 설정할 값
 * @returns 
 */
function setEditorBodyValue(editor, value){
	if (!editor)
		return;
	
	editor.SetBodyValue(value);
}

/**
 * CrssEditor에서 사용자 정의 메뉴를 눌렀을때 처리에 대한 분기
 * 
 * customMenu1: 관리자 파일 업로드
 */
function CE_OnCustomMenu(e){
	//debug("customMenuID:" + e.customMenuID + "\n" + "type:" + e.type);
	
	switch (e.customMenuID){
		case "customMenu1":
			var url = location.protocol +'//'+ location.hostname+(location.port ? ':'+ location.port : '') +"/itm/addCmmAdminFileUploadView.do?isPopup=yes";
			var target = "adminFileUpload";
			
			//debug(url +"//"+ target);
			window.open(url, target,"titlebar=no, staus=no, menubar=no, location=no, toolbar=no, top=100, left=100, scrollbars=yes, resizable=yes, width=800, height=500");
			break;
			
		default:
			break;
	}
}


/**
 * CrssEditor Initializing
 * 
 * param: type
 * 			: itm -> 관리자 페이지용
 *          : usr -> 일반 사용자(일반 사용자의 경우 넘기지 않아도 됨)
 *        height -> 에디터 높이
 */
function initializeEditor(type, height){
	var theEditor = new NamoSE(type);
	
	switch (type){
		case "itm":
			theEditor.params.ManageMode = true;
			theEditor.params.UserLang = "auto";
			theEditor.params.Height = (typeof(height) != 'undefined') ? height : "500px";
			theEditor.params.Width = "100%";
			theEditor.params.UserToolbar = true;
			theEditor.params.CreateToolbar = EDITOR_MENU;
			theEditor.EditorStart();
			break;
			
		default:
			theEditor.params.UserLang = "auto";
			theEditor.params.Height = (typeof(height) != 'undefined') ? height : "500px";
			theEditor.params.Width = "100%";
			theEditor.EditorStart();
			break;
	}
	return theEditor;
}


/**
 * FileDownLoad
 * @param file Path
 * @param file Name
 * @returns 
 */
function fileDownLoad(thePath, theFileNm){
	
/* 	var targetUri = '/cmm/Download.do';
	var param = {filePath: encodeURIComponent(thePath), fileName: encodeURIComponent(theFileNm)};
	$.post(targetUri, param); */
	
 	var targetUri = '/cmm/Download.do';
	var param = "filePath="+ encodeURIComponent(thePath) +"&fileName="+ encodeURIComponent(theFileNm);
	
/*	debug(targetUri);
	debug(param);*/
		
	window.open(targetUri +"?"+ param);
	
	//window.open('about:new').location.href=targetUri +"?"+ param;
}


/**
 * 파일 미리보기
 * @param String fileSeq 
 * @param String filePath
 * @param String fileName
 * @returns 
 */
function filePreViewOld(fileSeq, filePathNm, fileNm){

	var extStr = "hwp,pdf,doc,docx,ppt,pptx,xls,xlsx,txt"; //허용가능 확장자
	
	if(!checkFileExtension2(filePathNm, extStr)){
		alert("미리보기를 할 수 없는 파일형식 입니다.\n\n미리보기 허용 파일형식[" + extStr + "]");
		return;
	}
	
	if(!chkASCII(filePathNm)){
		alert("미리보기를 할 수 없는 파일입니다.");
		return;
	}
	
	var previewUrl = "http://210.104.41.164:8080/scs/previewUrl";		// SYNAP PREVIEWURL
	var preViewDocId = fileSeq;											// SYNAP 원본파일SEQ
	var preViewFilePath = "http://www.daejeon.go.kr/" + filePathNm; 	// SYNAP 원본파일경로
	var preViewAtchNm = fileNm;											// SYNAP 원본파일명
	var preViewOw = false;												// SYNAP OverWrite
	
	var param = "docId=" + preViewDocId + "&docPath=" + encodeURIComponent(preViewFilePath) + "&title=" + encodeURIComponent(preViewAtchNm) + "&ow=" + preViewOw;
	
	window.open(previewUrl +"?"+ param);
}

/**
 * 파일 미리보기
 * @param String fileSeq 
 * @param String filePath
 * @param String fileName
 * @returns 
 */
function filePreView(fileSeq, filePathNm, fileNm){

	//var extStr = "hwp,pdf,doc,docx,ppt,pptx,xls,xlsx,txt"; //허용가능 확장자
	
	//if(!checkFileExtension2(filePathNm, extStr)){
		//alert("미리보기를 할 수 없는 파일형식 입니다.\n\n미리보기 허용 파일형식[" + extStr + "]");
	//	alert("미리보기를 할 수 없는 파일형식입니다.\n해당 파일을 다운로드 받아 확인할 수 있습니다.\n\n미리보기 허용 파일형식\n[ " + extStr + " ]");
	//	return;
	//}
	
	if(!chkASCII(filePathNm)){
		alert("미리보기를 할 수 없는 파일입니다.");
		return;
	}
	
	
	var  previewUrl = "http://viewer.daejeon.go.kr:8080/SynapDocViewServer/job"; // SYNAP PREVIEWURL 신규도메인
	var preViewDocId = fileSeq;											// SYNAP 원본파일SEQ

	var preViewFilePath = "https://www.daejeon.go.kr/" + filePathNm; 	// SYNAP 원본파일경로(운영)
//	var preViewFilePath = "http://210.104.41.85/" + filePathNm; 	// SYNAP 원본파일경로(개발)
	var preViewAtchNm = fileNm;											// SYNAP 원본파일명
	var preViewOw = false;												// SYNAP OverWrite
	
	var param = "fid=" + preViewDocId + "&filePath=" + encodeURIComponent(preViewFilePath) + "&convertType=0&fileType=URL";
	
	window.open(previewUrl +"?"+ param);
}



/**
 * ASCII 코드값 체크
 * @param String instr
 * @returns 
 */
function chkASCII(instr)
{
	for (var i=0; i<instr.length; i++){
		chkstr = instr.substr(i,1).charCodeAt(0);
		
		if (chkstr > 126){
			return false;
			break;
		}
	}
	
	return true;
}

/**
 * copyToClipBoard
 * @param targetString
 * @returns 
 */
function copyToClipboard(targetString){

	if( window.clipboardData && clipboardData.setData ){
        clipboardData.setData("Text", targetString);
        
        alert('복사 됐습니다.\n Ctrl + V로 붙여 넣기하십시오');
        
    }else{
    	prompt("Ctrl+C를 눌러 클립보드로 복사하세요", window.location.protocol +"//"+ window.location.hostname +":"+ window.location.port +"/"+ targetString);
    }
}


//트위터 게시하기
/*function twitter(msg)
{
 var msg_tmp = msg;
 var sns_msg = document.getElementById("sns_msg");
 if (sns_msg != null)
 {
	 msg_tmp = sns_msg.value;
 }
 $.ajax({
  url: 'https://api.bit.ly/v3/shorten?login=o_5d78ipa9g1&apiKey=R_2f031c3067a9e0f07739873affdbc124&format=json&callback=?',
  type: 'GET',
  data: {longUrl: location.href},
  dataType: 'jsonp',  
  success: function (data) {
	var href = "http://twitter.com/home?status=" + encodeURIComponent(msg_tmp) + " " + encodeURIComponent(data.data.url);
    var win = window.open('about:blank', 'twitter', 'scrollbars=yes,resizable=yes,width=600,height=500,top=50,left=150');
    if(win){    
		win.location = href;
		win.focus();
	}
  },
  error: function (xhr) {
   alert('에러 : ' + xhr.status + '\n' + xhr.statusText);
  }
 });
}*/

function twitter(msg, url){
	
	 var msg_tmp = msg;
	 var sns_msg = document.getElementById("sns_msg");
	 if (sns_msg != null)
	 {
		 msg_tmp = sns_msg.value;
	 }
	
	var link = "";
	if(url != null && url != ""){
		link = encodeURI(url);
	}
	else{
		link = encodeURI(location.href);
	}

	var href = "http://twitter.com/share?text=" + encodeURIComponent(msg_tmp) + "&url=" + link;
    var win = window.open(href, 'twitter', 'scrollbars=yes,resizable=yes,width=600,height=500,top=50,left=150');
	 if(win) 
	 {
	  win.location = href;
	  win.focus();
	 }
	
}


//페이스북 게시하기
/*function facebook() 
{
 $.ajax({
  url: 'https://api.bit.ly/v3/shorten?login=o_5d78ipa9g1&apiKey=R_2f031c3067a9e0f07739873affdbc124&format=json&callback=?',
  type: 'GET',
  data: {longUrl: location.href},
  dataType: 'jsonp',  
  success: function (data) {
    var href = "http://www.facebook.com/sharer.php?u=" + data.data.url;
    var win = window.open('about:blank', 'facebook', 'scrollbars=yes,resizable=yes,width=600,height=500,top=50,left=150');
	 if(win) 
	 {
	  win.location = href;
	  win.focus();
	 }
  },
  error: function (xhr) {
   alert('에러 : ' + xhr.status + '\n' + xhr.statusText);
  }
 });
}
*/
function facebook(url){
//	var link = encodeURIComponent(location.href);
	
	var link = "";
	if(url != null && url != ""){
		link = encodeURI(url);
	}
	else{
		link = encodeURI(location.href);
	}
	var linkReplace = link.replace(/&/gi,"%26");
	var href = "http://www.facebook.com/sharer.php?u=" + linkReplace;
    var win = window.open(href, 'facebook', 'scrollbars=yes,resizable=yes,width=600,height=500,top=50,left=150');
	 if(win) 
	 {
	  win.location = href;
	  win.focus();
	 }
	
}

//미투데이 게시하기
function Me2Day(msg) 
{
 var tag = "";
 var msg_tmp = msg;
 var sns_msg = document.getElementById("sns_msg");
 if (sns_msg != null)
 {
	 msg_tmp = sns_msg.value;
 }
 $.ajax({
  url: 'https://api.bit.ly/v3/shorten?login=o_5d78ipa9g1&apiKey=R_2f031c3067a9e0f07739873affdbc124&format=json&callback=?',
  type: 'GET',
  data: {longUrl: location.href},
  dataType: 'jsonp',  
  success: function (data) {
	var href = "http://me2day.net/posts/new?new_post[body]=" + encodeURIComponent(msg_tmp) + " " + encodeURIComponent(data.data.url) + "&new_post[tags]=" + encodeURIComponent(tag);
    var win = window.open('about:blank', 'me2day', 'scrollbars=yes,resizable=yes,width=1024,height=600,top=50,left=150');
	 if(win) 
	 {
	  win.location = href;
	  win.focus();
	 }
  },
  error: function (xhr) {
   alert('에러 : ' + xhr.status + '\n' + xhr.statusText);
  }
 });
}


//트위터 게시하기
function twitter2(msg, paramUrl)
{
 var msg_tmp = msg;
 var sns_msg = document.getElementById("sns_msg");
 if (sns_msg != null)
 {
	 msg_tmp = sns_msg.value;
 }
 $.ajax({
  url: 'https://api.bit.ly/v3/shorten?login=o_5d78ipa9g1&apiKey=R_2f031c3067a9e0f07739873affdbc124&format=json&callback=?',
  type: 'GET',
  data: {longUrl: paramUrl},
  dataType: 'jsonp',  
  success: function (data) {
	var href = "http://twitter.com/home?status=" + encodeURIComponent(msg_tmp) + " " + encodeURIComponent(data.data.url);
    var win = window.open('about:blank', 'twitter', 'scrollbars=yes,resizable=yes,width=600,height=500,top=50,left=150');
    if(win){    
		win.location = href;
		win.focus();
	}
  },
  error: function (xhr) {
   alert('에러 : ' + xhr.status + '\n' + xhr.statusText);
  }
 });
}


//페이스북 게시하기
function facebook2(paramUrl) 
{
 $.ajax({
  url: 'https://api.bit.ly/v3/shorten?login=o_5d78ipa9g1&apiKey=R_2f031c3067a9e0f07739873affdbc124&format=json&callback=?',
  type: 'GET',
  data: {longUrl: paramUrl},
  dataType: 'jsonp',  
  success: function (data) {
    var href = "http://www.facebook.com/sharer.php?u=" + data.data.url;
    var win = window.open('about:blank', 'facebook', 'scrollbars=yes,resizable=yes,width=600,height=500,top=50,left=150');
	 if(win) 
	 {
	  win.location = href;
	  win.focus();
	 }
  },
  error: function (xhr) {
   alert('에러 : ' + xhr.status + '\n' + xhr.statusText);
  }
 });
}


//미투데이 게시하기
function Me2Day2(msg,paramUrl) 
{
 var tag = "";
 var msg_tmp = msg;
 var sns_msg = document.getElementById("sns_msg");
 if (sns_msg != null)
 {
	 msg_tmp = sns_msg.value;
 }
 $.ajax({
  url: 'https://api.bit.ly/v3/shorten?login=o_5d78ipa9g1&apiKey=R_2f031c3067a9e0f07739873affdbc124&format=json&callback=?',
  type: 'GET',
  data: {longUrl: paramUrl},
  dataType: 'jsonp',  
  success: function (data) {
	var href = "http://me2day.net/posts/new?new_post[body]=" + encodeURIComponent(msg_tmp) + " " + encodeURIComponent(data.data.url) + "&new_post[tags]=" + encodeURIComponent(tag);
    var win = window.open('about:blank', 'me2day', 'scrollbars=yes,resizable=yes,width=1024,height=600,top=50,left=150');
	 if(win) 
	 {
	  win.location = href;
	  win.focus();
	 }
  },
  error: function (xhr) {
   alert('에러 : ' + xhr.status + '\n' + xhr.statusText);
  }
 });
}

// 네이버 게시하기
function naverWrite(pTitle, pUrl){
	var title = encodeURI(pTitle);
	var url = "";
	
	if(pUrl == null || pUrl == ""){
		url = encodeURI(location.href);
	}
	else{
		url = encodeURI(pUrl);
	}
	
	var shareURL = "https://share.naver.com/web/shareView.nhn?url=" + url + "&title=" + title;
	var naShare = window.open(shareURL, "winRoadAddr", "resizable=no, status=no, scrollbars=yes, toolbar=no, menubar=no, width=500, height=650");
	naShare.focus();
}


// 카카오톡 공유하기
function kakaoSendLink(pTitle, pUrl){
	console.log(pUrl);
	
	var url = "";
	
	if(pTitle == null || pTitle == ""){
		pTitle = "대전광역시";
	}
	
	if(pUrl == null || pUrl == ""){
		url = encodeURI(location.href);
	}
	else{
		url = encodeURI(pUrl);
	}
	
	console.log(url);
	
	
 	Kakao.Link.sendDefault({
 		objectType: 'feed',
 		content: {
 			title: pTitle,
 			description: '',
 			imageUrl: '',
 			link: {
 				mobileWebUrl: url,
 				webUrl: url
 			}
 		}
 	});
//	Kakao.Link.sendScrap({
//		requestUrl: url
//	});
}


//* 북마크추가 (제목,북마크할URL) *//
function bookmarksite(title,url) { 
   if (window.sidebar) // firefox 
   window.sidebar.addPanel(title, url, ""); 
   else if(window.opera && window.print)
 
   { // opera 
      var elem = document.createElement('a'); 
      elem.setAttribute('href',url); 
      elem.setAttribute('title',title); 
      elem.setAttribute('rel','sidebar'); 
      elem.click(); 
   } 
 
   else if(document.all) // ie
   window.external.AddFavorite(url, title); 
} 

//* 스크랩추가 (스크랩할URL) *//
function bookmarks(url,nm) { 
	var href = "/cmm/CmmMemberBookmarkWrite.do?defaultNm="+encodeURIComponent(nm)+"&url=" + encodeURIComponent(url);
    var win = window.open('about:blank', 'bookmarks', 'scrollbars=yes,resizable=yes,width=600,height=500,top=50,left=150');
	 if(win) {
	  win.location = href;
	  win.focus();
	 }
} 

/**
 * 우편번호 검색
 * defaultAddr : 기본주소 Object Id
 * detailAddr : 상세주소 Object Id
 * zipCd01 : 우편번호 앞자리 Object Id
 * zipCd02 : 우편번호 뒷자리 Object Id
 */
/*function openRoadAddrPopup(defaultAddr, detailAddr, zipCd01, zipCd02) {
	url = "/cmm/roadaddr/road.do?defaultAddr=" + defaultAddr + "&amp;detailAddr=" + detailAddr + "&amp;zipCd01=" + zipCd01 + "&amp;zipCd02=" + zipCd02;
	var winRoadAddr = window.open(url, "winRoadAddr", "resizable=no, status=no, scrollbars=yes, toolbar=no, menubar=no, width=540, height=500");
	winRoadAddr.focus();
	
}*/

function openRoadAddrPopup(defaultAddr, detailAddr, zipCd01, zipCd02) {
	
	url = "/cmm/roadaddr/jusoPopup.do?defaultAddr=" + defaultAddr + "&detailAddr=" + detailAddr + "&zipCd01=" + zipCd01 + "&zipCd02=" + zipCd02;
	var winRoadAddr = window.open(url, "winRoadAddr", "resizable=no, status=no, scrollbars=yes, toolbar=no, menubar=no, width=540, height=500");
	winRoadAddr.focus();
	
}

function openRoadAddrPopup1(defaultAddr, detailAddr, zipCd01, zipCd02) {
	url = "/cmm/roadaddr/jusoPopup1.do?defaultAddr=" + defaultAddr + "&detailAddr=" + detailAddr + "&zipCd01=" + zipCd01 + "&zipCd02=" + zipCd02;
	var winRoadAddr = window.open(url, "winRoadAddr", "resizable=no, status=no, scrollbars=yes, toolbar=no, menubar=no, width=540, height=500");
	winRoadAddr.focus();
}


/**
 * Daum 지도 API (주소를 좌표로 변환 한 다음 그 좌표 값으로 지도에 마커를 올린다.
 * 
 * 작성자: Jiwon Lim
 * 
 *  사용법 
 *  지도를 표시할 곳에 <div id="drawingMap"></div> 를 넣는다. 너비 높이는 상황에 맞게 조절
 *  그리고, 페이지 로드 후 아래 처럼 호출한다.
 *  daumApiObj.pingSearch('대전광역시 유성구 갑동로 15번길 20-39');
 */ 
var daumApiObj = { 
	// DATA 형 API Key이 발급 받은 키(김영란 주무관)
	apikey: "ed47484e5a83905bc669f85872cddaa8bf478cf1"
	, query: null
	, mapDivId: "drawingMap"
	
	// 검색을 요청하는 함수 
	, pingSearch : function(q, divId) 
	{
		//DIV 아이디 부여
		if (typeof divId != "undefined"){
			daumApiObj.mapDivId = divId;
		}
		
		daumApiObj.query = q;
//		alert('http://apis.daum.net/local/geo/addr2coord?apikey=' + daumApiObj.apikey + '&output=json&callback=daumApiObj.pongSearch&q=' + encodeURIComponent(daumApiObj.query));
		
		if (daumApiObj.query) 
		{
			daumApiObj.s = document.createElement('script');
			daumApiObj.s.type ='text/javascript';
			daumApiObj.s.charset ='utf-8';
			daumApiObj.s.src = 'https://apis.daum.net/local/geo/addr2coord?apikey=' + daumApiObj.apikey + 
			'&output=json&callback=daumApiObj.pongSearch&q=' + encodeURIComponent(daumApiObj.query);
			document.getElementsByTagName('head')[0].appendChild(daumApiObj.s);
		}
	}
		
	// 검색 결과를 뿌리는 함수 
	, pongSearch : function(z)
	{
		var totCnt = z.channel.totalCount;
//		alert(totCnt);

		if (typeof(z) == 'object' && totCnt > 0){
			
			var lng = z.channel.item[0].lng;
			var lat = z.channel.item[0].lat;
//			alert(lng +'//'+ lat);
	
			map = new daum.maps.Map(document.getElementById(daumApiObj.mapDivId), {
				center: new daum.maps.LatLng(lat, lng)
			});
			
			var zoomControl = new daum.maps.ZoomControl();
			map.addControl(zoomControl, daum.maps.ControlPosition.RIGHT);
			
			var mapTypeControl = new daum.maps.MapTypeControl();
			map.addControl(mapTypeControl, daum.maps.ControlPosition.TOPRIGHT);
			
			var marker = new daum.maps.Marker({
				position: new daum.maps.LatLng(lat, lng)
			});
			
			marker.setMap(map);
			
		}else{
			alert('지도 정보를 받아오지 못했습니다.');
			return false;
		}
	}
};


var daumApiObj_xy = {
		// DATA 형 API Key이 발급 받은 키(김영란 주무관)
		apikey: "ed47484e5a83905bc669f85872cddaa8bf478cf1"
		, query: null
		, mapDivId: "drawingMap"
		
		// 검색을 요청하는 함수 
		, pingSearch : function(x, y, divId) 
		{
			var lat = x;
			var lng = y;
			
			map = new daum.maps.Map(document.getElementById(daumApiObj_xy.mapDivId), {
				center: new daum.maps.LatLng(lat, lng)
			});
			
			var zoomControl = new daum.maps.ZoomControl();
			map.addControl(zoomControl, daum.maps.ControlPosition.RIGHT);
			
			var mapTypeControl = new daum.maps.MapTypeControl();
			map.addControl(mapTypeControl, daum.maps.ControlPosition.TOPRIGHT);
			
			var marker = new daum.maps.Marker({
				position: new daum.maps.LatLng(lat, lng)
			});
			
			marker.setMap(map);
		}
	};


/**
 * 풋터에서 연관기관 바로가기 SelectBox 선택 시 페이지 이동
 * 
 * 작성자: Jiwon Lim
 * 
 *  사용법 
 *  셀렉트 박스 아이디를 변수로 넘겨서 처리
 *  셀렉트 박스의 옵션은 아래와 같이 구성되어야 동작함
 *  <option value="www.
 */
function selectedSiteOutLink(theId) {

	var theSelectBoxId = null;
	var theAddress = null;
	
	debug($.trim(theId).length);
	
	if ($.trim(theId).length > 0 ){
		
		theSelectBoxId = $('#'+ theId +' > option:selected');
		
		theAddress = $(theSelectBoxId).val();
		
		debug(theAddress);
		
		window.open(theAddress, 'relatedSite');
	}
	
}



/**
 * 검색 엔진으로 질의 던지기
 * 
 * 작성자: Jiwon Lim
 * 
 *  사용법 
 *  form 안에 select box / input 이 있어야 하고
 *  컬렉션 select box 이름은 menu 
 *  질의어 input 이름은 qt 
 */
function getItSearch(){
	
	var searchWord = $("#qt").val();
	var category = $("#menu").val();
	if(searchWord == ""){
		alert("검색어를 입력하십시오.");
		$("#qt").focus();
		return false;
	}
	$.ajax({
			url:'/drh/totalSearch.do',
			type: "post",
			data: {"totalSearch_keyword" : searchWord,
				"totalSearch_category" : category},
			dataType: 'json',
			async:false,
			success:function(data, status){
				$("#searchEngine").attr("action", "https://search.daejeon.go.kr/RSA/front/Search.jsp");
				$("#searchEngine").attr("target", "_blank");
				$("#searchEngine").submit();
				//return true;
			},
			error: function(request, status, opt){
				alert("서버와의 연결에 실패했습니다. Error Code ["+status+"]");
				return false;
			}
		});
}


/**
 * 인기 검색어 클릭시 검색어 질의 던지기
 * 
 * 작성자: Jiwon Lim
 * 
 *  사용법 
 *  form 안에 select box / input 이 있어야 하고
 *  컬렉션 select box 이름은 menu 
 *  질의어 input 이름은 qt 
 */
function getItSearchHot(queryString){

	if (queryString != undefined){
		$('#qt').val(queryString);
//		$('#searchEngine').submit();
		getItMobileSearch(searchEngine);
	}
}

/**
 * originalstr: lpad 할 text
 * length: lpad할 길이
 * strToPad: lpad 시킬 text
 */
function lpad(originalstr, length, strToPad) {
    while (originalstr.length < length)
        originalstr = strToPad + originalstr;
    return originalstr;
}

/**
 * originalstr: rpad 할 text
 * length: rpad할 길이
 * strToPad: rpad 시킬 text
 */
function rpad(originalstr, length, strToPad) {
    while (originalstr.length < length)
        originalstr = originalstr + strToPad;
    return originalstr;
}

/**
 * Date 객체 Handling
 */
/**
 * 구분자에 따라 오늘날짜 가져오기
 * strDiv: 구분자
 */
function getToday(strDiv)
{
	if( typeof strDiv == 'undefined' )
		strDiv = "";
	
	var today = new Date();
	
    return getDayString(today, strDiv);
}

/**
 * 구분자에 따라 첫날짜 가져오기
 * strDiv: 구분자
 */
function getFirstday(strDiv)
{
	if( typeof strDiv == 'undefined' )
		strDiv = "";
	
	var today = new Date();
	today.setDate(1);
	
    return getDayString(today, strDiv);
}

/**
 * 구분자에 따라 마지막날짜 가져오기
 * strDiv: 구분자
 */
function getLastday(strDiv)
{
	if( typeof strDiv == 'undefined' )
		strDiv = "";
	
	var today = new Date();
	today.setMonth(today.getMonth()+1, 0);
	
	return getDayString(today, strDiv);
}

/**
 * 구분자에 따라 날짜문자열 가져오기
 * objDate: Date 객체
 * strDiv: 구분자
 */
function getDayString(objDate, strDiv)
{
	var curYear  = objDate.getFullYear();
	var curMonth = objDate.getMonth()+1;
 	var curDate  = objDate.getDate();

 	curMonth = lpad(curMonth+"",2,"0");
	curDate  = lpad(curDate+"",2,"0");
	
    return curYear + strDiv + curMonth + strDiv + curDate;
}

/**
 * Cookie Function
 */
function getCookie(sName) {
	var aCookie = document.cookie.split("; ");
	for(var i = 0; i < aCookie.length; i++) {
		var aCrumb = aCookie[i].split("=");
		if(sName == aCrumb[0]) {
			return unescape(aCrumb[1]);
		}
	}
	return null;
}

function setCookie( name, value, expiredays )
{
    var todayDate = new Date();

    // name=value 형태로 cookie에 저장하는데 expiredays 만큼 저장한다
    todayDate.setDate( todayDate.getDate() + expiredays );
    document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";";
}

//cookie(name=value) 형태
function getCookieFull( name )
{
	var nameOfCookie = name + '=';
	var x = 0;
	while( x <= document.cookie.length ) {
		var y = (x + nameOfCookie.length);
		if( document.cookie.substring( x, y ) == nameOfCookie ) {  
	        if( ( endOfCookie=document.cookie.indexOf( ';', y ) ) == -1 )
	            endOfCookie = document.cookie.length;  
            return unescape( document.cookie.substring( y, endOfCookie ) );  
        }  
        x = document.cookie.indexOf( ' ', x ) + 1;  
        if ( x == 0 )  
            break;  
	}
	return '';  
}

//글자수 제한
function f_chk_length(obj,len)
{
	var objVal = obj.value;
	var objValLength = objVal.length;
	var maxLen = Number(len);
	
	if( event.keyCode != 8			//backspace
			&& event.keyCode != 46		//delete
			&& objValLength >= maxLen )
	{
		obj.value = objVal.substring(0,maxLen);
	}
	
}


//팝업 조회수 - gbn:팝업구분,seq:팝업seq  딜레이 추가 대전시 소속사이트 새창 이동시 메뉴 호출이 늦음
function clickPopZone(gbn,seq){
	setTimeout(function() { 	
		$.ajax({
			type : "POST",
			async : true ,
			url : "/drh/updatePopHit.do" ,
			data : {gbn:gbn,seq:seq}
		});
	},2000);
}

//날짜 형식으로 자동 세팅
function fn_dateFormat(input, ch){
	var tran_str = "";
	var tmp_str = "";
	if(input.value.length > 0){
	 tran_str = input.value.split("-").join("");
	 for(var i=0;i<tran_str.length;i++){
	  if(i == 4 || i == 6) tmp_str += ch; 
	  tmp_str += tran_str.charAt(i)+"";
	 }
	 input.value = tmp_str;
	}
}


//이북솔루션 팝업
function fn_popupEbook(url){
	var t="", l="", w="", h="", opt="";
	
	if(screen.width >= 1280) {                      
		
		w = 1276; h = 963; t = 0; l = 0;
		if(screen.width > 1280) {
			l = (screen.availWidth-w)/2;
			t = (screen.availHeight-h)/2;
			if(t < 50) t = 0;
			if(l < 50) l = 0;
		}
		// 서비스팩2 일때는 fullscreen 을 붙여야 윈도우작업표시줄을 가릴수 있다.
		// 서비스팩2 이고 윈도우 고전일때 PC에서 실행시키면 원래 fullscreen 으로 떠버린다.
		// 일부 xp2 에서 완전fullscreen 으로 뜨고 있었음, 해결위해서 channelmode=yes 으로 변경, 윈도우작업표시줄만 가리는 기능
		if(document.location.toString().indexOf("http://") > -1) {
			if( (navigator.userAgent.indexOf("; SV1") > -1 || navigator.userAgent.indexOf("; MSIE 7") > -1 ) && screen.width == 1280 && screen.height == 1024 ) opt = ",channelmode=yes";
		}
		
	} else {
		
		w = 1020; h = 707; t = 0; l = 0;
		if(screen.width > 1024) {
			l = (screen.availWidth-w)/2;
			t = (screen.availHeight-h)/2;
			if(t < 50) t = 0;
			if(l < 50) l = 0;
		}
		
		// 서비스팩2 일때는 fullscreen 을 붙여야 윈도우작업표시줄을 가릴수 있다.
		// 서비스팩2 이고 윈도우 고전일때 PC에서 실행시키면 원래 fullscreen 으로 떠버린다.
		// 일부 xp2 에서 완전fullscreen 으로 뜨고 있었음, 해결위해서 channelmode=yes 으로 변경, 윈도우작업표시줄만 가리는 기능
		if(document.location.toString().indexOf("http://") > -1) {
			if( (navigator.userAgent.indexOf("; SV1") > -1 || navigator.userAgent.indexOf("; MSIE 7") > -1 ) && screen.width == 1024 && screen.height == 768 ) opt = ",channelmode=yes";
		}
	}

	window.open(url,'','top='+t+',left='+l+',width='+w+',height='+h+',titlebar=yes,resizable=yes,status=yes'+opt);
}
//게시글 안에서 테이블 스크롤
$(document).ready(function() {
	$(".board_txt table").wrap("<div class='table_scroll mt20'></div>");
	$(".board_txt .table_scroll").before("<p class='scroll_tip'><span>좌,우로 이동가능합니다.</span></p>");
	$(".board_txt .table_scroll").after("<p class='scroll_tip'><span>좌,우로 이동가능합니다.</span></p>");
});