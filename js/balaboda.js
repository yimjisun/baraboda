$(document).ready(function(){
    //메인 메뉴에 마우스 오버했을때 서브 배경 슬라이드다운
    //hover이벤트는 유일하게 마우스 오버, 마우스 아웃 이벤트를 가지고 있음.
    $('header nav').hover(function(){
        $('.sub_bg').stop().slideDown(500);
        $('header').addClass('active');
    },
    function(){
        $('.sub_bg').stop().slideUp(500);
        $('header').removeClass('active');
    });
    $('header nav').hover(function(){
        $('.sub').stop().slideDown(500);
        $('header').addClass('active');
    },
    function(){
        $('.sub').stop().slideUp(500);
        $('header').removeClass('active');
    });
    //myswiper1(슬라이드)
    var swiper = new Swiper(".mySwiper1", {
        slidesPerView: 3,
        spaceBetween: 5,
        loop:true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }
    });

    //탭메뉴(s3 PRODUCT)

    //모든메뉴숨김
    $('.tab_con > div').hide();
    //첫번쨰 내용보임
    $('.tab_con > div:first').show();
    //탭제목에 클릭 이벤트설정
    $('.tab_title ul li').click(function(e){ 
        //a태그의 속성을 맏아주는 코드
        e.preventDefault();
        //클릭한 메뉴(li)의 인덱스 번호 num변수의 저장
        var num=$(this).index();
        //모든 탭제목에서 active제거
        $('.tab_title ul li a').removeClass('active');
        //클릭4한 탭제목에 active설정
        $(this).find('a').addClass('active');
        //모든내용숨김
        $('.tab_con > div').hide();
        //클릭한 제목(li)과 같은 인덱스번호를 가진 내용만 보임
        $('.tab_con > div').eq(num).show();
    });
    //myswiper2(슬라이드)
    var swiper = new Swiper(".mySwiper2", {
        slidesPerView: 2,
        spaceBetween: 20,
        loop:true,
        navigation: {
            nextEl: ".swiper-button-next2",
            prevEl: ".swiper-button-prev2",
          },
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
    });
    //myswiper3(슬라이드)
    var swiper = new Swiper(".mySwiper3", {
        effect:'fade', /*fadeIn효과*/
        loop:true,
        navigation: {
            nextEl: ".swiper-button-next2",
            prevEl: ".swiper-button-prev2",
          },
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          }
    });
    // family_site
    //패밀리 사이트 제목을 클릭하면 family_lise가올라옴
    $('.family_title a').click(function(e){
        //a태그의 속성막음
        e.preventDefault();
        $('.family_list').animate({'top':0});
        //span(삼각형 방향바꿈)
        $('.family_title a span').css('background-position','bottom center');
    });
    //패밀리 영역에서 마우스 아웃하면 .family_list내려감
    $('.family').mouseleave(function(){
        $('.family_list').animate({'top':200});
        //span(삼각형 방향바꿈)
        $('.family_title a span').css('background-position','top center');
    });
    //top클릭하면 화면 맨위로 이동
    $('.top').click(function(){
        $('html,body').animate({'scrollTop':0});
    });

    //윈도우에 스크롤 이벤트설정
    $(window).scroll(function(){
        //브라우저에서 html문서의 scrollTop값을 인식하여 winTop변수에 저장
        //$(this)는 scroll이벤트가 발생한 객체(window)를 가리킴
        var winTop=$(this).scrollTop();
        console.log(winTop);
    //s2영역의 위쪽 위치값을 구해서 scroll1변수에 저장
    var scroll1=$('section.s2').offset().top-600;
    //s2영역의 위쪽 위치값을 구해서 scroll2변수에 저장
    var scroll2=$('section.s3').offset().top-600;
    //s2영역의 위쪽 위치값을 구해서 scroll3변수에 저장
    var scroll3=$('section.s4').offset().top-600;
    //s2영역의 위쪽 위치값을 구해서 scroll4변수에 저장
    var scroll4=$('section.s5').offset().top-600;
    //s2영역의 위쪽 위치값을 구해서 scroll5변수에 저장
    var scroll5=$('section.s6').offset().top-600;
    //만약 .s2영역이 보이면 , &&(그리고 라는 뜻의 논리 연산자)조건2개 모두 true일떄 실행
    if(scroll1 < winTop && winTop < scroll2){
        $('section.s2 h1').addClass('active');
        $('section.s2 .jm').addClass('active');
        $('section.s2 h4').addClass('active');
        $('section.s2 .swiper').addClass('active');
    }
    //만약 .s2영역이 보이면 , &&(그리고 라는 뜻의 논리 연산자)조건2개 모두 true일떄 실행
    if(scroll2 < winTop && winTop < scroll3){
        $('section.s3 h1').addClass('active');
        $('section.s3 .jm').addClass('active');
        $('section.s3 h4').addClass('active');
        $('section.s3 .tab').addClass('active');
        $('section.s3 .view_btn').addClass('active');
    }
    if(scroll3 < winTop && winTop < scroll4){
        $('section.s4 h1').addClass('active');
        $('section.s4 .jm').addClass('active');
        $('section.s4 h4').addClass('active');
        $('section.s4 .gallery').addClass('active');
        $('section.s4 .s4_right').addClass('active');
    }
    if(scroll4 < winTop && winTop < scroll5){
        $('section.s5 h1').addClass('active');
        $('section.s5 .jm').addClass('active');
        $('section.s5 h4').addClass('active');
        $('section.s5 .movie').addClass('active');
    }
    if(scroll5 < winTop){
        $('section.s6 h1').addClass('active');
        $('section.s6 .jm').addClass('active');
        $('section.s6 h4').addClass('active');
        $('section.s6 .notice').addClass('active');
    }
});
});