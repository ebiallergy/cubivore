
window.onload = function(){
    $(function() {
        $('.loading').addClass('loading-on');
    });
}

$(function(){
    //pageTop
    $('.pageTop').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop : 0},600, 'swing');
    });
});