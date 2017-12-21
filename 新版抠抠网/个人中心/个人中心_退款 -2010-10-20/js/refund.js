// 退款原因
/*$(function(){
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
			var aa=$(this).val();
			$(this).click(function(){
				$(this).parent().siblings('.reason_text').text(t);
				$(this).addClass('cur').siblings().removeClass('cur');
				$(this).parent().next('input').val(aa);
				
			})
		})
	
})*/
$(function(){
	$('.reason0').each(function(){
		$(this).click(function(){
			$(this).next('.cue').text('');
			var box=$(this).find('ul.reason_tt');
			if(box.is(':hidden')){
			  $(this).find('ul.reason_tt').show();
			  $(this).css('border','#666 1px solid');
			}else{
			  $(this).find('ul.reason_tt').hide();
			  $(this).css('border','#ddd 1px solid');
			 }
			
		})
		
		$(this).mouseleave(function(){
			if($(this).find('.reason_text').text()=='请选择物流公司'){
				$(this).next('.cue').text('请选择物流公司');
				
				}
			
			})
		
	})

	
})

// 删除图片
$(function(){
	$('.refund_pic ul li').hover(function(){
		$(this).find('.bg').show();
		$(this).find('.text').show();			
	},function(){
		$(this).find('.bg').hide();
		$(this).find('.text').hide();
	})
	$('.refund_pic ul li').find('.text').each(function(){
			$(this).click(function(){
			   $(this).parents('li').remove();	
			})
		})
	
})

// 申请退款
$(function(){
	$('.refund_con02_tit ul li').click(function(){
		$(this).addClass('cur').siblings().removeClass('cur');
		$(".refund_con02_con0>div:eq("+$(this).index()+")").show().siblings().hide();			
	})

	
})

// 退货邮费说明
$(function(){
	$('.postage').hover(function(){
		$(this).find('.postage_con').show();
	},function(){
		$(this).find('.postage_con').hide();
	})

	
})





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


//服务评价


$(function(){
	$('.pingjia .con').find('.con0').each(function(){
	    var array=Array('非常不满意','不满意','一般','满意','非常满意');
	    var stars=$(this).find('a.star');
	    stars.each(function(i){
		   var obox='<div class="star_text0"><span class="fen">'+(i+1)+'</span><span class="t">分'+'&nbsp'+array[i]+'</span></div>';
		   //alert(obox);
		   $(this).hover(function(){
			  $(this).addClass('hover');
		      $(this).prevAll().addClass('hover'); 
			  $(this).append(obox); 
			    
		   },function(){
			  $(this).removeClass('hover');
		      $(this).prevAll().removeClass('hover');  
			  $('.star_text0').remove();
		   })


		   $(this).click(function(){
			  $(this).prevAll().css('background-position','-365px -136px');
              $(this).nextAll().css('background-position','-386px -136px');
			  $(this).addClass('cur');
			  $(this).prevAll().removeClass('cur');
			  $(this).nextAll().removeClass('cur');
			  $(this).parent().siblings('.star_text').html('<span class="fen">'+(i+1)+'</span><span class="t">分'+'&nbsp'+array[i]+'</span></div>');

			  if(i<2){
			    $(this).parent().siblings('.star_text').css('color','#666');
			  	
			  }else{
			  	$(this).parent().siblings('.star_text').css('color','#FF6600');
			  }

		   })
		   
	   })
	})
	
})


//textarea 提示语
$(function(){
	$('.pingjia').find('.textarea').focus(function(){
		$(this).siblings('.cue0').text('');
		var t=$(this).val();
		if(t=='亲，您可以对卖家的处理过程和处理结果进行评价和建议哦~'){
			$(this).val('');
			$(this).css('color','#ccc')
			}
	})
	$('.pingjia').find('.textarea').blur(function(){
		if($(this).val()==''){
			$(this).val('亲，您可以对卖家的处理过程和处理结果进行评价和建议哦~');
			$(this).css('color','#ccc')
			}
	})
	$('.pingjia').find('.textarea').keydown(function(){
		$(this).css('color','#525252');
		var len=$(this).val().length;
	})
	
})

$(function(){
	$('.refund_area').focus(function(){
		$(this).next('.cue').text('');
		var t=$(this).val();
		if(t=='退款说明不能为空'){
			$(this).val('');
			$(this).css('color','#ccc')
			}
	})
	$('.refund_area').blur(function(){
		if($(this).val()==''){
			$(this).val('退款说明不能为空');
			$(this).css('color','#ccc')
			$(this).next('.cue').text('退款说明不能为空');
			}
	})
	$('.refund_area').keydown(function(){
		$(this).css('color','#525252');
		var len=$(this).val().length;
	})
	
})

//发表
function fabiao(){
	var t_val=$('.textarea').val();
	var Sudu=$('#sudu').find('a.star');
	var Taidu=$('#sudu').find('a.star');
	if(t_val=='亲，您可以对卖家的处理过程和处理结果进行评价和建议哦~'||!Sudu.hasClass('cur')||!Taidu.hasClass('cur')){
		if(t_val=='亲，您可以对卖家的处理过程和处理结果进行评价和建议哦~'){
			  $('.textarea').siblings('.cue0').text('请填写评价和建议');
		   }
		   if(!Sudu.hasClass('cur')){
			  $('#sudu').siblings('.star_text').text('请卖家退款速度进行点评');
		   }
		   if(!Taidu.hasClass('cur')){
			  $('#taidu').siblings('.star_text').text('请卖家退款态度进行点评');
		   }
		  return false;
		}else{
          return true;
		}
	}



	
//填写退款申请信息
function Xiugai(){
	var This=$('#xiugai');
	var obox1=This.find('.tag_options').find('li.open_selected');
	var obox3=This.find('.refund_area');
	if(obox1.text()=='请选择退款原因'||obox3.val()=='退款说明不能为空'){
		if(obox1.text()=='请选择退款原因'){
			obox1.parent().next('.cue').text('请选择退款原因');
		}
		if(obox3.val()=='退款说明不能为空'){
			obox3.next('.cue').text('退款说明不能为空');
		}
		return false;
		
		}
	
}



//退款信息同意退货
function Message(){
	var This=$('#tuiform');
	var obox1=This.find('.reason_text');
	var obox2=This.find('.refund_inp');
	var obox3=This.find('.refund_area');
	if(obox1.text()=='请选择物流公司'||obox2.val()==''||obox3.val()=='退款说明不能为空'){
		if(obox1.text()=='请选择物流公司'){
			obox1.parent().next('.cue').text('请选择物流公司');
		}
		if(obox2.val()==''){
			obox2.siblings('.cue').text('运单号码不能为空');
		}
		if(obox3.val()=='退款说明不能为空'){
			obox3.next('.cue').text('退款说明不能为空');
		}
		return false;
		
		}
	
}

//已收到货验证
$(function(){
	$('#refer').click(function(){
		var obox1=$('#refundform').find('.tag_options').find('li.open_selected');
		var obox3=$('#refundform').find('.refund_area');
        if(obox1.text()=='请选择退款原因'||obox3.val()=='退款说明不能为空'){
			if(obox1.text()=='请选择退款原因'){
			  obox1.parent().next('.cue').text('请选择退款原因');
		    }
		   if(obox3.val()=='退款说明不能为空'){
			  obox3.next('.cue').text('退款说明不能为空');
		    }
			return false;
		}else{
		   return true;
		}
	})

})

//未收到货验证
$(function(){
	$('#refer0').click(function(){
		var obox1=$('#refundform0').find('.tag_options').find('li.open_selected');
		var obox3=$('#refundform0').find('.refund_area');
        if(obox1.text()=='请选择退款原因'||obox3.val()=='退款说明不能为空'){
			if(obox1.text()=='请选择退款原因'){
			  obox1.parent().next('.cue').text('请选择退款原因');
		    }
		   if(obox3.val()=='退款说明不能为空'){
			  obox3.next('.cue').text('退款说明不能为空');
		    }
			
			return false;
		}else{
		   return true;
		}
	})

})


//未收到货验证
$(function(){
	$('#refer01').click(function(){
		var obox1=$('#refundform01').find('.tag_options').find('li.open_selected');
		var obox3=$('#refundform01').find('.refund_area');
        if(obox1.text()=='请选择退款原因'||obox3.val()=='退款说明不能为空'){
			if(obox1.text()=='请选择退款原因'){
			  obox1.parent().next('.cue').text('请选择退款原因');
		    }
		   if(obox3.val()=='退款说明不能为空'){
			  obox3.next('.cue').text('退款说明不能为空');
		    }
			
			return false;
		}else{
		   return true;
		}
	})

})
$(function(){
	$('#refundform0').find('input:radio[name="tuihuo"]').click(function(){
		 $(this).parent().siblings('.cue').text('');
		})
	
	})

// 申请退款
$(function(){
	
	$('.whether_return li').each(function(i){
		$(this).click(function(){
				$('.refund_th').eq(i).show().siblings('.refund_th').hide();
		})	
	}) 
})

//textarea 提示语
$(function(){
	$('.refund_seller_con0').find('.textarea').focus(function(){
		$(this).siblings('.cue0').text('');
		var t=$(this).val();
		if(t=='请在此处输入留言，字数不超过200个字'){
			$(this).val('');
			$(this).css('color','#ccc')
			}
	})
	$('.refund_seller_con0').find('.textarea').blur(function(){
		if($(this).val()==''){
			$(this).val('请在此处输入留言，字数不超过200个字');
			$(this).css('color','#ccc')
			}
	})
	$('.refund_seller_con0').find('.textarea').keydown(function(){
		$(this).css('color','#525252');
		var len=$(this).val().length;
	})
	
})


//发表留言凭证
function reportmess(){
	var t_val=$('.textarea').val();
	if(t_val=='请在此处输入留言，字数不超过200个字'){
		$('.textarea').siblings('.cue0').text('请填写留言凭证');
		  return false;
	}else{
          return true;
		}
	}
