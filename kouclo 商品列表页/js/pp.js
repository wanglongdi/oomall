// JavaScript Document
// 头部 微信区域 加移入移出事件 开始
$(function(){
	$('#weixin').mouseover(function(){
		$(this).find('.weixin_hide').show();
		$(this).find('.weixin').addClass('cur');
	})
	$('#weixin').mouseout(function(){
		$(this).find('.weixin_hide').hide();
		$(this).find('.weixin').removeClass('cur');
	})
})



// 所有产品分类 加移入移出事件 开始
$(function(){
	$('#manu_out .manu .left').mouseover(function(){
		$(this).parent().find('.left_box').show();

	})
	$('#manu_out .manu .left').mouseout(function(){
		$(this).parent().find('.left_box').hide();

	})

})




// 所有产品分类《竖导航二级菜单》加移入移出事件 开始
$(function(){
	$('#fenlei .list').mouseover(function(){
		$(this).find('.lis_hide').show();
		$(this).children().find('.lis_a').removeClass('a_img'); // a标签的背景小三角隐藏
		$(this).addClass('cur'); // 加cur属性（背景色，下边框）
		$(this).children().find('.xiaotu.yi').css('background','0');
		$(this).children().find('.i_tu').addClass('i_tu2');
	})
	$('#fenlei .list').mouseout(function(){
		$(this).find('.lis_hide').hide();
		$(this).removeClass('cur');

		$(this).find('.lis').addClass('cur2');

		$(this).children().find('.lis_a').addClass('a_img');
	})

})

// 默认排序
$(document).ready(function(){
  $(".flip").mouseover(function(){
    $(this).next("div").show( );
  });
  $(".select_sort").mouseleave(function(){
    $(".sort_con").hide( );
  });
});


// 发货地
$(document).ready(function(){
  $(".select_place").mouseover(function(){
    $(this).find(".select_city").show( );
  });
  $(".select_place").mouseleave(function(){
   $(this).find(".select_city").hide( );
  });
});

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
				//$(This).find('b[class=seaBot_b]').html( target.innerHTML );
			}
		}) 
    });

}

//搜索品牌
function searchbr(){
	var brandname = $(".seaTop");
	$('.seaTop').find('input[type=button]').on('click',function(sear){
		var This = this;
		var brand = '';
		var ur = '';
		var ui = '';
		brand = $(This).prev().val();
		if(brand != ''){
			$.ajax({
				type:'POST',
				url:'/search/fobrand',
				data:'datearr='+brand,
				success:function(data, sear)
				{
					alert(data);
				}
			});
		}else{
			return false;
		}
		
	})
}




// 筛选条件
$(function () {

        $(".show").bind("click", function () {

            if ($(this).next("#Direction").is(".sx")) {

                $(this).next("#Direction").removeClass("sx").addClass("sq");
				$(this).parent().prev().children(".con01").hide();
				$(this).parent().prev().children(".con03").hide();
				$(this).parent().prev().children(".con0").show();
                $(this).html("收起");     

            } else {

                $(this).next("#Direction").removeClass("sq").addClass("sx");
				$(this).parent().prev().children(".con01").show();
				$(this).parent().prev().children(".con03").hide();
				$(this).parent().prev().children(".con0").hide();
                $(this).html("更多");

            };

        });
		
		$(".dx").bind("click", function () {
             $(this).parent().hide();
             $(this).parent().prev().children(".con01").hide();
			 $(this).parent().prev().children(".con0").hide();
			 $(this).parent().prev().children(".con03").show();
        });
		
		$(".cancel").bind("click", function () {
             $(this).parent().parent().hide();
             $(this).parent().parent().prev(".con0").hide();
			 $(this).parent().parent().siblings(".con01").show();
             $(this).parent().parent().parent().next(".else").show();
        });
		
		
		$(".choose dd .con03 ul").find("li").live('click',function(){		//多选选中效果***
		if($(this).hasClass('hover')){
			
			$(this).attr('class','');
			
		}else{
			$(this).attr('class','hover');
			
		}
		
	});
	
	$(".sure").click(function(event){
	  
	 
		var str = '';
		var ur = '';
		var ui = '';
				
		ur = $(this).closest('.attrs_rigFirst').find('ul').attr('ur');
		ui = $(this).closest('.attrs_rigFirst').find('ul').attr('ui');
				
		$(".attr_hidUl").find('li[class=hover]').each(function(){
			str+=$(this).find('a').html()+',';
		})
		if(str == ''){
		  alert('至少选择一个品牌');
		}else{
		window.location.href=ur+str+ui;
		$(this).parent().hide();
        $(this).parent().parent(".con0").hide();
		$(this).parent().parent().prev(".con01").show();
        $(this).parent().parent().parent().next(".else").show();	
		}
		
			
			
    
    });
	
	
	

    });  
	
	
	




//多选框

/*$(function($){
	$.fn.hcheckbox=function(options){
		$(':checkbox+label',this).each(function(){
			$(this).addClass('checkbox');
            if($(this).prev().is(':disabled')==false){
                if($(this).prev().is(':checked'))
				    $(this).addClass("checked");
            }else{
                $(this).addClass('disabled');
            }
		}).click(function(event){
				if(!$(this).prev().is(':checked')){
				    $(this).addClass("checked");
                    $(this).prev()[0].checked = true;
                }
                else{
                    $(this).removeClass('checked');			
                    $(this).prev()[0].checked = false;
                }
                event.stopPropagation();
			}
		).prev().hide();
	}

   
}); */




jQuery.fn.customInput = function(){
	return $(this).each(function(){	
		if($(this).is('[type=checkbox]')){
			var input = $(this);
			
			// 使用输入的ID得到相关的标签
			var label = $('label[for='+input.attr('id')+']');
			
			// 包裹在一个div输入+标签
			input.add(label).wrapAll('<span class="custom-'+ input.attr('type') +'"></span>');
			
			
			
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

// 价格
$(document).ready(function(){
	

 $("#focus .input_txt").each(function(){
     var thisVal=$(this).val();
     //判断文本框的值是否为空，有值的情况就隐藏提示语，没有值就显示
     if(thisVal!=""){
       $(this).siblings("span").show();
	   $(".select_price0").addClass("select_price00");
      }else{
       $(this).siblings("span").hide();
	   $(".select_price0").removeClass("select_price00");
      }
     //聚焦型输入框验证 
     $(this).focus(function(){
       $(this).siblings("span").show();
	   $(".select_price0").addClass("select_price00");
      }).blur(function(){
        var val=$(this).val();
        if(val!=""){
         $(this).siblings("span").show();
		 $(".select_price0").addClass("select_price00");
        }else{
         $(this).siblings("span").hide();
		 $(".select_price0").removeClass("select_price00");
        } 
      });
    })
 
  
  
  
  
});

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



//大图鼠标滑过
$(function(){
	$(".bigpic_con ul li").hover(function(){
		$(this).find(".bigpic_con0").show();
	},function(){
		$(this).find(".bigpic_con0").hide();
	});
});


// 大图特效
function proThumb(id){
		var resListWrap = $("#"+id);
		//var thumbTmp = null;	//存放被选中的小图
		resListWrap.live("mouseover",function(event){
									var pre = false, next = false, thumb = false, proImg=false;
									var targetE = $(event.target);
									//console.log(targetE);
									thumb = targetE.parent().hasClass("proThumb-img");	//忽略了一个事实，有时候点击到两个图片的中间，点击发生在b上，后续补上

									if(thumb){	//小图状态
									alert(thumb)
											targetE.parent().parent().find("b").removeClass("proThumb-selected");
											targetE.parent().addClass("proThumb-selected")
											var img = targetE.parents("li").find(".bigLi_tWrap img")[0];
											$(img).attr("src",targetE.attr("src"));
										}
																			  
								});		//resListWrap.live end
		
		
		
		
	
	}

$(function(){
		   proThumb("js_seaLis_Big");
		   });



$(function(){
	window.z=100;
   $('.bigpic_con ul li').each(function(){
   window.z--;
   $(this).css('z-index',window.z);
});
	
	});
	
	
	
