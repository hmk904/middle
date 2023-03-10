
var ELEMENT_NODE = 1;
var TEXT_NODE = 3;

/**
 * 어떤 브라우저인지, 버전은 뭔지 확인한다.
 * return  json object - name, version
 */
var browser = (function() {
    var s = navigator.userAgent.toLowerCase();
    var match = /(webkit)[ \/](\w.]+)/.exec(s) 
    					|| /(opera)(?:.*version)?[ \/](\w.]+)/.exec(s) 
    					|| /(msie) ([\w.]+)/.exec(s) 
    					|| !/compatible/.test(s) && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(s) 
    					|| [];
    return { name: match[1] || "", version: match[2] || "0" };
}());


/**
 * Html 요소 생성 
 * @param pTagName 태그 명 
 * @param pId      Element Id
 * @param pName    Element Name
 * @param pStyle   CSS 지정 
 * !! 스타일 지정 
 * - width:0; 속성=값; 으로 구분하여 기술합니다. 예) width:0px; height:0px;
 */
function createIssedArea(pTagName, pId, pName, pStyle) {
    var htmlElement = document.createElement(pTagName);  // 인쇄 영역

    htmlElement.setAttribute('id'   , pId   );
    htmlElement.setAttribute('name' , pName );
    htmlElement.setAttribute('style', pStyle);
    if(pStyle == '') {
        htmlElement.style.height = 0;
        htmlElement.style.width  = 0;
    }

    return htmlElement;
}

/**
 * Iframe 생성 ( 숨김 타입 )
 * @param pId        Element Id
 * @param pName      Element name
 * @param pSrc       
 * @param pFrameBorder
 * @param pMarginHeight 
 * @param pMarginWidth
 * @param pWidth
 * @param pHeight
 * @param pScroll 
 */
function createIFrame(pId, pName, pSrc, pFrameBorder, pMarginHeight, pMarginWidth, pWidth, pHeight, pScroll ) {
    var htmlIFrameElement = document.createElement('iframe');        // 인쇄 페이지 

    htmlIFrameElement.setAttribute('id'          , pId);
    htmlIFrameElement.setAttribute('name'        , pName);
    htmlIFrameElement.setAttribute('src'         , pSrc);
    htmlIFrameElement.setAttribute('frameborder' , pFrameBorder);
    htmlIFrameElement.setAttribute('marginheight', pMarginHeight);
    htmlIFrameElement.setAttribute('marginwidth' , pMarginWidth);
    htmlIFrameElement.setAttribute('width'       , pWidth);
    htmlIFrameElement.setAttribute('height'      , pHeight);
    htmlIFrameElement.setAttribute('scrolling'   , pScroll);

    return htmlIFrameElement;
}

/**
 * Iframe 프레임 삭제 ( 숨김 타입 )
 * @param pTargetIFrameId        Element Id
 */
function removeIFrame(pTargetIFrameId) {
    if(document.getElementById(pTargetIFrameId)) document.getElementById(pTargetIFrameId).innerHTML = "";
}


/**
 * 폼 생성
 * @param  pId     -  Form id 값
 * @param  pName   -  Form name 값
 * @param  pAction -  요청 url
 * @param  pTarget -  target 지정
 */
function createHtmlForm(pId, pName, pAction, pTarget) {
    var formElement = document.createElement('form');

    formElement.setAttribute('id'    , pId    );
    formElement.setAttribute('name'  , pName  );
    formElement.setAttribute('action', pAction);
    formElement.setAttribute('target', pTarget);
    formElement.setAttribute('method', 'post' );

 return formElement;
}

/**
 * 폼 요소 생성
 * @param  pType  -  Element type
 * @param  pId    -  Element Id 값
 * @param  pName  -  Element name 값
 * @param  pValue -  Element value 값
 */
function createHtmlFormElement(pType, pId, pName, pValue) {
    var inputElement = document.createElement('input');
    
    inputElement.setAttribute('type' , pType);
    inputElement.setAttribute('id'   , pId);
    inputElement.setAttribute('name' , pName);
    inputElement.setAttribute('value', pValue);

    return inputElement;
}

/**
 * 폼 요소 삭제
 * @param targetFormId 삭제 대상 폼 id 값
 */
function removeFormElem(targetFormId) {
    var reForm = document.getElementById(targetFormId);
    
    while(reForm.firstChild) { reForm.removeChild(reForm.firstChild); }
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
* 우편번호조회 
* - 윈도우 팝업을 띄운다.
* @param pUrl 팝업 url 경로
* @param pAddr 주소            목적지 id 값
* @param pZip  우편번호(123-456)목적지 id 값
* @param pZip1 우편번호(123)    목적지 id 값
* @param pZip2 우편번호(456)    목적지 id 값
*/
function fn_openGetZpcdReadPop(pUrl, pAddr, pZip, pZip1, pZip2, oldAddr) {
    var postForm = createHtmlForm('zpcdReadForm', 'zpcdReadForm', pUrl, 'zpcdRead');
    var args     = arguments;
    var elemCnt  = 0;
    var elemId   = ['address', 'zipcode', 'zipcode1', 'zipcode2', 'oldAddr'];
    
    for(var inx = 0; inx < args.length; inx++) {
        if(inx == 0) continue;
        // 1. Input 요소 생성
        // 2. 생성된 HTMLFormElement를 objForm 노드에 붙이기
        postForm.appendChild(createHtmlFormElement('hidden', elemId[elemCnt], elemId[elemCnt], args[inx]));
        
        elemCnt++;
    }
    
    document.getElementById('commHiddenFormObj').appendChild(postForm);         // 3. 숨김 영역 노드에 자식으로 붙인다.
    openSimplePopup(postForm, 'zpcdRead', 555, 580, 120, 120, 'no', 'no' );     // 4. 전송
    removeFormElem('zpcdReadForm');                                             // 5. 해당 폼 요소 삭제
}



/**
 * 우편번호 검색 start
 */
function openZpcdReadPop(addr, zpcd, zpcd1, zpcd2, oldAddr){
    var url = "/cmm/openZpcdReadPop.do";
    fn_openGetZpcdReadPop(url, addr, zpcd, zpcd1, zpcd2, oldAddr);
}

/**
 * 도로명 조회 검색 
 * @param argA 우편번호
 * @param argB 지번주소
 */
function fn_getRoadInfo(argA, argB) {
 //alert(argA)
 var objFrm = document.zpcdReadForm;
 
 document.getElementById("srchWord").value = argA;
 
 document.getElementById("t_zipcode").value = argA;
 document.getElementById("t_address").value = argB;
 objFrm.action = "/cmm/getListRoadNmPop.do";
 objFrm.submit();
}

/**
 * 스크랩하기
 */
function scrapUrl() {
	window.clipboardData.setData('Text', location.href);
	alert('주소가 복사되었습니다. ');
}

/**
 * 현재 페이지 인쇄하기
 */
function printThisPage () {
	window.print();
}



