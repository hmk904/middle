<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="keywords" content="한밭도서관">
  <meta name="description" content="대전광역시, 대전시청, 대전광역시청, 한밭도서관">
  <title>대전광역시 한밭도서관</title>

  <link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/hanbatlibrary/style.css">
  <link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/drh/layout/charge.css">

  <script type="text/javascript" src="<%=request.getContextPath()%>/resources/jquery-1.10.2.min.js"></script>
  <script type="text/javascript" src="<%=request.getContextPath()%>/resources/rolling.js"></script>
  <script type="text/javascript" src="<%=request.getContextPath()%>/resources/stringUtil.js"></script>
  <script type="text/javascript" src="<%=request.getContextPath()%>/resources/commonUtil.js"></script>
  <script type="text/javascript" src="<%=request.getContextPath()%>/resources/system_util.js"></script>
  <script type="text/javascript" src="<%=request.getContextPath()%>/resources/system_board.js"></script>
  <script type="text/javascript" src="<%=request.getContextPath()%>/resources/jquery.form.min.js"></script>

  <script type="text/javascript" src="<%=request.getContextPath()%>/resources/jquery-1.11.3.min.js"></script>
  <script type="text/javascript" src="<%=request.getContextPath()%>/resources/script.js"></script>
  <script type="text/javascript" src="<%=request.getContextPath()%>/resources/jquery.easing.1.3.min.js"></script>
  <script type="text/javascript" src="<%=request.getContextPath()%>/resources/jquery.bxslider.min.js"></script>

  <script type="text/javascript" src="<%=request.getContextPath()%>/resources/common.js"></script>
  <script type="text/javascript" src="<%=request.getContextPath()%>/resources/main.js"></script>
  <script type="text/javascript" src="<%=request.getContextPath()%>/resources/search.js"></script>

  <script type="text/javascript">
    $(function() {});
  </script>
  <script type="text/javascript" src="/js/hanbatlibrary/search.js"></script>
  <script type="text/javascript" src="<%=request.getContextPath() %>/resources/js/common.js">
    // 	$(document).ready(function(e) {
    // 		$("#sear_word").keypress(function(e) {
    // 			if (event.keyCode === 13) {
    // 				event.preventDefault();
    // 				$("#list_go(1)").attr("action", "/newbook/list.do");
    // 				fnSearchChk();
    // 			}
    // 		});
    // 	});
    // 	function fn_detail(ctrl, idx) {
    // 		$("#ctrl").val(ctrl);
    // 		$("#content").val($("#content_" + idx).val());
    // 		$("#detailForm").submit();
    // 	}
    // 	function fnSearchChk() {
    // 		if ($("#sear_word").val() == null || $("#sear_word").val() == "") {
    // 			alert("검색어를 입력해주세요");
    // 			$("#sear_word").focus();
    // 			return false;
    // 		} else {
    // 			$('#mSearchForm1').submit()
    // 		}
    // 	}
    // 	function layClose1() {
    // 		document.getElementById("lay1").style.display = "none";
    // 	}
    // 	function layClose2() {
    // 		document.getElementById("lay2").style.display = "none";
    // 	}
    // 	// 사서에게 물어보세요
    // 	//     function link() {
    // 	//       $("#form1").attr("action", "https://www.nl.go.kr/NL/contents/N30502000000.do");
    // 	//       $("#lib_id").val("125003");
    // 	//       document.form1.target = "mashup";
    // 	//       $("#form1").submit();
    // 	//       //document.form1.submit();
    // 	//     }
  </script>
  <style>
    /** 준비 POPUP **/
    .popup_area {
      position: absolute;
      top: 120px;
      left: 18%;
      padding: 0 30px 0 0;
      width: 50%;
      z-index: 9999
    }

    .popup_area a {
      background: url(/images/hanbatlibrary/common/popup.jpg) no-repeat;
      display: inline-block;
      width: 500px;
      height: 500px;
      position: relative;
      background-size: 100%;
    }

    .popup_area a img {
      position: absolute;
      right: 0
    }

    /** 준비 POPUP **/
  </style>
</head>

<body style="">
  <div class="skiptoContent">
    <a href="#container_wrap">본문내용 바로가기</a>
  </div>
  <!-- wrap s -->
  <div id="wrap" class="wrap">
    <!-- header -->

    <!-- 상단고정배너 -->

    <header id="header_wrap">
      <div id="header">
        <!-- logo -->
        <h1 class="logo">
          <a href="<%=request.getContextPath()%>/index.do">한밭도서관
            <!-- 			<img src="/images/hanbatlibrary/main/bg_visual.jpg" alt="한밭도서관 Daejeon metropolitan City" /> -->
          </a>
        </h1>
        <!-- 			<h1 class="logo hidePc"><a href="/gar/index.do"><img src="/images/gar/common/m_logo.png" alt="한밭수목원 Daejeon metropolitan City"></a></h1> -->
        <!-- //logo -->

        <div class="layerGnb">
          <div class="bgLayer" style="display: none;"></div>
          <div class="wrapCnt">
            <!-- 					<h1 class="logo hidePc"><a href="/gar/index.do"><img src="/images/gar/common/m_logo.png" alt="한밭수목원"></a></h1> -->
            <strong class="logo hidePc"><a href="<%=request.getContextPath()%>/index.do">한밭도서관</a></strong>
            <!-- global -->
            <div id="global_wrap">
              <ul id="util">

                <li><a href="<%=request.getContextPath()%>/index.do">HOME</a></li>

                <c:if test="${loginUser == null }">
                  <li class="login"><a href="<%=request.getContextPath()%>/common/loginForm.do">로그인</a></li>
                </c:if>

                <c:if test="${loginUser != null }">
                  <li class="login"><a href="<%=request.getContextPath()%>/common/logout.do">로그아웃</a></li>
                </c:if>
                <li><a href="#" target="_blank" title="새창으로 이동"><strong class="cyber">사이버도서관</strong></a></li>
                <li class="link"><a href="#" target="_blank" title="새창으로 이동"><strong class="city">대전광역시청</strong></a></li>
              </ul>
              <!-- 						<div class="btnSrch"><a href="javascript:;">검색하기</a></div> -->
            </div>
            <!-- //global -->

            <!-- gnb -->
            <nav class="gnb" id="gnb">
              <ul>

                <li><a href="#">도서관안내</a>
                  <ul class="depth2 first" style="display: none;">

                    <li><a href="#"> 도서관안내 </a>
                      <ul class="depth3">

                        <li><a href="#">인사말</a></li>

                        <li><a href="#">연혁</a></li>

                        <li><a href="#">한밭도서관 발자취</a></li>

                        <li><a href="#">도서관현황</a></li>

                        <li><a href="#">조직도</a></li>

                        <li><a href="#">서비스헌장</a></li>

                        <li><a href="#">찾아오시는길</a></li>

                        <li><a href="#">관련사이트</a></li>

                      </ul>
                    </li>

                    <li><a href="#"> 이용안내 </a>
                      <ul class="depth3">

                        <li><a href="#">개관안내</a></li>

                        <li><a href="#">자료실안내</a></li>

                        <li><a href="#">대출반납</a></li>

                        <li><a href="#">다문화자료실</a></li>

                        <li><a href="#">도서기증 및 납본</a></li>

                        <li><a href="#">도서관견학</a></li>

                        <li><a href="#">시설대관</a></li>

                        <li><a href="#">사물함신청</a></li>

                        <li><a href="#">편의시설</a></li>

                      </ul>
                    </li>

                    <li><a href="#"> 생활문화센터 </a>
                      <ul class="depth3">

                        <li><a href="#">생활문화센터 소개</a></li>

                        <li><a href="#">예약일정</a></li>

                      </ul>
                    </li>

                  </ul>
                </li>

                <li class=""><a href="#">정보검색</a>
                  <ul class="depth2" style="display: none;">

                    <li class=""><a href="#"> 자료검색 </a></li>

                    <li class=""><a href="#"> 스마트도서관 </a></li>

                    <li class=""><a href="<%=request.getContextPath()%>/newbook/list.do">
                        새로들어온책 </a></li>

                    <li class=""><a href="<%=request.getContextPath()%>/librarybook/list.do">
                        보유도서 </a>
                      <ul class="depth3">

                        <li><a href="#">일반도서</a></li>

                        <li><a href="#">어린이도서</a></li>

                      </ul>
                    </li>

                    <li class=""><a href="#"> 이달의추천도서 </a></li>

                    <li class=""><a href="#"> 북큐레이션 </a>
                      <ul class="depth3">

                        <li><a href="#">일반도서</a></li>

                        <li><a href="#">어린이도서</a></li>

                      </ul>
                    </li>

                    <li><a href="#"> 희망도서신청 </a></li>

                    <li><a href="#"> 미리봄도서신청 </a></li>

                  </ul>
                </li>

                <li class=""><a href="#">행사안내</a>
                  <ul class="depth2" style="display: none;">

                    <li class=""><a href="#"> 문화행사 </a>
                      <ul class="depth3">

                        <li><a href="#">문화행사전체</a></li>

                        <li><a href="#">디지털영상관</a></li>

                      </ul>
                    </li>

                    <li class=""><a href="#" target="_blank" title="새창으로 이동">
                        강좌신청 </a></li>

                  </ul>
                </li>

                <li class=""><a href="#">참여안내</a>
                  <ul class="depth2" style="display: none;">

                    <li class=""><a href="<%=request.getContextPath()%>/notice/list.do">
                        공지사항 </a></li>

                    <li class=""><a href="#"> 자주묻는질문 </a></li>

                    <li class=""><a href="<%=request.getContextPath()%>/question/list.do">
                        질의답변 </a></li>

                    <li class=""><a href="<%=request.getContextPath()%>/hope/list.do"> 도서관에
                        바란다 </a></li>

                    <li class=""><a href="<%=request.getContextPath()%>/news/list.do">
                        도서관소식지 </a></li>

                    <li class=""><a href="<%=request.getContextPath()%>/information/list.do"> 자료마당 </a></li>

                    <li class=""><a href="#"> 책·꽃·이 </a></li>

                    <li class=""><a href="<%=request.getContextPath()%>/video/list.do">
                        홍보 동영상 자료 </a></li>

                  </ul>
                </li>

                <li class=""><a href="#">전자자료서비스</a>
                  <ul class="depth2" style="display: none;">

                    <li class=""><a href="#" target="_blank" title="새창으로 이동">
                        전자책 </a></li>

                    <li class=""><a href="#" target="_blank" title="새창으로 이동">
                        전자잡지 </a></li>

                    <li class=""><a href="#" target="_blank" title="새창으로 이동">
                        웹DB </a></li>

                    <li class=""><a href="#" target="_blank" title="새창으로 이동">
                        오디오북 </a></li>

                  </ul>
                </li>

              </ul>
            </nav>
            <!-- // gnb -->
          </div>
        </div>

        <div class="btnToggleMn hidePc">
          <a href="javascript:;">전체메뉴 열기</a>
        </div>
      </div>
    </header>

    <!-- //header -->

    <!-- popup s -->
    <!-- <div class="popup_area">
			<a href="#" class="btn_pop"><img src="/images/hanbatlibrary/common/popup_btn.jpg" alt="닫기"></a>
		</div>
		<script type="text/javascript">
			$('.btn_pop').click(function(){
				$('.popup_area').hide(400);
			});
		</script> -->
    <!-- popup e -->

    <!-- container_wrap -->
    <div id="container_wrap">

      <!-- main_layout s -->
      <div class="main_layout bg_01">
        <div>
          <h2 class="m_slogan">
            행복한 삶과 미래를 창조하는 <strong>한밭도서관</strong>
          </h2>
          <form name="mSearchForm1" id="mSearchForm1" method="post" action="<%=request.getContextPath()%>/newbook/list.do" target="searchPop">
            <input type="hidden" name="siteCodeGubun" value="home">
            <fieldset class="m_search">
              <legend>검색영역</legend>
              <div class="selectbox">
                <label for="standard">소장자료검색</label> <select id="standard" name="lmt0">

                  <option value="n" ${cri.searchType eq 'n' ? 'selected' :'' }>ISBN</option>
                  <option value="t" ${cri.searchType eq 't' ? 'selected' :'' }>제 목</option>
                  <option value="w" ${cri.searchType eq 'w' ? 'selected' :'' }>작성자</option>
                  <option value="c" ${cri.searchType eq 'c' ? 'selected' :'' }>내 용</option>

                </select>
              </div>
              <div class="wordbox">
                <label for="keyword" class="focus_tit" style="position: absolute; z-index: 1; display: block; visibility: visible;">검색어를
                  입력하세요.</label> <input type="text" id="keyword" name="keyword" value="${cri.keyword }" style="color: black; ">
              </div>
              <a href="<%=request.getContextPath() %>/newbook/list.do" onclick="list_go(1)">검색</a>
            </fieldset>
          </form>

        </div>
      </div>

      <div class="main_layout bg_02">
        <div>
          <ul class="m_shortcut">
            <li><a href="#" class="m01" target="_blank" title="새창으로열림">강좌신청</a></li>
            <li><a href="#" class="m02">대출안내</a></li>
            <li><a href="#" class="m03">시각장애인실</a></li>
            <li><a href="#" class="m04">다문화자료실</a></li>
            <li><a href="#" class="m05">생활문화센터</a></li>
            <li><a href="#" class="m06">도서기증</a></li>
            <li><a href="#" class="m07">디지털영상관</a></li>
          </ul>

          <div class="m_news">
            <h3>도서관 새소식</h3>
            <ul>

              <li class="notice"><a href="#"> <em> <span>2023.01<i>11</i></span>
                    <strong> 정리중인 자료목록 예고 </strong>
                  </em> <span> 정리중인 자료목록 예고 ... </span>
                </a></li>

              <li><a href="#"> 2023년 1월 「우리 명절 도서」 전시... </a> <span>2023-01-06</span></li>

              <li><a href="#"> 정리중인 자료목록 예고 </a> <span>2023-01-04</span></li>

              <li><a href="#"> 2023년 1월 어린이책 북큐레이션 </a> <span>2023-01-03</span></li>

              <li><a href="#"> 정문 주차타워 이용가능 안내 </a> <span>2023-01-02</span></li>

            </ul>
            <a href="/hanbatlibrary/board/boardNormalList.do?boardId=normal_1020&amp;menuSeq=6242" class="btn_more"><i>도서관 새소식 더보기</i></a>
          </div>

          <div class="m_popup">
            <div class="bx-wrapper" style="max-width: 100%; margin: 0px auto;">
              <div class="bx-viewport" style="width: 100%; overflow: hidden; position: relative; height: 244px;">
                <ul style="width: auto; position: relative;">

                  <li style="float: none; list-style: none; position: absolute; width: 382px; z-index: 50; display: block;">
                    <a href="#" target="_blank" title="새창으로 이동" onclick="clickPopZone('P',4801);"> <img style="height: 270px;" src="
													<%=request.getContextPath()%>/FileUpload/CMM/202301/20230103105951828.jpg" alt="" onerror="this.onError=null;this.src='http://www.daejeon.go.kr/images/common/no_img.jpg'">
                    </a>
                  </li>

                  <li style="float: none; list-style: none; position: absolute; width: 382px; z-index: 0; display: none;">
                    <a href="#" target="_blank" title="새창으로 이동" onclick="clickPopZone('P',4793);"> <img style="height: 270px;" src="<%=request.getContextPath()%>/FileUpload/CMM/202212/20221230035025083.jpg" alt="" onerror="this.onError=null;this.src='http://www.daejeon.go.kr/images/common/no_img.jpg'">
                    </a>
                  </li>

                  <li style="float: none; list-style: none; position: absolute; width: 382px; z-index: 0; display: none;">
                    <a href="#" target="_blank" title="새창으로 이동" onclick="clickPopZone('P',4376);"> <img style="height: 270px;" src="<%=request.getContextPath()%>/FileUpload/CMM/202206/20220604090504829.jpg" alt="" onerror="this.onError=null;this.src='http://www.daejeon.go.kr/images/common/no_img.jpg'">
                    </a>
                  </li>

                </ul>
              </div>
              <div class="bx-controls bx-has-controls-direction bx-has-controls-auto">
                <div class="bx-controls-direction">
                  <a class="bx-prev" href="">이전</a><a class="bx-next" href="">다음</a>
                </div>
                <div class="bx-controls-auto">
                  <div class="bx-controls-auto-item">
                    <a class="bx-start active" href="">재생</a>
                  </div>
                  <div class="bx-controls-auto-item">
                    <a class="bx-stop" href="">일시정지</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr class="hr_01">

          <div class="m_festival">
            <h3>이달의 문화행사</h3>
            <div>
              <div class="bx-wrapper" style="max-width: 100%; margin: 0px auto;">
                <div class="bx-viewport" style="width: 100%; overflow: hidden; position: relative; height: 100px;">
                  <ul style="width: auto; position: relative; transition-duration: 0s; transform: translate3d(0px, -50.1719px, 0px);">
                    <li style="float: none; list-style: none; position: relative; width: 788px;" class="bx-clone"><a href="#"> 우리 명절 도서 전 </a> <span>2023-01-07~2023-01-29</span></li>
                    <li style="float: none; list-style: none; position: relative; width: 788px;" class="bx-clone"><a href="#"> 공연(어린이뮤지컬)오즈의 마법사 </a> <span>2023-01-28~2023-01-28</span></li>

                    <li style="float: none; list-style: none; position: relative; width: 788px;"><a href="#"> 우리 명절 도서 전 </a> <span>2023-01-07~2023-01-29</span></li>

                    <li style="float: none; list-style: none; position: relative; width: 788px;"><a href="#"> 공연(어린이뮤지컬)오즈의 마법사 </a> <span>2023-01-28~2023-01-28</span></li>

                    <li style="float: none; list-style: none; position: relative; width: 788px;" class="bx-clone"><a href="#"> 우리 명절 도서 전 </a> <span>2023-01-07~2023-01-29</span></li>
                    <li style="float: none; list-style: none; position: relative; width: 788px;" class="bx-clone"><a href="#"> 공연(어린이뮤지컬)오즈의 마법사 </a> <span>2023-01-28~2023-01-28</span></li>
                  </ul>
                </div>
                <div class="bx-controls bx-has-controls-direction">
                  <div class="bx-controls-direction">
                    <a class="bx-prev disabled" href="">이전</a><a class="bx-next disabled" href="">다음</a>
                  </div>
                </div>
              </div>
            </div>
            <a href="#" class="m_more">이달의 문화행사 더보기</a>
          </div>

          <div class="m_info">
            <div class="m_guide">
              <ul class="m_link">
                <!--<li><a href="/hanbatlibrary/contentsHtmlView.do?menuSeq=6097" class="m01">한밭도서관 발자취</a></li>-->
                <li><a href="#" class="m02">도서관안내</a></li>
                <li><a href="<%=request.getContextPath()%>/videodata/list.do" class="m03">홍보동영상</a></li>
                <li><a href="<%=request.getContextPath()%>/news/list.do" class="m04">도서관 소식지</a></li>
                <li><a href="#" target="_blank" title="새창으로열림" class="m07">전자책</a></li>
                <!--<li><a href="/hanbatlibrary/cyber/index.html" class="m05" target="_blank" title="새창으로열림">사이버투어</a></li>-->
                <li><a href="#" class="m06">오시는 길</a></li>
                <li><a href="<%=request.getContextPath()%>/hope/list.do" class="m08">도서관에 바란다</a></li>
              </ul>

              <div class="m_quick">

                <form id="form1" name="form1" method="post">
                  <input type="hidden" name="lib_name"> <input type="hidden" id="lib_id" name="lib_id">
                </form>

                <h3>Quick Menu</h3>
                <ul>
                  <li><a href="#" title="새창으로열림">사서에게 물어보세요</a></li>
                  <li><a href="#" target="_blank" title="새창으로열림">책바다</a></li>
                  <li><a href="#" target="_blank" title="새창으로열림">책나래</a></li>
                  <li><a href="#" target="_blank" title="새창으로열림">자원봉사활동</a></li>
                  <li><a href="#" target="_blank" title="새창으로열림">책이음</a></li>
                </ul>
              </div>

              <hr class="hr_02">

              <div class="m_time">
                <h3>도서관 이용시간</h3>
                <ul>
                  <li><span>제1자료실</span>09:00 ~ 22:00(평일) / 09:00 ~
                    18:00(주말)</li>
                  <li><span>모든열람실</span>06:00 ~ 23:00(하절기) / 07:00 ~
                    23:00(동절기)</li>
                  <li><span>그외 자료실</span>09:00 ~ 18:00</li>
                  <li><span>휴관일</span>매주 월요일, 1월 1일 설날, 추석당일<br>일요일을
                    제외한 정부지정공휴일에는 3,4층 열람실 개방(09:00 ~ 18:00)</li>
                </ul>
                <a href="#" class="btn_more"><i>도서관 이용시간 더보기</i></a>
              </div>
            </div>

            <div class="m_book_link">
              <ul>
                <li><a href="<%=request.getContextPath()%>/librarybook/list.do" class="link01"> <span>보유 도서</span> 한밭도서관에서 있는<br>도서를
                    확인하실 수 있습니다.
                  </a></li>
                <li><a href="<%=request.getContextPath()%>/newbook/list.do" class="link02"> <span>새로 들어온 책</span> 한밭도서관에 새로 들어온 신간도서를<br>바로
                    확인하실 수 있습니다.
                  </a></li>
                <li><a href="#" class="link03"> <span>이달의 추천도서</span>
                    한밭도서관에서 추천해드리는<br>이달의 도서를 확인하실 수 있습니다.
                  </a></li>
                <li><a href="#" class="link04"> <span>북큐레이션</span> ‘맞춤
                    책 소개’ 한밭도서관에서 추천하는<br>북큐레이션 도서를 확인할 수 있습니다.
                  </a></li>
              </ul>
            </div>

          </div>

        </div>
      </div>

      <form name="detailForm" id="detailForm" method="post" action="#">
        <input type="hidden" id="ctrl" name="ctrl" value=""> <input type="hidden" id="gubun" name="gubun" value="recmmBook"> <input type="hidden" id="content" name="content" value="">
      </form>
      <!--//main_layout e -->
    </div>
    <!-- //container_wrap -->

    <!-- footer -->

    <footer id="footerWrap">
      <div id="footer">
        <ul>
          <li><a href="#" class="on" target="_blank" title="새창으로 이동">개인정보처리방침</a></li>
          <li><a href="#" target="_blank" title="새창으로 이동">이용약관</a></li>
          <li><a href="#" target="_blank" title="새창으로 이동">누리집 개선의견</a></li>

        </ul>
        <address>(35020) 대전광역시 중구 서문로 10(문화동)&nbsp; / &nbsp; 대표전화
          042-270-7420 &nbsp; / &nbsp; 팩스번호 (관리과)042-270-7429,
          (자료정책과)042-270-7469, (자료운영과)042-270-7489</address>
        <p>COPYRIGHT 2019 (C) DAEJEON METROPOLITAN CITY. ALL RIGHTS
          RESERVED.</p>
        <div class="foot_logo">대전광역시</div>
      </div>
    </footer>

    <!-- //footer -->
  </div>
  <!-- wrap e -->

</body>

</html>