// main

$(function(){
    $(document).ready(function(){
        var swiper = new Swiper("main .swiper", {
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: "main .swiper-pagination",
            },
            navigation: {
                nextEl: "main .swiper-button-next",
                prevEl: "main .swiper-button-prev",
            },
            loop: true,
            allowTouchMove: false, 
            on:{
                init:function(){
                    setTimeout(function(){
                        $('main .swiper-pagination-bullet-active').addClass('active');
                    },1);
                },
                slideChangeTransitionStart: function(){
                    $('main .swiper-pagination-bullet').removeClass('active');
                    $('main .swiper-pagination-bullet-active').addClass('active');
                }
            }
        });
    });
    $('main .main01 a, main .main02 a').click(function(e){
        e.preventDefault();
    });
});

//popup

$(document).ready(function(){
    function setCookie(name,value,expire){
        var today = new Date();

        today.setDate(today.getDate() + expire);

        document.cookie = name + '=' + value + '; path=/; expires=' + today.toGMTString() + ';';
    }

    var popup = '.popup';
    var chk = '#chk_box';

    $(popup).find('a').click(function(e){
        e.preventDefault(); 
        var chkValue = $(chk).prop('checked');

        if(chkValue){ 
            setCookie('exCookie','yes',1); 
        }

        $(popup).stop().fadeOut(0); 
    });

    var cookieData = document.cookie;

    if(cookieData.indexOf('exCookie=yes') < 0){ 
        $(popup).fadeIn(0); 
    }else{ 
        $(popup).fadeOut(0);
    }
});


// best menu

$(function(){
    var swiper = new Swiper(".tab_contents .bestmenu01 .swiper", {
        spaceBetween: 30,
        centeredSlides: true,
        effect: "fade",
        speed: 500,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        loop: true,
        loopAdditionalSlides : 1,
    });
    $('.bm_tab_box .btn a').click(function(e){
        e.preventDefault();
        $('.bm_tab_box .btn a').removeClass('active');
        $(this).addClass('active');

        var index = $(this).parent().index();

        $('.bm_tab_box .tab_contents > div').fadeOut(0);
        $('.bm_tab_box .tab_contents > div').eq(index).fadeIn(0,function(){
            $(this).css('display', 'flex');
        });

        //매번 스와이퍼 파괴
        swiper.destroy();
        

        if(index == 0){
            swiper = new Swiper(".tab_contents .bestmenu01 .swiper", {
                spaceBetween: 30,
                centeredSlides: true,
                effect: "fade",
                speed: 500,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                },
                loop: true,
                loopAdditionalSlides : 1,
            });
        
        }else if(index == 1){
            swiper = new Swiper(".tab_contents .bestmenu02 .swiper", {
                spaceBetween: 30,
                centeredSlides: true,
                effect: "fade",
                speed: 500,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                },
                loop: true,
                loopAdditionalSlides : 1,
            });
        }else if(index == 2){
            swiper = new Swiper(".tab_contents .bestmenu03 .swiper", {
                spaceBetween: 30,
                centeredSlides: true,
                effect: "fade",
                speed: 500,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                },
                loop: true,
                loopAdditionalSlides : 1,
            });
        }else if(index == 3){
            swiper = new Swiper(".tab_contents .bestmenu04 .swiper", {
                spaceBetween: 30,
                centeredSlides: true,
                effect: "fade",
                speed: 500,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                },
                loop: true,
                loopAdditionalSlides : 1,
            });
        }
    });
}); 


// this month slider
$(window).load(function(){


    var prevImages = [
        'images/main/thismonth_product_img01.jpg',
        'images/main/thismonth_product_img02.jpg',
        'images/main/thismonth_product_img03.jpg',
        'images/main/thismonth_product_img04.jpg',
        'images/main/thismonth_product_img05.jpg'
    ];
    var nextImages = [
        'images/main/thismonth_product_text01.png',
        'images/main/thismonth_product_text02.png',
        'images/main/thismonth_product_text03.png',
        'images/main/thismonth_product_text04.png',
        'images/main/thismonth_product_text05.png'
    ];
    


    var swiper = new Swiper(".thismonth .swiper", {
        slidesPerView: 'auto',
        spaceBetween: 80,
        centeredSlides: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        loop: true,
        on:{
            init: function(){
                $('.thismonth .swiper-slide-active').hover(function(){
                    $(this).find('img').attr('src',nextImages[0]);
                },function(){
                    $(this).find('img').attr('src',prevImages[0]);
                });
            },
            slideChangeTransitionStart: function(){
                var index = $('.thismonth .swiper-slide-active').attr('data-swiper-slide-index');
                $('.thismonth .swiper-slide a').off('mouseenter');
                $('.thismonth .swiper-slide a').off('mouseleave');
                $('.thismonth .swiper-slide-active').hover(function(){
                    $(this).find('img').attr('src',nextImages[index]);
                },function(){
                    $(this).find('img').attr('src',prevImages[index]);
                });
            },
        }
    });

    swiper.on('init',function(){
        swiper.update();
    });
});





// threethings slide
$(function(){
    $(function(){
        var swiper = new Swiper(".threethings .swiper", {
            spaceBetween: 30,
            loop: true,
            navigation: {
                nextEl: ".threethings .swiper-button-next",
                prevEl: ".threethings .swiper-button-prev",
            },
        });
    });
    $('.threethings .text_wrap a').click(function(e){
        e.preventDefault();
    });
});


//event
$(function(){
    $('.event a').click(function(e){
        e.preventDefault();
    });
});


//online slider
$(function(){
    var swiper = new Swiper(".online .swiper", {
        slidesPerView: 4,
        spaceBetween: 50,
        speed: 7000,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        loop: true,
        loopAdditionalSlides: 1,
    });
});


//quickmenu
$(function(){
    $('.quickmenu a').click(function(e){
        e.preventDefault();
    });
});