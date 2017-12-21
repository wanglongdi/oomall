// 退款原因
$(function(){
	$('.reason,.reason0').click(function(){
		var box=$(this).find('ul');
		if(box.is(':hidden')){
		  box.show();
		  $(this).css('border','#666 1px solid');
		}else{
		  box.hide();
		  $(this).css('border','#ddd 1px solid');
		 }
		if($(this).find('.reason_text').text()=='请选择退款原因'){
			$(this).next('.cue').text('请选择退款原因');
		}else{
			$(this).next('.cue').text('');
		}
		

		
	})
	$('.reason_tt,.reason_tt00').find('li').each(function(){
			var t=$(this).text();
			$(this).click(function(){
				$(this).parent().siblings('.reason_text').text(t);
				
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


//填写退款申请信息
function Xiugai(){
	var This=$('#xiugai');
	var obox1=This.find('.reason_text');
	var obox2=This.find('.refund_inp');
	if(obox1.text()=='请选择退款原因'||obox2.val()==''){
		if(obox1.text()=='请选择退款原因'){
			obox1.parent().next('.cue').text('请选择退款原因');
		}
		if(obox2.val()==''){
			obox2.siblings('.tishi').text('退款金额不能为空');
			obox2.siblings('.tishi').css('color','#ff5a00');
		}
		return false;
		
		}
	
}

function Xiugai0(){
	var This=$('#xiugai0');
	var obox1=This.find('.reason_text');
	var obox2=This.find('.refund_inp0');
	if(obox1.text()=='请选择退款原因'||obox2.val()==''){
		if(obox1.text()=='请选择退款原因'){
			obox1.parent().next('.cue').text('请选择退款原因');
		}
		if(obox2.val()==''){
			obox2.siblings('.tishi').text('退款金额不能为空');
			obox2.siblings('.tishi').css('color','#ff5a00');
		}
		return false;
		
	}else{
		$('#modify_con').hide();
		return true;
	}
	
}

$(function(){
	$('.refund_inp,.refund_inp0').focus(function(){
		$(this).siblings('.tishi').text('最多不能高于(订单金额)元');
		$(this).siblings('.tishi').css('color','#a4a4a4');
	})
	$('.refund_inp,.refund_inp0').blur(function(){
		if($(this).val()==''){
			$(this).siblings('.tishi').text('请填写退款金额');
			$(this).siblings('.tishi').css('color','#ff5a00');
		}
		
	})

})


$(function(){
	
	$('.refund_area,.refund_area0').blur(function(){
		if($(this).val()==''){
			$(this).css('color','#ccc')
			$(this).next('.cue').text('退款说明不能为空');
		}else{
			$(this).next('.cue').text('');
		}
	})
	$('.refund_area,.refund_area0').keydown(function(){
		$(this).css('color','#525252');
		var len=$(this).val().length;
		if(len>200){
			$(this).val($(this).val().substr(0,200));
		}
	})
	
})



//取消申请
$(function(){
	$('#revoke').click(function(){
		$('#mask').css('height',$(window).height()).show();
		$('#revoke_con').show();
	})
	$('a.no_btn,#revoke_con b.close').click(function(){
	   $('#revoke_con').hide();
	   $('#mask').hide();  
	})

	$('#modify').click(function(){
		$('#mask').css('height',$(window).height()).show();
		$('#modify_con').show();
	})
	$('#modify_con b.close').click(function(){
	   $('#modify_con').hide();
	   $('#mask').hide();  
	})
})