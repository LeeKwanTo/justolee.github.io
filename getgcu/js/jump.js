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
