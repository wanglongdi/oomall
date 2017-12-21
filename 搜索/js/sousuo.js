// JavaScript Document

// 搜索
$(function(){
	$('.sousuo_len').mouseover(function(){
		$(this).find('.len_con').show();
	})
	$('.sousuo_len').mouseout(function(){
		$(this).find('.len_con').hide();
	})
	$('.len_con ul li').click(function(){
		// var le=$(this).parents('.sousuo_len').children('.len span').text();alert(le)
		if($(this).text()=='店铺'){			
			$(this).parents('.sousuo_len').find('span').text('店铺');
		
		}else{
			$(this).parents('.sousuo_len').find('span').text('商品');
		}
	})

}) 