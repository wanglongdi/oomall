// 状态
$(function(){
	$('.refund_sel').each(function(){
		$(this).click(function(){
			var box=$(this).find('ul.refund_sel_tt');
			if(box.is(':hidden')){
			  $(this).find('ul.refund_sel_tt').show();
			  $(this).css('border','#666 1px solid');
			}else{
			  $(this).find('ul.refund_sel_tt').hide();
			  $(this).css('border','#ddd 1px solid');
			 }
		})
		
		
	})
	$('.refund_sel_tt').find('li').each(function(){
			var t=$(this).text();
			$(this).click(function(){
				$(this).parent().siblings('.refund_text').text(t);
				
			})
		})
	
})

// 状态
$(function(){
	$('.refund_sel0').each(function(){
		$(this).click(function(){
			var box=$(this).find('ul.refund_sel_tt0');
			if(box.is(':hidden')){
			  $(this).find('ul.refund_sel_tt0').show();
			  $(this).css('border','#666 1px solid');
			}else{
			  $(this).find('ul.refund_sel_tt0').hide();
			  $(this).css('border','#ddd 1px solid');
			 }
		})
		
		
	})
	$('.refund_sel_tt0').find('li').each(function(){
			var t=$(this).text();
			$(this).click(function(){
				$(this).parent().siblings('.refund_text').text(t);
				
			})
		})
	
})


// 交易状态
$(function(){
	$('.app_time').each(function(){
		$(this).click(function(){
			var box=$(this).find('ul.app_time_con');
			if(box.is(':hidden')){
			  $(this).find('ul.app_time_con').show();
			  $(this).addClass('app_time_bg');
			  $(this).find('b').addClass('app_time_icon0');
			}else{
			  $(this).find('ul.app_time_con').hide();
			  $(this).removeClass('app_time_bg');
			  $(this).find('b').removeClass('app_time_icon0');
			 }
		})
		
		
	})
	$('.app_time_con').find('li').each(function(){
			var t=$(this).text();
			$(this).click(function(){
				$(this).parent().siblings('.app_time_text').text(t);
				
			})
		})
	
})

// 加背景

$(document).ready(function(){
    $('.refund_manage_con .con').find('ul:odd').css('background','#f2f2f2');
});


