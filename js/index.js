$(function(){   

    let winWidth = $(window).width(); 
   
    //-------------햄버거버튼 클릭 클래스 추가.
    const ham = $('.hamBtn>a');
    const nav = $('nav');

    function toggleMenu(){
        if(winWidth <= 1000){
            if(ham.hasClass("cancel")) {
                ham.removeClass('cancel');
                nav.removeClass('on');
            }else{
                ham.addClass("cancel");
                nav.addClass('on');
            }
        }
    }

    ham.on("click",function(){
            toggleMenu();    
    })    
    
    // -------------네비게이션    
    // PC
    $("#nav>li").on("mouseenter",function(){
        //console.log("마우스엔터");
        if(winWidth >1000){
            $(".sub").css("height","200px");
            $(".sub").stop().slideDown(500);
        }else {
            return;
        }
    });
   $("#nav").on("mouseleave", function () {
        if (winWidth > 1000) {
            $(".sub").stop().slideUp(500);
        }else{
            
        }
   });

   // 모바일
   $("#nav>li>a").on("click", function(){
        if(winWidth <= 1000){
            $(".sub").css("height","auto");
            $(".sub").stop().slideUp();   
            $(this).parent().find('.sub').stop().slideToggle();

        }
   }) 


    //-------------리사이즈-------------
    function resizeInit() {
        //
        winWidth = $(window).width();
        //헤더
        $(".headerTop").css("display" , "block"); 
        $(".headerBottom").css("margin-top" , "70px");     
    
        //서브네비(모바일일땐 슬라이드 멈춤)
        $('.sub').stop().slideUp();        
    }

    resizeInit();

    $(window).on("resize", function () {
        resizeInit();
    });



    //-------------스크롤 시 헤더 변경
    //스크롤 이벤트
    $(window).scroll(function(){
        let scroll = $(window).scrollTop();
    
        if(winWidth>1000){
            if (scroll > 300) {
                $(".headerTop").css("display" , "none");       
                $(".headerBottom").css("margin-top" , "10px");       
            }
            else if (scroll == 0){
                $(".headerTop").css("display" , "block");  
                $(".headerBottom").css("margin-top" , "70px");       

            }else{
                return ;
            }
        }

    });


    //-------------메인배너 페이드인아웃
    let currentIndex = 0;
    let slides = $(".bannerWrap>li");
    
    function fadeBanner() {
        slides.stop().animate({
            "opacity": 0
        }, 500);
        slides.eq(currentIndex).stop().animate({
            "opacity": 1
        }, 500);
    }

    function showNextSlide() {
        if (currentIndex >= slides.length - 1) {
            currentIndex = 0;
        }
        else {
            currentIndex++;
        }
        fadeBanner();
    }

    setInterval(showNextSlide, 5000);











    //-------------박스오피스 포스터 슬라이드
    //pc-보여지는 li는 5개로 설정 ,다음버튼클릭하면 li5개의 너비가 왼쪽으로 움직임.
    //**css수정함 => li에 left가 아닌 ul의 부모에 overflow:hidden, ul에서 위치 조정.
    
    let postBanner = $('.posterWrap'); //ul
    let posterLi = $('.posterWrap>li'); //li
    let liLength = $('.posterWrap>li').length; //1i 개수
   
    let num = 0;
    let maxNum = 2; 

    //section의 크기(너비)
    let ulWidth = postBanner.width(); //ul 너비
    let liWidth = posterLi.outerWidth(); //li 너비 (padding이 포함된 값.)
    console.log(liWidth);

    //padding이나 border가 포함되어있으면 outer,innerWidth로 계산해야함 ****
    //처음에 ul에 gap으로 간격조절했는데 계산하기 쉽게 li에 padding으로 바꿈.    

    $('.next').on("click",function(){
        // console.log("다음");
        // console.log(maxNum,num);
        num++; 
        if(num < maxNum){            
            //둘다 동작 됨.
            // postBanner.stop().animate({"left": -liWidth*num*5+ "px"}); -li너비*num(0>1로 증가)*5(5개만큼)+px
            postBanner.stop().animate({"left": -100*num+ "%"}); 
        }    
    });
    
    $('.prev').on("click",function(){
        if(num > 0){        
            num--;    
            // postBanner.stop().animate({"left": 100*num + "%"});
            postBanner.stop().animate({"left": 0});
        }
    });

    //리사이즈
    $(window).resize(function(){
    
        let winWidth = $(window).width(); 

        postBanner.stop().css({"left": 0 + "px"});
        num = 0;
        maxNum = 2; 

        //section의크기
        let ulWidth = postBanner.width();
        let liWidth = posterLi.outerWidth();
        
    })
 


















    //-------------스낵리스트 페이드인아웃
    let snack = $('.snackList>li');
    let idx = 0;

    function fadeSnackList(){
        snack.removeClass('snackOn');
        snack.eq(idx).addClass('snackOn');

        snack.stop().animate({
            "opacity":0
        }, 00);
        snack.eq(idx).stop().animate({
            "opacity":1
        }, 500);
    }

    function showFade() {
        if(idx >= snack.length-1){
            idx = 0;
        }else{
            idx++;
        }
        fadeSnackList();
    }

    setInterval(showFade,3000);

   

    //-------------글씨 투명도 0 -> 1 (수정중)
    //스크롤이벤트! 감지 텍스트 패럴렉스  //위치값체크해서 500이하면 나타나게?
    // const element = document.querySelector('.mainTitle');
    // const scrollTarget = window;
    // const animationName = 'fadeIn';
    // const start = 0;
   
   

    
});