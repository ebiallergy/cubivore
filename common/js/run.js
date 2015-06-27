$(function(){
    //js-on
    $('body').removeClass('js-off');
    
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