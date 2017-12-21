// 商品分类
$(function(){
	
	$('.store_fl_con0 ul li').find('span').on('click',function(){
		var oBox=$(this).next('ul.con');
		if(oBox.is(':hidden')){
			oBox.show();
			$(this).find('b').addClass('fl_icon0').removeClass('fl_icon');
		}else{
			oBox.hide();
			$(this).find('b').addClass('fl_icon').removeClass('fl_icon0');
		}
	})
	
	$('.store_fl_con0 ul li').find('ul.con li').on('click',function(){
		$(this).addClass('hover').siblings().removeClass('hover');
	})
	
})


// Hot Sale
$(function(){
	
	$('.store_sc_tit0 ul li').hover(function(){
		var i=$(this).index();
		$(this).addClass('cur').siblings().removeClass('cur');
		$('.store_sc_con').eq(i).show().siblings('.store_sc_con').hide();
	})
	
})

// Hot Sale
$(function(){
	
	$('.indexShow').hover(function(){
		
		$(this).find('.indexShowLeft').show();
		$(this).find('.indexShowRight').show();
	},function(){
		$(this).find('.indexShowLeft').hide();
		$(this).find('.indexShowRight').hide();
	})
	
})

// 筛选条件
$(function(){
	
	$('.sel_term_tit_con').find('a.hover').find('b').click(function(){
		$(this).parent('a.hover').remove();
	})
	$('.sel_term_tit_kong').click(function(){
		$('.sel_term_tit_con').find('a.hover').remove();
	})
	
   $('.attrs_rigFirst').find('a').click(function(){
		$(this).addClass('hover').siblings().removeClass('hover');
	})
		 
	$('.sel_term_con0 dd').find('.more_con').click(function(){
	     if($(this).find('.gd').text()=='更多'){
			$(this).siblings().find('.text_con').hide();
			$(this).siblings().find('.text_con0').show();
			$(this).find('b').addClass('more_bg0').removeClass('more_bg');
			$(this).find('.gd').text('收起');
				
		 }else{
			$(this).siblings().find('.text_con').show();
			$(this).siblings().find('.text_con0').hide();
			$(this).find('b').addClass('more_bg').removeClass('more_bg0');
			$(this).find('.gd').text('更多');
		 }		
	})

	
	$('.sel_term_more0').click(function(){
		if($(this).find('.msel').text()=='更多选项'){
		   $('.sel_term_con0').find('dl.hide').css('display','block');
		   $(this).find('b').addClass('more_icon0').removeClass('more_icon');
		   $(this).find('.msel').text('收起选项');
				
	    }else{
		   $('.sel_term_con0').find('dl.hide').css('display','none');
		   $(this).find('b').addClass('more_icon').removeClass('more_icon0');
		   $(this).find('.msel').text('更多选项');
		}
	})
})


// 价格
$(function(){
	
	$('.shop_sort ul li.d').find('.inp_txt').each(function(){
		 var thisVal=$(this).val();
	     if(thisVal!=''){
			$(this).parent('li').css('width','164px');
			$(this).siblings('span').show();
		 }else{
			$(this).parent('li').css('width','104px');
			$(this).siblings('span').hide();
		 }
		$(this).focus(function(){
			$(this).parent('li').css('width','164px');
			$(this).siblings('span').show();
		})
		$(this).blur(function(){
		   if(thisVal!=''){
			  $(this).parent('li').css('width','164px');
			  $(this).siblings('.tt').show();
		   }else{
			  $(this).parent('li').css('width','104px');
			  $(this).siblings('.tt').hide();
		   }
		})
	})
	
})

// 大图特效
$(function(){
	$(".bigpic ul li").hover(function(){
		$(this).find(".bigpic_con").show();
		$(this).css('z-index','999');
	},function(){
		$(this).find(".bigpic_con").hide();
		$(this).css('z-index','1');
	});
})


// 大图特效
function proThumb(id){
		var resListWrap = $("#"+id);
		var proThumbW = 73 ;
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
														if(len>3){
															wrap.find(".js_tSma_arrow").css({"display":"block"});
															wrap.find(".bigLi_tSma_pre").addClass("pre_tSma_disable");
															} 
														 if(len<3){
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
							if((proViewW-Math.abs(curLeft)) <= proThumbW*3){	//设置右侧按钮不可用
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
						if(Math.abs(curLeft) <= proThumbW*3){
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

// 小图特效
$(function(){
	$(".xiaopic ul li").hover(function(){
		$(this).addClass('l');
		$(this).css('z-index','999');
	},function(){
		$(this).removeClass('l');
		$(this).css('z-index','1');
	});
})

