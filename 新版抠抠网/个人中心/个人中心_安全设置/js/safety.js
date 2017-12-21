// 安全设置
$(function(){
	$('.safety_con').each(function(){
		var obox=$(this).find('li:last');
		obox.css('border-bottom','1px #fff solid');
		
	})
	
})

// 邮箱验证
function CheckMail(str)
{
    var result=str.match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)((com)|(net)|(cn))+)$/);
    if(result==null) return false;
    return true;
}

$(function(){
	$('#email').blur(function(){
		 var obj=$(this).val();
		 if(!CheckMail(obj)){
			$(this).siblings('.email_text').show();
			$(this).siblings('.right_icon').hide();
			$(this).siblings('.email_text').text('邮箱格式不对');
			 
			 }else{
			$(this).siblings('.right_icon').show();	 
				 
		  }
		 if(obj==''){
			$(this).siblings('.email_text').text('邮箱不能为空');
			 
			 }

		
	})
	$('#email').focus(function(){
		$(this).siblings('.email_text').hide();
		$(this).siblings('.email_text').text('');
		})
	$('#email_yzm').focus(function(){
		$(this).siblings('.email_text').hide();
		$(this).siblings('.email_text').text('');
		$(this).siblings('.right_icon').hide();
	})
	$('#email_yzm').blur(function(){
		var psw_yzm=$(this).val();
		if(psw_yzm==''){
		  $(this).siblings('.email_text').show();
		  $(this).siblings('.email_text').text('验证码不能为空');
		}
	})
	
})


// 发送验证邮件
$(function(){
	$('#email_btn').click(function(){
		var obj=$('.email').find('#email').val();
		var obj_t=$('.email').find('#email').siblings('.email_text');
		var obx=$('#email_yzm').val();
		var obx_t=$('.email').find('#email_yzm').siblings('.email_text');
		 if(obj==''||obx==''){
			 if(obj==''){
				obj_t.show();
				obj_t.text('邮箱不能为空'); 
			 }
			 if(obx==''){
			    obx_t.show();
				obx_t.text('验证码不能为空'); 
			 }
			return false;
			 
		 }else if(!CheckMail(obj)){
			 $('#email').siblings('.email_text').show();
			 $('#email').siblings('.right_icon').hide();
			 obj_t.text('邮箱格式不对');
			 return false;
		 }else{}

		
		})

	
	})
	
	
// 验证码
$(function(){
	
	$('#email_yzm').focus(function(){
		$(this).siblings('.email_text').hide();
		$(this).siblings('.email_text').text('');
		})
	
})

// 密码强弱
/*$(document).ready(function(){
    var $pwd = $('input[name="password"]');
    $pwd.passwordStrength();
});
*/

// 正则 验证 是否 含有 非法 字符
function Check_pwd(t) {
    var Error = "";
    var re = /^[\u4e00-\u9fa5a-z\d]+$/gi;
    if (!re.test(t)) {
        return true;
    }else{
        return false;
    }

}



$(function(){
	$('input[name="newpassword"]').blur(function(){
		var pwd_length=$(this).val().length;
		var pwd_val=$(this).val();
		var reg=/\s/;
		var ts_zf = Check_pwd($(this).val()); // 验证是否含有非法字符
		if(pwd_length==0){
		   $(this).siblings('.email_text').show();
		   $(this).siblings('.email_text').text('密码不能为空');
		   return false;
		}
		
		else if(pwd_length<6 || pwd_length > 20){
		   $(this).siblings('.email_text').show();
		   $(this).siblings('.email_text').text('长度应在6-20个字符之间');
		   return false;
		}else{
			// 字母 + 数字 时 不要 简单提示
            var num =  /^\d+$/;
            var zm = /^[A-Za-z]+$/;
            if(num.test(pwd_val) || zm.test(pwd_val)){
				$(this).siblings('.email_text').show();
                $(this).siblings('.email_text').text('该密码过于简单，建议字母、数字或符号的组合');
				$(this).siblings('.email_text').css('color','#666');
				$(this).siblings('.right_icon').hide();
            }
			$(this).siblings('.right_icon').show();
			
	    }
		if(reg.test(pwd_val)){
		  $(this).siblings('.right_icon').hide();
		  $(this).siblings('.email_text').show();
		  $(this).siblings('.email_text').text('密码不能包含空格');
		   return false;
		}
	})
	$('input[name="newpassword"]').focus(function(){
		$(this).siblings('.email_text').hide();
		$(this).siblings('.email_text').text('');
		$(this).siblings('.right_icon').hide();
	})
	
	$('input[name="againpassword"]').focus(function(){
		$(this).siblings('.email_text').hide();
		$(this).siblings('.email_text').text('');
		$(this).siblings('.right_icon').hide();
	})
	
	$('#psw_yzm').focus(function(){
		$(this).siblings('.email_text').hide();
		$(this).siblings('.email_text').text('');
		$(this).siblings('.right_icon').hide();
	})
	$('#psw_yzm').blur(function(){
		var psw_yzm=$(this).val();
		if(psw_yzm==''){
		  $(this).siblings('.email_text').show();
		  $(this).siblings('.email_text').text('验证码不能为空');
		}
	})
	
	$('input[name="againpassword"]').blur(function(){
		var pwd=$('input[name="newpassword"]').val();
		var againpwd=$(this).val();
		var reg=/\s/;
		if(againpwd==''){
			$(this).siblings('.right_icon').hide();
			$(this).siblings('.email_text').show();
			$(this).siblings('.email_text').text('确认密码不能为空');
			return false;
		}else if(reg.test(againpwd)){
		  $(this).siblings('.right_icon').hide();
		  $(this).siblings('.email_text').show();
		  $(this).siblings('.email_text').text('密码不能包含空格');
		   return false;
		}else if(pwd!=againpwd){
			$(this).siblings('.email_text').show();
			$(this).siblings('.email_text').text('两次输入的密码不一致');
			
		  return false;
		}else{
			$(this).siblings('.right_icon').show();
			$(this).siblings('.email_text').hide();
			}
	})
	
})

function check(){
	var pwd=$('input[name="newpassword"]').val();
	var pwd_length=$('input[name="newpassword"]').val().length;
	var pwd_text=$('input[name="newpassword"]').siblings('.email_text');
	var pwd_pic=$('input[name="newpassword"]').siblings('.right_icon');
	var againpwd=$('input[name="againpassword"]').val();
	var againpwd_text=$('input[name="againpassword"]').siblings('.email_text');
	var againpwd_pic=$('input[name="againpassword"]').siblings('.right_icon');
	var psw_yzm=$('#psw_yzm').val();
	var psw_yzm_text=$('#psw_yzm').siblings('.email_text');
	var old_pwd=$('input[name="oldpassword"]').val();;
	var reg=/\s/;
	if(pwd==''||againpwd==''||psw_yzm==''||old_pwd==''){
		if(pwd==''){
			pwd_text.show();
		    pwd_text.text('密码不能为空');
		 }
		if(againpwd==''){
		   againpwd_text.show();
		   againpwd_text.text('确认密码不能为空');
		}
		if(psw_yzm==''){
		   psw_yzm_text.show();
		   psw_yzm_text.text('验证码不能为空');
		}
		if(old_pwd==''){
		   $('input[name="oldpassword"]').siblings('.pass_text').text('旧密码不能为空').css('color','#ff5400');
		}
		return false;
	}else if(pwd!==againpwd){
		pwd_text.show();
		pwd_text.text('两次输入的密码不一致');
		againpwd_text.show();
		againpwd_text.text('两次输入的密码不一致');
		return false;
	}else if(pwd_length<6 || pwd_length > 20){
		   pwd_text.show();
		   pwd_text.text('长度应在6-20个字符之间');
		   return false;
	}else if(reg.test(pwd)){
		  pwd_text.show();
		  pwd_text.text('密码不能包含空格');
		  return false;
	}else{
			// 字母 + 数字 时 不要 简单提示
            var num =  /^\d+$/;
            var zm = /^[A-Za-z]+$/;
            if(num.test(pwd) || zm.test(pwd)){
				pwd_text.show();
                pwd_text.text('该密码过于简单，建议字母、数字或符号的组合');
				pwd_text.css('color','#666');
            }
			
	    }
	
	
}


// 验证 手机号
function isMobilePhone(obj){
    var partten = /^((\(\d{3}\))|(\d{3}\-))?(13[0-9]|15[012356789]|18[0236789]|14[57])\d{8}$/;
    if(partten.test(obj)){
        return true ;
    }else{
        return false ;
    }
}

$(function(){
	$('#get_yzm').click(function(){
		if($(this).html()=='获取验证码'){
			var t='<span id="time">10</span>秒后重新发送';
			
			$(this).html(t);
			var count=10;
            var timert=setInterval(function(){
	        if(count--==0){
		       clearInterval(timert);
			   $('#get_yzm').html('获取验证码');
		     }
		    else{
			  document.getElementById('time').innerHTML=count;
			  }
			  
			  
		},1000)
			
			}

		
	})
})



//手机验证
$(function(){
	$('#phone').blur(function(){
		var phone_val=$(this).val();
		if(phone_val==''){
			  $(this).siblings('.email_text').show();
			  $(this).siblings('.email_text').text('手机号不能为空');
		 }
		else if(isMobilePhone(phone_val)){
			$(this).siblings('.right_icon').show();
			
		}else{
			
			$(this).siblings('.email_text').show();
			$(this).siblings('.email_text').text('手机号不正确');
		}

		
	})
	
	$('#phone').focus(function(){
		$(this).siblings('.email_text').hide();
		$(this).siblings('.right_icon').hide();
		$(this).siblings('.email_text').text('');
	})
	$('#phone_yzm').focus(function(){
		$(this).siblings('.email_text').hide();
		$(this).siblings('.right_icon').hide();
		$(this).siblings('.email_text').text('');
	})
	$('#phone_yzm').blur(function(){
		var yzm_val=$(this).val();
		if(yzm_val==''){
			$(this).siblings('.email_text').show();
			$(this).siblings('.email_text').text('验证码不能为空');
		}
		
	})
})

$(function(){
	$('#phone_btn').click(function(){
		var phone_val=$('#phone').val();
		var yzm_val=$('#phone_yzm').val();
		if(phone_val==''||yzm_val==''){
			if(phone_val==''){
				$('#phone').siblings('.email_text').show();
				$('#phone').siblings('.email_text').text('手机号不能为空');
			}
			if(yzm_val==''){
				$('#phone_yzm').siblings('.email_text').show();
				$('#phone_yzm').siblings('.email_text').text('短信验证码不能为空');
			}
			return false;
		 }
		 else if(!isMobilePhone(phone_val)){
			 $('#phone').siblings('.email_text').show();
			 $('#phone').siblings('.email_text').text('手机号不正确');
			 return false;
		}else{
			
			
			}
		
	})
})


//支付验证

$(function(){
	$('#pay_pwd').blur(function(){
		var pwd_length=$(this).val().length;
		var pwd_val=$(this).val();
		var reg=/\s/;
		var ts_zf = Check_pwd($(this).val()); // 验证是否含有非法字符
		if(pwd_length==0){
		   $(this).siblings('.email_text').show();
		   $(this).siblings('.email_text').text('支付密码不能为空');
		   return false;
		}
		
		else if(pwd_length<6 || pwd_length > 20){
		   $(this).siblings('.email_text').show();
		   $(this).siblings('.email_text').text('长度应在6-20个字符之间');
		   return false;
		}else{
			// 字母 + 数字 时 不要 简单提示
            var num =  /^\d+$/;
            var zm = /^[A-Za-z]+$/;
            if(num.test(pwd_val) || zm.test(pwd_val)){
				$(this).siblings('.email_text').show();
                $(this).siblings('.email_text').text('该密码过于简单，建议字母、数字或符号的组合');
				$(this).siblings('.email_text').css('color','#666');
            }
			
	    }
		if(reg.test(pwd_val)){
		  $(this).siblings('.email_text').show();
		  $(this).siblings('.email_text').text('支付密码不能包含空格');
		   return false;
		}
	})
	$('#pay_pwd').focus(function(){
		$(this).siblings('.email_text').hide();
		$(this).siblings('.email_text').text('');
		$(this).siblings('.right_icon').hide();
	})
	
	$('#pay_yzm').focus(function(){
		$(this).siblings('.email_text').hide();
		$(this).siblings('.email_text').text('');
		$(this).siblings('.right_icon').hide();
	})
	

	$('#pay_yzm').blur(function(){
		var psw_yzm=$(this).val();
		if(psw_yzm==''){
		  $(this).siblings('.email_text').show();
		  $(this).siblings('.email_text').text('验证码不能为空');
		}
	})
	$('#pay_pwd0').focus(function(){
		$(this).siblings('.email_text').hide();
		$(this).siblings('.email_text').text('');
		$(this).siblings('.right_icon').hide();
	})
	$('#pay_pwd0').blur(function(){
		
		var reg=/\s/;
		var pwd=$('#pay_pwd').val();
		var againpwd=$(this).val();
		if(againpwd==''){
			$(this).siblings('.right_icon').hide();
			$(this).siblings('.email_text').show();
			$(this).siblings('.email_text').text('确认支付密码不能为空');
			return false;
		}else if(pwd!=againpwd){
			$(this).siblings('.email_text').show();
			$(this).siblings('.email_text').text('两次输入的密码不一致');
			
		  return false;
		}else if(reg.test(againpwd)){
			$(this).siblings('.email_text').show();
			$(this).siblings('.email_text').text('支付密码不能包含空格');
			
		  return false;
		}else{
			$(this).siblings('.right_icon').show();
			$(this).siblings('.email_text').hide();
			}
	})
	
})

function paycheck(){
	var pwd=$('#pay_pwd').val();
	var pwd_length=$('#pay_pwd').val().length;
	var pwd_text=$('#pay_pwd').siblings('.email_text');
	var pwd0=$('#pay_pwd0').val();
	var pwd0_text=$('#pay_pwd0').siblings('.email_text');
	var psw_yzm=$('#pay_yzm').val();
	var psw_yzm_text=$('#pay_yzm').siblings('.email_text');

	var reg=/\s/;
	if(pwd==''||psw_yzm==''||pwd0==''){
		if(pwd==''){
			pwd_text.show();
		    pwd_text.text('支付密码不能为空');
		 }
		 if(pwd0==''){
			pwd0_text.show();
		    pwd0_text.text('确认支付密码不能为空');
		 }
		
		if(psw_yzm==''){
		   psw_yzm_text.show();
		   psw_yzm_text.text('验证码不能为空');
		}
		
		return false;
	}else if(pwd_length<6 || pwd_length > 20){
		   pwd_text.show();
		   pwd_text.text('长度应在6-20个字符之间');
		   return false;
	}else if(pwd!==pwd0){
		pwd_text.show();
		pwd_text.text('两次输入的密码不一致');
		pwd0_text.show();
		pwd0_text.text('两次输入的密码不一致');
		return false;
	}else if(reg.test(pwd)){
		  pwd_text.show();
		  pwd_text.text('密码不能包含空格');
		   return false;
	}else{
			// 字母 + 数字 时 不要 简单提示
            var num =  /^\d+$/;
            var zm = /^[A-Za-z]+$/;
            if(num.test(pwd) || zm.test(pwd)){
				pwd_text.show();
                pwd_text.text('该密码过于简单，建议字母、数字或符号的组合');
				pwd_text.css('color','#666');
            }
		return true;	
	    }
	
	
}
