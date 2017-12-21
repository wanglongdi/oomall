// 交易时间

$(function (){
   $(".record_box_text0").each(function(){
		$(this).click(function(){
			var thisinput=$(this);
			var thisul=$(this).siblings(".record_list0")
			if(thisul.css("display")=="none"){
			    thisul.show();
			    thisul.hover(function(){},function(){thisul.hide();})
			    thisul.find("li").click(function(){thisinput.text($(this).text());thisul.hide();}).hover(function(){$(this).addClass("hover");},function(){$(this).removeClass("hover");});  
			}
			else{
			  thisul.hide();
			}
		})
   })
   
   $(".record_box_text").each(function(){
		$(this).click(function(){
			var thisinput=$(this);
			var thisul=$(this).siblings(".record_list")
			if(thisul.css("display")=="none"){
			    thisul.show();
			    thisul.hover(function(){},function(){thisul.hide();})
			    thisul.find("li").click(function(){thisinput.text($(this).text());thisul.hide();}).hover(function(){$(this).addClass("hover");},function(){$(this).removeClass("hover");});  
			}
			else{
			  thisul.hide();
			}
		})
   })
   
   $(".record_time_text").each(function(){
		$(this).click(function(){
			var thisinput=$(this);
			var thisul=$(this).siblings(".time_list")
			if(thisul.css("display")=="none"){
			    thisul.show();
			    thisul.hover(function(){},function(){thisul.hide();})
			    thisul.find("li").click(function(){thisinput.text($(this).text());thisul.hide();}).hover(function(){$(this).addClass("hover");},function(){$(this).removeClass("hover");});  
			}
			else{
			  thisul.hide();
			}
		})
   })			
})



$(function(){

		
	$("#record_list li").each(function(){
		$(this).click(function(){
			if($(this).hasClass("zdytime")){
				$("#record_box").addClass("timeb");
		        $("#record_box .record_box_con").addClass("timew");
		        $("#record_box .record_list").addClass("timew_text");
		        $(".zdy").show();
				}
			else{
				$("#record_box").removeClass("timeb");
		        $("#record_box .record_box_con").removeClass("timew");
		        $("#record_box .record_list").removeClass("timew_text");
		        $(".zdy").hide();
				}
		   
		})
		
		
		})
		
	
})


// 表格颜色
$(function(){
	$(".record_table").each(function(){
		$(this).find("tr:even").addClass("bg");
		})
})



//记录切换
$(function(){
	$(".record_status_title ul li").click(function(){
		$(this).addClass("cur").siblings().removeClass("cur");
		
		$(".record_status>div:eq("+$(this).index()+")").show().siblings().hide();
		
		});
	
	
	
});