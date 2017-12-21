// 显示导航
$(function(){
	$('.appliance_nav0').click(function(){
		var con=$(this).find('span').text()
		if(con=='显示导航'){
			$('.appliance_nav').show();
			$('.appliance_nav_bg').show().css('opacity',0.8);
			$(this).find('span').text('隐藏导航');
			$(this).css('left','233px');
			$('.appliance_nav0_bg').css('left','220px');
		 }
		 if(con=='隐藏导航'){
			$('.appliance_nav').hide();
			$('.appliance_nav_bg').hide().css('opacity',1);
			$(this).find('span').text('显示导航');
			$(this).css('left','13px');
			$('.appliance_nav0_bg').css('left','0px');
		 }
		
		})
	$(window).resize(function(){
	   if($('.appliance_con').width()==1200){
		  $('.appliance_nav0').hide();
	      $('.appliance_nav0_bg').hide();
	      $('.appliance_nav').show();
	      $('.appliance_nav_bg').show().css('opacity',1);
		   }
	   if($('.appliance_con').width()==1000){
		  $('.appliance_nav0').show();
	      $('.appliance_nav0_bg').show();
	      $('.appliance_nav').hide();
	      $('.appliance_nav_bg').hide().css('opacity',1);
		   }
     });
	
	})
	
// 轮播图
$(function(){
	$('.appliance_pic_con li').first().show();
	var a_cur=0;
	function autoImg(){
		a_cur++;
		a_cur=(a_cur==4)?0:a_cur;
		$('.appliance_pic_con li').eq(a_cur).fadeIn(500).siblings().hide();
		$('.appliance_icon li').eq(a_cur).addClass('cur').siblings().removeClass('cur');
	 }
   var a_timer=setInterval(autoImg,5000);
   $('.appliance_icon li').hover(function(){
	   a_cur=$(this).index();
	   clearInterval(a_timer);
	   $('.appliance_pic_con li').eq(a_cur).fadeIn(500).siblings().hide();
	   $(this).addClass('cur').siblings().removeClass('cur');
	   
	   },function(){
		  a_timer=setInterval(autoImg,5000); 
		   
		   })
	
})


// 去线
$(function(){
	$('.appliance_hot ul li').first().css('border','0px');
	
})


// 大家电轮播图
$(function(){
	$('.appliance_cj').each(function(){
		var $ap_pre=$(this).find('.pre_btn');
		var $ap_next=$(this).find('.next_btn');
		var $ul=$(this).find('.appliance_cj_con ul');
		var wid=$ul.find('li').outerWidth(true);
		$ap_next.click(function(){
			$ul.animate({'margin-left':-wid},function(){
				$ul.find('li').eq(0).appendTo($ul);
                $ul.css({'margin-left':0});
				
				});
			})
			
		$ap_pre.click(function(){
			$ul.find('li:last').prependTo($ul);
            $ul.css({'margin-left':-wid});
            $ul.animate({'margin-left':0});
			})	
		
		})
	
})

// 手机轮播图
$(function(){
	$('.appliance_cj0').each(function(){
		var $ap_pre=$(this).find('.pre_btn');
		var $ap_next=$(this).find('.next_btn');
		var $ul=$(this).find('.appliance_cj0_con ul');
		var wid=$ul.find('li').outerWidth(true);
		$ap_next.click(function(){
			$ul.animate({'margin-left':-wid},function(){
				$ul.find('li').eq(0).appendTo($ul);
                $ul.css({'margin-left':0});
				
				});
			})
			
		$ap_pre.click(function(){
			$ul.find('li:last').prependTo($ul);
            $ul.css({'margin-left':-wid});
            $ul.animate({'margin-left':0});
			})	
		
		})
	
})

// 品牌旗舰店轮播图
$(function(){
	$('.appliance_pp').each(function(){
		var $ap_pre=$(this).find('.pre_btn');
		var $ap_next=$(this).find('.next_btn');
		var $ul=$(this).find('.appliance_pp_con ul');
		var wid=$ul.find('li').outerWidth(true);
		$ap_next.click(function(){
			$ul.animate({'margin-left':-wid},function(){
				$ul.find('li').eq(0).appendTo($ul);
                $ul.css({'margin-left':0});
				
				});
			})
			
		$ap_pre.click(function(){
			$ul.find('li:last').prependTo($ul);
            $ul.css({'margin-left':-wid});
            $ul.animate({'margin-left':0});
			})	
		
		})
	
})


// 品牌旗舰店
$(function(){
	$('.appliance_store ul li').hover(function(){
      $(this).find('.logo').animate({'bottom':'35px'},500);
	  $(this).find('.text').animate({'bottom':'15px'},500);
	  $(this).find('.bg').animate({'opacity':'0.7'},500);
   },function(){
	  $(this).find('.logo').animate({'bottom':'30px'},500);
	  $(this).find('.text').animate({'bottom':'10px'},500); 
	  $(this).find('.bg').animate({'opacity':'0.5'},500);
	   
	   })
	
})