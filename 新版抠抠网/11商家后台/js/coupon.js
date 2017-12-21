//提示消失
$(function(){
	$('#coupon').find('input[name=coupon_name]').focus(function(){
		$(this).siblings('.active_cue').text('').hide();
	})
	$('#coupon').find('input[name=start_time]').focus(function(){
		$(this).siblings('.active_cue').text('').hide();
	})
	$('#coupon').find('input[name=end_time]').focus(function(){
		$(this).siblings('.active_cue').text('').hide();
	})
	$('#coupon').find('input[name=fx_num]').focus(function(){
		$(this).siblings('.active_cue').text('').hide();
	})
	$('#coupon').find('input[name=full]').focus(function(){
		$(this).parents('dd').find('.active_cue').text('').hide();
	})
	$('#coupon').find('input[name=tiaojian]').focus(function(){
		$(this).siblings('.active_cue').text('').hide();
	})
	
	
})


// 满立减_保存设置
function Coupon(){
   var This=$('#coupon');
   var Name=This.find('input[name=coupon_name]');
   var Time_start=This.find('input[name=start_time]');
   var Time_end=This.find('input[name=end_time]');
   var Time_start_val = new Date(Time_start.val().replace(/-/g,"/"));
   var Time_end_val = new Date(Time_end.val().replace(/-/g,"/"));
   var Fx_num=This.find('input[name=fx_num]');
   var Full=This.find('input[name=full]');
   var Miane=This.find('select[name=buyer_change]');
   var reNum=/^\d*$/;

   if(Name.val()=='' || Time_start.val()=='' || Time_end.val()=='' || Fx_num.val()==''){
	   if(Name.val()==''){
		   Name.siblings('.active_cue').show().text('请填写优惠券名称');
	    }
		if(Time_start.val()=='' || Time_end.val()==''){
		   if(Time_start.val()=='' && Time_end.val()==''){
			  Time_start.siblings('.active_cue').show().text('请填写有效时间');
		   }
		   if(Time_start.val()=='' && Time_end.val()!=''){
			  Time_start.siblings('.active_cue').show().text('请填写有效开始时间'); 
		   }
		   if(Time_start.val()!='' && Time_end.val()==''){
			  Time_start.siblings('.active_cue').show().text('请填写有效结束时间'); 
		   }

	    }
		if(Fx_num.val()==''){
		   Fx_num.siblings('.active_cue').show().text('请填写发行量');
	    }
		
	   return false;   
   }
   if($('input[id=man]').is(':checked')){
	  var Full_val=Number(Full.val());
	  var Miane_val=Number(Miane.val());
	  if(Full.val()==''){
		 Full.parents('dd').find('.active_cue').show().text('满元金额不能为空且必须是正整数！');
		 return false; 
	  }
	  if(Full.val()!=''){
		   if(!reNum.test(Full.val())){
			   Full.parents('dd').find('.active_cue').show().text('输入框中必须是正整数');
			   return false; 
		   }
		   if(Full_val<=Miane_val){
			   Full.parents('dd').find('.active_cue').show().text('满元金额必须大于面额！');
			   return false;
		     }   
	   }
	  
	}
   if(Time_start.val()!='' && Time_end.val()!=''){
	   if(Time_start_val>Time_end_val){
		   Time_start.siblings('.active_cue').show().text('活动开始时间不能大于结束时间');
		   return false; 
	   }
   }
   if(Fx_num.val()!=''){
	   if(!reNum.test(Fx_num.val())){
		   Fx_num.siblings('.active_cue').show().text('输入框中必须是正整数');
		   return false; 
	   }
   }

   


}



// 取消设置
$(function(){
	$('.out_active').click(function(){
		$(this).parents('.active').find('input[type=text]').val('');
	})
})