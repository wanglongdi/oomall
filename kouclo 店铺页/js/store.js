// 我的收藏
$(function(){
    $(".top_sc").hover(function(){
	   $(this).find(".top_sc0").show();
	   $(this).find(".mysc").addClass("white");	

    },function(){
	   $(this).find(".top_sc0").hide();	
	   $(this).find(".mysc").removeClass("white");	
		});
	
});




// 公告



$(document).ready(function(){ 
   var speed=30; 
   var $tab=$("#demo"); 
   var $tab1=$("#demo1"); 
   var $tab2=$("#demo2"); 
   $tab2.html($tab1.html()); 
   function Marquee(){ 
    if($tab2[0].offsetWidth-$tab[0].scrollLeft<=0) 
     $tab[0].scrollLeft-=$tab1[0].offsetWidth; 
   else{ 
    $tab[0].scrollLeft++; 
  } 
 } 
  var MyMar=setInterval(Marquee,speed);  
   $tab.hover(function(){ 
        clearInterval(MyMar); 
        },function(){ 
        MyMar=setInterval(Marquee,speed) 
   }) 
}) 



// 商品分类
$(function(){
	$('.sp_fl_text').on('click', function(){
		 var child =$(this).next('.sp_fl_con01');
		 if (child.is(':hidden')) {
            child.show('fast');
            $(this).find(' > i').addClass('icon_sp0').removeClass('icon_sp');
			$(this).children("a").css("color","#947E4E");
        } else {
            child.hide('fast');
            $(this).find(' > i').addClass('icon_sp').removeClass('icon_sp0');
			$(this).children("a").css("color","#000");
        }
        e.stopPropagation();
		
	});

  $('.sp_fl_text').mouseover(function(){
	  $(this).children("a").css("color","#947E4E");
	  }).mouseout(function(){
		  $(this).children("a").css("color","#000");
		  });
});




// Hot Sale
function setTab(name,cursel,n){
for(i=1;i<=n;i++){
var menu=document.getElementById(name+i);
var con=document.getElementById("con_"+name+"_"+i);
menu.className=i==cursel?"hover":"";
con.style.display=i==cursel?"block":"none";
};

}

// 所有分类
$(function(){
	$(".store_feilei").hover(function(){
		$(this).find(".store_flz").show();
	},function(){
		$(this).find(".store_flz").hide();
	});
	
	
});

$(function(){
	$("li.list").hover(function(){
         $(this).find(".store_flz00").show();
		 $(this).children().find("i").removeClass("icon_st");
		 $(this).addClass("store_sur");
	 },function(){
		 $(this).find(".store_flz00").hide();
		 $(this).children().find("i").addClass("icon_st");
		 $(this).removeClass("store_sur");
	     
	
	});
	
	
});

//最近浏览商品
$(function(){

	$li1 = $(".look_pass_nav ul li");
	$window1 = $(".look_pass_nav ul");
	$left1 = $(".pre_btn");
	$right1 = $(".next_btn");
	
	$window1.css("width", $li1.length*278);

	var lc1 = 0;
	var rc1 = $li1.length-4;
	
	$left1.click(function(){
		if (lc1 < 1) {
			return;
		}
		lc1--;
		rc1++;
		$window1.animate({left:'+=278px'}, 1000);
	});

	$right1.click(function(){
		if (rc1 < 1){
			return;
		}
		lc1++;
		rc1--;
		$window1.animate({left:'-=278px'}, 1000);
	});

})

//收藏本站

$(function(){
	$(".header_store_sc a").click(function(){
		$("#collect").toggle();
	});
	$("a.close").click(function(){
         $("#collect").hide();
     });	
	
});


//收藏本站

$(function(){
	$(".price").click(function(){

		
		if (!$(this).hasClass("priceup") && !$(this).hasClass("pricedown")) {
           
			$(this).addClass("priceup");
			$(this).children("a").attr("href","点击后按价格从低到高");
			$(this).children("a").attr("title","点击后按价格从高到低");
		
        } else if ($(this).hasClass("priceup")) {
           
			$(this).addClass("pricedown");
			$(this).removeClass("priceup");
			$(this).children("a").attr("href","点击后按价格从低到高");
			$(this).children("a").attr("title","点击后按价格从低到高");
			
        } else {
            $(this).removeClass("pricedown");
			$(this).children("a").attr("href","点击后按价格从低到高");
			$(this).children("a").attr("title","点击后按价格从低到高");
        }
	});
	
});

//搜索

$(function(){
	
	 var ur=$(".search_inp").val();
	
	 $(".search_btn").click(function(){
         document.myform.action ="http://www.kouclo-v4.com/search/index/0/all";
         document.myform.submit();
	 });
	 
	 $(".search_btn0").on('click',function(){
		
		
		 window.location.href=ur;
		//alert( ur )  //获取到需要的两个值
		
	});
	
});


$(function(){
	$(".app_down").hover(function(){
		$(".ewm").show();
		$(this).addClass("ewm_bg");
		
	 },function(){
		$(".ewm").hide();
		$(this).removeClass("ewm_bg");
		
	 });
	
});



// 大图特效
$(function(){
	$(".big_con ul li").hover(function(){
		$(this).find(".bigpic_con0").show();
	},function(){
		$(this).find(".bigpic_con0").hide();
	});
});



// 大图特效
function proThumb(id){
		var resListWrap = $("#"+id);
		var proThumbW = 64 ;
		//var thumbTmp = null;	//存放被选中的小图
		resListWrap.live("mouseover",function(event){
									var pre = false, next = false, thumb = false, proImg=false;
									var targetE = $(event.target);
									//console.log(targetE);
									thumb = targetE.parent().hasClass("proThumb-img");	//忽略了一个事实，有时候点击到两个图片的中间，点击发生在b上，后续补上
									pre = targetE.hasClass("bigLi_tSma_pre");
									next = targetE.hasClass("bigLi_tSma_next");
									proImg = targetE.parent().hasClass("proImg");
									if(pre){	
											moveThumb(targetE,"top")
										}
									if(next){
											moveThumb(targetE,"bottom")
										}
									if(thumb){	//小图状态
											targetE.parent().parent().find("b").removeClass("proThumb-selected");
											targetE.parent().addClass("proThumb-selected")
											thumbTmp = targetE.parent();
											var img = targetE.parents("li").find(".bigLi_tWrap img")[0];
											$(img).attr("src",targetE.attr("src"));
										}
																			  
								});		//resListWrap.live end
		
		//初始化缩略图列表状态
		function initThumb(){
			resListWrap.find(".tSma_proView_content").each(function(){
														var wrap = $(this).parent().parent();
														var len = $(this).children(".proThumb-img").length;	
														var itemW = $($(this).find(".proThumb-img")[0]).outerHeight();
														$(this).css("height",itemW*len);
														if(len>4){
															wrap.find(".js_tSma_arrow").css({"display":"block"});
															wrap.find(".bigLi_tSma_pre").addClass("pre_tSma_disable");
															} 
														 if(len<4){
															 wrap.find(".bigLi_tSma_pre").css({"display":"none"});
															 wrap.find(".bigLi_tSma_next").css({"display":"none"});
															 }	
														});
														
														
			}	//initThumb end
		initThumb();
		
		
		//点击按钮动作--参数ele-发生点击动作的按钮，dir为right/left，表示作用按钮
		function moveThumb(ele,dir){
				var proView = ele.parent().find(".tSma_proView_content");
				var proViewW = proView.height();
				var curLeft = parseInt(proView.css("top"));
				if(dir == "bottom"){	//点击右侧按钮
					if(ele.parent().find(".bigLi_tSma_pre").hasClass("pre_tSma_disable")){	//设置左侧按钮可用
							ele.parent().find(".bigLi_tSma_pre").removeClass("pre_tSma_disable");
						}
					if((proViewW-Math.abs(curLeft)) > proThumbW && curLeft%proThumbW == 0){
							move(proView,curLeft-proThumbW);
							if((proViewW-Math.abs(curLeft)) <= proThumbW*4){	//设置右侧按钮不可用
									ele.parent().find(".bigLi_tSma_next").addClass("next_tSma_disable");								
								}
							}
					}
				if(dir == "top"){
					if(ele.parent().find(".bigLi_tSma_next").hasClass("next_tSma_disable")){	//设置左侧按钮可用
							ele.parent().find(".bigLi_tSma_next").removeClass("next_tSma_disable");
						}
					if(curLeft < 0 && curLeft%proThumbW == 0){
						move(proView,curLeft+proThumbW);
						if(Math.abs(curLeft) <= proThumbW*1){
								ele.parent().find(".bigLi_tSma_pre").addClass("pre_tSma_disable");	//设置左侧不可用
							}
						}
					}
			}
		
		
		//移动函数
		var thumbTimer=null;
		 function move(ele,target){	//移动函数	ele为要移动的元素对象，该对象为jquery对象	 target为目标坐标
						  clearTimeout(thumbTimer);
						  target = parseInt(target);
						  var oleft = parseInt(ele.css("top"));
						  var speed = (target-oleft)/4;
						  speed = speed > 0 ? Math.ceil(speed):Math.floor(speed);
						  if(target !== oleft){
							ele.css("top",speed+oleft);
							thumbTimer = setTimeout(function(){move(ele,target)},50);
						  }
				 }	
	
	//proThumb end
	}

$(function(){
		   proThumb("js_seaLis_Big");
		   });



$(function(){
	window.z=100;
   $('.big_con ul li').each(function(){
   window.z--;
   $(this).css('z-index',window.z);
});
	
	});
	
	
	(function($){    
	$.fn.slideJ = function(options){        
		var defaults = {//默认属性
			width:$(this).width(),
			height:$(this).height(),
			leftBtn:".slideLeft",
			rightBtn:".slideRight",
			speed:200,
			time:4000,
			type:"opacity"
		}
		var options = $.extend(defaults,options);//参数合并
		
		var sildeElem = $(this),//滑动模块
			slideCl = sildeElem.find("li"),
			slideNavCl = $(options.nav).find("a"),
			total = slideCl.size(),//图片数量
			nowNum = 1,
			active = false;
		if(total<=1){return;}//数量小于等于1不做操作
		
		//整体CSS设置
		$(this).css({
			"position":"relative",
			"height":options.height,
			"width":options.width
		});
		
		
		//取消A标签虚线框
		var aHideFocus = options.nav+" a"+","+options.leftBtn+" a,"+options.rightBtn+" a,"+options.leftBtn+","+options.rightBtn;
		$(aHideFocus).attr("hideFocus","hideFocus");
		
		
		this.each(function(){//分发轮换效果
			switch(options.type){
				case "opacity":
					opacityAnimateJ(options);
				break;
				case "slide":
					slideAnimateJ(options);
				break;
				default:
				break;
			};
		});
		
		//------------淡入淡出----------------------
		function opacityAnimateJ(){
			$(sildeElem).find("ul").css({
				position:"relative",
				height:options.height,
				width:options.width,
				overflow:"hidden"
			});
			slideCl.css({
				position:"absolute"
			});
			
			slideNavCl.eq(0).addClass("selected");
			slideCl.css({opacity:0,"z-index":"0"});
			slideCl.eq(0).css({opacity:1,"z-index":"1"});
			var interval = setInterval(checkNum,options.time);
			slideNavCl.each(function(index){
				$(this).click(function(){
					if(active==true){
						return;
					}
					nowNum = index;
					checkNum();
					clearInterval(interval);
					interval = setInterval(checkNum,options.time);
				});					
			});
			$(options.rightBtn).click(function(){
				if(active==true){
					return;
				}
				clearInterval(interval);
				checkNum();
				interval = setInterval(checkNum,options.time);
			});
			$(options.leftBtn).click(function(){
				if(active==true){
					return;
				}
				clearInterval(interval);
				
				var nx = nowNum-2;
				var cx=0;
				if(nx==-1){
					nx = total-1;
					cx = 0;
				}else if(nx==-2){
					nx = total-2;
					cx = total-1;
				}else{
					cx=nx+1;
				}
				toggle_scroll(nx);
				nowNum = cx;
				
				interval = setInterval(checkNum,options.time);
			});
			
			function checkNum(){
				if(nowNum<total-1){
					toggle_scroll();
					nowNum++;
				}else{
					toggle_scroll();
					nowNum=0;
				}
			}
			function toggle_scroll(n){
				active = true;
				if(n!=null){
					nowNum = n;
				}
				slideCl.css({"z-index":"0"});
				
				sildeElem.find("li.selected").css({"z-index":1});
				
				slideCl.eq(nowNum).css({"z-index":"2",opacity:0});
				//slideCl.animate({opacity:0},options.speed);
				slideCl.eq(nowNum).animate({opacity:1},options.speed,function(){active = false});
				
				slideNavCl.removeClass("selected");
				slideNavCl.eq(nowNum).addClass("selected");
				
				slideCl.removeClass("selected");
				slideCl.eq(nowNum).addClass("selected");
				
				
			}
		}
		//------------左右滑动--------------------
		function slideAnimateJ(){
			
		}
	}  
})(jQuery);


