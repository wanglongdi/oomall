// 状态
$(function(){
	$('.sale_sel').each(function(){
		$(this).click(function(){
			var box=$(this).find('ul.sale_sel_tt');
			if(box.is(':hidden')){
			  $(this).find('ul.sale_sel_tt').show();
			  $(this).css('border','#666 1px solid');
			}else{
			  $(this).find('ul.sale_sel_tt').hide();
			  $(this).css('border','#ddd 1px solid');
			 }
		})
		
		
	})
	$('.sale_sel_tt').find('li').each(function(){
			var t=$(this).text();
			$(this).click(function(){
				$(this).parent().siblings('.sel_text').text(t);
				
			})
		})
	
})

// 加背景

$(document).ready(function(){
    $('.sale_manage_con .con').find('ul:odd').css('background','#f2f2f2');
});



