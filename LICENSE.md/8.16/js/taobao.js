$(function(){
    $("#left>li").mouseenter(function(){
        $("#center>li").eq($(this).index()).show().siblings().hide();
    });
    $("#right>li").mouseenter(function(){
        $("#center>li").eq($(this).index()+9).show().siblings().hide();
    });
});