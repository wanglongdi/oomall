// 经停
$(function(){
  $('.pass').hover(function(){
	  $(this).find('.stop_pass').show(); 
	},function(){
	 $(this).find('.stop_pass').hide(); 	  
		  })
})

// 删除
$(function(){

  $('.del_con').on('click',function(){
	  $(this).parents('.airorder_cj').find('.del_sure').show(); 
  })
  $('.quxiao').on('click',function(){
	  $(this).parents('.del_sure').hide(); 
  })
  $('.queren').on('click',function(){
	  $(this).parents('.airorder_cj').remove(); 
  })
})

// 新增乘机人信息
/*function add_news(){
	  var n=$('.airorder_cj').length;
	  alert(n);
	  var con=$('.airorder_cj_con').html();
	  var con0='<div class="airorder_tit bl"><h2>'+n+'.乘机人信息</h2><div class="del_con">删除</div></div>';
	  var new_con='<div class="airorder_cj">'+con0+'<div class="airorder_cj_con">'+con+'</div></div>';
	  $(this).hide(); 
	  obj.find('.del_con').show();
	  obj.after(new_con);
	}
*/
$(function(){
  $('.airorder_cj').first().find('.del_con').hide();
 
})

//儿童购票须知
$(function(){
  $('.child').hover(function(){
	  $(this).find('.notice').show();
	},function(){
	  $(this).find('.notice').hide();
		  })
})

//乘机人姓名 
$(function(){
  $('.what').hover(function(){
	  $(this).find('.notice_nm').show();
	},function(){
	  $(this).find('.notice_nm').hide();
  })
})

//证件信息
$(function(){
  $('.sel_ipt').hover(function(){
	  $(this).find('ul').show();
	},function(){
	  $(this).find('ul').hide();
	})
  $('.sel_ipt ul li').click(function(){
	  var text=$(this).text();
	  $(this).parent('ul').hide();
	  $(this).parent('ul').prev('span').text(text);
	})
})


//删除 编辑显示
$(function(){
   $('.airorder_adr ul li').eq(0).addClass('cur');
   $('input[name=air_adr]').click(function(){
	   $(this).parent('li').addClass('cur');
	   $(this).parent('li').siblings().removeClass('cur');
	  })
})

//报销
$(function(){
   $('#baoxiao').click(function(){
	   if($(this).is(':checked')){
		   $('.airorder_adr').show();
		   $('.add_adr').show();
		}else{
		   $('.airorder_adr').hide();
		   $('.add_adr').hide();
			}
	  })
	$('.add_adr').click(function(){
		$('.add_adr_con').show();
	 })
})

//验证
function Checkname(val){
	var reg=/^[\u4e00-\u9fa5]{1,100}$|^[A-Za-z]+\/[A-Za-z]+( [A-Za-z]+)?$|^[\u4e00-\u9fa5]+[a-zA-Z]+$/;
	if(reg.test(val)){
	   return true;	
	}else{
		return false;
	 }
}

function Checknum(val){
	var reg=/(^1[3|4|5|7|8]{1}[0-9]{1}\*{4}\d{4}$)|(^1[3|4|5|7|8]{1}[0-9]{9}$)/;
	if(reg.test(val)){
	   return true;	
	}else{
		return false;
	 }
}

function Checkemail(val){
	var reg=/(^\w{1}\**)|(^\w+([-+.']\w+)*)@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	if(reg.test(val)){
	   return true;	
	}else{
		return false;
	 }
}

function Checkcode(val){
	var reg=/^\d{15}|\d{18}$/;
	if(reg.test(val)){
	   return true;	
	}else{
		return false;
	 }
}

$(function(){
	//乘机人姓名
	$('.cj_name').focus(function(){
	  $(this).siblings('.wrong').hide(); 
	})
	$('.cj_name').blur(function(){
	   var val=$(this).val();
	   if(!Checkname(val)||val==''){
		  $(this).siblings('.wrong').show(); 
		}
	})
	//证件信息
	$('.cj_xx').focus(function(){
	  $(this).siblings('.wrong').hide(); 
	})
	$('.cj_xx').blur(function(){
	   var val=$(this).val();
	   var tt=$('.sel_ipt').find('.text').text();
	   if(val==''){
		   $(this).siblings('.wrong').show(); 
		}else{
			if(!Checkcode(val)&&tt=='二代身份证'){
				$(this).siblings('.wrong').show();
			}else{
			  var bv=val.slice(6,10)+'-'+val.slice(10,12)+'-'+val.slice(12,14);
			  $('#birthday').val(bv);
			}
		}
	  
	})
	//生 日
	$('.birthday').focus(function(){
	  $(this).siblings('.wrong').hide(); 
	})
	$('.birthday').blur(function(){
	   var val=$(this).val();
	   if(val==''){
		  $(this).siblings('.wrong').show(); 
		}
	})
	//发信息给乘机人
	$('.cj_num').focus(function(){
	  $(this).siblings('.wrong').hide(); 
	})
	$('.cj_num').blur(function(){
	   var val=$(this).val();
	   if(!Checknum(val)&&val!==''){
		  $(this).siblings('.wrong').show(); 
		}
	})
	
	//联系人姓名
	$('#lx_name').focus(function(){
	  $(this).siblings('.wrong').hide(); 
	})
	$('#lx_name').blur(function(){
	   var val=$(this).val();
	   if(!Checkname(val)||val==''){
		  $(this).siblings('.wrong').show(); 
		}
	})
	//联系人手机号码
	$('#lx_num').focus(function(){
	  $(this).siblings('.wrong').hide(); 
	})
	$('#lx_num').blur(function(){
	   var val=$(this).val();
	   if(!Checknum(val)||val==''){
		  $(this).siblings('.wrong').show(); 
		}
	})
	//联系人备用电话号码
	$('#lx_num0').focus(function(){
	  $(this).siblings('.wrong').hide(); 
	})
	$('#lx_num0').blur(function(){
	   var val=$(this).val();
	   if(!Checknum(val)&&val!==''){
		  $(this).siblings('.wrong').show(); 
		}
	})
	//联系人电子邮箱
	$('#lx_email').focus(function(){
	  $(this).siblings('.wrong').hide(); 
	})
	$('#lx_email').blur(function(){
	   var val=$(this).val();
	   if(!Checkemail(val)||val==''){
		  $(this).siblings('.wrong').show(); 
		}
	})
	//报销凭证收件人姓名
	$('#adr_name').focus(function(){
	  $(this).siblings('.wrong').hide(); 
	})
	$('#adr_name').blur(function(){
	   var val=$(this).val();
	   if(!Checkname(val)||val==''){
		  $(this).siblings('.wrong').show(); 
		}
	})
	//报销凭证收件人手机
	$('#adr_num').focus(function(){
	  $(this).siblings('.wrong').hide(); 
	})
	$('#adr_num').blur(function(){
	   var val=$(this).val();
	   if(!Checknum(val)||val==''){
		  $(this).siblings('.wrong').show(); 
		}
	})
	//报销凭证收件人手机
	$('#sel_sheng').focus(function(){
	  $(this).siblings('.wrong').hide(); 
	})
	$('#sel_shi').focus(function(){
	  $(this).siblings('.wrong').hide(); 
	})
	$('#sel_qu').focus(function(){
	  $(this).siblings('.wrong').hide(); 
	})
	$('#sel_sheng').blur(function(){
	   var val=$(this).val();
	   if(val==''){
		  $(this).siblings('.wrong').show(); 
		}
	})
	$('#sel_shi').blur(function(){
	   var val=$(this).val();
	   if(val==''){
		  $(this).siblings('.wrong').show(); 
		}
	})
	$('#sel_qu').blur(function(){
	   var val=$(this).val();
	   if(val==''){
		  $(this).siblings('.wrong').show(); 
		}
	})
	$('#adr_adr').focus(function(){
	  $(this).siblings('.wrong').hide(); 
	})
	$('#adr_adr').blur(function(){
	   var val=$(this).val();
	   if(!Checknum(val)||val==''){
		  $(this).siblings('.wrong').show(); 
		}
	})
	
	
})

//保存地址
$(function(){
  $('#new_adr').submit(function(){
	 var name_val=$('#adr_name').val();
	 var num_val=$('#adr_num').val();
	 var sheng_val=$('#sel_sheng').val();
	 var shi_val=$('#sel_shi').val();
	 var qu_val=$('#sel_qu').val();
	 var adr_val=$('#adr_adr').val();
	 var con='<li><input type="radio" name="air_adr" class="raido_input"/><span class="mail_name">'+name_val+'</span><span class="mail_adr">'+num_val+'</span><span class="mail_tel">电话'+sheng_val+shi_val+qu_val+adr_val+'</span><span class="edit">编辑</span><span class="del">删除</span>';
	 if(name_val==''||num_val==''||adr_val==''||sheng_val==''||shi_val==''||qu_val==''){
		if(name_val==''){
		   $('#adr_name').siblings('.wrong').show(); 
	     }
		 if(num_val==''){
		   $('#adr_num').siblings('.wrong').show(); 
	     }
		 if(adr_val==''){
		   $('#adr_adr').siblings('.wrong').show(); 
	     }
		 if(sheng_val==''||shi_val==''||qu_val==''){
		   $('#sel_sheng').siblings('.wrong').show(); 
	     }
		return false; 
	  }else{
		  if(!Checkname(name_val)){
		     $('#adr_name').siblings('.wrong').show(); 
		     return false;
	      }else if(!Checknum(num_val)){
		     $('#adr_num').siblings('.wrong').show(); 
		      return false; 
	      }else{
		     $('.add_adr_con').hide();
		     $('.add_adr').hide();
		     $('.airorder_adr ul').append(con);
		  }
		  
		  }
	 
  })
  
  
  $('.del').bind('click',function(){
	  $(this).parent('li').remove();
	  })
	
})



// 登录框区域开始
function showDiv(type){
document.getElementById(type).style.display='block';
document.getElementById('popIframe').style.display='block';
document.getElementById('bg').style.display='block';
}
function closeDiv(type){
document.getElementById(type).style.display='none';
document.getElementById('bg').style.display='none';
document.getElementById('popIframe').style.display='none';

}
// 登录 表单 事件
$(function(){
	   //js表单验证
        $('.form').submit(function(){
            //判断用户名      
            var username=  $("#username").val();  
            var pwd=  $("#pwd").val();  
            var type = $("input[name=click_type]").val();
            if( username == '' || username =='邮箱/用户名/手机号' || pwd == ''){
                 // alert('用户名不能为空！！');                
                 if(username == '' || username =='邮箱/用户名/手机号'){
                 	$('.p_button_01').text('请输入用户名');
                    $('.dui').hide();
                    $('.input_text').addClass('border');
                    return false;
                 }else{
                 	$('.p_button_01').text('');
                 	$('.dui').show();
                 	$('.input_text').removeClass('border');
                 }

                 if(pwd == ''){
                 	$('.p_button_02').text('请输入密码');
                    $('.dui1').hide();
                    $('.input_password').addClass('border');
                    return false;
                 }else{
                 	$('.p_button_02').text('');
                 	$('.dui1').show();
                    $('.input_password').removeClass('border');
                 }

                return false;
            }else{
            	var passw = hex_md5(pwd);
            	$.ajax({
            		url:'/user/login_ajax',
            		type:'post',
            		data:{login_name:username,password:passw,from:type},
            		dataType:"json",
            		success:function(json){
            			if (json.success == 0)
            			{
            				$('.p_button_01').text(json.message);
            				$('.dui').hide();
                    		$('.input_text').addClass('border');
                    		return false;
            			} else if (json.success == 2)
            			{
            				$('.p_button_02').text(json.message);
		                    $('.dui1').hide();
		                    $('.input_password').addClass('border');
		                    return false;
            			} else if (json.success == 1)
            			{
            				$('.top_left').html(json.login);
            				$('#popDiv').hide();
							$('#bg').hide();
							if (json.for_url == 1)
							{
								ljgm();
							} else if (json.for_url == 2)
							{
								but_buy();
							}
            			}
            		}
            	});
                
            }
            return false;

        })


})


function Submitorder(){
   var cj_n=$('.cj_name');
   var cj_x=$('.cj_xx');
   var birth=$('.birthday');
   var cj_num=$('.cj_num');
   var lx_n=$('#lx_name');
   var lx_m=$('#lx_num');
   var lx_m0=$('#lx_num0');
   var lx_em=$('#lx_email');
   var tt=$('.sel_ipt').find('.text').text();
   if(cj_n.val()==''||cj_x.val()==''||birth.val()==''||lx_n.val()==''||lx_m.val()==''||lx_em.val()==''){
	   if(cj_n.val()==''){
		  cj_n.siblings('.wrong').show();
		}
		if(cj_x.val()==''){
		  cj_x.siblings('.wrong').show();
		}
		if(birth.val()==''){
		  birth.siblings('.wrong').show();
		}
		if(lx_n.val()==''){
		  lx_n.siblings('.wrong').show();
		}
		if(lx_m.val()==''){
		  lx_m.siblings('.wrong').show();
		}
		if(lx_em.val()==''){
		  lx_em.siblings('.wrong').show();
		}
	    return false;
	}else{
		if(!Checkname(cj_n.val())){
		   cj_n.siblings('.wrong').show();
		   return false;	
		 }else if(!Checkcode(cj_x.val())&&tt=='二代身份证'){
		   cj_x.siblings('.wrong').show();
		   return false;	
		 }else if(!Checknum(cj_num.val())&&cj_num.val()!=''){
		   cj_num.siblings('.wrong').show();
		   return false;	
		 }else if(!Checkname(lx_n.val())){
		   lx_n.siblings('.wrong').show();
		   return false;	
		 }else if(!Checknum(lx_m.val())){
		   lx_m.siblings('.wrong').show();
		   return false;	
		 }else if(!Checknum(lx_m0.val())&&lx_m0.val()!=''){
		   lx_m0.siblings('.wrong').show();
		   return false;	
		 }else if(!Checkemail(lx_em.val())){
		   lx_em.siblings('.wrong').show();
		   return false;	
		 }
		
		}
   
	
}
