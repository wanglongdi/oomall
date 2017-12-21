// 秒杀图片自动展开收缩

$(function(){
		 $("#seckill_big").slideDown("slow");
	});
/*function displayimg(){
		 $("#seckill_big").slideUp(1000,function(){
			 $("#seckill_small").slideDown(1000);
			 
			 });
	};*/
	
 function displayimg(){
		 $("#seckill_big").animate({height:"90"},function(){
			  $("#seckill_big").hide();
			 $("#seckill_small").show();
			 
			 });
	};
$(function(){setTimeout("displayimg()",5000); });


// 秒杀图片手动展开收缩
$(function(){
	$(".open_text").click(function(){
	  if($("#seckill_small").is(":hidden")){
		   $(this).find("i").removeClass("back_pic").addClass("open_pic"); 
		   $(this).find("span").html("展开");
		   $("#seckill_big").slideUp(1000,function(){
			 $("#seckill_small").slideDown(1000);
			 
			 });
		  
		}else{
			$(this).find("i").removeClass("open_pic").addClass("back_pic"); 
			$(this).find("span").html("收缩");
			$("#seckill_big").slideDown("slow");
			$("#seckill_small").hide();
		}
				
   });

});
 
// 倒计时
$(function(){
	countDown("2016/03/27 12:00:00","#clock");
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





