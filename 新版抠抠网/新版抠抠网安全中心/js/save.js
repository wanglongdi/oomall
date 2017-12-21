
//验证身份
$(function(){
	$('.save_status_tit ul li').click(function(){

		$(this).find('.mm').addClass('save_right');
		$(this).siblings().find('.mm').removeClass('save_right');
		$(".save_status_con>div:eq("+$(this).index()+")").show().siblings().hide();
	})
	
})

//邮箱
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
			$(this).next('span').text('邮箱格式不对');
			 
			 }
		if(obj==''){
			$(this).next('span').text('邮箱不能为空');
			 
			 }

		
	})
	$('#email').focus(function(){
		$(this).next('span').text('');
		})
	
})

$(function(){
	$('.email_btn_pic').click(function(){
		
	    var obj=$('#email').val();
		if(obj==''){
		  $('#email').next('span').text('邮箱不能为空');
		  return false;
		}
		else if(!CheckMail(obj)){
		   $('#email').next('span').text('邮箱格式不对');
		   return false; 
		}else{
			
			}
		
	

		
		})
	
	})


//倒计时
$(function(){
	$('.phone_con').find('.dx').click(function(){
		$(this).next('.ms').show();
		$(this).siblings('.hui').show();
		$(this).hide();
		//setTimeout("timer()", 1000);
		var count=120;
        var timert=setInterval(function(){
	    if(count--==0){
		   clearInterval(timert);
           $('.phone_con').find('.dx').show(); 
		   $('.phone_con').find('.ms').hide(); 
		   $('.phone_con').find('.ms').next('i').hide();
		  }
		else{
			  document.getElementById('time').innerHTML=count;
			  }
			  
			  
		},1000)
	})
})


// 密码强弱
$(document).ready(function(){
    var $pwd = $('input[name="password"]');
    $pwd.passwordStrength();
});

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
	$('#password').blur(function(){
		var pwd_length=$(this).val().length;
		var pwd_val=$(this).val();
		var reg=/\s/;
		var ts_zf = Check_pwd($(this).val()); // 验证是否含有非法字符
		if(pwd_length==0){
		   $(this).siblings('.tishi').text('密码不能为空');
		   return false;
		}
		
		else if(pwd_length<6 || pwd_length > 20){
		   $(this).siblings('.tishi').text('长度应在6-20个字符之间');
		   return false;
		}else{
			// 字母 + 数字 时 不要 简单提示
            var num =  /^\d+$/;
            var zm = /^[A-Za-z]+$/;
            if(num.test(pwd_val) || zm.test(pwd_val)){
                $(this).siblings('.tishi').text('该密码过于简单，建议字母、数字或符号的组合');
            }
			
	    }
		if(reg.test(pwd_val)){
		  $(this).siblings('.tishi').text('密码不能包含空格');
		   return false;
		}
	})
	$('#password').focus(function(){
		$(this).siblings('.tishi').text('');
	})
	
	$('#againpwd').focus(function(){
		$(this).siblings('.tishi').text('');
	})
	$('#againpwd').blur(function(){
		if($(this).val()==""){
		  $(this).siblings('.tishi').text('确认密码不能为空');
		}
	})
	$('#againpwd').blur(function(){
		var pwd=$('#password').val();
		var againpwd=$(this).val();
		var againpwd_l=$(this).val().length;
		if(pwd!=againpwd){
			$(this).siblings('.tishi').text('两次输入的密码不一致');
			if(againpwd_l==0){
			   $(this).siblings('.tishi').text('确认密码不能为空');
			}
		  return false;
		}
	})
	
})

function check(){
	var pwd=$('#password').val();
	var againpwd=$('#againpwd').val();
	var reg=/\s/;
	if(pwd==''||againpwd==''){
		if(pwd==''){
		   $('#password').siblings('.tishi').text('密码不能为空');
	     }
		if(againpwd==''){
		   $('#againpwd').siblings('.tishi').text('确认密码不能为空');
	     }
		return false;
	}else if(pwd!==againpwd){
		$('#password').siblings('.tishi').text('两次输入的密码不一致');
		$('#againpwd').siblings('.tishi').text('两次输入的密码不一致');
		return false;
	}else if(pwd_length<6 || pwd_length > 20){
		   $('#password').siblings('.tishi').text('长度应在6-20个字符之间');
		   return false;
	}else{
			// 字母 + 数字 时 不要 简单提示
            var num =  /^\d+$/;
            var zm = /^[A-Za-z]+$/;
            if(num.test(pwd) || zm.test(pwd)){
                $('#password').siblings('.tishi').text('该密码过于简单，建议字母、数字或符号的组合');
            }
			
	    }
	if(reg.test(pwd_val)){
		  $(this).siblings('.tishi').text('密码不能包含空格');
		   return false;
		}
	
}
