// 退款原因
$(function(){
	$('.reason').each(function(){
		$(this).click(function(){
			var box=$(this).find('ul.reason_tt');
			if(box.is(':hidden')){
			  $(this).find('ul.reason_tt').show();
			  $(this).css('border','#666 1px solid');
			}else{
			  $(this).find('ul.reason_tt').hide();
			  $(this).css('border','#ddd 1px solid');
			 }		
			if($(this).find('.reason_text').text()=='请选择退款原因'){
				$(this).next('.cue').text('请选择退款原因');
			}else{
				$(this).next('.cue').text('');
				
				}
		})
		

		
		
	})
	$('.reason_tt').find('li').each(function(){
			var t=$(this).text();
			$(this).click(function(){
				$(this).parent().siblings('.reason_text').text(t);

			})
		})
	
})

// 删除图片
$(function(){
	$('.sale_pic ul li').hover(function(){
		$(this).find('.bg').show();
		$(this).find('.text').show();			
	},function(){
		$(this).find('.bg').hide();
		$(this).find('.text').hide();
	})
	$('.sale_pic ul li').find('.text').each(function(){
			$(this).click(function(){
			   $(this).parents('li').remove();	
			})
		})
	
})

// 申请退款
$(function(){
	$('.sale_con02_tit ul li').click(function(){
		$(this).addClass('cur').siblings().removeClass('cur');
		$(".sale_con02_con0>div:eq("+$(this).index()+")").show().siblings().hide();			
	})

	
})

//textarea 提示语
$(function(){
	$('.sale_area').focus(function(){
		var t=$(this).val();
		$(this).next('.cue').text('');
		if(t=='补充留言不能为空'){
			$(this).val('');
			$(this).css('color','#ccc')
			}
	})
	$('.sale_area').blur(function(){
		if($(this).val()==''){
			$(this).val('补充留言不能为空');
			$(this).css('color','#ccc');
			$(this).next('.cue').text('补充留言不能为空');
			}
	})
	$('.sale_area').keydown(function(){
		$(this).css('color','#525252');
		var len=$(this).val().length;
	})
	
})


$(function(){
	$('.sale_inp').focus(function(){
		$(this).siblings('.tishi').text('最多不能高于(订单金额)元');
		$(this).siblings('.tishi').css('color','#a4a4a4');
		
	})
	$('.sale_inp').blur(function(){
		if($(this).val()==''){
			$(this).siblings('.tishi').text('退款金额不能为空');
			$(this).siblings('.tishi').css('color','#ff5a00');
		}
		
		
	})

	
})


//textarea 提示语
$(function(){
	$('.mess_area').focus(function(){
		$(this).parent().next().find('.cue').text('');
		var t=$(this).val();
		if(t=='请在此处输入留言，字数不超过200个字'){
			$(this).val('');
			$(this).css('color','#ccc')
			}
	})
   $('.mess_area').blur(function(){
		if($(this).val()==''){
			$(this).val('请在此处输入留言，字数不超过200个字');
			$(this).css('color','#ccc')
			}
	})
	$('.mess_area').keydown(function(){
		$(this).css('color','#525252');
		var len=$(this).val().length;
	})
	
})

// 填写退货信息
$(function(){
	$('.sale_write').click(function(){
		$('.sale_write_con').show();
		
	})

})



//提交申请
$(function(){
	$('#tijiao').click(function(){
		var This=$('#getfrom');
	    var box1=This.find('.reason_text');
	    var box2=This.find('.sale_inp');
	    var box3=This.find('.sale_area');
	   if(box1.text()=='请选择退款原因' || box2.val()=='' || box3.val()=='补充留言不能为空'){
		  if(box1.text()=='请选择退款原因'){
			box1.parent().next('.cue').text('请选择退款原因');
		  }
		  if(box2.val()==''){
			box2.siblings('.tishi').text('退款金额不能为空');
			box2.siblings('.tishi').css('color','#ff5a00');
		  }
		  if(box3.val()=='补充留言不能为空'){
			box3.next('.cue').text('补充留言不能为空');
		  }
		
		return false;
	}else{
		
		return true;
		}
	

		
		})
	
	
})	

//提交申请
$(function(){
	$('#notijiao').click(function(){
		var This=$('#nofrom');
	    var box1=This.find('.reason_text');
	    var box2=This.find('.sale_inp');
	    var box3=This.find('.sale_area');
	   if(box1.text()=='请选择退款原因' || box2.val()=='' || box3.val()=='补充留言不能为空'){
		  if(box1.text()=='请选择退款原因'){
			box1.parent().next('.cue').text('请选择退款原因');
		  }
		 if(box2.val()==''){
			box2.siblings('.tishi').text('退款金额不能为空');
			box2.siblings('.tishi').css('color','#ff5a00');
		 }
		if(box3.val()=='补充留言不能为空'){
			box3.next('.cue').text('补充留言不能为空');
		}
		
		return false;
	}else{
		
		return true;
		}
	
	
	

		
		})
	
	
})	
	
	
//发表留言凭证
$(function(){
	$('.mess_btn').click(function(){
		var val=$(this).parents().find('.mess_area').val();
		if(val=='请在此处输入留言，字数不超过200个字'){
		  $(this).next('.cue').text('留言凭证不能为空');
		  return false;	
		}else{
		  return true;
		}
	})
	
	
})	

//发表留言凭证
$(function(){
	$('.sale_fuwu_more').click(function(){
		if($(this).find('span').hasClass('more_icon')){
			$('.sale_fuwu_con').find('.l').css('display','block');
			$(this).find('span').addClass('more_icon0').removeClass('more_icon');
		}else{
			$('.sale_fuwu_con').find('.l').css('display','none');
			$(this).find('span').addClass('more_icon').removeClass('more_icon0');
			
			}
	})
	
	
})	
	





