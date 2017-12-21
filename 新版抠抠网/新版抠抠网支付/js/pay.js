//复选框
jQuery.fn.customInput0 = function(){
	return $(this).each(function(){	
		if($(this).is('[type=radio]')){
			var input = $(this);
			  
			// 使用输入的ID得到相关的标签
			var label = $('label[for='+input.attr('id')+']');
			
			// 包裹在一个div输入+标签
			input.add(label).wrapAll('<span class="custom-'+ input.attr('type') +'"></span>');


			//绑定自定义事件，触发它，绑定点击，焦点，模糊事件				
			input.bind('updateState', function(){
				input.is(':checked') ? label.addClass('checked') : label.removeClass('checked'); 
			})
			.trigger('updateState')
			.click(function(){ 
				$('input[name='+ $(this).attr('name') +']').trigger('updateState'); 

			})
			//.blur(function(){ label.removeClass('checked'); });
			
			
		}
	});
};


//复选框
jQuery.fn.customInput01 = function(){
	return $(this).each(function(){	
		if($(this).is('[type=checkbox]')){
			var input = $(this);
			  
			// 使用输入的ID得到相关的标签
			var label = $('label[for='+input.attr('id')+']');
			
			// 包裹在一个div输入+标签
			input.add(label).wrapAll('<span class="custom01-'+ input.attr('type') +'"></span>');
			input.attr('checked',true);

			//绑定自定义事件，触发它，绑定点击，焦点，模糊事件				
			input.bind('updateState', function(){
				input.is(':checked') ? label.addClass('checked') : label.removeClass('checked'); 
			})
			.trigger('updateState')
			.click(function(){ 
				$('input[name='+ $(this).attr('name') +']').trigger('updateState'); 
				Allnumber();
				setTotal();
			})
			//.blur(function(){ label.removeClass('checked'); });
			
			
		}
	});
};





//删除
$(function(){
	var oBox='<div id="del_cp"><div id="del_cp_con"><div class="del_close"></div><div class="del_text">确定从购物车中删除此商品？</div><div class="del_btn"><a href="javascript:;" class="quxiao" title="取消"></a><a href="javascript:;" class="queding" title="确定"></a></div></div></div>';
	$('a.del_goods').each(function(){
	   
	   $(this).click(function(){
		   $('#mask').css({
               "height":$(document).height()
           }).show();
		   $(this).parent('li').append(oBox);
		   $('.del_close').click(function(){
		      $('#del_cp').remove();
			  $('#mask').hide();
           })
		   $('.queding').click(function(){
			  $(this).parents('tr').remove();
		      $('#del_cp').remove();
			  $('#mask').hide();
           })
		   $('.quxiao').click(function(){
		      $('#del_cp').remove();
			  $('#mask').hide();
           })
		   
		})
		
	  
	   
	})
	
})


//优惠方式
$(function(){
	$('.order_sales').click(function(){
		var oBox=$(this).find('.order_sales0');
		if(oBox.is(':hidden')){
			oBox.show();
		}else{
			oBox.hide();
			}
	})
	$('.order_sales0 li').each(function(){
		$(this).click(function(){
			var t=$(this).text();
		    $(this).parents('.order_sales').find('.order_text').text(t);
		    $('.order_sales0').hide();
			return false;
		})
		
	})
	
})

//发票类型
$(function(){
	$('.fb_con').click(function(){
		var oBox=$(this).find('.fb_con0');
		if(oBox.is(':hidden')){
			oBox.show();
		}else{
			oBox.hide();
			}
	})
	$('.fb_con0 li').each(function(){
		$(this).click(function(){
			var t=$(this).text();
		    $(this).parents('.fb_con').find('.fb_text').text(t);
		    $('.fb_con0').hide();
			return false;
		})
		
	})
	
	$('.order_fabiao_tit').click(function(){
		var oBox=$(this).next('.order_fabiao_con');
		if(oBox.is(':hidden')){
			oBox.show();
			$(this).text('- 索要发票');
		}else{
			oBox.hide();
			$(this).text('+ 索要发票');
			
			}
	})
	
})


//快递方式
$(function(){
	$('.order_express_con').click(function(){
		var oBox=$(this).find('.express_con');
		if(oBox.is(':hidden')){
			oBox.show();
		}else{
			oBox.hide();
			}
	})
	$('.express_con li').each(function(){
		$(this).click(function(){
			var t=$(this).text();
		    $(this).parents('.order_express_con').find('.express_text').text(t);
		    $('.express_con').hide();
			return false;
		})
		
	})
	
})


//表格去除最后一条横线
$(function(){
	$('table.order_cp0').each(function(){
		var l=$(this).find('tr:last');
		l.find('td').css('border-bottom','#fff 1px solid');
		
	})
	
})

//优惠方式去除最后一条横线
$(function(){
	$('ul.order_sales0').each(function(){
		var l=$(this).find('li:last');
		l.css('border-bottom','#fff 1px solid');
		
	})
	
})
//发票类型去除最后一条横线
$(function(){
	$('ul.fb_con0').each(function(){
		var l=$(this).find('li:last');
		l.css('border-bottom','#fff 1px solid');
		
	})
	
})
//快递方式去除最后一条横线
$(function(){
	$('ul.express_con').each(function(){
		var l=$(this).find('li:last');
		l.css('border-bottom','#fff 1px solid');
		
	})
	
})


//使用抠抠积分            
$(function(){
	$('.order_jf').click(function(){
		$(this).find('.order_jf_con').show();	
	})

})

//使用抠抠积分            
$(function(){
	$('.order_yhq').click(function(){
		$(this).find('.order_ticket').show();	
		$(this).parents('.order_pay_con').addClass('tic_h');
	})

})


