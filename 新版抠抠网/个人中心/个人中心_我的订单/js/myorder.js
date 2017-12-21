// 状态
$(function(){
	$('.sel_con').each(function(){
		$(this).click(function(){
			var box=$(this).find('ul.sel_tt');
			if(box.is(':hidden')){
			  $(this).find('ul.sel_tt').show();
			  $(this).css('border','#666 1px solid');
			}else{
			  $(this).find('ul.sel_tt').hide();
			  $(this).css('border','#ddd 1px solid');
			 }
		})
		
		
	})
	$('.sel_con').find('li').each(function(){
			var t=$(this).text();
			$(this).click(function(){
				$(this).parent().siblings('.sel_text').text(t);
				
			})
		})
	
})


// 交易状态
$(function(){
	$('.sel_con0').each(function(){
		$(this).click(function(){
			var box=$(this).find('ul.sel_tt0');
			if(box.is(':hidden')){
			  $(this).find('ul.sel_tt0').show();
			  $(this).css('border','#666 1px solid');
			}else{
			  $(this).find('ul.sel_tt0').hide();
			  $(this).css('border','#ddd 1px solid');
			 }
		})
		
		
	})
	$('.sel_con0').find('li').each(function(){
			var t=$(this).text();
			$(this).click(function(){
				$(this).parent().siblings('.sel_text').text(t);
				
			})
		})
	
})

// 交易状态
$(function(){
	$('.state').each(function(){
		$(this).click(function(){
			var box=$(this).find('ul.state_con');
			if(box.is(':hidden')){
			  $(this).find('ul.state_con').show();
			  $(this).addClass('state_bg');
			  $(this).find('b').addClass('state_icon0');
			}else{
			  $(this).find('ul.state_con').hide();
			  $(this).removeClass('state_bg');
			  $(this).find('b').removeClass('state_icon0');
			 }
		})
		
		
	})
	$('.state_con').find('li').each(function(){
			var t=$(this).text();
			$(this).click(function(){
				$(this).parent().siblings('.state_text').text(t);
				
			})
		})
	
})


// 最近交易
$(function(){
	$('.newly').each(function(){
		$(this).click(function(){
			var box=$(this).find('ul.newly_con');
			if(box.is(':hidden')){
			  $(this).find('ul.newly_con').show();
			  $(this).css('border','#666 1px solid');
			}else{
			  $(this).find('ul.newly_con').hide();
              $(this).css('border','#ddd 1px solid');

			 }
		})
		
		
	})
	$('.newly_con').find('li').each(function(){
			var t=$(this).text();
			$(this).click(function(){
				$(this).parent().siblings('.newly_text').text(t);
				
			})
		})
	
})


//  更多筛选条件
$(function(){
	$('.default').find('.moresel').click(function(){
		$(this).parents('.default').hide();
		$(this).parents('.myorder_con').find('.myorder_query').show();
		
		
	})
   $('.myorder_query').find('.up').click(function(){
		$(this).parents('.myorder_query').hide();
		$(this).parents('.myorder_con').find('.default').show();
		
		
	})
})


//  去除表格横线
$(function(){
	$('.myorder_tab').find('table').each(function(){
		var t=$(this).find('.myorder_cp').find('.con:last');
		//alert(t.text());
		t.css('border-bottom','0px');
		
		
	})
   $('.myorder_query').find('.up').click(function(){
		$(this).parents('.myorder_query').hide();
		$('.default').show();
		
		
	})
})

//  去除表格横0线
$(function(){
	$('.order_infor_con0').find('table').each(function(){
		var t=$(this).find('.myorder_cp0').find('.con:last');
		//alert(t.text());
		t.css('border-bottom','0px');
		
		
	})

})





// 全选
$(function(){
	$(".order_all").click(function(){
		if($(this).is(':checked')){
		  $(this).parents('.myorder_con').find('input[name=myorder]').each(function(){
			if(!$(this).is(':checked')){
				$(this).attr('checked',true);
			 }
		  })
		  $(this).parents('.myorder_con').find('.allsel_con').find('input[type=checkbox]').attr('checked',true)
			
		}else{
		  $(this).parents('.myorder_con').find('input[name=myorder]').each(function(){
			 $(this).attr('checked',false);
		
		  })
		 $(this).parents('.myorder_con').find('.allsel_con').find('input[type=checkbox]').attr('checked',false)	
		}
		
	})
})

$(function(){
	 $('.myorder_tab').find('input[type=checkbox]').each(function(){
		$(this).click(function(){
		   if(!$(this).is(':checked')){
              $(this).parents('.myorder_con').find(".order_all").attr("checked",false);
           }
			
		})
	 })
	
})


//我的订单
$(function(){
	$('.myorder_tit ul li').click(function(){
		$(this).addClass('hover').siblings().removeClass('hover');
		$(".myorder_con0>div:eq("+$(this).index()+")").show().siblings().hide();
		if($(this).index()==4){
			$(this).removeClass('l');
		}else{
			$('.myorder_tit ul').find('li:last').addClass('l');
		}
	})
  
})


//物流信息
$(function(){
	$('.order_flow_tit a').click(function(){
		var t=$(this).index();
		$(this).addClass('hover').siblings().removeClass('hover');
		if(t==0){
			$(".order_flow_wl").eq(0).show().siblings().hide();
		}
		if(t==2){
			$(".order_flow_wl").eq(1).show().siblings().hide();
			}
		
		
	})
  
})


//取消订单
$(function(){
	
	$('a.cancel_btn').each(function(){
	   
	   $(this).click(function(){
		   $('#mask').css({
               "height":$(document).height()
           }).show();
		   $('#reason').show();
		   $('#reason').find('.close').click(function(){
		       $('#reason').hide();
			  $('#mask').hide();
           })
		   $('.queren').click(function(){
			  $('#reason').hide();
			  $('#mask').hide();
           })
		   $('.noq').click(function(){
		      $('#reason').hide();
			  $('#mask').hide();
           })
		   
		})
		
	  
	   
	})
	
})


//投诉卖家
$(function(){
	
	$('a.toushu').each(function(){
	   
	   $(this).click(function(){
		   $('#mask').css({
               "height":$(document).height()
           }).show();
		   $('#toushu_con').show();
		   $('#toushu_con').find('.close').click(function(){
		       $('#toushu_con').hide();
			  $('#mask').hide();
           })
		   
		})
		
	  
	   
	})
	
})

//投诉卖家
$(function(){
	
	$('a.myorder_del').each(function(){
	   
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
		   $('#myorder_del').click(function(){
		      $('#myorder_del').hide();
			  $('#mask').hide();
           })
		   
		})
		
	  
	   
	})
	
})


