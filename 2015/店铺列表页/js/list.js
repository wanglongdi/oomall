// 所选条件删除
$(function(){
	$('.list_sel ul li .close').on('click',function(){
		$(this).parents('li').remove();
	})
	$('.list_sel .qc').on('click',function(){
		$(this).prev().empty();
	})
	
})

// 分类更多
$(function(){
	$('.sel_btn_more').click(function(){
		var text=$(this).text();
		if(text=='更多'){
			$(this).parent().find('.list_more').show();
			$(this).parent().find('.list_single').hide();
			$(this).parent().find('.list_moresel').hide();
			$(this).addClass('sel_up').text('收起');
		 }else{
			 $(this).parent().find('.list_more').hide();
			 $(this).parent().find('.list_single').show();
			 $(this).parent().find('.list_moresel').hide();
			 $(this).removeClass('sel_up').text('更多');
			 
			 }
	})
	$('.sel_more').click(function(){
		$(this).parent().find('.list_moresel').show();
		$(this).parent().find('.list_more').hide();
		$(this).parent().find('.list_single').hide();	
		$(this).parent().find('.sel_btn_more').hide();	
		$(this).hide();
	})
	
	$('.list_moresel .cancel').click(function(){
		$(this).parent('.list_moresel').hide();
		$(this).parents('dd').find('.list_more').hide();
		$(this).parents('dd').find('.list_single').show();
		$(this).parents('dd').find('.sel_btn_more').show();
		$(this).parents('dd').find('.sel_more').show();
		$(this).parents('dd').find('.sel_btn_more').text('更多').removeClass('sel_up');	
	})
	
})

// 分类多选点击
$(function(){
	var sel_num=0;
	$('.list_moresel li a').click(function(){
		var icon='<b class="close"></b>';
		if(!$(this).hasClass('border')){
			if(sel_num<5){
				sel_num++;
			    $(this).addClass('border');
			    $(this).append(icon);
			}else{
				return;
				}
			
		 }else{
			if(sel_num>0){
			  sel_num--;
			  $(this).removeClass('border'); 
			  $(this).find('b').remove();
			}else{
				return;
				}
			
			 
			 }
		
		
	})
})


//点击多选确定
$(function(){

	$(".sure").click(function(event){
		var str = '';
		var ur = '';
		var ui = '';	
		ur=$(this).parent('.attr_hidUl').attr('ur');
		ui=$(this).parent('.attr_hidUl').attr('ui');	
		$(this).parent('.attr_hidUl').find('a[class=border]').each(function(){
			str += $(this).attr('val')+',';
		})
		//alert(str);
		if(str == ''){
		  alert('至少选择一个品牌');
		}else{
		window.location.href=ur+str+ui;
		$(this).parents('dd').find('.list_moresel').hide();
		$(this).parents('dd').find('.list_single').show();
		$(this).parents('dd').find('.list_more').hide();
		$(this).parents('dd').find('.sel_more').show();
		$(this).parents('dd').find('.sel_btn_more').show();
        
		}			
			   
    });
	
})


//更多选项
$(function(){
   $('.list_up_con').click(function(){
	   var text=$(this).text();
	   if(text=='更多选项'){
		  $('.list_classify dl.hide').css('display','block');
		  $(this).html('收起<b class="icon0 icon"></b>');
		  $(this).css({'padding-left':'23px','width':'57px'});
		   
		}else{
			$('.list_classify dl.hide').css('display','none');
			$(this).html('更多选项<b class="icon"></b>');
			$(this).css({'padding-left':'10px','width':'70px'});
			
			}
	   
	   })
})


//大图
$(function(){
   $('.list_big_con0').each(function(){
	  var li=$(this).find('li'); 
	  var ul=$(this).find('ul');
	  var pre_btn=$(this).parents('.list_big_con').find('.pre_btn'); 
	  var next_btn=$(this).parents('.list_big_con').find('.next_btn'); 
	  var pre_num=0;
	  var next_num=li.length-4;
	  ul.css('width',li.length*42);
	  if(li.length<5){
		  pre_btn.hide();
		  next_btn.hide(); 
		  $(this).css('margin-left','-2px');
	  }
	  pre_btn.click(function(){
		  if(pre_num<1){
			 return; 
		  }
		  next_num++;
		  pre_num--;
		  ul.animate({'left':'+=42px'},1000);
		})
	  next_btn.click(function(){
		  if(next_num<1){
			 return; 
		  }
		  next_num--;
		  pre_num++;
		  ul.animate({'left':'-=42px'},1000);
			  
		})
	   
	})
	
	$('.list_big_con0 ul li img').hover(function(){
		var pic=$(this).parents('li').find('.list_big_pic img');
		var url=$(this).attr('src');  
		pic.attr('src',url);
		
		})
})
