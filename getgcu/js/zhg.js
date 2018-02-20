// 二维码弹出与隐藏
$(document).ready(function(){
$("#closecomputer-1").click(function(){$("#ADcomputer").css({'display':'none'})});
$("#closecomputer-2").click(function(){$("#ADcomputer").css({'display':'none'})});
$("#opencomputer").click(function(){$("#ADcomputer").css({'display':'block'})});

$("#closefocus-1").click(function(){$("#ADfocus").css({'display':'none'})});
$("#closefocus-2").click(function(){$("#ADfocus").css({'display':'none'})});
$("#openfocus").click(function(){$("#ADfocus").css({'display':'block'})})
});


$(function(){

    $('.gd_ico').on('click',function(){
        $('.pet_more_list').addClass('pet_more_list_show');
    });
    $('.pet_more_close').on('click',function(){
        $('.pet_more_list').removeClass('pet_more_list_show');
    });
});

//---来自讲座1
document.all.ijz1title.innerHTML=document.all.jz1title.innerHTML//标题
document.all.ijz1detail.innerHTML=document.all.jz1detail.innerHTML//描述
document.all.ijz1fr.innerHTML=document.all.jz1fr.innerHTML//来源
function Lijz1(){
window.location(Ljz1()
);}


//---来自讲座2
document.all.ijz2title.innerHTML=document.all.jz2title.innerHTML//标题
document.all.ijz2detail.innerHTML=document.all.jz2detail.innerHTML//描述
document.all.ijz2fr.innerHTML=document.all.jz2fr.innerHTML//来源
function Lijz2(){
window.location(Ljz2()
);}


//---来自讲座3
document.all.ijz3title.innerHTML=document.all.jz3title.innerHTML//标题
document.all.ijz3detail.innerHTML=document.all.jz3detail.innerHTML//描述
document.all.ijz3fr.innerHTML=document.all.jz3fr.innerHTML//来源
function Lijz3(){
window.location(Ljz3()
);}


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

//---来自比赛1
document.all.ibs1title.innerHTML=document.all.bs1title.innerHTML//标题
document.all.ibs1detail.innerHTML=document.all.bs1detail.innerHTML//描述
document.all.ibs1fr.innerHTML=document.all.bs1fr.innerHTML//来源
function Libs1(){
window.location(Lbs1()
);}


//---来自比赛2
document.all.ibs2title.innerHTML=document.all.bs2title.innerHTML//标题
document.all.ibs2detail.innerHTML=document.all.bs2detail.innerHTML//描述
document.all.ibs2fr.innerHTML=document.all.bs2fr.innerHTML//来源
function Libs2(){
window.location(Lbs2()
);}


//---来自比赛3
document.all.ibs3title.innerHTML=document.all.bs3title.innerHTML//标题
document.all.ibs3detail.innerHTML=document.all.bs3detail.innerHTML//描述
document.all.ibs3fr.innerHTML=document.all.bs3fr.innerHTML//来源
function Libs3(){
window.location(Lbs3()
);}



// Loading page
    var loaderPage = function() {
        $(".loader").fadeOut("slow");
    };
    $(function(){
        loaderPage();
    });