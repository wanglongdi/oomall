//logo图片轮播
$(function(){
  $('.medical_xi_logo').each(function(){
	  var pre_btn=$(this).find('.pre_btn');
	  var next_btn=$(this).find('.next_btn');
	  var win=$(this).find('.logo_pic');
	  var li=$(this).find('.logo_pic li');
	  //win.css("width", li.length*200);
	  var cur = 0;
	  var cur0 = li.length-1;
	  if(cur==0){ 
		pre_btn.addClass('pre_btn0'); 
	  }
	  next_btn.click(function(){
		 if(cur0<1){
			return; 
			 }
		  cur0--;
		  cur++;
		  li.eq(cur).fadeIn(500).siblings().hide();
		  if(cur0==0){
			next_btn.addClass('next_btn0');  
		   }
		  if(cur>0){
			pre_btn.removeClass('pre_btn0');  
		   }
		 
	  })
	  pre_btn.click(function(){
		 if(cur<1){
			return; 
			 }
		  cur--;
		  cur0++;
		  li.eq(cur).fadeIn(500).siblings().hide();
		  if(cur0>0){
			next_btn.removeClass('next_btn0');  
		   }
		  if(cur==0){
			pre_btn.addClass('pre_btn0');  
		   } 
	  })
  })
  
})


//生活常备


$(function(){
	  
	var wraper = $('.medical_life').find('.medical_life_con');
    var prev = $('.medical_life').find('.pre_btn');
    var next = $('.medical_life').find('.next_btn');
    var img =$('.medical_life').find('.medical_life_con').find('ul');
    var w = img.find('li').outerWidth(true);
    next.click(function()
    {
    img.animate({'margin-left':-w},function()
    {
    img.find('li').eq(0).appendTo(img);
    img.css({'margin-left':0});
    });
    });
    prev.click(function()
    {
    img.find('li:last').prependTo(img);
    img.css({'margin-left':-w});
    img.animate({'margin-left':0});
    });
  
})

//banner
$(function(){
	var Index=0;
	$('.medical_pic li').first().show();
	
	function autoPic(){
	  Index++;
	  Index=(Index==4)?0:Index;
		$('.medical_pic li').eq(Index).fadeIn(500).siblings().hide();
		$('.banner_icon li').eq(Index).addClass('cur').siblings().removeClass('cur');
	}
	var timer = setInterval(autoPic,5000);//设立定时器
    
	 $('.banner_icon li').mouseover(function(){
        clearInterval(timer);
        Index = $(this).index();
        $('.medical_pic li').eq(Index).fadeIn(500).siblings().hide();
		$('.banner_icon li').eq(Index).addClass('cur').siblings().removeClass('cur');
    })
	$('.banner_icon li').mouseout(function(){
       timer = setInterval(autoPic,5000);//设立定时器
    })	
  
})

//隐藏导航
$(function(){
	$('#medical_nav').click(function(){
		var con=$(this).find('span').text()
	  if(con=='显示导航'){
		 $(this).css('left','233px');
	     $(this).find('span').text('隐藏导航');
	     $('#medical_nav_bg').css('left','220px');
	     $('#medical_kind').show();
	     $('#medical_kind_bg').show().css('opacity',0.8);
	   }
	   if(con=='隐藏导航'){
		 $(this).css('left','13px');
	     $(this).find('span').text('显示导航');
	     $('#medical_nav_bg').css('left','0px');
	     $('#medical_kind').hide();
	     $('#medical_kind_bg').hide().css('opacity',1);
	   }
	 
	})
	$(window).resize(function(){
	   if($('.medical_con').width()==1200){
		  $('#medical_nav').hide();
	      $('#medical_nav_bg').hide();
	      $('#medical_kind').show();
	      $('#medical_kind_bg').show().css('opacity',1);
		   }
	   if($('.medical_con').width()==1000){
		  $('#medical_nav').show();
	      $('#medical_nav_bg').show();
	      $('#medical_kind').hide();
	      $('#medical_kind_bg').hide().css('opacity',1);
		   }
     });
  
})