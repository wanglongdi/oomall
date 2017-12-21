// 地址
$(function(){
   $('.air_adress_nav span').click(function(){
	  $(this).addClass('cur').siblings().removeClass('cur');
	  var index=$(this).index();
	  $(this).parents('.air_adress').find('.air_adress_con').eq(index).show().siblings('.air_adress_con').hide();
	  
	})
})

//关闭地址
$(function(){
	$('.air_close').click(function(){
	  delCss();
	})
	
})

//小图标点击打开地址
$(function(){
   $('.adr_icon').click(function(){
	  if($(this).hasClass('adrform')){
		  $('.air_adress').show().addClass('adr_form');   
	   }else{
		  $('.air_adress').show().addClass('adr_to');  
		   
		   }
	  
   })
})


//去除样式
function delCss(){
  var o=$('.air_adress');
  if(o.hasClass('adr_form')){
	 o.removeClass('adr_form').hide(); 
   }
  if(o.hasClass('adr_to')){
	 o.removeClass('adr_to').hide(); 
   }
}

//input地址
$(function(){
   $('#inp_form').focus(function(){
	   $('.air_adress').show().addClass('adr_form');
	})
	
	$('#inp_to').focus(function(){
	   $('.air_adress').show().addClass('adr_to');
	})
   $('#inp_form').bind('blur',function(){
	   adrBlur($(this));
	  })
	  
	$('#inp_to').bind('blur',function(){
	   adrBlur0($(this));
	 })
})

function adrBlur(obj){
	if(obj.val()==''){
		 obj.val('出发城市'); 
	}
	delCss();
}

function adrBlur0(obj){
	if(obj.val()==''){
		 obj.val('到达城市'); 
	}
	delCss();
}


$(function(){
	$('.air_adress').mouseover(function(){
	   if($(this).hasClass('adr_form')){
	      $('#inp_form').unbind('blur');
         }
       if($(this).hasClass('adr_to')){
	      $('#inp_to').unbind('blur');
       }
  })
  
  $('.air_adress').mouseout(function(){
	$('#inp_form').bind('blur',function(){
	   adrBlur($(this));
	  })
	  
	$('#inp_to').bind('blur',function(){
	   adrBlur0($(this));
	 })
  })
	
})
//获取地址
$(function(){
  $('.air_adress_con dd span').click(function(){
	   var op=$(this).parents('.air_adress');
	   var text=$(this).text();
	   if(op.hasClass('adr_form')){
		  //$('#inp_form').unbind();
		  $('#inp_form').val(text);
		}
	   if(op.hasClass('adr_to')){
		  $('#inp_to').val(text);
		  //$('#inp_to').unbind();
		}
	  delCss();
   })
})


//换地址
$(function(){
	$('.exchange').click(function(){
		var form_val=$('#inp_form').val();
		var to_val=$('#inp_to').val();
		if(form_val=='出发城市'&&to_val=='到达城市'){
			return false;
		}else{
			$('#inp_form').val(to_val);
			$('#inp_to').val(form_val);
		}
	})
})

//返程日期inp可用
$(function(){
  $('#return').click(function(){
	  $('#endDatepicker').removeAttr('disabled');
   })
  $('#single').click(function(){
	  $('#endDatepicker').attr('disabled','true');
	  
   })
  
})