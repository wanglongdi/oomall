// 头部广告区域开始
$(function(){
	$('#top_ad .close').click(function(){
		// $('#top_ad').hide(1000);
		 $('#top_ad').animate({'width':'1200px','height':'0px'}).hide(500);

	})
})
// 头部广告区域结束

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

// 头部 微信区域 加移入移出事件 结束



// 活动预告
$(function(){
	$(".activity_tit_con ul li").hover(function(){
		$(this).addClass("cur").siblings().removeClass("cur");
		$(".activity_con>ul li:eq("+$(this).index()+")").addClass("cur").siblings().removeClass("cur");
		
		});
	
	$(".activity_con ul li").hover(function(){
		$(this).addClass("cur").siblings().removeClass("cur");
		$(".activity_tit_con>ul li:eq("+$(this).index()+")").addClass("cur").siblings().removeClass("cur");
		
		});
	
});




// 商品评价

$(function(){
	$(".review_title ul li").click(function(){
		$(this).addClass("cur").siblings().removeClass("cur");
		$(".review_con>div:eq("+$(this).index()+")").show().siblings().hide();
		
		});
	
	
	
});


// 倒计时








// 抢购失败
$(function(){
	$("#fail .close").click(function(){
		$("#fail").hide();
		$("#mask").hide();
		
		});

});


// 登录
$(function(){
	$("#login_con .close").click(function(){
		$("#login").hide();
		$("#mask").hide();
		
		});

});


/*****
/**函数作用：商品详情页面商品展示
/**参数说明：
*/


$(function(){
	
	preview();	

})


function preview(){
	var viewWrap = $("#imagezoom-wrap");
	var viewImg = viewWrap.find("img");	//显示图片
	var thumbWrap = $("#js_thumbList");
	var	thumbList = thumbWrap.find(".list li");
	var viewZoom = $("#preview_imgZoom");	//放大后的大图容器
	var tmpThumb = null;	//存储当前选中的缩略图
	var cover = viewWrap.find(".zoomCover");
					 
	//初始化
	function init(){
			$(thumbList[0]).addClass("hover");
			tmpThumb = $(thumbList[0]);
			thumbWrap.find(".thumbList-control").addClass("disabled");
		}
	init();
	
	//鼠标经过缩略图列表效果
	function thumbHover(e){
			var target = $(e.target); 
			if(!target.hasClass("list") && e.target.nodeName.toLowerCase() == "img"){
				tmpThumb.removeClass("hover");
				target.parent().addClass("hover")
				tmpThumb = target.parent();
				//更换大图
				var imgSrc = target.attr("src");
				var imgsrc1 = imgSrc.replace("small_","mid_");
				if(imgSrc == imgsrc1)
				{
					imgsrc1 = imgSrc.replace("s_","m_");
				}
				imgSrc = imgsrc1;
				var url =imgSrc.substr(0,imgSrc.lastIndexOf("/")) + imgSrc.substr(imgSrc.lastIndexOf("/"));	//地址转换规则根据实际需求需要改动
				viewImg.attr("src",url);
				var imgsrc2 = imgSrc.replace("small_","big_");
				if(imgSrc == imgsrc2)
				{
					imgsrc2 = imgSrc.replace("s_","b_");
				}
				imgSrc = imgsrc2;
				//预加载放大图片
				var bigImgUrl = imgSrc.substr(0,imgSrc.lastIndexOf("/")) + imgSrc.substr(imgSrc.lastIndexOf("/"));	//地址转换规则根据实际需求需要改动
				var oImg = document.createElement("img");
				oImg.src = bigImgUrl;
				//alert(bigImgUrl);
				}
		
		}
		
	//遮罩层鼠标跟随
	var viewWrapX = parseInt(viewWrap.offset().left), viewWrapY = parseInt(viewWrap.offset().top);
	var viewWrapW = parseInt(viewWrap.outerWidth()), viewWrapH = parseInt(viewWrap.outerHeight());
	var coverW = cover.outerWidth(),coverH = cover.outerHeight();
	var viewZoomImg = viewZoom.find("img");
	var zoomImgW , zoomImgH ;
	function coverFollow(e){
		
			var ox = e.pageX, oy = e.pageY;
			var coverP_x = ox-viewWrapX-parseInt(coverW/2);
			var coverP_y = oy-viewWrapY-parseInt(coverH/2);
			if(coverP_x < 0){
				coverP_x = 0;
			}else if((coverP_x+coverW) > viewWrapW){
				coverP_x = 	viewWrapW-coverW;
			}
			if(coverP_y < 0){
				coverP_y = 0;
			}else if((coverP_y+coverH) > viewWrapH){
				coverP_y = viewWrapH-coverW;
				}
			cover.css({left:coverP_x,top:coverP_y});
			//设置大图位置移动
			//console.log(-((coverP_x/viewWrapW).toFixed(2)*zoomImgW));
			viewZoomImg.css({"left":-((coverP_x/viewWrapW).toFixed(2)*zoomImgW),"top":-((coverP_y/viewWrapH).toFixed(2)*zoomImgH)});
			
		}
		
	//缩略图的鼠标经过事件绑定
	thumbWrap.live({
				   mouseover:function(e){
						thumbHover(e);
					   }
				   });
	viewWrap.live({
				  mouseenter:function(){
					   cover.show();
					   viewZoom.show();
					   $(this).find(".icon_fd").hide(); 
					   var oimg = $(this).find("img");
					   var imgurl = oimg.attr("src");
					   
					   var imgsrc1 = imgurl.replace("small_","big_");
						if(imgurl == imgsrc1)
						{
							imgsrc1 = imgurl.replace("m_","b_");
						}
						imgurl = imgsrc1;
					   var url =imgurl.substr(0,imgurl.lastIndexOf("/")) + imgurl.substr(imgurl.lastIndexOf("/"));
					   viewZoomImg.attr("src",url);
					   //alert(viewZoomImg);
					   zoomImgW = viewZoomImg.outerWidth();
					   zoomImgH = viewZoomImg.outerHeight();
					    if(zoomImgW <415 || zoomImgH < 415){
						   		viewZoom.css({"display":"none"});
								cover.hide();
						   }else{
					   			//设置高宽
					  			 viewZoom.css({"width":400,"height":400,"background":"#fff"});
						   }
					   //viewZoom.css({"width":zoomImgW/2,"height":zoomImgH/2,"background":"#fff"});
					  },
				  mouseleave:function(){
						cover.hide();
						viewZoom.hide();
						$(this).find(".icon_fd").show();
					  },
				 mousemove:function(e){
						coverFollow(e);
					 }	   
				  });
				 
				 

}



$(function(){

	$li1 = $(".thumbList_items .list ul li");
	$window1 = $(".thumbList_items .list ul");
	$left1 = $(".pre_btn");
	$right1 = $(".next_btn");
	
	$window1.css("width", $li1.length*71);

	var lc1 = 0;
	var rc1 = $li1.length-5;
	
	$left1.click(function(){
		if (lc1 < 1) {
			return;
		}
		lc1--;
		rc1++;
		$window1.animate({left:'+=71px'}, 1000);
	});

	$right1.click(function(){
		if (rc1 < 1){
			return;
		}
		lc1++;
		rc1--;
		$window1.animate({left:'-=71px'}, 1000);
	});

})



// 登录
/*$(function(){
	$(".shop_btn").click(function(){
		
		if(!$(".pd_color a").hasClass("okIco")||!$(".size a").hasClass("okIco")){
			alert("请选择商品的颜色或尺码");  
			}

		});

});*/


// 登录按钮事件
$(function(){
    $('.denglu_btn').mouseenter(function(){
        $(this).addClass('btns');
    })
    $('.denglu_btn').mouseleave(function(){
        $(this).removeClass('btns');
    })


   //js表单验证
        $('.form').submit(function(){
            //判断用户名
            
            if( $("#username").val() == '' || $("#username").val()=='邮箱/用户名/手机号' && $('#pwd').val() == ''){
                 // alert('用户名不能为空！！');
                 $('.p_button_01').show();
                 $('.p_button_02').show();
                 $('#username').addClass('border');
                 $('#pwd').addClass('border');
                return false;
            }

            if($("#username").val() == '' || $("#username").val()=='邮箱/用户名/手机号' ){
                 $('.p_button_01').show();
                 $('.p_button_02').hide();
                 $('#username').addClass('border');
                 $('#pwd').removeClass('border');
                    return false;
            }else{
                 $('.p_button_01').hide();
                 $('.input_text').removeClass('border');
                
            }

            //判断密码
            if($('#pwd').val() == '' ){
                //alert('密码不能为空！！');
                $('.p_button_02').show();
                $('.p_button_01').hide();
                $('#username').removeClass('border');
                 $('#pwd').addClass('border');
                return false;
            }else{
                $('.p_button_02').hide();
                $('#username').removeClass('border');
                 $('#pwd').removeClass('border');
            }

            //判断验证码
            if($('#code').val() == ''){9
                //alert('请输入验证码！');
                $('.p_button_06').show();
                
                return false;
            }
        })

})


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



/*$(function(){
	
		$("#mask").css({
			"height":$(document).height()
           }).show();
});*/