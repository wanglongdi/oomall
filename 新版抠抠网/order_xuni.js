//倒计时
$(function(){
	var count=5;
    var timer=setInterval(function(){
	  if(count--==0){
		  clearInterval(timer);
		  $("#play").hide();
		  $(".btn").show();
		  }
		  else{
			  document.getElementById('play').innerHTML=count;
			  }
			  
			  
		},1000)
	
	
})
  
//弹框		
$(function(){
	$("#mask").css({
			"height":$(document).height()
           }).show();
		   
	$(".btn").click(function(){
         $("#pop_warn_bg").hide();
		 $("#pop_warn").hide();
		 $("#mask").hide();
     });	
	
});