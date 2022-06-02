window.onload = function (){
    // gnb 기능  
    // 1. gnb 를 저장한다.
    let gnb = $('.gnb');
    // 2. header 를 저장한다.
    let header = $('.header');
    // 3. gnb 에 마우스 오버를 하면 .header 가 늘어난다.
    gnb.mouseenter(function(){
        header.addClass('header-active');
    });
    // 4. gnb 에 마우스 아웃을 하면 .header 가 줄어든다.
    gnb.mouseleave(function(){
        header.removeClass('header-active');
    });

    let menu_lis = gnb.find('>li');    

    // menu_lis 에 마우스오버하면 .submenu 보여줘
    // menu_lis 에 마우스리브하면 .submenu 숨겨줘

    $.each(menu_lis, function(index, item){        
        $(this).mouseenter(function(){
            $(this).find('.submenu').stop().slideDown(300);
        });
        $(this).mouseleave(function(){
            $(this).find('.submenu').stop().slideUp(300);
        });        
    });

    let info = $('.info');
    let infoSubmenu = $('.info-submenu')
    info.mouseenter(function(){
        header.addClass('header-active');
        infoSubmenu.show();
    });
    // 4. gnb 에 마우스 아웃을 하면 .header 가 줄어든다.
    info.mouseleave(function(){
        header.removeClass('header-active');
        infoSubmenu.hide();
    });

   
}