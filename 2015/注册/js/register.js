function isMail(oVal){
    var reg=/^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/; 
	if(reg.test(oVal)){
		return true;
	}
}

function isPhone(oVal){
    var reg=/^1[3|5|7|8][0-9]\d{8}$/;
    if(reg.test(oVal)){
		return true;
	}
}

function isName(oVal){
	var reg=/^(\w|-){6,20}$/;
    if(reg.test(oVal)){
		return true;
	}
	
}

function isPwd(oVal){
	var num=0;
	if(oVal.length<6||oVal.length>20){
      return 0;
	}
	 if(oVal.match(/[0-9]+/)){
       num++;
	}
	 if(oVal.match(/[A-Za-z]+/)){
       num++;
	}
	if(oVal.match(/[^A-Za-z0-9]+/)){
		num++;
	}
	return num;
}

function isNull(obj){
	var $this=obj;
    var text=$this.parents('dl').find('dt').text();
        text=text.substring(0,text.length-1);
    $this.parents('dd').find('.error_con').text('请输入'+text).css('color','red');
	$this.siblings('.icon_error').show();
    $this.parent().css('border-color','#d9d9d9');
}

function isFocus(obj){
     var $this=obj;
     $this.css('border-color','#c9a833');
     $this.siblings('.icon_error').hide();
     $this.siblings('.icon_right').hide();
     $this.parents('dd').find('.error_con').text('');
}

function isRight(obj){
     var $this=obj;
     $this.parent().css('border-color','#d9d9d9');
     $this.siblings('.icon_right').show();
     $this.siblings('.icon_error').hide();
     $this.parents('dd').find('.error_con').text('');
}

function isError(obj){
     var $this=obj;
     $this.siblings('.icon_right').hide();
     $this.siblings('.icon_error').show();
}

$(function(){
	$('#reg_name,log_name').focus(function(){
       isFocus($(this));
       $(this).parent().find('.icon_zh').addClass('icon_zh0');
       $(this).parent().next('.error_con').text('6-20个字符，支持字母、数字及”-”、”_”').css('color','#666');
	})


	$('#reg_pwd').focus(function(){
       isFocus($(this));
       $(this).parent().find('.icon_pwd').addClass('icon_pwd0');
       $(this).parent().next('.error_con').text('长度6-20个字符，由字母、数字和符号的两种以上组合').css('color','#666');
       $(this).parents('dd').addClass('pd');
	})

	

	$('#reg_pwd0').focus(function(){
       isFocus($(this));
       $(this).parent().find('.icon_mm').addClass('icon_mm0');
       $(this).parent().next('.error_con').text('请再次输入密码').css('color','#666');
	})

	$('#reg_yzm,#log_yzm').focus(function(){
       isFocus($(this));

	})


	$('#reg_duanxin').focus(function(){
       isFocus($(this));
	})

	$('#log_name').focus(function(){
       isFocus($(this));
       $(this).parent().find('.icon_zh').addClass('icon_zh0');
       $(this).parent().next('.error_con').text('6-20个字符，支持字母、数字及”-”、”_”').css('color','#666');
	})

	$('#log_pwd').focus(function(){
       isFocus($(this));
       $(this).parent().find('.icon_pwd').addClass('icon_pwd0');
       $(this).parent().next('.error_con').text('长度6-20个字符，由字母、数字和符号的两种以上组合').css('color','#666');
	})


	$('#reg_name,#log_name').blur(function(){
	   var oVal=$(this).val();
	   var reg=/^\d{6,20}$/;
	   if(oVal==''){
	   	   isNull($(this));
           $(this).parent().find('.icon_zh').removeClass('icon_zh0');
	   }else if(reg.test(oVal) && !isPhone(oVal)){
	   	  	 isError($(this));
	   	  	 $(this).parent().next('.error_con').text('账号不能是纯数字').css('color','red');  
	   }else if(isMail(oVal)){
	   	     isRight($(this));
	   }else if(isPhone(oVal)){
	   	  	  isRight($(this));
	   	  	  $('#dx').show();
	   }else if(isName(oVal)){
	   	  	  isRight($(this));
	   }else{
	   	  	  isError($(this));
	   	  	  $(this).parent().next('.error_con').text('6-20个字符，支持字母、数字及”-”、”_”').css('color','red');
	   	}
	   
       
	})

	$('#reg_pwd').keyup(function(){
        var oVal=$(this).val();
        var oLo=$('#safe').find('span').eq(0);
        var oZh=$('#safe').find('span').eq(1);
	    var oHi=$('#safe').find('span').eq(2);
        if(isPwd(oVal)==0){
          oLo.removeClass('low');	
	   	  oZh.removeClass('zhong');
          oHi.removeClass('high');
          $('#reg_pwd0').attr('disabled','disabled');
	    }
	    if(isPwd(oVal)==1){
	      oLo.addClass('low');
	   	  oZh.removeClass('zhong');
          oHi.removeClass('high');
          $('#reg_pwd0').attr('disabled','disabled');
	    }
	    if(isPwd(oVal)==2){
	      oLo.addClass('low');
          oZh.addClass('zhong');
          oHi.removeClass('high');
          $('#reg_pwd0').removeAttr('disabled');
	    }
	    if(isPwd(oVal)==3){
	      oLo.addClass('low');
          oZh.addClass('zhong');
          oHi.addClass('high');
          $('#reg_pwd0').removeAttr('disabled');
	    }
	})

	$('#reg_pwd').blur(function(){
	   var oVal=$(this).val();
	   var oLo=$('#safe').find('span').eq(0);
	   var oZh=$('#safe').find('span').eq(1);
	   var oHi=$('#safe').find('span').eq(2);
	   var oPa=$(this).parents('dd');
	   var oEr=$(this).parent().next('.error_con');
	   if(oVal==''){
	   	  isNull($(this));
          $(this).parent().find('.icon_pwd').removeClass('icon_pwd0');
          oZh.removeClass('zhong');
          oHi.removeClass('high');
          $('#reg_pwd0').attr('disabled','disabled');
	   }else if(isPwd(oVal)==0){
	   	  isError($(this));
	   	  oEr.text('长度6-20个字符，由字母、数字和符号的两种以上组合').css('color','red');
	   	  oLo.removeClass('low');
	   	  oZh.removeClass('zhong');
          oHi.removeClass('high');
          $('#reg_pwd0').attr('disabled','disabled');
	   }else if(isPwd(oVal)==1){
	   	  isError($(this));
	   	  oEr.text('不能为同一字符！').css('color','red');
	   	  oLo.addClass('low');
	   	  oZh.removeClass('zhong');
          oHi.removeClass('high');
          $('#reg_pwd0').attr('disabled','disabled');
	   }else if(isPwd(oVal)==2){
          isRight($(this));
          oLo.addClass('low');
          oZh.addClass('zhong');
          oHi.removeClass('high');
          oPa.removeClass('pd');
          $('#reg_pwd0').removeAttr('disabled');
	   }else if(isPwd(oVal)==3){
          isRight($(this));
          oLo.addClass('low');
          oZh.addClass('zhong');
          oHi.addClass('high');
          oPa.removeClass('pd');
          $('#reg_pwd0').removeAttr('disabled');
	   }

       
	})

	$('#log_pwd').blur(function(){
	   var oVal=$(this).val();
	   var oPa=$(this).parents('dd');
	   var oEr=$(this).parent().next('.error_con');
	   if(oVal==''){
	   	  isNull($(this));
          $(this).parent().find('.icon_pwd').removeClass('icon_pwd0');
	   }else if(isPwd(oVal)==0){
	   	  isError($(this));
	   	  oEr.text('长度6-20个字符，由字母、数字和符号的两种以上组合').css('color','red');
	   }else if(isPwd(oVal)==1){
	   	  isError($(this));
	   	  oEr.text('不能为同一字符！').css('color','red');
	   }else if(isPwd(oVal)==2){
          isRight($(this));
	   }else if(isPwd(oVal)==3){
          isRight($(this));
	   }

       
	})

	

	$('#reg_pwd0').blur(function(){
       var oVal=$(this).val();
       if(oVal==''){
	   	  isNull($(this));
          $(this).parent().find('.icon_mm').removeClass('icon_mm0');
	   }else if(oVal!=$('#reg_pwd').val()){
	   	  isError($(this));
	   	  $(this).parent().next('.error_con').text('确认密码必须与登录密码一致').css('color','red');
	   }else{
	   	  isRight($(this));
	   }
       
	})

	

	$('#reg_yzm,#log_yzm').blur(function(){
       var oVal=$(this).val();
       if(oVal==''){
       	  isNull($(this));
       }else if(oVal.length!=4){
       	  isError($(this));
          $(this).parent().siblings('.error_con').text('验证码不正确').css('color','red');
       }else{
          isRight($(this));
       }
       
	})

	$('#reg_duanxin').blur(function(){
       var oVal=$(this).val();
       if(oVal==''){
       	  isNull($(this));
       }else if(oVal.length!=6){
       	  isError($(this));
          $(this).parent().siblings('.error_con').text('短信验证码不正确').css('color','red');
       }else{
          isRight($(this));
       }
       
	})

	$('#dx').hide();
})


$(function(){
	$('#re_form').submit(function(){
		var name=$('#reg_name');
		var pwd=$('#reg_pwd');
		var re_pwd=$('#reg_pwd0');
		var yzm=$('#reg_yzm');
		var dx=$('#reg_duanxin');
		var yzm_con=$('#yzm');
		var dx_con=$('#dx');
		var reg=/^\d{6,20}$/;
		var reg0=/^1[3|5|7|8][0-9]\d{8}$/;
		function repwdError(){
			isError(re_pwd);
	   	    re_pwd.parent().next('.error_con').text('确认密码必须与登录密码一致').css('color','red');
		}
		function checkName(){
           if(reg.test(name.val()) && !isPhone(name.val())){
	   	  	     return false; 
		   }else if(isMail(name.val())||isPhone(name.val())||isName(name.val())){
		   	     return true;
		   }else{
		   	  	 return false;
		   	}
		}
		function checkPwd(){
			if(isPwd(pwd.val())==0){
	          return false;
		   }else if(isPwd(pwd.val())==1){
	          return false;
		   }else if(isPwd(pwd.val())==2){
	          return true;
		   }else if(isPwd(pwd.val())==3){
	          return true;
		   }
		}

		if(name.val()==''){
			isNull(name);
			return false;
		}else if(pwd.val()==''){
			isNull(pwd);
			pwd.parents('dd').addClass('pd');
			return false;
		}else if(re_pwd.val()==''){
			isNull(re_pwd);
			return false;
		}else if(pwd.val()!=re_pwd.val()){
			repwdError();
			return false;
		}else if(yzm_con.css('display')=='block' && yzm.val()==''){
            isNull(yzm);
			return false;
		}else if(!checkName()){
			isError(name);
			name.parent().next('.error_con').text('6-20个字符，支持字母、数字及”-”、”_”').css('color','red');
            return false;
		}else if(!checkPwd()){
			isError(pwd);
			pwd.parent().next('.error_con').text('长度6-20个字符，由字母、数字和符号的两种以上组合').css('color','red');
            return false;
		}else if(yzm_con.css('display')=='block' && yzm.val().length!=4){
			isError(yzm);
			yzm.find('.error_con').text('验证码不正确').css('color','red');
            return false;
		}else if(dx_con.css('display')=='block' && dx.val()==''){
		    isNull(dx); 
            return false;  
		}else if(dx_con.css('display')=='block' && dx.val().length!=6){
			dx.parent().siblings('.error_con').text('短信验证码不正确').css('color','red');
			return false;
		}else{
			return true;
		}
		
	})
})

$(function(){
	$('#login_form').submit(function(){
		var name=$('#log_name');
		var pwd=$('#log_pwd');
		var yzm=$('#log_yzm');
		var yzm_con=$('#yzm');
		var reg=/^\d{6,20}$/;
		var reg0=/^1[3|5|7|8][0-9]\d{8}$/;
		function checkName(){
           if(reg.test(name.val()) && !isPhone(name.val())){
	   	  	     return false; 
		   }else if(isMail(name.val())||isPhone(name.val())||isName(name.val())){
		   	     return true;
		   }else{
		   	  	 return false;
		   	}
		}
		function checkPwd(){
			if(isPwd(pwd.val())==0){
	          return false;
		   }else if(isPwd(pwd.val())==1){
	          return false;
		   }else if(isPwd(pwd.val())==2){
	          return true;
		   }else if(isPwd(pwd.val())==3){
	          return true;
		   }
		}

		if(name.val()==''){
			isNull(name);
			return false;
		}else if(pwd.val()==''){
			isNull(pwd);
			return false;
		}else if(yzm.val()==''){
            isNull(yzm);
			return false;
		}else if(!checkName()){
			isError(name);
			name.parent().next('.error_con').text('6-20个字符，支持字母、数字及”-”、”_”').css('color','red');
            return false;
		}else if(!checkPwd()){
			isError(pwd);
			pwd.parent().next('.error_con').text('长度6-20个字符，由字母、数字和符号的两种以上组合').css('color','red');
            return false;
		}else if(yzm_con.css('display')=='block' && yzm.val().length!=4){
			yzm.find('.error_con').text('验证码不正确').css('color','red');
            return false;
		}else{
			return true;
		}
		
	})
})

// Email
$(function(){
	$('#suc_email').focus(function(){
		isFocus0($(this));
	})

	$('#suc_email').blur(function(){
	   var oVal=$(this).val();
	   if(oVal==''){
	   	   isNull($(this));
	   	   $(this).parent().siblings('.error_con').text('请输入邮箱').css('color','red');
	   }else if(isMail(oVal)){
	   	     isRight($(this));
	   }else{
             isError($(this));
             $(this).parent().siblings('.error_con').text('邮箱输入有误，请重新输入').css('color','red');
	   }
	   
       
	})

	$('#ljyz').click(function(){
		var oVal=$('#suc_email').val();
	    if(oVal==''){
	   	   isNull($(this));
	   	   $('#suc_email').parent().siblings('.error_con').text('请输入邮箱').css('color','red');
	    }else if(isMail(oVal)){
	   	     isRight($('#suc_email'));
	   	     alert(1);
	    }else{
             isError($('#suc_email'));
             $('#suc_email').parent().siblings('.error_con').text('邮箱输入有误，请重新输入').css('color','red');
	    }

	})
})


function isFocus0(obj){
	var $this=obj;
	isFocus($this);
	$this.siblings('.icon_error').hide();
    $this.siblings('.icon_right').hide();
    $this.parents('dd').find('.error_con').text('');
}

// phone
$(function(){
	$('#suc_phone').focus(function(){
		isFocus0($(this));
	})
	$('#suc_dx').focus(function(){
		isFocus0($(this));
	})
	$('#suc_phone').blur(function(){
	   var oVal=$(this).val();
	   if(oVal==''){
	   	   isNull($(this));
	   	   $(this).parent().siblings('.error_con').text('请输入手机号码').css('color','red');
	   }else if(isPhone(oVal)){
	   	     isRight($(this));
	   }else{
             isError($(this));
             $(this).parent().siblings('.error_con').text('手机号输入有误，请重新输入').css('color','red');
	   }
	   
       
	})
	$('#suc_dx').blur(function(){
	   var oVal=$(this).val();
	   if(oVal==''){
	   	   isNull($(this));
	   	   $(this).parent().siblings('.error_con').text('请输入短信验证码').css('color','red');
	   }else if(oVal.length==6){
	   	     isRight($(this));
	   }else{
             isError($(this));
             $(this).parent().siblings('.error_con').text('短信验证码输入有误，请重新输入').css('color','red');
	   }
	   
       
	})
})

//计时器
$(function(){
	var s_obj=$('.fs').find('span');
	var s_num=s_obj.text();
	var timer=setInterval(function(){
		if(s_num>0){
			s_num--;
			s_obj.text(s_num);
		}else{
			clearInterval(timer);
		}
       
	},1000)
	
})
//手机验证
$(function(){
	$('#form_phone').submit(function(){		
		var $num_suc=$('#suc_phone');
		var $dx_suc=$('#suc_dx');
		if($num_suc.val()==''||$dx_suc.val()==''){
			if($num_suc.val()==''){
			   isNull($num_suc);
	   	       $num_suc.parent().siblings('.error_con').text('请输入手机号码').css('color','red');
			}
			if($dx_suc.val()==''){
			   isNull($dx_suc);
	   	       $dx_suc.parent().siblings('.error_con').text('请输入短信验证码').css('color','red');
			}
			return false;
		}else if(!isPhone($num_suc.val())||$dx_suc.val().length!=6){
			if(!isPhone($num_suc.val())){
	            isError($num_suc);
	            $num_suc.parent().siblings('.error_con').text('手机号输入有误，请重新输入').css('color','red');
			}
			if($dx_suc.val().length!=6){
				isError($dx_suc);
            	$dx_suc.parent().siblings('.error_con').text('短信验证码输入有误，请重新输入').css('color','red');
		    }
		    return false;
		}else{
			return true;
		}


		
	})
})
