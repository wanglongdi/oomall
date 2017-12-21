//展开全部地址
$(function(){
	var adr_li=$('#address_con').find('li');
	if(adr_li.length<5){
		$('#open_adr').hide();
	}
	adr_li.each(function(){
		if($(this).index()>3){
			$(this).hide();
		}
	})
	$('#open_adr').click(function(){
       adr_li.each(function(){
			if($(this).index()>3){
				$(this).show();
			}
		})
       $(this).hide();
	})
})
//快递费
function openul(obj){
	var $ul=$(obj).find('ul');
	if($ul.is(':hidden')){
		$ul.show();
	}else{
		$ul.hide();
	}
}
function textul(obj){
	var text=$(obj).text();
	$(obj).parent().parent('div').find('span').text(text);
	$(obj).addClass('cur').siblings().removeClass('cur');
}
$(function(){
	$('.exp_pay,.ticket').click(function(){
		openul($(this));
	})
	$('.exp_pay ul li,.ticket ul li').click(function(){
		textul($(this));
	})

	function stopPropagation(e) {
        if (e.stopPropagation)
            e.stopPropagation();
        else
            e.cancelBubble = true;
    }

    $(document).bind('click',function(){
        $('.exp_pay').find('ul').css('display','none');
        $('.ticket').find('ul').css('display','none');
    });

    $('.exp_pay,.ticket').bind('click',function(e){
        stopPropagation(e);
    });
})

//复选框
$(function(){
	$('.check_inv').click(function(){
		var $b=$(this).find('b');
		if($b.hasClass('checked')){
			$b.removeClass('checked');
			$(this).find('input').removeAttr('checked');
			$(this).parent().find('.inv_tit').hide();
		}else{
			$b.addClass('checked');
			$(this).find('input').attr('checked','checked');
			$(this).parent().find('.inv_tit').show();
		}
	})
})

//单选按钮
$(function(){
	$('.radio').click(function(){
		var $b=$(this).find('b');
		if($b.hasClass('checked')){
			return false;
		}else{
			$b.addClass('checked');
			$(this).find('input').attr('checked','checked');
			$(this).siblings().find('b').removeClass('checked');
			$(this).siblings().find('input').removeAttr('checked');
			if($(this).find('em').text()=='单位'){
				$(this).siblings('textarea').show();
				$(this).siblings('.radio_area_num').show();
			}else{
				$(this).siblings('textarea').hide();
				$(this).siblings('.radio_area_num').hide();
			}
		}
	})
})

//优惠劵
$(function(){
	$('.order_ticket h2').click(function(){
		var $b=$(this).find('b');
		if($b.hasClass('cur')){
			$b.removeClass('cur');
			$(this).parents('.order_ticket').find('.order_ticket_con').hide();
		}else{
			$b.addClass('cur');
			$(this).parents('.order_ticket').find('.order_ticket_con').show();
		}
	})
})

function paynum(){
	var num=0;
	var zz=$('.order_ticket_con0 ul li.t').find('b');
	if(zz.hasClass('checked')){
		num++;
	}
	if(num>0){
		$('.zhifu').show();
	}else{
		$('.zhifu').hide();
	}
}

//红包复选框
$(function(){
	$('.red_check').click(function(){
		var $b=$(this).find('b');
		if($b.hasClass('checked')){
			$b.removeClass('checked');
			$(this).find('input').removeAttr('checked');
		}else{
			$b.addClass('checked');
			$(this).find('input').attr('checked','checked');
		}
		paynum();
	})
})

//红包单选框
$(function(){
	$('.red_radio').click(function(){
		var $b=$(this).find('b');
		var ss='<span class="quxiao">取消</span>';
		if($b.hasClass('checked')){
			return false;
			
		}else{
			$b.addClass('checked');
			$(this).find('input').attr('checked','checked');
			$(this).parents('ul').append(ss);
			$(this).parents('ul').siblings('ul').find('.red_radio').find('b').removeClass('checked');
			$(this).parents('ul').siblings('ul').find('.red_radio').find('input').removeAttr('checked');
			$(this).parents('ul').siblings('ul').find('.quxiao').remove();
		}
		paynum();
	})

	$('.order_ticket_con0 ul').on('click','.quxiao',function(){
		$(this).parents('ul').find('.red_radio').find('b').removeClass('checked');
		$(this).parents('ul').find('.red_radio').find('input').removeAttr('checked');
		$(this).remove();
		paynum();
	})
})

//红包切换
$(function(){
	$('.order_ticket_tit li').click(function(){
		var num=$(this).index();
		$(this).addClass('cur').siblings().removeClass('cur');
		$(this).append('<b></b>');
		$(this).siblings().find('b').remove();
		$(this).parents('.order_ticket_con').find('.order_ticket_con0').eq(num).show().siblings('.order_ticket_con0').hide();
	})
})

//提交订单
$(function(){
	var th=$('#submit_btn').offset().top;
	var wh=$(window).height();
	$(window).scroll(function(){
		 var tt=$(window).scrollTop();
         if(tt>=th-wh){
         	$('#fix_con').fadeOut(100);
         }else{
         	$('#fix_con').show();
         }
	})
})

function placetext(obj,text){
	$(obj).val(text).css({'color':'#b2b1b1','font-size':'12px'});
	$(obj).blur(function(){
		if($(obj).val()==''){
			$(obj).val(text).css({'color':'#b2b1b1','font-size':'12px'});
		}else{
			$(obj).css({'color':'#444','font-size':'14px'});
		}
	})
	$(obj).keydown(function(){
		$(obj).css({'color':'#444','font-size':'14px'});
	})
	$(obj).focus(function(){
		if($(obj).val()==text){
			$(obj).val('');
		}
	})
}


function cut_str(obj, len){
    var char_length = 0;
    var str=$(obj).val();
    for (var i = 0; i < str.length; i++){
        var son_str = str.charAt(i);
        encodeURI(son_str).length > 2 ? char_length += 1 : char_length += 0.5;
        if (char_length >= len){
            var sub_len = char_length == len ? i+1 : i;
            $(obj).val(str.substr(0, sub_len));
            break;
        }
    }
}

$(function(){
	placetext('.word_area','选填，可以告诉您对卖家订单的要求');
	$('.word_area').keyup(function(){
		var len=$(this).val().length;
		maxlen($(this),100);
		$(this).parent().find('.word_text em').text(len);
	})
	$('.radio_area').keyup(function(){
		var len=$(this).val().length;
		maxlen($(this),50);
		$(this).siblings('.radio_area_num').find('em').text(len);
	})
})

//设为默认收货地址   	  	 			
$(function(){
	$('.adr_default').click(function(){
		var $b=$(this).find('b');
		if($b.hasClass('checked')){
			$b.removeClass('checked');
			$(this).find('input').removeAttr('checked');
		}else{
			$b.addClass('checked');
			$(this).find('input').attr('checked','checked');
		}
	})
})

//收货地址
function isPhone(oVal){
    var reg=/^1[3|5|7|8][0-9]\d{8}$/;
    if(reg.test(oVal)){
		return true;
	}
}

function isYb(oVal){
	var reg=/^\d{6}$/;
    if(reg.test(oVal)){
		return true;
	}
	
}


$(function(){
	placetext('#adr_name','姓名最多可填写10个字');
	placetext('#adr_dz','请如实填写详细收货地址，例如街道名称，门牌号码，楼层和房间号等信息');
	placetext('#tel_qh','区号');
	placetext('#tel_hm','电话号码');
	placetext('#tel_fh','分机号');
	placetext('#adr_code','请填写正确的邮编');
	placetext('#inp_city','选择所在区域');
	$('#adr_dz').keyup(function(){
		cut_str($(this),60);
		
	})
	$('#adr_dz').blur(function(){
		var inp_val=$(this).val();
		if(inp_val=='请如实填写详细收货地址，例如街道名称，门牌号码，楼层和房间号等信息'){
			$(this).siblings('.adr_error').html('<b></b>请填写详细的收货地址');
		}else{
			$(this).siblings('.adr_error').html('');
		}

	})
	$('#adr_name').keyup(function(){
		cut_str($(this),10);
	})
	$('#adr_name').blur(function(){
		var inp_val=$(this).val();
		if(inp_val=='姓名最多可填写10个字'){
			$(this).siblings('.adr_error').html('<b></b>请填写收货人的姓名');
		}else{
			$(this).siblings('.adr_error').html('');
		}
	})
	$('#adr_phone').blur(function(){
		var inp_val=$(this).val();
		if(inp_val==''){
			$(this).siblings('.adr_error').html('<b></b>请填写手机号码');
		}else if(!isPhone(inp_val)){
			$(this).siblings('.adr_error').html('<b></b>手机号码格式不正确');
		}else{
			$(this).siblings('.adr_error').html('');
		}
	})
	$('#adr_code').blur(function(){
		var inp_val=$(this).val();
		if(inp_val=='请填写正确的邮编'){
			$(this).siblings('.adr_error').html('');
		}else if(!isYb(inp_val)){
			$(this).siblings('.adr_error').html('<b></b>请填写正确的邮编');
		}else{
			$(this).siblings('.adr_error').html('');
		}
	})
	$('#tel_qh').blur(function(){
		var inp_val=$(this).val();
		var reg=/^\d{1,6}$/;
		if(inp_val=='区号'){
			$(this).siblings('.adr_error').html('');
		}else if(!reg.test(inp_val)){
			$(this).siblings('.adr_error').html('<b></b>电话号码格式不正确');
		}else{
			$(this).siblings('.adr_error').html('');
		}
	})
	$('#tel_hm').blur(function(){
		var inp_val=$(this).val();
		var reg=/^\d{1,8}$/;
		if(inp_val=='电话号码'){
			$(this).siblings('.adr_error').html('');
		}else if(!reg.test(inp_val)){
			$(this).siblings('.adr_error').html('<b></b>电话号码格式不正确');
		}else{
			$(this).siblings('.adr_error').html('');
		}
	})
	$('#tel_fh').blur(function(){
		var inp_val=$(this).val();
		var reg=/^\d{1,6}$/;
		if(inp_val=='分机号'){
			$(this).siblings('.adr_error').html('');
		}else if(!reg.test(inp_val)){
			$(this).siblings('.adr_error').html('<b></b>电话号码格式不正确');
		}else{
			$(this).siblings('.adr_error').html('');
		}
	})

	$("#inp_city").click(function (e) {
	  SelCity(this,e);
	  
	});
	$("#inp_city").blur(function(){
		var tt=$(this).val().split('-').length;
		if($(this).val()=='选择所在区域' || tt!=3){
		  	$(this).parent('.inp_con').next('.adr_error').html('<b></b>请选择完整的地区信息');
		}else{
		  	$(this).parent('.inp_con').next('.adr_error').html('');
		}
		if($(this).val()!=''){
			$(this).css({'color':'#444','font-size':'14px'});
		}
	})
}) 

$(function(){
	$('#adr_form').submit(function(){
		var $name=$('#adr_name');
		var $city=$('#inp_city');
		var $adr=$('#adr_dz');
		var $tel=$('#adr_phone');
		var $tel_qh=$('#tel_qh');
		var $tel_hm=$('#tel_hm');
		var $tel_fh=$('#tel_fh');
		var $code=$('#adr_code');
		var n_text='姓名最多可填写10个字';
		var c_text='选择所在区域';
		var a_text='请如实填写详细收货地址，例如街道名称，门牌号码，楼层和房间号等信息';
		var q_text='区号';
		var h_text='电话号码';
		var f_text='分机号';
		var d_text='请填写正确的邮编';
		var reg=/^\d{1,6}$/;
		var reg0=/^\d{1,8}$/;
		var tt=$city.val().split('-').length;
		if($name.val()==n_text || $city.val()==c_text || $adr.val()==a_text || $tel.val()==''){
            if($name.val()==n_text){
            	$name.siblings('.adr_error').html('<b></b>请填写收货人的姓名');
            }
            if($city.val()==c_text){
            	$city.parent('.inp_con').next('.adr_error').html('<b></b>请选择完整的地区信息');
            }
            if($adr.val()==a_text){
            	$adr.siblings('.adr_error').html('<b></b>请填写详细的收货地址');
            }
            if($tel.val()==''){
            	$tel.siblings('.adr_error').html('<b></b>请填写手机号码');
            }
            return false;
		}else if(!isPhone($tel.val())){
			$tel.siblings('.adr_error').html('<b></b>手机号码格式不正确');
			return false;
		}else if($tel_qh.val()!=q_text && !reg.test($tel_qh.val())){
             $tel_qh.siblings('.adr_error').html('<b></b>电话号码格式不正确');
             return false;
		}else if($tel_hm.val()!=h_text && !reg0.test($tel_hm.val())){
             $tel_qh.siblings('.adr_error').html('<b></b>电话号码格式不正确');
             return false;
		}else if($tel_fh.val()!=f_text && !reg.test($tel_fh.val())){
             $tel_qh.siblings('.adr_error').html('<b></b>电话号码格式不正确');
             return false;
		}else if($code.val()!=d_text && !isYb(inp_val)){
			alert(1)
             $code.siblings('.adr_error').html('<b></b>请填写正确的邮编');
             return false;
		}else if(tt!=3){
            $city.parent('.inp_con').next('.adr_error').html('<b></b>请选择完整的地区信息');
             return false;
		}else{
			return true;
		}
	})
}) 

//弹出地址
$(function(){
	$('.make,#add_new').click(function(){
       $('#mask').show().css('height',$(window).height());
       $('#pop_adr').show();
	})
	$('#pop_close').click(function(){
       $('#mask').hide();
       $('#pop_adr').hide();
	})
})

//选地址
$(function(){
	$('#address_con ul li').click(function(){
       $(this).addClass('cur').siblings().removeClass('cur');
	})
	
})