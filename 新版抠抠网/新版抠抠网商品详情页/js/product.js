// 公告
$(function(){  
   var demo = document.getElementById("demo");
   var demo2 = document.getElementById("demo2");
   demo2.innerHTML=document.getElementById("demo1").innerHTML;
   
   function Marquee(){
     if(demo.scrollLeft-demo2.offsetWidth>=0){
     demo.scrollLeft-=demo1.offsetWidth;
	 
    }
    else{
       demo.scrollLeft++;
      }
   }
   var myvar=setInterval(Marquee,30);
   demo.onmouseout=function (){myvar=setInterval(Marquee,30);}
   demo.onmouseover=function(){clearInterval(myvar);}
});



// 商品图片放大
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
	
	$window1.css("width", $li1.length*72);

	var lc1 = 0;
	var rc1 = $li1.length-5;
	
	$left1.click(function(){
		if (lc1 < 1) {
			return;
		}
		lc1--;
		rc1++;
		$window1.animate({left:'+=72px'}, 1000);
	});

	$right1.click(function(){
		if (rc1 < 1){
			return;
		}
		lc1++;
		rc1--;
		$window1.animate({left:'-=72px'}, 1000);
	});

})


//数量加减
function add_sub0(addForm){
	var maxNum;
	$(addForm).find("input").blur(function(){
		var ZS = /^\d+$/
		var ASVal = $(this).val();
		var isnum = ASVal.match(ZS);
		maxNum = parseInt($('#goodsnum').text());
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
		add : $(addForm).find(".sel_add"),
		sub : $(addForm).find(".sel_sub")
	};
	$(btns.add).click(function(){
		 var ASVal = $(this).siblings("input[type=text]").val();
		 maxNum = $('#goodsnum').text();
		AddVal = parseInt(ASVal)+1;
		if(AddVal < maxNum){
			$(btns.sub).css('background-position','-199px -126px');
		}
		if(AddVal > maxNum){
			$(btns.add).css('background-position','-229px -159px');
			return;
		}
		$(this).siblings("input[type=text]").val(AddVal);

	})
	$(btns.sub).click(function(){
		var ASVal = $(this).siblings("input[type=text]").val();
		SubVal = parseInt(ASVal)-1;
		if(SubVal>1){
			$(btns.add).css('background-position','-229px -126px');
		}
		if(SubVal<1){
			$(btns.sub).css('background-position','-199px -159px');
			return;
		}
		$(this).siblings("input[type=text]").val(SubVal);

	})
	
}




//本店推荐搭配
$(function(){

	$('.groom_con_tit').click(function(){
		$(this).parent('.groom_con').hide();
		$('.groom_ss').show();
	})
	$('.groom_ss').click(function(){
		$('.groom_con').show();
		$(this).hide();
	})

})


// 本店推荐搭配轮播效果
$(function(){
	$('.groom_pic').each(function(){
		var _this = $(this)[0];
		var This = $(this);
		_this.c=0;
		function auto(){//自动轮播函数
		    _this.c++;
		    _this.c = (_this.c==3)?0:_this.c;
		    This.find('.groom_pic_con').eq(_this.c).fadeIn(500).siblings('.groom_pic_con').hide();//控制图片的显示隐藏
		    This.find('.groom_icon').find('li').eq(_this.c).addClass('cur').siblings('li').removeClass('cur');//控制页码的样式

	  	}
	  	_this.timer = setInterval(auto,5000);//设立定时器

	  	// 鼠标移入角标切换效果

	  	$(this).find('.groom_icon ul li').hover(function(){ 
	  		// alert(3)
			clearInterval(_this.timer);
			_this.c=$(this).index();
			This.find('.groom_pic_con').eq(_this.c).show().siblings('.groom_pic_con').hide();
			$(this).addClass('cur').siblings('li').removeClass('cur');
		},function(){
			 _this.timer = setInterval(auto,5000);
		})
		
	})
	
	
})

// 扫一扫，手机购买
$(function(){
	
	$('.product_erm').hover(function(){
		$(this).find('.product_erm_pic').show();
		
	},function(){
		$(this).find('.product_erm_pic').hide();
	})
	
})

//单选按钮
jQuery.fn.customInput0 = function(){
	return $(this).each(function(){	
		if($(this).is('[type=radio]')){
			var input = $(this);
			  
			// 使用输入的ID得到相关的标签
			var label = $('label[for='+input.attr('id')+']');
			
			// 包裹在一个div输入+标签
			input.add(label).wrapAll('<span class="custom-'+ input.attr('type') +'"></span>');


			//绑定自定义事件，触发它，绑定点击，焦点，模糊事件				
			input.bind('updateState', function(){
				input.is(':checked') ? label.addClass('checked') : label.removeClass('checked'); 
			})
			.trigger('updateState')
			.click(function(){ 
				$('input[name='+ $(this).attr('name') +']').trigger('updateState'); 

			})
			//.blur(function(){ label.removeClass('checked'); });
			
			
		}
	});
};


// 商品详情
$(function(){
	
	$('.product_xq_tit .tit a').click(function(){
		$(this).addClass('hover').siblings().removeClass('hover');
		$('.product_xq_con').find('.con:eq('+$(this).index()+')').show().siblings().hide();
		
		
	})
	
})

// 轮播图右侧图片
$(function(){
	
	$('#product_class_con ul li').hover(function(){
		$(this).find('.con').show();
		$(this).addClass('hover').siblings().removeClass('hover');
		
	},function(){
		$(this).find('.con').hide();
	})
	
})

$(function(){
	
	$('#product_class').hover(function(){
		$(this).find('h3').addClass('bg');
		$(this).find('b').addClass('class_icon0').removeClass('class_icon');
		$(this).find('#product_class_con').show();
		
	},function(){
		$(this).find('h3').removeClass('bg');
		$(this).find('b').removeClass('class_icon').removeClass('class_icon0');
		$(this).find('#product_class_con').hide();
	})
	
})

// 配送区域
$(function(){
	
	$('.address').hover(function(){
		$(this).find('.address_con').show();
		
	},function(){
		$(this).parent('dd').find('.address_con').hide();
	})
	
})

$(function(){
	
	$('.address_con ul li').hover(function(){
		$(this).find('.con').show();
		$(this).css('z-index','2');
		
	},function(){
		$(this).find('.con').hide();
		$(this).css('z-index','0');
	})
	
})

$(function(){
	
	$('.address_con ul.con li span').each(function(){
		$(this).click(function(){
		var b=$(this).text()
		$('.address').find('.to_adr').text(b);
		$('.address_con').hide();
		$.ajax({
			type:"POST",
            url:"Ajax.php",
            data:{id:$(this).attr('id')},
            success:function(data){
             }
			
			
			})
		
	  })
	})
	
})


// 关闭
$(function(){
	
	$('.close').click(function(){
		$(this).parent().parent('#shopcar_cg').hide();
		
	})
	$('.goshop').click(function(){
		$(this).parent().parent().parent('#shopcar_cg').hide();
		
	})
	
})

//浮框
$(function(){
	$(window).scroll(function(){
		var Top=$('.product_xq').offset().top;
		var Height=$('.product_xq_tit').height();
		
		if($(window).scrollTop()>Top+Height){
			$('.product_xq_tit').addClass('product_xq_fix');
			}
		else{
			 $('.product_xq_tit').removeClass('product_xq_fix');
			}
		
		
		});
	

});

