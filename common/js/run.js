$(function(){
    //js-on
    $('body').removeClass('js-off');
    
    //header-menu
    var gNavi = $('.g-nav'),
        naviMenu = $('.header-menu');
    
    naviMenu.on('click', function(){
        if($(this).hasClass('header-menu-on')){
            $(this).removeClass('header-menu-on');
            $(gNavi).removeClass('g-nav-on');
        } else {
            $(this).addClass('header-menu-on');
            $(gNavi).addClass('g-nav-on');
        }
    });
    
    //pageTop
    $('.pageTop').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop : 0},600, 'swing');
    });
});

window.onload = function(){
    $(function() {
        $('.loading').addClass('loading-on');
    });
}