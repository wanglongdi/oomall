//店铺评分
$(function(){
	$('#store_pop').hover(function(){
		$(this).find('#store_pop_con').show();
		$(this).find('b').first().addClass('cur');
	},function(){
		$(this).find('#store_pop_con').hide();
		$(this).find('b').first().removeClass('cur');
	})
})

//优惠
function disCount(){
	var o_h=$('#pro_act .youhui').height();
	if(o_h<=20){
		$('#pro_act .youhui').find('b').hide();
	}else{
		$('#pro_act .youhui').find('b').show();
		$('#pro_act .youhui').css('height','16px');
	}
	$('#pro_act .youhui').hover(function(){
		$(this).find('b').addClass('kai');
		$(this).css('height','auto');
	},function(){
		$(this).find('b').removeClass('kai');
		$(this).css('height','20px');
	})
}

function showObj(obj,con){
	$(obj).hover(function(){
		$(this).find(con).show();
	},function(){
		$(this).find(con).hide();
	})
}
function isMail(oVal){
    var reg=/^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/; 
	if(reg.test(oVal)){
		return true;
	}
}
function bigPic(obj,pic){
	var o_sr=$(obj).find('img').attr('src');
	$(obj).addClass('cur').siblings().removeClass('cur');
	$(pic).attr('src',o_sr);
}

$(function(){
	//收藏店铺
	$('.sc,.pro_fen_jr a.sd').click(function(){
		$(this).html('<b></b>已收藏　');
	})
	$('.pro_sc').click(function(){
		$(this).html('<b class="col col0"></b>已收藏　');
	})
	$('.pro_share').hover(function(){
		$(this).find('.pro_fx_share').show();
	},function(){
		$(this).find('.pro_fx_share').hide();
	})
	//促销活动
	showObj('#pro_act_ewm','img');
	showObj('.pro_infor_erm','.pro_infor_erm0');
	disCount();
})



$(function(){
	//商品分类
	$('#pro_fl li h3').click(function(){
        var con=$(this).next('p');
        if(con.is(':hidden')){
        	con.show();
        	$(this).find('b').addClass('cur');
        }else{
        	con.hide();
        	$(this).find('b').removeClass('cur');
        }
	})
	//商品排行榜
	$('.pro_ph').first().show();
	$('#pro_ph_tit span').hover(function(){
		var num=$(this).index();
        $('.pro_ph').eq(num).show().siblings('.pro_ph').hide();
        $(this).parent().find('b').animate({'left':87*num},100)
	})
	//搭配套餐
	$('.package_con').first().show();
	$('.package_tit span').click(function(){
		$('.package_con').eq($(this).index()).show().siblings('.package_con').hide();
		$(this).addClass('cur').siblings('span').removeClass('cur');
		
	})
	$('.package_con li b').click(function(){
		if($(this).hasClass('sel')){
			$(this).removeClass('sel');
			$(this).parents('li').removeClass('act');
		}else{
			$(this).addClass('sel');
			$(this).parents('li').addClass('act');
		}
	})

	//快递
	$(function(){
		$('#cp_ems').hover(function(){
			$(this).css('border','#c6c6c6 1px solid');
			$(this).find('b').addClass('cur');
            $('#cp_ems_con').show();
		},function(){
			$(this).css('border','#fff 1px solid');
			$(this).find('b').removeClass('cur');
            $('#cp_ems_con').hide();
		})
		
	})
	//运费
	$('#mail_city').click(function(){
        var o_w=$(this).siblings('.cc').width()+30;
        $('#mail_city_con').show().css('left',o_w);
	})
	$('#mail_city_con li a').click(function(){
		var o_ul=$(this).parents('ul');
		$(this).addClass('cur').parent().siblings().find('a').removeClass('cur');
		o_ul.siblings().find('a').removeClass('cur');
		o_ul.find('li.area').show();
		o_ul.siblings().find('li.area').hide();
	})
	$('.area ul li').on('click','a',function(){
		$('#mail_city').html($(this).text()+'<b></b>');
		$('#mail_city_con').hide();
	})
	//看了又看
	$('.pro_right ul').first().show();
	function lunPic(){
		var o_this=$('.pro_right');
		var next_btn=o_this.find('.next');
		var pre_btn=o_this.find('.pre');
		var o_ul=o_this.find('ul');
		var len=o_ul.length-1;
		var i=0;
		next_btn.click(function(){
			if(i<len){
				i++;
			}else if(i==len){
				i=0;
			}
			o_ul.eq(i).fadeIn(300).siblings().hide();
		})

		pre_btn.click(function(){
			if(i<len+1 && i>0){
				i--;
			}else if(i==0){
				i=len;
			}
			o_ul.eq(i).fadeIn(300).siblings().hide();
		})
		
	}
	lunPic();
})

function maskHeight(){
	var o_h=$(window).height();
	$('#mask').show().height(o_h);
}

$(function(){
	//举报
	$('#jiubao').click(function(){
		maskHeight();
		$('#report').show();
	})
	$('#report').on('click','.cancel',function(){
		$('#mask').hide();
		$('#report').hide();
	})
	$('#pop_box,#report,#cut_sus,#big_pic').on('click','.close_btn',function(){
		$('#mask').hide();
		$(this).parent().parent().hide();
	})
	$('#leixing b').bind('click',function(){
		$(this).addClass('cur');
		$(this).parent().siblings().find('b').removeClass('cur');
	})
	$('#report_area').keyup(function(){
		var o_val=$(this).val();
		if(o_val.length>100){
			$(this).val($(this).val().substring(0,100));
			$(this).next().find('i').text(100);
			return false;
		}else{
			$(this).next().find('i').text(o_val.length);
		}
	})

	//加入购物车
	$(function(){
		$('#pro_car').click(function(){
			var con='<h2><b class="close_btn"></b></h2><p class="t"><b id="right_icon"></b>已成功加入购物车！</p><p class="d"><a href="#" class="sure">去购物车结算</a><a href="#" class="go">继续购物</a></p>'
			maskHeight();
			$('#pop_box').show().html(con);
		})
	})
	//降价通知
	$('#pro_act .sale').click(function(){
		var con='<h2>降价通知<b class="close_btn"></b></h2><p class="t"><b id="right_icon"></b>降价通知预定成功</p><p class="e">如果此商品在90日内降价，我们会以邮件地形式通知您</p><p class="m"><a href="#" class="sure">确定</a></p>'
		maskHeight();
		$('#cut_sus').show();
		//$('#pop_box').show().html(con);
	})
	$('#pop_box').on('click','.sure',function(){
		$('#mask').hide();
		$('#pop_box').hide();
	})
	$('#email').blur(function(){
		var tis=$(this).parent().next();
		if($(this).val()==''|| isMail($(this).val())){
			tis.text('请输入正确的邮箱地址');
		}else{
			tis.text();
		}
	})
	//大图
	$('#pro_big_pic img,#glass').click(function(){
		maskHeight();
		$('#big_pic').show();
	})
	$('#pro_big_list ul li').hover(function(){
		bigPic($(this),'#pro_big_pic img');
	})
	$('#big_pic ul li').click(function(){
		bigPic($(this),'#big_pic0 img');
		var o_n=$(this).index()+1;
		$('#big_pic').find('.num i').text(o_n);
	})
	//商品详情
	$('.pro_infor_tit ul li').click(function(){
		var len=$(this).index();
		$(this).addClass('cur').siblings().removeClass('cur');
		$('.pro_infor_con').eq(len).show().siblings('.pro_infor_con').hide();
		$(this).append('<b></b>');
		$(this).siblings().find('b').remove();
	})
	//套餐
	$('#package_close').click(function(){
		$('#mask').hide();
		$('#package_box').hide();
	})
	$('.package_con a.buy_btn').click(function(){
		maskHeight();
		$('#package_box').show();
	})
	$('#package_more a').click(function(){
		$(this).parent().siblings('dl.h').show();
		$(this).parent().hide();
	})
	$('#pro_argum dd a,.cs a,.col a').click(function(){
		if($(this).hasClass('dis')){
			return false;
		}else{
			$(this).addClass('cur');
			$(this).siblings().removeClass('cur');
		}
	})
})
function proNum(){
	var max_num=Number($('#pro_kucun i').text());
	var inp_num=Number($('#pro_num').val());
	var add_btn=$('#pro_add');
	var sub_btn=$('#pro_sub');
	add_btn.click(function(){
		if(inp_num<max_num){
			inp_num++;
		}
		$('#pro_num').val(inp_num);
	})
	sub_btn.click(function(){
		if(inp_num>1){
			inp_num--;
		}
		$('#pro_num').val(inp_num);
	})
}
function redLine(){
	$('.pro_rate .fen').each(function(){
		$(this).siblings('.line').find('b').css('width',$(this).text());
	})
}
$(function(){
	$('#pro_num').keyup(function(){
		var o_val=$(this).val();
		if(o_val.length==1){
			$(this).val($(this).val().replace(/^[^1-9]$/g,''));
		}else{
			$(this).val($(this).val().replace(/\D/g,''));
		}
		proNum();
	})
	redLine();
	proNum();
})

$(function(){
	var $con=$('.pro_rate_pic0');
	var $ul=$('.pro_rate_pic0 ul');
	var $li=$ul.find('li');
	var $pre_btn=$con.find('span.pre_btn');
	var $next_btn=$con.find('span.next_btn');
	var len=$li.length;
	var i=0;
	$ul.width(60*$li.length);
	if(len<=14){
		$pre_btn.addClass('pre_btn0');
		$next_btn.addClass('next_btn0');
	}
	$next_btn.click(function(){
		if(i<len-14){
			i++;
			$ul.animate({'left':-i*60},150);
			$pre_btn.removeClass('pre_btn0');
			if(i==len-14){
				$next_btn.addClass('next_btn0');
			}
		}else{
			return false;
		}
	})
	$pre_btn.click(function(){
		if(i>0){
			i--;
			$ul.animate({'left':-i*60},150);
			$next_btn.removeClass('next_btn0');
			if(i==0){
				$pre_btn.addClass('pre_btn0');
			}
		}else{
			return false;
		}
	})
})
//评价
$(function(){
	$('.pro_rate_pic0 .con ul li').click(function(){
		var url=$(this).find('img').attr('src');
		$(this).addClass('cur').siblings().removeClass('cur');
		$('#pro_rate_big').find('img').attr('src',url);
	})
	$('.pro_pl_pic ul li').click(function(){
		var url=$(this).find('img').attr('src');
		var num=$(this).index();
		var max=$(this).parent().find('li').length;
		var obj=$(this).parents('.pro_pl_pic').next('.pro_pl_bigpic');
		$(this).addClass('cur').siblings().removeClass('cur');
		obj.slideDown();
		obj.find('img').attr('src',url);
		moveImg(obj.find('img'), 398, 398);
		if($(this).index()==0){
			obj.find('b.pre_btn').hide();
			obj.find('b.next_btn').show();
		}else if($(this).index()==max-1){
			obj.find('b.pre_btn').show();
			obj.find('b.next_btn').hide();
		}else{
			obj.find('b.pre_btn').show();
			obj.find('b.next_btn').show();
		}
	})
	$('.pro_pl_bigpic img').click(function(){
		$(this).parent().slideUp();
	})
	$('.pro_pl_bigpic b.pre_btn').click(function(){
		var obj=$(this).parent().prev();
		var cur=obj.find('li.cur').index()-1;
		var url=obj.find('li').eq(cur).find('img').attr('src');
		obj.find('li').eq(cur).addClass('cur').siblings().removeClass('cur');
		$(this).parent().find('img').attr('src',url);
		$(this).parent().find('b.next_btn').show();
		moveImg($(this).parent().find('img'), 398, 398);
		if(cur==0){
			$(this).hide();
		}else{
			$(this).show();
		}
		
	})
	$('.pro_pl_bigpic b.next_btn').click(function(){
		var obj=$(this).parent().prev();
		var cur=obj.find('li.cur').index()+1;
		var url=obj.find('li').eq(cur).find('img').attr('src');
		obj.find('li').eq(cur).addClass('cur').siblings().removeClass('cur');
		$(this).parent().find('img').attr('src',url);
		$(this).parent().find('b.pre_btn').show();
		moveImg($(this).parent().find('img'), 398, 398);
		if(cur==obj.find('li').length-1){
			$(this).hide();
		}else{
			$(this).show();
		}
	})
	
})


function moveImg(img,boxWidth,boxHeight){
	var tempImg=new Image();
	tempImg.src=img.attr('src');
	var imgWidth=tempImg.width;
	var imgHeight=tempImg.height;
	if((imgWidth/imgHeight)>= (boxWidth/boxHeight)){
             if(imgWidth>boxWidth){
                 img.width(boxWidth);
                 img.height((imgHeight*boxWidth)/imgWidth);
                 img.css("margin-top", (boxHeight-img.height())/2);
                 img.css('margin-left',0);
             }else{
                 img.width(imgWidth);
                 img.height(imgHeight);
                 img.css("margin-top", (boxHeight-img.height())/2);
                 img.css("margin-left", (boxWidth-img.width())/2);
             }
         }
         else{
             if(imgHeight>boxHeight){
                 img.height(boxHeight);
                 img.width((imgWidth*boxHeight)/imgHeight);
                 img.css("margin-left", (boxWidth-img.width())/2);
                 img.css('margin-top',0);
             }else{
                 img.width(imgWidth);
                 img.height(imgHeight);
                 img.css("margin-top", (boxHeight-img.height())/2);
                 img.css("margin-left", (boxWidth-img.width())/2);
             }
         } 
}
$(function() {  
     $('#img1').load(function() {  
         moveImg($(this), 508, 398);  
     });  
});

// 倒计时
$(function(){
	countDown("2016/07/02 14:42:00","#count");
});
function countDown(time,id){
	var day_elem = $(id).find('.day');
	var hour_elem = $(id).find('.hour');
	var minute_elem = $(id).find('.minute');
	var second_elem = $(id).find('.second');
	var end_time = new Date(time).getTime(),//月份是实际月份-1
	sys_second = (end_time-new Date().getTime())/1000;
	var timer = setInterval(function(){
		if (sys_second > 1) {
			sys_second -= 1;
			var day = Math.floor((sys_second / 3600) / 24);
			var hour = Math.floor((sys_second / 3600) % 24);
			var minute = Math.floor((sys_second / 60) % 60);
			var second = Math.floor(sys_second % 60);
			day_elem && $(day_elem).text(day);//计算天
			$(day_elem).text(day<10?"0"+day:day);
			$(hour_elem).text(hour<10?"0"+hour:hour);//计算小时
			$(minute_elem).text(minute<10?"0"+minute:minute);//计算分钟
			$(second_elem).text(second<10?"0"+second:second);//计算秒杀
			$('.seckill_btn').html('<input type="button" class="shop_start" value="立即购买" />');
			if(day!=0){
		
		     $("#day").show();
		     $("#dayh").show();
			 $("#clock").css("width","287");
			 $("#clock .clock_t").css("width","253");
			 $("#clock .clock_con").css("width","253");
		    }
		} else { 
			clearInterval(timer);
		    /*if(limit_num == limit_goods_num){
				
		        $('.seckill_btn').html('<input type="button" class="shop_over" value="活动已结束" />');
				} else{*/
			
			//$('.seckill_btn').html('<input type="button" class="shop_btn" value="立即购买" onclick="javascript:shopping();" />');
				//}
		}
	}, 1000);
	
	
}

$(function(){
	$('.pro_rate a').click(function(){
		var num=$(this).index();
		$(this).addClass('cur').siblings().removeClass('cur');
		$('.pl_con').eq(num).show().siblings('.pl_con').hide();
	})
})
