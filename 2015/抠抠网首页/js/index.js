//header小播图
$(function(){
  var index=1;
  var dl=$('#header_pic dl');
  var text=$('#btn_con .text');
  var pre_btn=$('#btn_con .pre');
  var next_btn=$('#btn_con .next');
  var er_teimer=setInterval(autoPic,2000);
  
  function autoPic(){
	index++;
	index = (index==6)?1:index;
	dl.eq(index).show().siblings('dl').hide();  
	text.find('b').text(index);
  }
  
  function prePic(){
	if(index>1){
	  index--;
	   dl.eq(index).show().siblings('dl').hide();  
	   text.find('b').text(index); 
	   pre_btn.css('cursor','pointer');
	  }else{
		pre_btn.css('cursor','default');  
	 }
  }
  
  function nextPic(){
	if(index<5){
	   index++;
	   dl.eq(index).show().siblings('dl').hide();  
	   text.find('b').text(index); 
	   next_btn.css('cursor','pointer');
	  }else{
		next_btn.css('cursor','default');  
	 }
  }
  

  pre_btn.click(function(){
	 clearInterval(er_teimer);
	 prePic();
	 er_teimer=setInterval(autoPic,2000);
	 
  })
   next_btn.click(function(){
	 clearInterval(er_teimer);
	 nextPic();
	 er_teimer=setInterval(autoPic,2000);
	
   })	  
})


//所有商品分类
$(function(){
  $('#classify ul li').hover(function(){
	  $(this).find('.classify_con').show();
	},function(){
		$(this).find('.classify_con').hide();
	})
	
})


//轮播图
$(function(){
  var timer=setInterval(autoRun,5000);
  $('#bigpic0 li').first().show();
  $('#bigpic0_pic ul li').first().show();
  var cur=0;
  function autoRun(){
	cur++;
	cur = (cur==6)?0:cur;
	$('#bigpic0 li').eq(cur).fadeIn(500).siblings().hide();
	$('#bigpic0_pic ul li').eq(cur).fadeIn(500).siblings().hide();  
	$('#bigpic0_icon ul li').eq(cur).addClass('cur').siblings().removeClass('cur'); 
  }
  
  $('#bigpic0_icon ul li').mouseover(function(){
	 clearInterval(timer);
	 cur=$(this).index();
	 $('#bigpic0_icon ul li').eq(cur).addClass('cur').siblings().removeClass('cur');
	 $('#bigpic0 li').eq(cur).fadeIn(500).siblings().hide();
	 $('#bigpic0_pic ul li').eq(cur).fadeIn(500).siblings().hide(); 
   })
   $('#bigpic0_icon ul li').mouseout(function(){
	  timer=setInterval(autoRun,5000); 
	   })
})


//潮流新品
$(function(){
	$('.trend_tit ul li').hover(function(){
		$(this).addClass('cur').siblings().removeClass('cur');
		$('.trend_con').eq($(this).index()).show().siblings('.trend_con').hide();
		
		})
})

//热门品牌
$(function(){
	
	var wraper = $('.trend_hot_con0');
    var prev = $('.hot_pre');
    var next = $('.hot_next');
    var img =$('.trend_hot_con0 ul');
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


//楼层轮播
$(function(){
	$('.floor_left_pic').each(function(){
		var floor_pre=$(this).find('.pre_btn');
		var floor_next=$(this).find('.next_btn');
		var box=$(this).find('ul');
		var floor_len=box.find('li').length;
		var cur0=0;
		var floor_timer=setInterval(autoShow,5000);
		box.find('li').eq(0).show();
		
		floor_next.click(function(){
			clearInterval(autoShow);
			floorNext();
			})
		floor_pre.click(function(){
			clearInterval(autoShow);
			floorPre();
			})
		
		function autoShow(){
		   cur0++;
		   cur0 = (cur0==floor_len)?0:cur0;
		   box.find('li').eq(cur0).fadeIn(500).siblings().hide();
			
		 }
		 function floorPre(){
			cur0--; 
			if(cur0<0){
				cur0=floor_len-1;
				}
			box.find('li').eq(cur0).fadeIn(500).siblings().hide();
			
		  }
		  function floorNext(){
			cur0++; 
			cur0 = (cur0==floor_len)?0:cur0;
			box.find('li').eq(cur0).fadeIn(500).siblings().hide();
			
		  }
	   
	 })
	
})

//产品上移
$(function(){
	$('.floor_pic0 ul li').each(function(){
		  $(this).hover(function(){
			 $(this).find('.con').stop().animate({'margin-top':'-5px'},300)
		   },function(){
			  $(this).find('.con').stop().animate({'margin-top':'0px'},300) 
			   })
		})
		
	$('.floor_con_pic0 ul li').each(function(){
		  $(this).hover(function(){
			 $(this).find('.con').stop().animate({'margin-top':'-5px'},300)
		   },function(){
			  $(this).find('.con').stop().animate({'margin-top':'0px'},300) 
			   })
		})
		
	 $('.floor_pic .pic').each(function(){
		  $(this).hover(function(){
			 $(this).find('img').animate({'width':'390px','height':'350px','margin-top':'0px','margin-left':'0px'},300)
		   },function(){
			  $(this).find('img').animate({'width':'400px','height':'360px','margin-top':'-5px','margin-left':'-5px'},300) 
			   })
		})
		
	 $('.trend_new_pic0 .pic').each(function(){
		  $(this).hover(function(){
			 $(this).find('img').animate({'width':'400px','height':'360px','margin-top':'0px','margin-left':'0px'},300)
		   },function(){
			  $(this).find('img').animate({'width':'410px','height':'370px','margin-top':'-5px','margin-left':'-5px'},300) 
			   })
		})
	
	})
	
//返回顶部
$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>300){
			$('#side').show();
		 }else{
			$('#side').hide(); 
			 }
		})
	$('#side .gotop').click(function(){
		$('html,body').animate({scrollTop:0});
		})
	})

//动画
$(function(){
	function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        if (elemTop + 50 < docViewBottom) {
            return true
        } else {
            return false
        }
	 }

    var footTags=$('.foot-tag');

	$.each(footTags, function () {
        $(this).attr('init', 'false');
    });

	function ftAnimate(item, time) {
        if ($(item).attr('init') == 'false'&& isScrolledIntoView($(item))) {
            $(item).attr('init', 'true');
            setTimeout(function(){
                $(item).animate({'bottom': '0'}, 800, null);
            },time)
        }
		
    }
	
    function animateInit(){
		ftAnimate('.foot-tag1', 0);
        ftAnimate('.foot-tag2', 100);
        ftAnimate('.foot-tag3', 200);
        ftAnimate('.foot-tag4', 300);
        ftAnimate('.foot-tag5', 400);	
	 }

	
    $(window).scroll(function () {
        animateInit();
      });
	
})



$(function(){
  $('.phone').hover(function(){
	$(this).find('.phone_con').show();
	},function(){
	 $(this).find('.phone_con').hide();	
  })
  
  $('.erm').hover(function(){
	$(this).find('.erm_con').show();
	},function(){
	 $(this).find('.erm_con').hide();	
  })	
})



$(function(){
	winWidth();
	
	$(window).resize(function(){
	    winWidth();
	})
	
	function winWidth(){
	var width=parseInt($('.floor').eq(0).css('width'));
	var wh=parseInt($(window).width());
	var mwh=wh-width;
	
	if(mwh>0){
		var r=Math.floor(mwh/2)-50;
		//console.log(r);
		$('#side').css('right',r);
	}else{
		$('#side').hide();
		}
	
  }
})


