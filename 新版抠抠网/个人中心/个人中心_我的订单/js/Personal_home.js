// JavaScript Document

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










// 左侧导航
$(function() {
	
	$('.personal_nav ul li').click(function(){
		$(this).find('b').addClass('icon');
		$(this).find('a').addClass('bg');
		$(this).siblings().find('b').removeClass('icon');
		$(this).siblings().find('a').removeClass('bg');

	})
	
})

// 订单 

$(function(){
	$('table tr td.cz_con_td0 ul li').each(function(){
		var la=$('table tr td.cz_con_td0 ul li').last();
		 la.css('border-bottom','none');  // 最后一个li没有下边框线
	})

})







// 快时尚 切换页
$(function(){
	var c=0;
	$('.fashion .left').click(function(){
		c++;
		if(c==3){
			c=0;
		}		
		var left=c*-748;
		$('.fa .fashion_ul').animate({'left':left+'px'},200);
	})

	$('.fashion .right').click(function(){
		c--;
		if(c==-1){
			c=2;
		}
		var left=c*-748;
		$('.fa .fashion_ul').animate({'left':left+'px'},200);
	})



})