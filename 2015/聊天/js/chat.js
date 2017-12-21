// store
$(function(){
  $('#chat_store .pic').hover(function(){
	  $('#chat_store').find('.icon_s').addClass('icon_s0');
	  $('#chat_store_icon').show();
	  $('#chat_store_con').show();
	  $('#chat_store_bg').show();
	 },function(){
		$('#chat_store').find('.icon_s').removeClass('icon_s0');
	    $('#chat_store_icon').hide();
	    $('#chat_store_con').hide();
	    $('#chat_store_bg').hide(); 
		 
		 })
})

//选择字体
$(function(){
   $('.font_fm_con li').click(function(){
	  $('.font_fm').find('.fm_text').text($(this).text());
	  $('.font_fm_con').hide();
   })
   
   $('.font_fm p').click(function(){
	  $('.font_fm_con').show(); 
   })
   
   $('.font_sz_con li').click(function(){
	  $('.font_sz').find('.sz_text').text($(this).text());
	  $('.font_sz_con').hide();
   })
   
   $('.font_sz p').click(function(){
	  $('.font_sz_con').show(); 
   })
   
   $('a.text_zt').click(function(){
	   if($(this).hasClass('cur')){
		 $('.chat_font').hide(); 
		 $(this).removeClass('cur');  
		}else{
	      $('.chat_font').show(); 
		  $(this).addClass('cur');
		}
   })
   
   $('.font_else a.b').click(function(){
	   if($(this).hasClass('b0')){
		 $(this).removeClass('b0');  
		}else{
		  $(this).addClass('b0');
		}
   })
   
   $('.font_else a.i').click(function(){
	   if($(this).hasClass('i0')){
		 $(this).removeClass('i0');  
		}else{
		  $(this).addClass('i0');
		}
   })
   
   $('.font_else a.u').click(function(){
	   if($(this).hasClass('u0')){
		 $(this).removeClass('u0');  
		}else{
		  $(this).addClass('u0');
		}
   })
   
	
})

