
/*
@ 弹出
 */
$.fn.alertBox = function (options,_this) {	//将alertBox对象添加到jquery实例对象中，方便jq对象调用
	var org = {
		id : "", //弹出层的ID
		act : "click", //选择事件  如click mouseover
		borderWidth : "0px", //边框的大小
		borderColor : "#62a7db", //颜色
		borderAlpha : "0.7", //边框透明度
		bgAlpha : "0.3", //全屏背景透明度
		bgColor : "#fff", //全屏背景颜色
		backgroundAct : "none",
		level : "5000" //层级 如弹框被遮挡时将此数值调大
	}
	$.extend(org, options);		//函数参数格式为{ id:"#a1box"},通过extend方法合并参数
	//console.log(org);

	var first = false;
	var _cssK = $(this).attr("id") + "k";	///读取点击元素的id值然后拼接字符串，用来做为弹窗下面的遮挡层的class值
	var cssK = "." + _cssK;
	var _cssB = $(this).attr("id") + "b";	//读取点击元素的id值然后拼接字符串，做为整屏底层的遮罩层的class值
	var cssB = "." + _cssB;
	var winW = $(document).width();
	var winH = $(document).height();
	var conW = $(org.id).outerWidth();
	var conH = $(org.id).outerHeight();
	var html = "";
	var isload = false;

	$(org.id).after("<div class=" + _cssB + "></div>");			//在弹窗层后插入遮罩层和遮挡层
	$(org.id).after("<div class=" + _cssK + "></div>");

	$(cssK).css({								//为弹窗背景层设置样式，注意木有设置高度
		width : conW + "px",
		height : conH + "px",
		position : "absolute",
		"z-index" : org.level,
		border : org.borderWidth + " solid " + org.borderColor,
		opacity : org.borderAlpha
	})
	$(org.id).css({				//为弹窗初始化样式，设定为绝对定位，并初始化位置在左上角。z轴高度为,参数设定高度加1，避免弹窗背景层覆盖掉弹窗
		position : "absolute",
		left : "0px",
		top : "0px",
		"z-index" : parseInt(org.level) + 1
	})
	$(cssB).css({				///为页面遮罩层设置样式css样式
		width : "100%",
		"background-color" : org.bgColor,
		position : "absolute",
		"z-index" : parseInt(org.level) - 1,
		opacity : org.bgAlpha,
		left : "0px",
		top : "0px"
	})

	if ($(org.id).attr("data-alertUrl") != undefined) {	///如果存在data-alertUrl属性
		html = $(org.id).attr("data-alertUrl");
	}

	$(org.id).hide();
	$(cssK).hide();
	$(cssB).hide();

	$(org.id + " .close").click(function () {		//为关闭按钮设置关闭事件，隐藏三大件。
		hide()
	})
	if (org.act != "none")		
		//$(this).bind(org.act, function () {		//根据参数为触发alert函数的元素绑定事件。
			show()
			
		//})
		//console.log(org.backgroundAct)
		if (org.backgroundAct != "none")		//如果背景act设置不为none，则为背景绑定事件，但是参数内设置了none，所以不设置
			$(cssB).bind(org.act, function () {
											console.log("asdfasdfsd");
				hide()
			})
			$(this).bind("show", function (event) {
				show()
			})
			$(this).bind("hide", function (event) {
				hide()
			})
			$(this).bind("remove", function (event) {
				$(this).unbind()
			})

			$(window).resize(function () {
				setLoc()
			})
			$(window).scroll(function () {
				setLoc()
			})

			function reSize() {		//重新弹窗背景层
				$(cssK).css({
					width : $(org.id).outerWidth() + "px",
					height : $(org.id).outerHeight() + "px"
				})
			}

	
	
	function setLoc() {	//定位中间
		if (!$(org.id).is(":visible"))	///如果弹窗不可见，滚蛋不执行
			return;
		
			
		if(_this){	//
				var pleft = $(_this).offset().left;
				var ptop = $(_this).offset().top;
				var eleW = $(_this).outerWidth();
				var eleH = $(_this).outerHeight();
				var alertW = $(org.id).outerWidth();
				var alertH = $(org.id).outerHeight();
				var winW = $(window).width();
				var winH = $(window).height();	
				var scrtop = $(document).scrollTop();
				var scrleft = $(document).scrollLeft();
				console.log(ptop)
				
				function setPos(thisID){
						var x = pleft;
						var y = ptop+eleH+10;
						if(pleft+alertW-scrleft > winW){	
								x = x-alertW;	
							}
						if(ptop+alertH-scrtop > winH){	//当点击的元素下方到浏览器窗口的距离小于弹窗的高度时，在点击原件的上方10像素的地方出现
								y = y-alertH-eleH-20;	//在点击元素上方10像素处出现
							}
						$(thisID).css({
									  left:x+"px",
									  top:y+"px"
									  });
					}
				
				setPos(org.id);
				setPos(cssK);
				
		}else{
			navLoc(org.id);
			navLoc(cssK);
		}
		
		function navLoc(thisID) {		///给id元素设置位置为浏览器居中
			var conW = $(thisID).outerWidth();
			var conH = $(thisID).outerHeight();

			var x = ($(window).width() / 2) - (conW / 2);
			var y = ($(window).height() / 2) - (conH / 2);
			y = (y - y * 0.4) + $(document).scrollTop();
			$(thisID).css({
				left : x + "px",
				top : y + "px"
			})
		}
		
		BwinH = $(window).height() + $(document).scrollTop();
		$(cssB).height(BwinH);

		if (!first) {	//如果是第一次调用，则调用定位
			setTimeout(setLoc, 10);
			first = true;
		}
	}
	
	function show() {
		$(cssK).fadeIn(0);
		$(org.id).fadeIn(0);
		$(cssB).fadeIn(0);

		if (html != "" && isload == false) {		//如果存在data-alertUrl属性，则把属性地址做为load参数来下载数据
			$(org.id).load(html, function () {
				$(org.id + " .close").click(function () {
					hide()
				});
				isload = true;

				reSize();	//因为插入数据，弹窗变化所以重新设置弹窗遮罩层的大小
				if ($.browser.msie && ($.browser.version == "6.0") && !$.support.style) {	//如果为ie并且是6，并且不支持取得行内样式 那么就从新隐藏，然后再进行显示，以实现正常显示效果
					$(cssK).fadeOut(0);
					$(org.id).fadeOut(0);
					$(cssB).fadeOut(0);

					$(cssK).fadeIn(0);
					$(org.id).fadeIn(0);
					$(cssB).fadeIn(0);
				}
					setLoc();			///改变大小后重新定位
				
			});
		} else {
			
				setLoc();		//正常显示时定位
		}
	}
	function hide() {	//进行隐藏
		$(cssK).fadeOut(0);
		$(org.id).fadeOut(0);
		$(cssB).fadeOut(0);
	}
}

//弹窗结束


function tipClick_event(tip, tipContent) {
	var size = tip.length;
	var className = "cur";
	if (size == 0 || typeof(tip) == "string") {
		return;
	}
	//植入标记位
	for (var i = 0; i < size; i++) {
		tip.eq(i).attr("val", i);
		tipContent.eq(i).attr("val", i);
	}
	//添加点击事件
	tip.click(function () {
		var _this = $(this);
		var attrValue = _this.attr("val");
		var tableVal = tipContent.eq(attrValue);
		tip.removeClass();
		_this.addClass(className);
		tipContent.hide();
		if (attrValue == tableVal.attr("val")) {
			tableVal.show();
		}
	});
}

function checkImageFormat(fileName) {  //判断图片格式函数
	   var extension = /\.(gif|jpg|jpeg|bmp|png)$/i;
	   if(!extension.test(fileName)) {
		  return false;
	   }
	   return true;
	}