// 优惠方式_多级优惠
$(function(){
	$('input[id=putong]').click(function(){
		if($(this).is(':checked')){
		  $(this).parents('dl').siblings('dl.bt').find('p.show').removeClass('show').addClass('hidden');
		  $(this).parents('dl').siblings('dl.bt').find('input').val('');
		}
	})
	$('input[id=duoji]').click(function(){
		if($(this).is(':checked')){
			$(this).parents('dl').siblings('dl.bt').find('p.hidden').removeClass('hidden').addClass('show');
			$(this).parents('dl').siblings('dl.bt').find('input').val('');
		}
	})
})

//提示消失
$(function(){
	$('#minus').find('input[name=minus_name]').focus(function(){
		$(this).siblings('.active_cue').text('').hide();
	})
	$('#minus').find('input[name=start_time]').focus(function(){
		$(this).siblings('.active_cue').text('').hide();
	})
	$('#minus').find('input[name=end_time]').focus(function(){
		$(this).siblings('.active_cue').text('').hide();
	})
	$('#minus').find('input[name=full_1]').focus(function(){
		$(this).siblings('.active_cue').text('').hide();
	})
	$('#minus').find('input[name=jian_1]').focus(function(){
		$(this).siblings('.active_cue').text('').hide();
	})
	$('#minus').find('input[name=full_2]').focus(function(){
		$(this).siblings('.active_cue').text('').hide();
	})
	$('#minus').find('input[name=jian_2]').focus(function(){
		$(this).siblings('.active_cue').text('').hide();
	})
	$('#minus').find('input[name=full_3]').focus(function(){
		$(this).siblings('.active_cue').text('').hide();
	})
	$('#minus').find('input[name=jian_3]').focus(function(){
		$(this).siblings('.active_cue').text('').hide();
	})
	
})


// 满立减_保存设置
function Minus(){
   var This=$('#minus');
   var Name=This.find('input[name=minus_name]');
   var Time_start=This.find('input[name=start_time]');
   var Time_end=This.find('input[name=end_time]');
   var Time_start_val = new Date(Time_start.val().replace(/-/g,"/"));
   var Time_end_val = new Date(Time_end.val().replace(/-/g,"/"));
   var Full_money1=This.find('input[name=full_1]');
   var Full_money2=This.find('input[name=full_2]');
   var Full_money3=This.find('input[name=full_3]');
   var Jian_money1=This.find('input[name=jian_1]');
   var Jian_money2=This.find('input[name=jian_2]');
   var Jian_money3=This.find('input[name=jian_3]');
   var reNum=/^\d*$/;
   if(Name.val()=='' || Time_start.val()=='' || Time_end.val()==''){
	   if(Name.val()==''){
		   Name.siblings('.active_cue').show().text('请填写促销活动名称');
	    }
		if(Time_start.val()=='' || Time_end.val()==''){
		   if(Time_start.val()=='' && Time_end.val()==''){
			  Time_start.siblings('.active_cue').show().text('请填写活动时间');
		   }
		   if(Time_start.val()=='' && Time_end.val()!=''){
			  Time_start.siblings('.active_cue').show().text('请填写活动开始时间'); 
		   }
		   if(Time_start.val()!='' && Time_end.val()==''){
			  Time_start.siblings('.active_cue').show().text('请填写动活结束时间'); 
		   }

	    }
	   return false;   
   }
   if(Time_start.val()!='' && Time_end.val()!=''){
	  
	   if(Time_start_val>Time_end_val){
		   Time_start.siblings('.active_cue').show().text('活动开始时间不能大于结束时间');
		   return false; 
	   }
   
   }
   if($('input[id=putong]').is(':checked')){
	    if(Full_money1.val()=='' || Jian_money1.val()==''){
			Full_money1.siblings('.active_cue').show().text('请填写优惠条件');
			return false; 
		}
		if(Full_money1.val()!='' && Jian_money1.val()!=''){
		   var Full_money1_val=Number(Full_money1.val());
		   var Jian_money1_val=Number(Jian_money1.val());
		   if(!reNum.test(Full_money1.val())){
			   Full_money1.siblings('.active_cue').show().text('输入框中必须是正整数');
			   return false; 
		   }
		   if(!reNum.test(Jian_money1.val())){
			   Full_money1.siblings('.active_cue').show().text('输入框中必须是正整数');
			   return false; 
		   }
		   if(Full_money1_val<=Jian_money1_val){
			   Full_money1.siblings('.active_cue').show().text('满就减的金额必须是小于消费应满金额的正整数');
			   return false;   
			}
		}
	}
   if($('input[id=duoji]').is(':checked')){
	   	var Full_money1_val=Number(Full_money1.val());
		var Jian_money1_val=Number(Jian_money1.val());
		var Full_money2_val=Number(Full_money2.val());
		var Jian_money2_val=Number(Jian_money2.val());
	   	var Full_money3_val=Number(Full_money3.val());
		var Jian_money3_val=Number(Jian_money3.val());
		if(Full_money1.val()=='' || Jian_money1.val()=='' || Full_money2.val()=='' || Jian_money2.val()==''){
			if(Full_money1.val()=='' || Jian_money1.val()==''){
		         Full_money1.siblings('.active_cue').show().text('请填写优惠条件');
		     }
			if(Full_money2.val()=='' || Jian_money2.val()==''){
		         Full_money2.siblings('.active_cue').show().text('请填写优惠条件');
		     }
	        return false;
		   
		}
		if(Full_money1.val()!='' && Jian_money1.val()!='' && Full_money1.val()!='' && Jian_money1.val()!=''){

		    if(!reNum.test(Full_money1.val())){
			   Full_money1.siblings('.active_cue').show().text('输入框中必须是正整数');
			   return false; 
		    }
		    if(!reNum.test(Jian_money1.val())){
			   Full_money1.siblings('.active_cue').show().text('输入框中必须是正整数');
			   return false; 
		    }
			if(!reNum.test(Full_money2.val())){
			   Full_money2.siblings('.active_cue').show().text('输入框中必须是正整数');
			   return false; 
		    }
		    if(!reNum.test(Jian_money2.val())){
			   Full_money2.siblings('.active_cue').show().text('输入框中必须是正整数');
			   return false; 
		    }
		    if(Full_money1_val<=Jian_money1_val){
			   Full_money1.siblings('.active_cue').show().text('满就减的金额必须是小于消费应满金额的正整数');
			   return false;   
			}
			if(Full_money2_val<=Jian_money2_val){
			   Full_money2.siblings('.active_cue').show().text('满就减的金额必须是小于消费应满金额的正整数');
			   return false;   
			}
		}
		if(Full_money3.val()!='' && Jian_money3.val()!='' ){

		    if(!reNum.test(Full_money3.val())){
			   Full_money3.siblings('.active_cue').show().text('输入框中必须是数字');
			   return false; 
		    }
		    if(!reNum.test(Jian_money3.val())){
			   Full_money3.siblings('.active_cue').show().text('输入框中必须是数字');
			   return false; 
		    }
		    if(Full_money3_val<=Jian_money3_val){
			   Full_money3.siblings('.active_cue').show().text('满就减的金额必须是小于消费应满金额的正整数');
			   return false;   
			}

		}
	}

}



// 取消设置
$(function(){
	$('.out_active').click(function(){
		$(this).parents('.active').find('input[type=text]').val('');
	})
})