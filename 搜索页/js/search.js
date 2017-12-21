//更多收起替换
$(function(){
	$('.more_btn').bind('click',function(){
		if($(this).text()=='更多'){
			$(this).parent('dd').find('.search_single').hide();
			$(this).parent('dd').find('.search_all').show();
			$(this).addClass('up_btn');
			$(this).text('收起');
		 }else{
			$(this).parent('dd').find('.search_single').show();
			$(this).parent('dd').find('.search_all').hide();
			$(this).removeClass('up_btn');
			$(this).text('更多'); 
		}
		})
	
	
})


//点击多选
$(function(){
	$('.more_sel').bind('click',function(){
		$(this).parent('dd').find('.search_more').show();
		$(this).parent('dd').find('.search_single').hide();
		$(this).parent('dd').find('.search_all').hide();
		$(this).parent('dd').find('.more_sel').hide();
		$(this).parent('dd').find('.more_btn').hide();
		
		})
	
	
})
//取消
$(function(){
	$('.quxiao').bind('click',function(){
		$(this).parents('dd').find('.search_more').hide();
		$(this).parents('dd').find('.search_single').show();
		$(this).parents('dd').find('.search_all').hide();
		$(this).parents('dd').find('.more_sel').show();
		$(this).parents('dd').find('.more_btn').show();
		$(this).parents('dd').find('.more_btn').text('更多');
		
		})

})

//点击英文字母
$(function(){
	$('.search_zimu').delegate("span","click",function(){ 
		var box=$(this).parents('.search_box').next().find('.search_more_con0');
		var pox=box.find('.con').eq($(this).index());
		box.animate({scrollTop:pox.position().top},200);
		})

})


//点击多选
$(function(){
	$('.sel_more a').bind("click",function(){ 
	   var icon='<b class="close_icon"></b>';
		if($(this).hasClass('border')){
			$(this).removeClass('border');
			$(this).find('b').remove();
		}else{
			$(this).addClass('border');
			$(this).append(icon);
		}
	})

})

//点击更多筛选
$(function(){
	$('.develop_con').live('click',function(){ 
	     var text=$(this).find('span').text();
		if(text=='更多选项'){
			$(this).find('b').addClass('dev_icon0').removeClass('dev_icon');
			$(this).find('span').text('收起');
			$(this).parents('#search_term').find('dl.hide').show();
			$(this).addClass('develop_con0');
		}
		if(text=='收起')
		{
			$(this).find('b').addClass('dev_icon').removeClass('dev_icon0');
			$(this).find('span').text('更多选项');
			$(this).parents('#search_term').find('dl.hide').hide();
			$(this).removeClass('develop_con0');
		}
	})

})


