//复选框
jQuery.fn.customInput0 = function(){
	return $(this).each(function(){	
		if($(this).is('[type=checkbox]')){
			var input = $(this);
			  
			// 使用输入的ID得到相关的标签
			var label = $('label[for='+input.attr('id')+']');
			
			// 包裹在一个div输入+标签
			input.add(label).wrapAll('<span class="custom0-'+ input.attr('type') +'"></span>');


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
jQuery.fn.customInput02 = function(){
	return $(this).each(function(){	
		if($(this).is('[type=checkbox]')){
			var input = $(this);
			  
			// 使用输入的ID得到相关的标签
			var label = $('label[for='+input.attr('id')+']');
			
			// 包裹在一个div输入+标签
			input.add(label).wrapAll('<span class="custom02-'+ input.attr('type') +'"></span>');


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
jQuery.fn.customInput03 = function(){
	return $(this).each(function(){	
		if($(this).is('[type=checkbox]')){
			var input = $(this);
			  
			// 使用输入的ID得到相关的标签
			var label = $('label[for='+input.attr('id')+']');
			
			// 包裹在一个div输入+标签
			input.add(label).wrapAll('<span class="custom03-'+ input.attr('type') +'"></span>');


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

//sales
$(function(){
	$('.sp_sales').hover(function(){
	  $(this).find('.sp_sales_con').show();
	  $(this).find('.sp_sales_pic').hide();
	},function(){
	  $(this).find('.sp_sales_con').hide();
	  $(this).find('.sp_sales_pic').show();
	})
})


//删除
$(function(){
	var oBox='<div id="del_cp"><div id="del_cp_con"><div class="del_close"></div><div class="del_text">确定从购物车中删除此商品？</div><div class="del_btn"><a href="javascript:;" class="quxiao" title="取消"></a><a href="javascript:;" class="queding" title="确定"></a></div></div></div>';
	$('a.del_goods').each(function(){
	   
	   $(this).click(function(){
		   $('#mask').css({
               "height":$(document).height()
           }).show();
		   $(this).parent('td').append(oBox);
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

//批量删除
$(function(){
	var oBox='<div id="del_cp"><div id="del_cp_con"><div class="del_close"></div><div class="del_text">确定从购物车中删除此商品？</div><div class="del_btn"><a href="javascript:;" class="quxiao" title="取消"></a><a href="javascript:;" class="queding" title="确定"></a></div></div></div>';
	var oTs='<div class="tishi">您还没有勾选商品</div>';
	
   $('.del_lot').click(function(){
	   
	    var i=$('.shopcart_con table tbody tr').find('input[type=checkbox]:checked').length;
		 if(i==0){
			 $(this).parent('span').append(oTs);
			 return flase;
		}else{
		  $('#mask').css({
               "height":$(document).height()
          }).show();
	      $(this).parent('span').append(oBox);
	     $('.del_close').click(function(){
		   $('#del_cp').remove();
		    $('#mask').hide();
         })
	    $('.queding').click(function(){
		    
		   $('.shopcart_con table tbody tr').find('input[type=checkbox]:checked').each(function(){	
		       alert($(this).attr('name'));														  
		      $(this).parents('tr').remove();	
		      deltable();											  														  
	       })
		   $('#del_cp').remove();
		   $('#mask').hide();
        })
	   $('.quxiao').click(function(){
		   $('#del_cp').remove();
		   $('#mask').hide();
        })	 
				 
		}
	  
	 
   })
   
   
	
})

function deltable(){
	$('.shopcart_con').find('table tbody').each(function(){
		  var i=$(this).find('tr').length;
		    
	      if(i==0){
			$(this).parent('table').remove(); 
		  }
	})
}


//消除失效商品
$(function(){
   $('.clear_dis').click(function(){
	  $('.shopcart_con table tbody').find('tr.disable').each(function(){																  
		$(this).remove();	
		deltable();											  														  
	  })
   })

})


//数量加减
function add_sub0(addForm,maxNum){
	$(addForm).find("input").blur(function(){
		var ZS = /^\d+$/
		var ASVal = $(this).val();
		var isnum = ASVal.match(ZS);
		if(isnum == null){
			alert("请输入有效数字");
			$(this).val('1');
		}
		
		if(parseInt(isnum) > maxNum){
			alert("您输入的数字 "+isnum+" 不能大于 " + maxNum);
			$(this).val(maxNum);
		}
	})
	var btns = {
		add : $(addForm).find(".add_num"),
		sub : $(addForm).find(".sub_num")
	};
	$(btns.add).click(function(){
		 var ASVal = $(this).siblings("input[type=text]").val();
		AddVal = parseInt(ASVal)+1;
		if(AddVal < maxNum){
			$(btns.sub).css('background-position','0px -167px');
		}
		if(AddVal > maxNum){
			$(this).css('background-position','-29px -137px');
			return;
		}
		$(this).siblings("input[type=text]").val(AddVal);

	})
	$(btns.sub).click(function(){
		var ASVal = $(this).siblings("input[type=text]").val();
		SubVal = parseInt(ASVal)-1;
		if(SubVal>1){
			$(btns.add).css('background-position','-29px -167px');
		}
		if(SubVal<1){
			$(this).css('background-position','0px -137px');
			return;
		}
		$(this).siblings("input[type=text]").val(SubVal);

	})
	
}

//批量移入收藏夹
$(function(){

	
   $('a.into').click(function(){
	     var oTs='<div class="tishi">您还没有勾选商品</div>';
	    var i=$('.shopcart_con table tbody tr').find('input[type=checkbox]:checked').length;
		 if(i==0){
			 $(this).parent('span').append(oTs);
			 return flase;
		}else{
		  	 
		}
	  
	 
   })
   
   
	
})


//全选
checkAll0= function(caller, container){
		if($(caller).is(':checked')){
			// Find the label corresponding to each checkbox and click it
			$(container).find('input[type=checkbox]:not(:checked)').each(function(){
				$('label[for="'+$(this).attr('id')+'"]').trigger('click');
				$(this).prop('checked','checked');
				/*if($.browser.msie){
					$(this).attr('checked','checked');
				}else{
					$(this).trigger('click');
				};*/
			});
			
		}else{
			$(container).find('input[type=checkbox]:checked').each(function(){
				$('label[for="'+$(this).attr('id')+'"]').trigger('click');
				$(this).prop('checked','');
				/*if($.browser.msie){
					$(this).attr('checked','');
				}else{
					$(this).trigger('click');
				};*/
			});
		};

	};



//优惠券
$(function(){
   $('.shopcart_sale').find('.cc').click(function(){
	  $(this).next('.shopcart_sale0').show();
   })
  
})

$(function(){
   $('.shopcart_sale0').find('span.close').click(function(){
	  $(this).parents('.shopcart_sale0').hide();
	  //alert(1);
   })

})

