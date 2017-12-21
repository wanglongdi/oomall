//原产地
$(function(){
	$('#city_class_nav li').hover(function(){
		var len=$(this).index();
		$(this).find('.con').show();
			$(this).find('.jian').hide();
			$(this).find('.jian0').show();
		
	},function(){
		$(this).find('.con').hide();
		$(this).find('.jian').show();
		$(this).find('.jian0').hide();
	})
})

//轮播图
$(function(){
	var city_timer=setInterval(cityAuto,5000);
	var city_cur=0;
	$('#city_pic_con li').first().show();
	function cityAuto(){
       city_cur++;
       city_cur=(city_cur==4)?0:city_cur;
       $('#city_pic_con li').eq(city_cur).fadeIn(500).siblings().hide();
       $('#pic_icon li').eq(city_cur).addClass('cur').siblings().removeClass('cur');
	}
	$('#pic_icon li').hover(function(){
		clearInterval(city_timer);
		city_cur=$(this).index();
		$('#city_pic_con li').eq(city_cur).fadeIn(500).siblings().hide();
        $('#pic_icon li').eq(city_cur).addClass('cur').siblings().removeClass('cur');
	},function(){
       city_timer=setInterval(cityAuto,5000);
	})
})


// 切换效果
$(function(){
	$('.city_sheng').each(function(){
		var ul_con=$(this).find('.city_sheng_name .box ul');
		var li_con=ul_con.find('li');
		var li_len=li_con.length;
		li_con.eq(0).addClass("cur");
		ul_con.css('width',ul_w);
		if(li_len<8){
			var ul_w=90*li_len;
			$(this).find('.city_sheng_name').find('b').hide();
			ul_con.css('right','0px');			
		}else{
			ul_con.css('left','0px');
		}
		li_con.hover(function(){
			var tt=$(this).index();
			$(this).addClass('cur').siblings().removeClass('cur');
			$(this).parents('.city_sheng').find('.city_sheng_con0').find('dl').eq(tt).show().siblings().hide();
		})		
		var left = $(this).find('b.pre_btn');
		var right = $(this).find('b.next_btn');
		var lc = 0;
		var rc = li_len-7;
		left.click(function(){
			if (lc < 1) {
				// alert("已经是第一张图片"); 
				return;
			}
			lc=lc-7;
			rc=rc+7;		
			ul_con.stop().animate({left:'+=630px'}, 1000);			
		});

		right.click(function(){
			$(this).parent().find('.pre_btn').css('display','inline-block');
			if (rc < 1){
				// alert("已经是最后一张图片"); 
				return;
			}
			lc=lc+7;
			rc=rc-7;
			ul_con.stop().animate({left:'-=630px'}, 1000);
		});

	})
})


//侧边栏
$(function(){
	$('.side_nav').click(function(){
		var side_con=$('#city_side_con');
        if(side_con.is(':hidden')){
            side_con.show();
            $('#city_side').css('width','331px');
        }else{
        	side_con.hide();
            $('#city_side').css('width','117px');
        }
	})
	$('#city_side_con h2 b').click(function(){
		var side_con=$('#city_side_con');
        side_con.hide();
        $('#city_side').css('width','117px');
	})
	wheight();
	$(window).resize(function(){
		wheight();
	})
})

function wheight(){
	var wh=$(window).height();
	$('#city_side_con').css('height',wh);
	$('#city_side_car').css('height',wh);
}