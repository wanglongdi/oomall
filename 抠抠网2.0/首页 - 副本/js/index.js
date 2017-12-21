//轮播图
$(function(){
	var cur=0;
	var $pic=$('#bigpic_con li');
	var $icon=$('#bigpic_icon li');
	$pic.first().show();
	var timer=setInterval(picRun,5000);
	function picRun(){
       cur++;
       cur=cur==$pic.length?0:cur;
       $pic.eq(cur).fadeIn(500).siblings().hide();
       $icon.eq(cur).addClass('cur').siblings().removeClass('cur');
	}
	$icon.hover(function(){
		clearInterval(timer);
		var len=$(this).index();
		cur=len;
		$pic.eq(cur).fadeIn(500).siblings().hide();
        $(this).addClass('cur').siblings().removeClass('cur');
	},function(){
		timer=setInterval(picRun,5000);
	})
})

//轮播图0
$(function(){
	var cur=0;
	var $pic=$('#index_abroad_con ul');
	var $icon=$('#index_abroad_icon span');
	$pic.first().show();
	var timer0=setInterval(picRun,5000);
	function picRun(){
       cur++;
       cur=cur==$pic.length?0:cur;
       $pic.eq(cur).fadeIn(500).siblings().hide();
       $icon.eq(cur).addClass('cur').siblings().removeClass('cur');
	}
	$icon.hover(function(){
		clearInterval(timer0);
		var len=$(this).index();
		cur=len;
		$pic.eq(cur).fadeIn(500).siblings().hide();
        $(this).addClass('cur').siblings().removeClass('cur');
	},function(){
		timer0=setInterval(picRun,5000);
	})
})

//搜索
$(function(){
	$(window).scroll(function(){
		var h=$(window).height();
		if($(this).scrollTop()>=h){
			$('#fix_search').show();
			$('#fix_search_con').show();
		}else{
			$('#fix_search').hide();
			$('#fix_search_con').hide();
		}
	})
})

// 倒计时
$(function(){
	countDown("2016/03/27 24:00:00","#index_kk_time");
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
			$(hour_elem).text(hour<10?"0"+hour:hour);//计算小时
			$(minute_elem).text(minute<10?"0"+minute:minute);//计算分钟
			$(second_elem).text(second<10?"0"+second:second);//计算秒杀
		} else { 
			clearInterval(timer);
		}
	}, 1000);
}