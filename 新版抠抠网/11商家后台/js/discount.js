//提示消失
$(function(){
	$('#keep').find('input[name=cx_name]').focus(function(){
		$(this).siblings('.active_cue').text('').hide();
	})
	$('#keep').find('input[name=start_time]').focus(function(){
		$(this).siblings('.active_cue').text('').hide();
	})
	$('#keep').find('input[name=end_time]').focus(function(){
		$(this).siblings('.active_cue').text('').hide();
	})
	
})


// 活动名称和促销时段_保存设置
function Keep(){
   var This=$('#keep');
   var Name=This.find('input[name=cx_name]');
   var Time_start=This.find('input[name=start_time]');
   var Time_end=This.find('input[name=end_time]');
   var Now=new Date();
   var regEx = new RegExp("\\-","gi");
   var Time_start_hour = This.find('select[name=startTime]');
   var Time_end_hour = This.find('select[name=endTime]');
   var Time_start_val = Time_start.val().replace(regEx,"/")+' '+Time_start_hour.val();
       Time_start_val =new Date(Time_start_val);
   var Time_end_val = Time_end.val().replace(regEx,"/")+' '+Time_end_hour.val();
       Time_end_val =new Date(Time_end_val);
	   
   if(Name.val()=='' || Time_start.val()=='' || Time_end.val()==''){
	    if(Name.val()==''){
		   Name.siblings('.active_cue').show().text('请填写促销名称');
	    }
		if(Time_start.val()==''){
          Time_start.siblings('.active_cue').show().text('请填写促销开始时间');
	    }
		if(Time_end.val()==''){
          Time_end.siblings('.active_cue').show().text('请填写促销结束时间');
	    }
		
	   return false;   
   }
  
   if(Time_start.val()!='' && Time_end.val()!=''){
	   if(Time_start_val>=Time_end_val){
		   if(Time_start_val>Time_end_val){
			   Time_start.siblings('.active_cue').show().text('活动开始时间不能大于结束时间');
		       Time_end.siblings('.active_cue').show().text('活动开始时间不能大于结束时间');
			}
			if(Time_start_val-Time_end_val==0){
			   Time_start.siblings('.active_cue').show().text('起始和终止时间不能相同');
		       Time_end.siblings('.active_cue').show().text('起始和终止时间不能相同');
			}
		   
		   return false; 
	   }
	   
	   if(Time_start_val<Now){
		   Time_start.siblings('.active_cue').show().text('活动开始时间不能早于当前系统时间!');
		   return false; 
	   }
   }
  $.ajax({
	  type:'post',
	  url:'',
	  data:({limitpromotionname:Name.val(),startdate:Time_start_val,expireddate:Time_end_val,promoid:$('#discount3').find('input[name=promoid]').val()}),
	  success:function(data){
		  $('#discount2').find('.discount_con0').show();
          $('#discount1').find('.discount_con').hide();
		  }
	  
	  
	  })
   
  

}


//展开
$(function(){
	$('#discount1').find('.modify_xg').click(function(){
		$('#discount1').find('.discount_con').show();
	});
	$('#discount2').find('.modify_xg').click(function(){
		$('#discount2').find('.discount_con0').show();
	});
	$('#discount3').find('.modify_xg').click(function(){
		$('#discount3').find('.discount_con01').show();
	});
	
})



//放弃创建
$(function(){
	$('#fangqi').click(function(){
		$('#mask').css({
			'height':$(document).height()
		}).show();
		$('#giveup').show();
	})
	$('#giveup').find('.close').click(function(){
		$('#giveup').hide();
		$('#mask').hide();
	})
	$('#giveup').find('.quxiao').click(function(){
		$('#giveup').hide();
		$('#mask').hide();
	})
	$('#giveup').find('.sure').click(function(){
		 window.location.href = "http://www.kouclo.com";
	})
})



$(function(){
	$('.discount_con0 table td.cz').find('a').each(function(){
	   $(this).bind('click',function(){
		   if($(this).hasClass('cj')){
			   $(this).text('取消参加')
		       $(this).removeClass('cj').addClass('qx');
			   $(this).parents('tr').find('input[type=checkbox]').attr('disabled','disabled');
			   $(this).parents('tr').find('input[type=checkbox]').attr('checked','checked');
			   var joinAdd = $('#discount3').find('input[name=promoAddItem]');
			   var checkVal = $(this).parents('tr').find('input[type=checkbox]').val();
			   if(joinAdd.val() == ""){
			   		var joinAddVal = joinAdd.val(checkVal);
			   }else{
				   var joinAddVal = joinAdd.val(checkVal+","+joinAdd.val());
			   }
			   //点击参加，移除promoDelItem中的值
			   var delProVal = $('#discount3').find('input[name=promoDelItem]').val();
			   var arrayDel = delProVal.split(",");
			   for(var x=0;x<arrayDel.length;x++){
				   if(checkVal == arrayDel[x]){
					   arrayDel.splice(x,1);
				   }
			   }
			   var proDelVal = arrayDel.join(",");
			   $('#discount3').find('input[name=promoDelItem]').val(proDelVal);
			}else{
			   $(this).text('参加打折');
		       $(this).removeClass('qx').addClass('cj');
			   $(this).parents('tr').find('input[type=checkbox]').removeAttr('disabled');
			   $(this).parents('tr').find('input[type=checkbox]').removeAttr('checked','checked');
			   var checkVal = $(this).parents('tr').find('input[type=checkbox]').val();
			   var delVal = $('#discount3').find('input[name=promoDelItem]');
				if(delVal.val() == ""){
			   		var delProVal = delVal.val(checkVal);
			   }else{
				   var delProVal = delVal.val(checkVal+","+delVal.val());
			   }
			   //点击取消参加 移除promoAddItem中的值
			   var addProVal = $('#discount3').find('input[name=promoAddItem]').val();
			   var array = addProVal.split(",");
			   for(var i=0;i<array.length;i++){
				   if(checkVal == array[i]){
					   array.splice(i,1);
				   }
			   }
			   var proAddVal = array.join(",");
			   $('#discount3').find('input[name=promoAddItem]').val(proAddVal);
			  
			}
		   
		})
	  
	})
})

/*$(function(){
	$('.cj').click(function(){
		
		var joinAdd = $('#discount3').find('input[name=promoAddItem]');
		$(this).text('取消参加');
		$(this).removeClass('cj').addClass('qx');
		
		$(this).parents('tr').find('input[type=checkbox]').attr({'checked':'checked','disabled':'true'});
	})
})*/


/*$(function(){
	$('.cj').click(function(){
	   var Joinadd=$('#discount3').find('input[name=promoAddItem]');
	   //var Addval='';
	   $(this).text('取消参加')
		       $(this).removeClass('cj').addClass('qx');
			   $(this).parents('tr').find('input[type=checkbox]').attr('disabled','disabled');
			   $(this).parents('tr').find('input[type=checkbox]').attr('checked','checked');	   
				alert(Joinadd.val());
			   if(Joinadd.val()==''){
				   Joinadd.val($(this).parents('tr').find('input[type=checkbox]').val());
		           //Addval=Addval+$(this).parents('tr').find('input[type=checkbox]').val();
				   //Joinadd.val(Addval+$(this).parents('tr').find('input[type=checkbox]').val());
		           //alert(Addval);
				   //return false;
	           }
			   if(Joindel.val()!=''){
		          Addval=Addval+','+$(this).parents('tr').find('input[type=checkbox]').val();
		        }
		   
	  
	})
	
})
*/

/*$(function(){
	$('a.qx').click(function(){
	   var Joindel=$('#discount3').find('input[name=promoDelItem');
	   var Delval='';
	           $(this).text('参加打折');
		       $(this).removeClass('qx').addClass('cj');
			   $(this).parents('tr').find('input[type=checkbox]').removeAttr('disabled');
			   $(this).parents('tr').find('input[type=checkbox]').removeAttr('checked','checked');
			   if(Joindel.val()==''){
		           Delval=Delval+$(this).parents('tr').find('input[type=checkbox]').val();
				   Joindel.val(Delval);
		           alert(Delval);
				   return false;
	            }
				if(Joindel.val()!=''){
		          Delval=Delval+','+$(this).parents('tr').find('input[type=checkbox]').val();
		        }
			
		alert(1);	
	  
	})
	
})
*/
