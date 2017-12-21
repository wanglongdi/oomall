// 秒杀图片自动展开收缩

$(function(){
		 $("#seckill_big").slideDown("slow");
		 $(".open_text").find("span").html("收缩");
		 $(".open_text").find("i").removeClass("open_pic").addClass("back_pic");
	});
/*function displayimg(){
		 $("#seckill_big").slideUp(1000,function(){
			 $("#seckill_small").slideDown(1000);
			 $(".open_text").find("span").html("展开");
			 $(".open_text").find("i").removeClass("back_pic").addClass("open_pic");
			 });
	};*/
	
function displayimg(){
		 $("#seckill_big").animate({height:"500"},function(){
			  $("#seckill_big").hide();
			 $("#seckill_small").show();
			 $(".open_text").find("span").html("展开");
			 $(".open_text").find("i").removeClass("back_pic").addClass("open_pic");
			 
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
 






