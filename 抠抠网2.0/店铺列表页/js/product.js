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
		$('#cp_ems_con li').click(function(){
			$('#cp_ems span').html($(this).html()+'<b></b>');
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
		$('#mail_city').text($(this).text());
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
	$('#pro_big_list ul li').click(function(){
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
	})
})
