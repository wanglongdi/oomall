// 选颜色
/*$(function(){
	$(".pd_color a").click(function(){
		if( $(this).attr('class') =='dd_none'){
				return false;
			}
			
			$(this).addClass("okIco").siblings().removeClass("okIco");
		
		});

});



$(function(){
	$(".size a").click(function(){
		if( $(this).attr('class') =='dd_none'){
				return false;
			}
			
			$(this).addClass("okIco").siblings().removeClass("okIco");
		
		});

});
*/


//收藏该商品

$(function(){
	$(".product_sc a").click(function(){
		$("#collect0").toggle();
		$("#mask").css({
			"height":$(document).height()
           }).show();
		   
		var This = this;   
		
		var isid = this.id;
		var goods_id = '7269';
		var store_id = '372';
		$.ajax({url:'http://www.kouclo.com/item/ajax_collect',
			    cache:false,
				type:'post',
				data:{key: isid, key1: goods_id, key2: store_id},
				success: function(msg){
									  if ( msg == 1){
												
											$(This).next().children().find("i").addClass("no").removeClass("yes");
											$(This).next().children().text("已收藏过此商品");
										}
										else if( msg == 2)
										{
										   alert('请登录后再点击收藏，谢谢！！！');
										}
									}
								});
		   
		   
	});
	$("a.close").click(function(){
         $("#collect0").hide();
		 $("#mask").hide();
     });	
	
});


//数量加减
function add_sub(addForm){
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
		add : $(addForm).find(".add"),
		sub : $(addForm).find(".sub")
	};
	btns.add.live("click",function(){
		var ASVal = $(this).siblings("input[type=text]").val();
		AddVal = parseInt(ASVal)+1;
		maxNum = $('#goodsnum').text();
		if(AddVal > maxNum){
			return;
		}
		$(this).siblings("input[type=text]").val(AddVal);
	})
	btns.sub.live("click",function(){
		var ASVal = $(this).siblings("input[type=text]").val();
		SubVal = parseInt(ASVal)-1;
		if(SubVal<1){
			return;
		}
		$(this).siblings("input[type=text]").val(SubVal);
	})
}




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
					    if(zoomImgW <418 || zoomImgH < 418){
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



//配送区域
function add_Showbar( data ){
	
	

	var doct = '';
	var obj = true;
	
	for(var i in data){
		if(typeof data[i].name == 'string' && data[i].name.length>0 ){
			doct += "<li><a href='javascript:;'>" + data[i].name + "</a></li>";
		}
	}
	$(".J_firstCity").html( doct )
	
	$(".J_firstCity").find('a').live('click',function(){
		
		$(".J_firstCity").find('a').removeClass('cur')
		$(this).addClass('cur')
		
		for(var i in data){
			
			if(data[i].name == $(this).html()){
				
				var arrCit = data[i].cities; //城市
				var arrEms = data[i].EMS; //EMS
				var arrKd = data[i].KD;   //快递
				var twoDoct='';
				
				for( var n=0 in arrCit){
					if(typeof arrCit[n] == 'string'){
						twoDoct+= "<li><a href='javascript:;' kd='"+arrKd[n]+"' ems='"+arrEms[n]+"'>" +arrCit[n]+ "</a></li>";
					}
				}
				
				$(".J_twoCity").html( twoDoct )
				if( data[i].cities=='' ){
					
					$('.arDiv').find('span').html( "至"+ $(this).html() )
					$('.area_fare').html( "运费:"+data[i].KD+"&nbsp;&nbsp;EMS:"+data[i].EMS )
					closeArea()
					//return 
				}
			}
			
		}
	})
	
	$('.J_twoCity').find('a').live('click',function(){
					
			$('.arDiv').find('span').html( "至"+ $(this).html() )
			$('.area_fare').html( "运费:"+$(this).attr('kd')+"&nbsp;&nbsp;EMS:"+$(this).attr('ems') )
			closeArea()
		
	})
	
	
	$('.mb').find('.arDiv').on('click',function(){
		
		if(obj){
			$(".psqy").show();
			obj = false;
		}else{
			closeArea()
		}
	})
	
	$(".psqy_close").on('click',closeArea)
	
	function closeArea(){	//关闭弹出层
		
		obj = true;
		$(".psqy").hide();
		
	}
	
}

