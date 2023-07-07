// mobile connect code
$(document).ready(function(){
    var mobile_keys = new Array('iPhone','iPad','Android','BlackBerry','Windows Phone', 'Windows CE','LG','MOT','SAMSUNG','SonyEricsson','Nokia');

    //혹시 모바일에서 PC화면을 누르고 왔는지 확인
    if(document.URL.match('move_pc')){
        mobile_keys = null; 
    }

    for(var i in mobile_keys){
        if(navigator.userAgent.match(mobile_keys[i]) != null){
            location.assign('http://mezen01.dothome.co.kr');
        }
    }
});

// header scroll
$(document).ready(function(){
    $(window).scroll(function(){
        var top = $(this).scrollTop();

        if(top > 0){
            $('header').addClass('active')
        }else{
            $('header').removeClass('active')
        }
    });
    $(window).trigger('scroll');
});

// gnb_slide
$(document).ready(function(){
    var gnb = '.gnb';
    var main = '.main_nav';
    var sub = '.sub_nav';
    var speed = 'fast'; 

    var subbg = $('<div class = "subbg"></div>');
    $('header').append(subbg);
    
    $(gnb).hover(function(){
        $(this).find(sub).add(subbg).stop().slideDown(speed);
    },function(){
        $(this).find(sub).add(subbg).stop().slideUp(speed);
        $(main).removeClass('active'); 
    });

    $(main).first().focus(function(){
        $(gnb).trigger('mouseenter'); 
    });
    
    $(main).focus(function(){
        $(main).removeClass('active'); 
        $(this).addClass('active'); 
    });

    $(sub).last().find('a:last').keydown(function(e){
        if(e.keyCode == 9){  
            if(!e.shiftKey){ 
                $(gnb).trigger('mouseleave');
            }
        }
    });

    $(main).first().keydown(function(e){
        if(e.keyCode == 9){ 
            if(e.shiftKey){ 
                $(gnb).trigger('mouseleave');
            }
        }
    });

    $(sub).find('li:last a').focus(function(){
        $(main).removeClass('active');
        $(this).parents(sub).prev().addClass('active');
    });

});


// quickmenu scroll
$(function(){
    var btn = '.quickmenu ul';
    var top_btn = '.quickmenu a:last'
    var speed = 1000;
    var easing = 'easeOutQuart';

    $(top_btn).click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop : 0
        },speed,easing);
    });  

    $(window).scroll(function(){
        var top = $(this).scrollTop();

        if(top > 200){
            $(btn).parent().stop().fadeIn(400);
        }else{
            $(btn).parent().stop().fadeOut(400);
        }
    });
});