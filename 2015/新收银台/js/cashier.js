//订单详情
$(function(){
	$('#order_infor').click(function(){
		var con=$('#order_infor_con');
		if(con.is(':hidden')){
			$(this).find('b').addClass('infor_icon0').removeClass('infor_icon');
			$('#order_infor_con').slideDown();
		}else{
			$(this).find('b').addClass('infor_icon').removeClass('infor_icon0');
			$('#order_infor_con').slideUp();
		}
		
	})
})

//关闭弹窗
$(function(){
	$('#close').click(function(){
		$('#finised').hide();
		$('#mask').hide();
	})
})

function maskHeight(){
	var wh=$(window).height();
	$('#mask').show().css('height',wh);
}

//微信
function sel_bank(obj){
	var $this=$(obj);
	var in_rad=$this.find('input');
	var in_val=in_rad.val();
	var btn=$this.parents('.pay_often').find('.pay_btn');
	if(!$this.hasClass('cur')){
		$this.addClass('cur').siblings().removeClass('cur');
		$this.find('.rcon').show();
		in_rad.prop('checked','checked');
		$this.siblings().find('input').prop('checked','');
		$this.siblings().find('.rcon').hide();
		if(in_val=='weixin'){
       	  $this.find('.pay_wx').slideDown();  
       	  btn.removeClass('pay_btn0');
       	  btn.attr('type','button');
       }else{
       	  $this.siblings().find('.pay_wx').hide();
       	  btn.addClass('pay_btn0');
       	  btn.attr('type','submit');

       }

	}  
}
$(function(){
	$('.pay_often li').click(function(){
		sel_bank($(this));   
	})
	$(".pay_often li").first().click();


	$('.pay_btn[type=submit]').click(function(){
		maskHeight();
		$('#finised').show();
	})
	
})
//查看更多
$(function(){
	$('ul.pay_bank_con').each(function(){
		var $li=$(this).find('li:not([class="more_bank"])');
        var li_num=$li.length;
        if(li_num>14){
        	$li.each(function(){
        		var li_in=$(this).index();
        		if(li_in>13){
        			$(this).hide();
        		}
        	})
        }else{
        	$(this).find('li.more_bank').hide();
        }
        
	})

	$('.more_bank').click(function(){
		var $li=$(this).parent('ul').find('li:not([class="more_bank"])');
        if($(this).text()=='查看更多'){
            $(this).text('收起更多');
            $li.each(function(){
        		var li_in=$(this).index();
        		if(li_in>13){
        			$(this).show();
        		}
    		})
        }else{
			$(this).text('查看更多');
	            $li.each(function(){
	        		var li_in=$(this).index();
	        		if(li_in>13){
	        			$(this).hide();
	        		}
	    		})
	        }
        
	})
	
})

//选择银行
$(function(){
	$('.pay_bank_con li:not([class="more_bank"]),.pay_bank_con0 li:not([class="more_bank"])').click(function(){
		$(this).addClass('cur');
		$(this).siblings().removeClass('cur');
		$(this).find('input').attr('checked','checked');
		$(this).siblings().find('input').removeAttr('checked');
		var tit=$(this).find('img').attr('title');
		if(tit=='微信支付'){
			$(this).parents('.pay_bank_con0').find('.pay_wx').slideDown();
		}else{
			$(this).parents('.pay_bank_con0').find('.pay_wx').hide();
			maskHeight();
			$('#finised').show();
			//form1.submit();
			$('form[name="form1"]').submit();
		}
	})
})

//支付弹开
$(function(){
	$('.pay_bank').first().find('ul').show();
	$('.pay_bank').first().find('.pay_bank_line').hide();
	$('.pay_bank').first().find('h2 b').addClass('bank_icon').removeClass('bank_icon0');
	$('.pay_bank h2').click(function(){
		 var tt=$(this).parent('.pay_bank').find('ul').attr('class');		
		 var pay_len=$('.pay_bank ul:visible').length;
		 var bn=$(this).find('b');
		 if(bn.hasClass('bank_icon0')){
		 	bn.addClass('bank_icon').removeClass('bank_icon0');
		 	$(this).parents('.pay_bank').find('ul').slideDown();
		 	$(this).parents('.pay_bank').find('.pay_bank_line').hide();
		 	if(tt=='pay_often'){
		 		$('form[name=form1]').find('ul').slideUp();
		 		$('form[name=form1]').find('.pay_bank_line').show();
		 		$('form[name=form1]').find('b').addClass('bank_icon0').removeClass('bank_icon');
		 	}else{
		 		$(this).parents('.pay_bank').siblings('.pay_bank').find('ul').slideUp();
		 		$(this).parents('.pay_bank').siblings('.pay_bank').find('.pay_bank_line').show();
		 		$(this).parents('.pay_bank').siblings('.pay_bank').find('b').addClass('bank_icon0').removeClass('bank_icon');
		 		$('form[name=form2]').find('ul').slideUp();
		 		$('form[name=form2]').parents('.pay_bank').find('.pay_bank_line').show();
		 		$('form[name=form2]').parents('.pay_bank').find('b').addClass('bank_icon0').removeClass('bank_icon');
		 	}
		 }else{
		 	if(pay_len==1){
		 		return;
		 	}else{
		 		bn.addClass('bank_icon0').removeClass('bank_icon');
		 		$(this).parents('.pay_bank').find('ul').slideUp();
		 		$(this).parents('.pay_bank').find('.pay_bank_line').show();
		 	}
		 	
		 }
	})

	$('.finised_text .btn').click(function(){
		$('#finised').hide();
		$('#mask').hide();
	})
	$('.finised_text .text0 a').click(function(){
		$('#finised').hide();
		$('#mask').hide();
	})

})

//检查支付是否成功
function checkPaid(){
    var pay_id = $(".order_lcon>p").html().trim().substr(4);
    $.ajax({
        type:"POST",
        dataType:"json",
        url:"/isPaid.php",
        timeout:60000,     //ajax请求超时时间60秒
        data:{pay_id:pay_id},
        success:function(data,textStatus){
            //从服务器得到数据，直接显示
            if(data.code=="1"){
                window.location.href="/show?id="+pay_id;
            }
            //未从服务器得到数据，继续查询
            if(data.code=="0"){
                checkPaid();
            }
        },
        //Ajax请求超时，继续查询
        error:function(XMLHttpRequest,textStatus,errorThrown){
            if(textStatus=="timeout"){
                checkPaid();
            }
        }

    });
};

//绑定事件，开始监听
$(function(){
    /*$(".pay_bank_con input:radio,.pay_bank_con0 input:radio").click(function(){
        form1.submit();
    })
*/
    if ($("li.cur>div.pay_wx").css('display') !== 'none') {
        checkPaid();
    }
 
})