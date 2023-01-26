<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page trimDirectiveWhitespaces="true" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="decorator" uri="http://www.opensymphony.com/sitemesh/decorator" %>
<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="keywords" content="한밭도서관" />
  <meta name="description" content="대전광역시, 대전시청, 대전광역시청, 한밭도서관">
  <title><decorator:title default="대전광역시 한밭도서관" />대전광역시 한밭도서관</title>

  <link rel="stylesheet" type="text/css" href="<%=request.getContextPath() %>/css/hanbatlibrary/style.css">
  <link rel="stylesheet" type="text/css" href="<%=request.getContextPath() %>/css/drh/layout/charge.css">
  <link rel='stylesheet' type='text/css' href='<%=request.getContextPath() %>/css/drh/layout/charge.css' media='all' />

	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">	
  <script type="text/javascript" src="<%=request.getContextPath()%>/resources/js/common.js"></script>
 <script src="<%=request.getContextPath() %>/resources/js/common.js"></script>
  <script type="text/javascript" src="<%=request.getContextPath() %>/js/cmm/jquery-1.10.2.min.js"></script>
  <script type="text/javascript" src="<%=request.getContextPath() %>/js/cmm/rolling.js"></script>
  <script type="text/javascript" src="<%=request.getContextPath() %>/js/cmm/stringUtil.js"></script>
  <script type="text/javascript" src="<%=request.getContextPath() %>/js/cmm/commonUtil.js"></script>
  <script type="text/javascript" src="<%=request.getContextPath() %>/js/cmm/system_util.js"></script>
  <script type="text/javascript" src="<%=request.getContextPath() %>/js/cmm/system_board.js"></script>
  <script type="text/javascript" src="<%=request.getContextPath() %>/js/cmm/jquery.form.min.js"></script>

  <script type="text/javascript" src="<%=request.getContextPath() %>/js/dre/jquery-1.11.3.min.js"></script>
  <script type="text/javascript" src="<%=request.getContextPath() %>/js/dre/script.js"></script>
  <script type="text/javascript" src="<%=request.getContextPath() %>/js/dre/jquery.easing.1.3.min.js"></script>
  <script type="text/javascript" src="<%=request.getContextPath() %>/js/dre/jquery.bxslider.min.js"></script>

  <script type="text/javascript" src="<%=request.getContextPath() %>/js/hanbatlibrary/common.js"></script>
  <script type="text/javascript" src="<%=request.getContextPath() %>/js/hanbatlibrary/main.js"></script>
  <script type="text/javascript" src="<%=request.getContextPath() %>/js/hanbatlibrary/search.js"></script>
  <script type="text/javascript" src="<%=request.getContextPath() %>/resources/js/common.js"></script>
  
  

  <script type="text/javascript">
    $(function() {});
  </script>
  <script type="text/javascript" src="/js/hanbatlibrary/search.js"></script>

  <script type="text/javascript">
    function linkPage(pageIndex) {
      location.href = "?pageIndex=" + pageIndex + "&menuSeq=6224";
    }
  </script>
</head>

<body style="">
  <div class="skiptoContent">
    <a href="#contents">본문내용 바로가기</a>
  </div>
  <!--  Top Wrapper  -->
  <div id="wrap" class="wrap">
    <!-- header -->

    <!-- 상단고정배너 -->

    <header id="header_wrap">
      <div id="header">
        <!-- logo -->
        <h1 class="logo"><a href="<%=request.getContextPath() %>/index.do">한밭도서관
            <!-- 			<img src="/images/hanbatlibrary/main/bg_visual.jpg" alt="한밭도서관 Daejeon metropolitan City" /> -->
          </a>
        </h1>
        <!-- 			<h1 class="logo hidePc"><a href="/gar/index.do"><img src="/images/gar/common/m_logo.png" alt="한밭수목원 Daejeon metropolitan City"></a></h1> -->
        <!-- //logo -->

        <div class="layerGnb">
          <div class="bgLayer" style="display: none;"></div>
          <div class="wrapCnt">
            <!-- 					<h1 class="logo hidePc"><a href="/gar/index.do"><img src="/images/gar/common/m_logo.png" alt="한밭수목원"></a></h1> -->
            <strong class="logo hidePc"><a href="<%=request.getContextPath() %>/index.do">한밭도서관</a></strong>
            <!-- global -->
            <div id="global_wrap">
              <ul id="util">

                <li><a href="<%=request.getContextPath() %>/index.do">HOME</a></li>

                <!--<li class="login"><a href="/cmm/memberLogin.do?siteCd=hanbatlibrary">로그인</a></li>-->

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

                <li class=""><a href="/hanbatlibrary/contentsHtmlView.do?menuSeq=6152">도서관안내</a>
                  <ul class="depth2 first" style="display: none;">

                    <li class=""><a href="/hanbatlibrary/contentsHtmlView.do?menuSeq=6152"> 도서관안내 </a>
                      <ul class="depth3">

                        <li><a href="/hanbatlibrary/contentsHtmlView.do?menuSeq=6152">인사말</a></li>

                        <li><a href="/hanbatlibrary/contentsHtmlView.do?menuSeq=6153">연혁</a></li>

                        <li><a href="/hanbatlibrary/contentsHtmlView.do?menuSeq=6154">한밭도서관 발자취</a></li>

                        <li><a href="/hanbatlibrary/libraryStatus.do?menuSeq=6156">도서관현황</a></li>

                        <li><a href="/hanbatlibrary/hanlibStaffList.do?menuSeq=6170">조직도</a></li>

                        <li><a href="/hanbatlibrary/contentsHtmlView.do?menuSeq=6173">서비스헌장</a></li>

                        <li><a href="/hanbatlibrary/contentsHtmlView.do?menuSeq=6174">찾아오시는길</a></li>

                        <li><a href="/hanbatlibrary/contentsHtmlView.do?menuSeq=6177">관련사이트</a></li>

                      </ul>
                    </li>

                    <li class=""><a href="/hanbatlibrary/contentsHtmlView.do?menuSeq=6180"> 이용안내 </a>
                      <ul class="depth3">

                        <li><a href="/hanbatlibrary/contentsHtmlView.do?menuSeq=6180">개관안내</a></li>

                        <li><a href="/hanbatlibrary/contentsHtmlView.do?menuSeq=6181">자료실안내</a></li>

                        <li><a href="/hanbatlibrary/contentsHtmlView.do?menuSeq=6183">대출반납</a></li>

                        <li><a href="/hanbatlibrary/contentsHtmlView.do?menuSeq=6185">다문화자료실</a></li>

                        <li><a href="/hanbatlibrary/contentsHtmlView.do?menuSeq=6189">도서기증 및 납본</a></li>

                        <li><a href="/hanbatlibrary/contentsHtmlView.do?menuSeq=6197">도서관견학</a></li>

                        <li><a href="/hanbatlibrary/contentsHtmlView.do?menuSeq=6198">시설대관</a></li>

                        <li><a href="/hanbatlibrary/contentsHtmlView.do?menuSeq=6200">사물함신청</a></li>

                        <li><a href="/hanbatlibrary/contentsHtmlView.do?menuSeq=6205">편의시설</a></li>

                      </ul>
                    </li>

                    <li class=""><a href="/hanbatlibrary/contentsHtmlView.do?menuSeq=6217"> 생활문화센터 </a>
                      <ul class="depth3">

                        <li><a href="/hanbatlibrary/contentsHtmlView.do?menuSeq=6217">생활문화센터 소개</a></li>

                        <li><a href="/hanbatlibrary/lifeCultureCenterList.do?menuSeq=6219">예약일정</a></li>

                      </ul>
                    </li>

                  </ul>
                </li>

                <li class=""><a href="/hanbatlibrary/dataSearch.do?menuSeq=6222">정보검색</a>
                  <ul class="depth2" style="display: none;">

                    <li class=""><a href="#"> 자료검색 </a> </li>

                    <li class=""><a href="#"> 스마트도서관 </a> </li>

                    <li class=""><a href="<%=request.getContextPath()%>/newbook/list.do"> 새로들어온책 </a> </li>

                    <li class=""><a href="<%=request.getContextPath()%>/librarybook/list.do"> 보유도서 </a>
                      <ul class="depth3">

                        <li><a href="#">일반도서</a></li>

                        <li><a href="#">어린이도서</a></li>

                      </ul>
                    </li>

                    <li class=""><a href="#"> 이달의추천도서 </a> </li>

                    <li class=""><a href="#"> 북큐레이션 </a>
                      <ul class="depth3">

                        <li><a href="#">일반도서</a></li>

                        <li><a href="#">어린이도서</a></li>

                      </ul>
                    </li>

                    <li class=""><a href="#"> 희망도서신청 </a> </li>

                    <li class=""><a href="#"> 미리봄도서신청 </a> </li>

                  </ul>
                </li>

                <li class=""><a href="#">행사안내</a>
                  <ul class="depth2" style="display: none;">

                    <li><a href="#"> 문화행사 </a>
                      <ul class="depth3">

                        <li><a href="#">문화행사전체</a></li>

                        <li><a href="#">디지털영상관</a></li>

                      </ul>
                    </li>

                    <li><a href="#" target="_blank" title="새창으로 이동"> 강좌신청 </a> </li>

                  </ul>
                </li>

                <li class=""><a href="#">참여안내</a>
                  <ul class="depth2" style="display: none;">

                    <li><a href="<%=request.getContextPath()%>/notice/list.do"> 공지사항 </a> </li>

                    <li><a href="#"> 자주묻는질문 </a> </li>

                    <li><a href="<%=request.getContextPath()%>/question/list.do"> 질의답변 </a> </li>

                    <li><a href="<%=request.getContextPath()%>/hope/list.do"> 도서관에 바란다 </a> </li>

                    <li><a href="<%=request.getContextPath()%>/news/list.do"> 도서관소식지 </a> </li>

                    <li><a href="<%=request.getContextPath()%>/information/list.do"> 자료마당 </a> </li>

                    <li><a href="#"> 책·꽃·이 </a> </li>

                    <li><a href="<%=request.getContextPath()%>/video/list.do"> 홍보 동영상 자료 </a> </li>

                  </ul>
                </li>

                <li class=""><a href="#">전자자료서비스</a>
                  <ul class="depth2" style="display: none;">

                    <li class=""><a href="#" target="_blank" title="새창으로 이동"> 전자책 </a> </li>

                    <li><a href="#" target="_blank" title="새창으로 이동"> 전자잡지 </a> </li>

                    <li class=""><a href="#" target="_blank" title="새창으로 이동"> 웹DB </a> </li>

                    <li class=""><a href="#" target="_blank" title="새창으로 이동"> 오디오북 </a> </li>

                  </ul>
                </li>

              </ul>
            </nav>
            <!-- // gnb -->
          </div>
        </div>

        <div class="btnToggleMn hidePc"><a href="javascript:;">전체메뉴 열기</a></div>
      </div>
    </header>

    <!-- //header -->

    <!-- container -->
    <div id="container_wrap">
      <div class="contents_layout" id="contents_layout">

        <!-- leftmenu -->

        <div class="leftWrap" id="leftmenu">

          <script type="text/javascript">
            <!--
            $(function() {
              $("div#leftmenu a.link_menu").bind("click", function() {
                var targetUrl = $(this).attr("targetUrl");
                if (targetUrl != undefined && (targetUrl == "") || (targetUrl == "#")) {
                  var $linkAnchor = $(this).parent().children("ul:first").find("a:first");
                  if ($linkAnchor != undefined && $linkAnchor.attr("targetUrl") != undefined && $linkAnchor.attr("targetUrl") != "" && $linkAnchor.attr("targetUrl") != "#") {
                    window.location.href = $linkAnchor.attr("href");
                  }
                }
              });
              var menuPath = $("div#leftmenu a.on:first").attr("menuPath");
              if (menuPath != undefined) {
                var menuSeqs = menuPath.split("/");
                $("div#leftmenu a.link_menu").each(function(idx) {
                  var menuSeq = $(this).attr("menuSeq");
                  var anchorObj = $(this);
                  for (var i = 0, s = menuSeqs.length; i < s; i++) {
                    var cMenuSeq = menuSeqs[i];
                    if (cMenuSeq == menuSeq) {
                      anchorObj.addClass("on");
                      break;
                    }
                  }
                });
              }
            });
            //
            -->
          </script>

          <h2>한밭도서관</h2>

          <div class="left_bg01"></div>

          <ul class="leftMenu">

            <li>

              <a href="<%=request.getContextPath()%>/newbook/list.do">새로들어온책</a>

            </li>
            <li>

              <a href="<%=request.getContextPath()%>/librarybook/list.do">보유도서</a>

            </li>
            <li>

              <a class="" href="<%=request.getContextPath()%>/notice/list.do">공지사항</a>

            </li>
            <li>

              <a href="<%=request.getContextPath()%>/question/list.do">질의답변</a>


            </li>
            <li>

              <a href="<%=request.getContextPath()%>/hope/list.do">도서관에 바란다</a>

            </li>
            <li>

              <a href="<%=request.getContextPath()%>/news/list.do">도서관 소식지</a>

            </li>
            <li>

              <a href="<%=request.getContextPath()%>/information/list.do">자료마당</a>

            </li>
            <li>

              <a href="<%=request.getContextPath()%>/video/list.do">홍보 동영상 자료</a>

            </li>
          </ul>
        </div>

        <!-- contents -->
        <div class="conRight" id="contents">