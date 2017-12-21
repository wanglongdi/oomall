//更多收起替换
$(function(){
	$('.more_btn').bind('click',function(){
		if($(this).text()=='更多'){
			$(this).parent('dd').find('.search_single').hide();
			$(this).parent('dd').find('.search_all').show();
			$(this).addClass('up_btn');
			$(this).text('收起');
		 }else{
			$(this).parent('dd').find('.search_single').show();
			$(this).parent('dd').find('.search_all').hide();
			$(this).removeClass('up_btn');
			$(this).text('更多'); 
		}
		})
	
	
})


//点击多选
$(function(){
	$('.more_sel').bind('click',function(){
		$(this).parent('dd').find('.search_more').show();
		$(this).parent('dd').find('.search_single').hide();
		$(this).parent('dd').find('.search_all').hide();
		$(this).parent('dd').find('.more_sel').hide();
		$(this).parent('dd').find('.more_btn').hide();
		
		})
	
	
})
//取消
$(function(){
	$('.quxiao').bind('click',function(){
		$(this).parents('dd').find('.search_more').hide();
		$(this).parents('dd').find('.search_single').show();
		$(this).parents('dd').find('.search_all').hide();
		$(this).parents('dd').find('.more_sel').show();
		$(this).parents('dd').find('.more_btn').show();
		$(this).parents('dd').find('.more_btn').text('更多');
		
		})

})

//点击英文字母
$(function(){
	$('.search_zimu').delegate("span","click",function(){ 
		var box=$(this).parents('.search_box').next().find('.search_more_con0');
		var pox=box.find('.con').eq($(this).index());
		box.animate({scrollTop:pox.position().top},200);
		})

})


//点击多选
$(function(){
	$('.sel_more a').bind("click",function(){ 
	   var icon='<b class="close_icon"></b>';
		if($(this).hasClass('border')){
			$(this).removeClass('border');
			$(this).find('b').remove();
		}else{
			$(this).addClass('border');
			$(this).append(icon);
		}
	})

})

//点击更多筛选
$(function(){
	$('.develop_con').live('click',function(){ 
	     var text=$(this).find('span').text();
		if(text=='更多选项'){
			$(this).find('b').addClass('dev_icon0').removeClass('dev_icon');
			$(this).find('span').text('收起');
			$(this).parents('#search_term').find('dl.hide').show();
			$(this).addClass('develop_con0');
		}
		if(text=='收起')
		{
			$(this).find('b').addClass('dev_icon').removeClass('dev_icon0');
			$(this).find('span').text('更多选项');
			$(this).parents('#search_term').find('dl.hide').hide();
			$(this).removeClass('develop_con0');
		}
	})

})

//点击多选确定
$(function(){

	$(".sure").click(function(event){
		var str = '';
		var ur = '';
		var ui = '';	
		ur=$(this).parent().prev('.attr_hidUl').attr('ur');
		ui=$(this).parent().prev('.attr_hidUl').attr('ui');	
		$(this).parent().prev('.attr_hidUl').find('a[class=border]').each(function(){
			str += $(this).attr('val')+',';
		})
		//alert(str);
		if(str == ''){
		  alert('至少选择一个品牌');
		}else{
		window.location.href=ur+str+ui;
		$(this).parents('dd').find('.search_more').hide();
		$(this).parents('dd').find('.search_single').show();
		$(this).parents('dd').find('.search_all').hide();
		$(this).parents('dd').find('.more_sel').show();
		$(this).parents('dd').find('.more_btn').show();
		$(this).parents('dd').find('.more_btn').text('更多');
        
		}			
			   
    });

})


//已所选的条件：删除
$(function(){
	$('#search_key .sel').live('click',function(){
    	$(this).remove();
	});
	
})



//发货地
$(function(){
	$('#sel_sort .js-address').hover(function(){
    	$(this).find('.adress_con').show();
	},function(){
		$(this).find('.adress_con').hide();
		
		});
	
})


//实现发货地JS效果 **
function sourceADD(){
	var oWrap = $(".js-address");
	oWrap.each(function(index, element) {
		var This = this;
       $(this).on('click',function(e){
			var target = e.target;
			if( target.nodeName == "A"){
				var lw = $(This).attr('lw');
				var ur = $(This).attr('ui');
				var loc = encodeURIComponent(target.innerHTML);
				var lo = lw+loc+ur;
				window.location.href = lo;
				$(This).find('.js-address_text').text( target.innerHTML );
			}
		}) 
    });

}

// 包邮，折扣加点击效果
jQuery.fn.customInput = function(){
	return $(this).each(function(){	
		if($(this).is('[type=checkbox]')){
			var input = $(this);
			
			// 使用输入的ID得到相关的标签
			var label = $('label[for='+input.attr('id')+']');
			
			// 包裹在一个div输入+标签
			input.add(label).wrapAll('<span class="custom-'+ input.attr('type') +'"></span>');
			//input.attr('checked',false);
			
			
			//绑定自定义事件，触发它，绑定点击，焦点，模糊事件				
			input.bind('updateState', function(){	
				input.is(':checked') ? label.addClass('checked') : label.removeClass('checked checkedHover checkedFocus'); 
			})
			.trigger('updateState')
			.click(function(){ 
				$('input[name='+ $(this).attr('name') +']').trigger('updateState'); 
			})
			.focus(function(){ 
				label.addClass('focus'); 
				if(input.is(':checked')){  $(this).addClass('checkedFocus'); } 
			})
			.blur(function(){ label.removeClass('focus checkedFocus checked'); });
		}
	});
};

//图片等比倒缩放且垂直居中
function imagezoom(new_w, new_h){
    var img = document.createElement('img');
    img.src = this.src;
    var src_w = img.width;
    var src_h = img.height;
    
    var zoom_w = 0, zoom_h = 0;
    if(src_w > new_w || src_h > new_h){
        var scale_w = new_w / src_w;
        var scale_h = new_h / src_h;
        var b = scale_w < scale_h;
            
        if(b){
            zoom_w = src_w * scale_w;
            zoom_h = src_h * scale_w;
        }else{
            zoom_w = src_w * scale_h;
            zoom_h = src_h * scale_h;
        }
    }else{
        zoom_w = src_w;
        zoom_h = src_h;
    }
        
    this.style.marginLeft = Math.abs(new_w-zoom_w)/2+'px';
    this.style.marginTop = Math.abs(new_h-zoom_h)/2+'px';
    
    this.width = zoom_w;
    this.height = zoom_h;
}



//小图
$(function(){
	$('.search_small ul li').hover(function(){
    	$(this).find('.con').addClass('hover');
		$(this).find('.search_small_con').show();
		$(this).css('z-index',900);
	},function(){
		$(this).find('.con').removeClass('hover');
		$(this).find('.search_small_con').hide();
		$(this).css('z-index',0);
		});
	
})


//大图
$(function(){
	$('.search_big_con .con').hover(function(){
    	$(this).find('.con0').addClass('hover');
		$(this).find('.search_big_con0').show();
		$(this).css('z-index',900);
	},function(){
		$(this).find('.con0').removeClass('hover');
		$(this).find('.search_big_con0').hide();
		$(this).css('z-index',0);
		});
	
})


$(function(){
    $('.search_big_con .con').each(function(){
		$li1 = $(this).find(".list ul li");
		if($li1.length<6){
			$(this).find(".pre_btn").hide();
			$(this).find(".next_btn").hide();
		}else{
			$(this).find(".pre_btn").show();
			$(this).find(".next_btn").show();
			$(this).find(".next_btn").addClass('next_btn0');
		}
		
		$window1 = $(this).find(".list ul");
	    $left1 = $(this).find(".pre_btn");
	    $right1 =$(this).find(".next_btn");
	    $window1.css("width", $li1.length*37);

	    var lc1 = 0;
	    var rc1 = $li1.length-5;
	
	    $left1.click(function(){
		  if (lc1 < 1) {
			return;
		   }
		   lc1--;
		   rc1++;
		   $(this).parent().find('.list ul').animate({left:'+=37px'}, 200);
		   if(lc1<1){
			 $(this).removeClass('pre_btn0'); 
			}else{
			 $(this).addClass('pre_btn0'); 	
			}
		  if(rc1<1){
			 $(this).parent().find('.next_btn').removeClass('next_btn0'); 
			}else{
			 $(this).parent().find('.next_btn').addClass('next_btn0'); 	
			}
	    });

	   $right1.click(function(){
		   if (rc1 < 1){
			return;
		    }
		    lc1++;
		    rc1--;
		    $(this).parent().find('.list ul').animate({left:'-=37px'}, 200);
			if(rc1<1){
			 $(this).removeClass('next_btn0'); 
			}else{
			 $(this).addClass('next_btn0'); 	
			}
			if(lc1<1){
			 $(this).parent().find('.pre_btn').removeClass('pre_btn0'); 
			}else{
			 $(this).parent().find('.pre_btn').addClass('pre_btn0'); 	
			}
	});


	   
	})
	
	
	
	
	
})


// 大图特效
function proThumb(id){
		var resListWrap = $("#"+id);
		//var thumbTmp = null;	//存放被选中的小图
		resListWrap.live("mouseover",function(event){
			var thumb = false;
			var targetE = $(event.target);
			//console.log(targetE);
			thumb = targetE.parents('li').hasClass("proThumb-img");	//忽略了一个事实，有时候点击到两个图片的中间，点击发生在b上，后续补上

			if(thumb){
				//小图状态
				targetE.parent().parent().find("li").removeClass("proThumb-selected");
				targetE.parent().addClass("proThumb-selected")
				var img = targetE.parents(".con").find(".search_big_pic img")[0];
				$(img).attr("src",targetE.attr("src"));
				
			}
																			  
	});
								
								
}

$(function(){
   proThumb("js_seaLis_Big");
});

//价格确定
$(function(){

	$('.price_inp').find('.price_inp0').each(function(){
		var thisVal=$(this).val();
		var btn=$('.price_inp').find('.price_sure');
		if(thisVal!=""){
          btn.show();
        }else{
          btn.hide();
        }
        //判断文本框的值是否为空，有值的情况就隐藏提示语，没有值就显示
		$(this).focus(function(){
		   btn.show();
	    }).blur(function(){
		  if($(this).val()!=""){
		    btn.show();
		  }else{
		    btn.hide();
			}
	  })	
  })
})

//价格确定
$(function(){

	$('.price_sel').find('.price_sel0').each(function(){
		var thisVal=$(this).val();
		var btn=$('.price_sel').find('.price_sure0');
		var sel=$('.price_sel').find('.price_sel_con');
		if(thisVal!=""){
          btn.show();
		  sel.addClass('price_sel01');
        }else{
          btn.hide();
		  sel.removeClass('price_sel01');
        }
        //判断文本框的值是否为空，有值的情况就隐藏提示语，没有值就显示
		$(this).focus(function(){
		   btn.show();
		   sel.addClass('price_sel01');
	    }).blur(function(){
		  if($(this).val()!=""){
		    btn.show();
			sel.addClass('price_sel01');
		  }else{
		    btn.hide();
			sel.removeClass('price_sel01');
			}
	  })	
  })
})



//筛选条件
$(function(){

	$(window).scroll(function(){	
		var Top=$('#sel_sort').offset().top;
		var Height=$('.sel_sort_con').height();
		if($(window).scrollTop()>Top+Height){	
			$('.sel_sort_con').addClass('sel_sort_fix');
		}else{
			$('.sel_sort_con').removeClass('sel_sort_fix');
		}
		
		})
})