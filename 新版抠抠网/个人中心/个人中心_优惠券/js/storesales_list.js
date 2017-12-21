// JavaScript Document
$(document).ready(function(){
	$('.storesales_con ul li').find('h3').each(function(){
		var tt=Number($(this).text());
	    if(tt>=100){
		   $(this).parents('li').addClass('han');	
		 }else if(tt>50&&tt<100){ 
			$(this).parents('li').addClass('lan'); 
		  }
		
		})
	
	$('.storesales_con ul li').find('.dellet').each(function(){
		$(this).click(function(){
			$(this).parents('li').remove();
			})
		})
})