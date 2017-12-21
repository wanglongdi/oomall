


// 加背景

$(document).ready(function(){
	 $('.return_goods_con0').find('table').each(function(){
		  $(this).find('tbody').find('tr:even').css('background','#f2f2f2');
	})
   
});


//取消申请
$(function(){
	
	$('a.quxiao').each(function(){
	   
	   $(this).click(function(){
		   $('#mask').css({
               "height":$(document).height()
           }).show();
		   $('#myorder_del').show();
		   $('#myorder_del').find('.close').click(function(){
		       $('#myorder_del').hide();
			  $('#mask').hide();
           })
		   $('.sur_btn').click(function(){
			  $('#myorder_del').hide();
			  $('#mask').hide();
           })
		   $('.noq_btn').click(function(){
		      $('#myorder_del').hide();
			  $('#mask').hide();
           })
		   
		})
		
	  
	   
	})
	
})


