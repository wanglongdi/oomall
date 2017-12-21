// nav
$(function(){
	 $('nav ul li').hover(function(){
		 $(this).find('.cir').animate({opacity:0.8},400);
		 $(this).find('.cir0').animate({opacity:0.6},900);
		 $(this).find('.cir1').animate({opacity:0.2},1500);
		 $(this).siblings().find('.cir').stop(true,false).animate({opacity:0},450);
		 $(this).siblings().find('.cir0').stop(true,false).animate({opacity:0},300);
		 $(this).siblings().find('.cir1').stop(true,false).animate({opacity:0},150);
		
	  },function(){
		 $(this).find('.cir').animate({opacity:0},450);
		 $(this).find('.cir0').animate({opacity:0},300);
		 $(this).find('.cir1').animate({opacity:0},150);
		  
		  })
	
})

//翻页	 	  
$(function () {
    
	//屏蔽空格翻页
	document.onkeydown = function(event){ 
	  var e = event || window.event; 
	  var k = e.keyCode || e.which; 
	  if(k == 32){return false;} 
	};
	
	
	
	
	
	//初始化参数
	var $intScreen = $('.page');
	var index = 0 , length = $intScreen.size();
	var $wraper = $('#wrapper');
	$wraper.css({'position':'absolute' , 'top':'0'});	
	var param = null;
	var inAnimate = false;
	var direction = false;    //设置鼠标滚动向方
	var h = $(window).height();
	
	$(window).resize(function(){
	   h = $(window).height();
	   height();
	   $('#main').height(h);
	   $('#wrapper').height(h*length+366);
     });
	 
	
	 
	 
	 function height(){
	   for(i=0;i<$('.page').length;i++){
	     $('.page')[i].style.height = h+'px';
	   }
     }

	
	
	//判断滚轮方向
	function wheel(event){
	    var delta = 0;
	    if (!event) event = window.event;
	    if (event.ctrlKey){return false;};  //ctrl 的缩放事件  搞不明白问什么 会无效  不过还好 不会影响到布局
	    if (event.wheelDelta) {
	        delta = event.wheelDelta/120; 
	        if (window.opera) delta = -delta;
	    } else if (event.detail) {
	        delta = -event.detail/3;
	    }
	    if (delta)
	        handle(delta);
	}; 
	if (window.addEventListener)
	window.addEventListener('DOMMouseScroll', wheel, false);
	window.onmousewheel = document.onmousewheel = wheel;
	
	
	//键盘上下按键
    $(document).keydown(function(event){
    	//alert(event.which);
		switch(event.which){
			case 33:handle(1); break;   //上
			case 34:handle(-1); break;	//下
			case 37:handle(1); break;   //上
			case 39:handle(-1); break;	//下
			case 38:handle(1); break;   //上
			case 40:handle(-1); break;	//下
		}
	});
	//滚动方向控制
	function handle(delta) {		
		//if($('#Js-pop-body').size()){return false};
	    if(delta <0){//向下滚动
		    
			if(index != length && !inAnimate){	//只能在动画结束后 并且index在可视区域内 才执行 index++
				index ++;
				direction = true;
				if(index==length){
				  animatePage0(index);
				}else{
	    		  animatePage(index);	//页面开始滚动 此时要传进去一个参数 以便于侧边栏能够根据不同的index 改变选中的index
				}
			};
			
			
	    }else{	//向上滚动 
		 
			if(index > 0 && !inAnimate){
				index --;
				direction = false;
	    		if(index==length){
				  animatePage0(index);
				}else{
	    		  animatePage(index);	//页面开始滚动 此时要传进去一个参数 以便于侧边栏能够根据不同的index 改变选中的index
				}
			};	
		
	    };	
	};
	//自定义页面滚动效果
	var animatePage = function(index ){
		//var h=$(window).height();
		if (inAnimate) return;	//当处在动画过程中 跳出执行
		inAnimate = true;
		offset = -1 * index;
		param = {'top':offset+'00%'};	//设置main要向上移动的距离（offset倍的页面高度）
		
		//判断浏览器是否支持触屏
		
		$wraper.animate(param,800, function(){inAnimate = false;});	//页面滚动动画
		$intScreen.removeClass('JS-animation');
		$intScreen.eq(index).addClass('JS-animation');	
	};
	
		//自定义页面滚动效果
	var animatePage0 = function(index){
		//var h=$(window).height();
		if (inAnimate) return;	//当处在动画过程中 跳出执行
		inAnimate = true;
	
		var num=366/h;
		num=num.toFixed(2)*100;
		offset = -1 * (index-1)*100-num;
		param = {'top':offset+'%'};
		$wraper.animate(param,500, function(){inAnimate = false;});	//页面滚动动画
	};
	
	
	
	$('.action').click(function(){
		animatePage(1);
	})
	
	var navcon=function(obj){
		$(obj).find('li').bind('click',function(){
			var index=$(obj).find('li').index(this);
			animatePage(index);
			})
		}
	navcon('nav');
	
	
	
	
	
});



$(function(){
   $('.about_pic_con').hover(function(){
	   $(this).find('.about_pic_text').animate({left:'80px',opacity:'1'},500);
	   $(this).find('.pic0').show();
	   $(this).find('.pic').hide();
	   $(this).find('.pic0').css('border','#7e6af4 1px solid');
	},function(){
		$(this).find('.about_pic_text').animate({left:'0px',opacity:'0'},500);
		$(this).find('.pic').show();
	    $(this).find('.pic0').hide();
		//$(this).find('img').css('border','#e0e0e0 1px solid');
		})
})


//成功案例
$(function(){
	$('.eg_con ul li').hover(function(){
		$(this).find('.eye').animate({opacity:1,top:'58px'},300);
		$(this).find('.xin').animate({opacity:1,top:'122px'},300);
		$(this).find('.bg').animate({opacity:0.7},150);
		
		},function(){
			$(this).find('.eye').animate({opacity:0,top:'0px'},300);
		    $(this).find('.xin').animate({opacity:0,top:'215px'},300);
		    $(this).find('.bg').animate({opacity:0},150);
			
			})
})

// 服务范围
$(function(){
	 $('.serve_con ul li').hover(function(){
		 $(this).find('.media').stop(true,false).animate({width:'387px',height:'344px',left:'-54px',top:'-54px'},150).addClass('sel');
		 $(this).find('.text').stop(true,false).animate({opacity:1},150);
		 $(this).find('.sel_bg').stop(true,false).animate({opacity:0.4},150);
		 $(this).siblings().find('.media').animate({width:'275px',height:'220px'},150).removeClass('sel');
		 $(this).siblings().stop(true,false).find('.text').animate({opacity:0},150);
		 $(this).siblings().stop(true,false).find('.sel_bg').animate({opacity:0},150);
		 $(this).addClass('z1');
		 $(this).siblings().removeClass('z1');
	  },function(){
		  $(this).find('.text').stop(true,false).animate({opacity:0},150);
		  $(this).find('.sel_bg').stop(true,false).animate({opacity:0},150);
		  $(this).removeClass('z1');
		  $(this).find('.media').stop(true,false).animate({width:'275px',height:'220px'},150).removeClass('sel');
		  
		  })
	
})

//关闭

$(function(){
   $('#close-container').click(function(){
	   $('#wrapper0').hide();
	})

	$('.eye').each(function(i){
		$(this).click(function(){
		  $('#wrapper0').animate({top:'0px'},500);
	      $('#wrapper0').show();
	      $('#content').height($(window).height());
		  $('#wrapper0').find('#wrpic').eq(i).show().siblings().hide();
			
			})

        var pre_btn=$('#content-prev');
        var next_btn=$('#content-next');
        var li= $('#wrapper0').find('#wrpic').eq(i).find('li');
        var cur = 0;
        var cur0 = li.length-1;
	    next_btn.click(function(){
		  
		 if(cur0<1){
			return; 
		  }
		  cur0--;
		  cur++;
		  li.eq(cur).fadeIn(500).siblings().hide();
		  
	  })
	  pre_btn.click(function(){
		 if(cur<1){
			return; 
			 }
		  cur--;
		  cur0++;
		  li.eq(cur).fadeIn(500).siblings().hide();
	  })
		
  })
	
})


$(function(){

	var Bool=false;
	var Scro=$("#scroll_bd");
	var Scrp=$("#p");
	var Scrobd=$("#wrpic");
	var Scroul=$("#wrpic li");
	var Scrp_Height =Scrp.outerHeight()/2;
	var Num2=Scro.outerHeight()-Scrp.outerHeight();
	var offsetX=0;
	var offsetY=0;
	Scrp.mousedown(function(e){  
		Bool=true;
	});
	$(document).mouseup(function(){
		Bool=false;
	});
	$(document).mousemove(function(e){
		if(Bool){
			var Num1= e.clientY - Scro.position().top;
			var y=Num1 - Scrp_Height;
			if(y<=1){
				Scrll(0);
				//Scrp.css("top",1);
			}else if(y>=Num2){
				//Scrp.css("top",Num2);
				Scrll(Num2);
			}else{
				Scrll(y);
			}
		}
	});
	function Scrll(y){
		//Scrp.css("top",y);
		Scroul.css("margin-top",-(y/(Scro.outerHeight()-Scrp.outerHeight()))*(Scroul.outerHeight()-Scrobd.height()));
	}
	if(document.getElementById("content").addEventListener) 
	document.getElementById("content").addEventListener('DOMMouseScroll',wheel,true);
	document.getElementById("content").onmousewheel=wheel;
	var Distance=Num2*0.1;
	function wheel(e){
		var evt = e || window.event;
		var wheelDelta = evt.wheelDelta || evt.detail;
		if(wheelDelta == -120 || wheelDelta == 3){
			var Distances=Scrp.position().top+Distance;
			if(Distances>=Num2){
				//Scrp.css("top",Num2);
				Scrll(Num2);
			}else{
				Scrll(Distances);
			}
			return false;
		}else if (wheelDelta == 120 || wheelDelta == -3){
			var Distances=Scrp.position().top-Distance;
			if(Distances<=1){
				Scrll(0);
				//Scrp.css("top",1);
			}else{
				Scrll(Distances);
			}
			return false;
		}   
	}
});