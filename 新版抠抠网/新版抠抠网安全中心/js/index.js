 



// 潮流新品mouseover
$(function(){
	
	$('.active_tit ul li').hover(function(){
		if($(this).index()==0){
			$(this).addClass('cur').css('background','#e2c08f').siblings().removeClass('cur').css('background','#fff');
			$(".active_con>div:eq("+$(this).index()+")").show().siblings().hide();
		}
		if($(this).index()==1){
			$(this).addClass('cur').css('background','#e2988f').siblings().removeClass('cur').css('background','#fff');
			$(".active_con>div:eq("+$(this).index()+")").show().siblings().hide();
		}
		if($(this).index()==2){
			$(this).addClass('cur').css('background','#ff3f00').siblings().removeClass('cur').css('background','#fff');
			$(".active_con>div:eq("+$(this).index()+")").show().siblings().hide();
		}
		
		
	})
})

// 品牌轮播效果
$(function(){
	$('.brand').each(function(){
		var _this = $(this)[0];
		var This = $(this);
		_this.c=0;
		function auto(){//自动轮播函数
		    _this.c++;
		    _this.c = (_this.c==3)?0:_this.c;
		    This.find('.brand_con').eq(_this.c).fadeIn(500).siblings('.brand_con').hide();//控制图片的显示隐藏
		    This.find('.brand_icon').find('li').eq(_this.c).addClass('cur').siblings('li').removeClass('cur');//控制页码的样式

	  	}
	  	_this.timer = setInterval(auto,5000);//设立定时器

	  	// 鼠标移入角标切换效果

	  	$(this).find('.brand_icon ul li').hover(function(){ 
	  		// alert(3)
			clearInterval(_this.timer);
			_this.c=$(this).index();
			This.find('.brand_con').eq(_this.c).show().siblings('.brand_con').hide();
			$(this).addClass('cur').siblings('li').removeClass('cur');
		},function(){
			 _this.timer = setInterval(auto,5000);
		})
		
	})
	
	
})

// 产品分类

$(function(){
	$('#classify_con ul li').each(function(index){
		$(this).mouseover(function(){
		    var con_h=$(this).find('.con').height();
			var this_h=$(this).height()*(index+1); 
			var top_h=this_h+con_h;
			//alert(this_h+con_h);
			if(top_h<=474){
				 $(this).addClass('hover');
		         $(this).find('.con').show().css('top','0px');
				
			}else{
				$(this).addClass('hover');
		        $(this).find('.con').show().css('bottom','0px');
				
				}
		  
		})
		$(this).mouseleave(function(){
			$(this).removeClass('hover');
		    $(this).find('.con').hide();
		})
		
	})
	
	
})


// 大图轮播区域开始

$(function(){
   var timer = setInterval(autoRun,5000);//设立定时器
   $('.pics_box li').first().show();
   $('#bigpic_pic0 ul').first().show();
   var cur = 0;
  function autoRun(){//自动轮播函数
    cur++;
    cur = (cur==5)?0:cur;
	$('.pics_box li').eq(cur).fadeIn(500).siblings().hide();//控制图片的显示隐藏
    $('.bigpic_icon ul li').eq(cur).addClass('cur').siblings().removeClass('cur');//控制页码的样式
    $('#bigpic_pic0 ul').eq(cur).fadeIn(500).siblings().hide();

    
  }
  $('.bigpic_icon ul li').mouseover(function(){
    clearInterval(timer)
    cur = $(this).index();
    $('.pics_box li').eq(cur).fadeIn(500).siblings().hide();//控制图片的显示隐藏
    $('.bigpic_icon ul li').eq(cur).addClass('cur').siblings().removeClass('cur');//控制页码的样式
	$('#bigpic_pic0 ul').eq(cur).fadeIn(500).siblings().hide();
  })
  $('.bigpic_icon ul li').mouseout(function(){
    timer = setInterval(autoRun,5000);//设立定时器
  })
})




// 轮播图右侧图片
$(function(){
	
	$('#bigpic_pic0 ul li').hover(function(){
		$(this).find('p').show();
		
	},function(){
		$(this).find('p').hide();
	})
	
})

// 楼层左边广告图
$(function(){
	
	$('.floor_conm ul li').hover(function(){
		$(this).find('p').show();
		
	},function(){
		$(this).find('p').hide();
	})
	
})

// 我的抠抠
$(function(){
	
	$('.top_my').hover(function(){
		$(this).find('.top_my_text').show();
		$(this).find('b').removeClass('top_my_icon0').addClass('top_my_icon');
		
	},function(){
		$(this).find('.top_my_text').hide();
		$(this).find('b').removeClass('top_my_icon').addClass('top_my_icon0');
	})
	
	$('.top_fav').hover(function(){
		$(this).find('.top_fav_text').show();
		$(this).find('b').removeClass('top_fav_icon0').addClass('top_fav_icon');
		
	},function(){
		$(this).find('.top_fav_text').hide();
		$(this).find('b').removeClass('top_fav_icon').addClass('top_fav_icon0');
	})
	
	
	$('.top_phone').hover(function(){
		$(this).siblings('.ewm').show();
		
	},function(){
		$(this).siblings('.ewm').hide();
	})
})


// 搜索
$(function(){
	
	$('.search_key').mouseover(function(){
		$(this).find('.keyword').show();
		$(this).find('b').removeClass('search_icon0').addClass('search_icon');
		
	})
	$('.search_key').mouseout(function(){
		$(this).find('.keyword').hide();
		$(this).find('b').removeClass('search_icon').addClass('search_icon0');
		
	})
	$('.keyword').click(function(){
		if($(this).find('.tt').text()=='店铺'){
			$(this).find('.tt').text('商品');
			$(this).siblings('.text').text('店铺');
			$(this).hide();
		}else{
			$(this).find('.tt').text('店铺');
			$(this).siblings('.text').text('商品');
			$(this).hide();
		}
	})
	 
	/**/
	
})







//数量加减
function add_sub(addForm,maxNum){
	$(addForm).find("input").blur(function(){
		var ZS = /^\d+$/
		var ASVal = $(this).val();
		var isnum = ASVal.match(ZS);
		if(isnum == null){
			alert("请输入有效数字");
			$(this).val('1');
		}
		
		if(parseInt(isnum) > maxNum){
			alert("您输入的数字 "+isnum+" 不能大于 " + maxNum);
			$(this).val(maxNum);
		}
	})
	var btns = {
		add : $(addForm).find(".add"),
		sub : $(addForm).find(".sub")
	};
	$(btns.add).click(function(){
		 var ASVal = $(this).siblings("input[type=text]").val();
		AddVal = parseInt(ASVal)+1;
		if(AddVal > maxNum){
			$(this).addClass("add_dis");
			return;
		}
		$(this).siblings("input[type=text]").val(AddVal);
		Allnumber();
		setTotal();
	})
	$(btns.sub).click(function(){
		var ASVal = $(this).siblings("input[type=text]").val();
		SubVal = parseInt(ASVal)-1;
		if(SubVal<1){
			$(this).addClass("sub_dis");
			return;
		}
		$(this).siblings("input[type=text]").val(SubVal);
		Allnumber();
		setTotal();
	})
	
}






//删除
$(function(){
	
	$('.shopcar_close').click(function(){
		$(this).parent('li').remove();
		Allnumber();
		setTotal();
	})
	
	
})

//删除
$(function(){
   $('.del').click(function(){
	  $('.shopcar_cp').find('input[type=checkbox]:checked').each(function(){																  
		$(this).parents('li').remove();	
		Allnumber();
		setTotal();												  														  
	  })
   })

})

//复选框
jQuery.fn.customInput = function(){
	return $(this).each(function(){	
		if($(this).is('[type=checkbox]')){
			var input = $(this);
			  
			// 使用输入的ID得到相关的标签
			var label = $('label[for='+input.attr('id')+']');
			
			// 包裹在一个div输入+标签
			input.add(label).wrapAll('<span class="custom-'+ input.attr('type') +'"></span>');
			input.attr('checked',true);

			//绑定自定义事件，触发它，绑定点击，焦点，模糊事件				
			input.bind('updateState', function(){
				input.is(':checked') ? label.addClass('checked') : label.removeClass('checked'); 
			})
			.trigger('updateState')
			.click(function(){ 
				$('input[name='+ $(this).attr('name') +']').trigger('updateState'); 
				Allnumber();
				setTotal();
			})
			//.blur(function(){ label.removeClass('checked'); });
			
			
		}
	});
};





// 购物车
$(function(){
	
	$('.shopcar').hover(function(){
		$(this).find('.shopcar_box').css('display','block');
		$(this).find('.shopcar_con').addClass('shopcar_bg');
		$(this).find('.shopcar_sj').addClass('shopcar_sj0').removeClass('shopcar_sj');
		
	},function(){
		$(this).find('.shopcar_box').css('display','none');
		$(this).find('.shopcar_con').removeClass('shopcar_bg');
		$(this).find('.shopcar_sj0').addClass('shopcar_sj').removeClass('shopcar_sj0');
	})
	
})


$(function(){
	
	$('.spcar').hover(function(){
		$(this).find('.shopcar_box').css('display','block');
		$(this).find('.shopcar_con').addClass('shopcar_bg');
		$(this).find('.shopcar_sj').addClass('shopcar_sj0').removeClass('shopcar_sj');
		
	},function(){
		$(this).find('.shopcar_box').css('display','none');
		$(this).find('.shopcar_con').removeClass('shopcar_bg');
		$(this).find('.shopcar_sj0').addClass('shopcar_sj').removeClass('shopcar_sj0');
	})
	
})

//全选
checkAll= function(caller, container){
		if($(caller).is(':checked')){
			// Find the label corresponding to each checkbox and click it
			$(container).find('input[type=checkbox]:not(:checked)').each(function(){
				$('label[for="'+$(this).attr('id')+'"]').trigger('click');
				$(this).prop('checked','checked');
				/*if($.browser.msie){
					$(this).attr('checked','checked');
				}else{
					$(this).trigger('click');
				};*/
			});
			
		}else{
			$(container).find('input[type=checkbox]:checked').each(function(){
				$('label[for="'+$(this).attr('id')+'"]').trigger('click');
				$(this).prop('checked',false);
				/*if($.browser.msie){
					$(this).attr('checked','');
				}else{
					$(this).trigger('click');
				};*/
			});
		};
		Allnumber();
		setTotal();
	};
	
//总价
function setTotal(){
	var i=0;
	
	$('.shopcar_cp').find('input[type=checkbox]:checked').each(function(){	
	       var price=$(this).parents('li').find('.price').text();													  
		   var n=$(this).parents('li').find('.num_inp').val();
		   i=i+parseInt(n)*parseFloat(price);
	})
	i=i.toFixed(2);
	$('.total_price').text(i);
	
}

//总数
function Allnumber(){
	var i=0;
	
	$('.shopcar_cp').find('input[type=checkbox]:checked').each(function(){	
	       															  
		   var n=$(this).parents('li').find('.num_inp').val();
		   i=i+parseInt(n);
	})
	$('.shopcar_tt0').text(i);
	
	
}

//浮框
$(function(){
	$(window).scroll(function(){
		
		if($(window).scrollTop()>100){
			$("#header").find('h1').hide();
			$("#header").find('.header_bg').show();
			$("#header").addClass('headerfixed');
			$("#header").find('#search').addClass('search_m').css('margin-top','20px');
			$("#header").find('.shopcar').css('margin-top','24px');;
			}
		else{
			$("#header").find('h1').show();
			$("#header").find('.header_bg').hide();
			$("#header").removeClass('headerfixed');
			$("#header").find('#search').removeClass('search_m').css('margin-top','38px');
			$("#header").find('.shopcar').css('margin-top','42px');;
			}
		
		
		});
	

});


