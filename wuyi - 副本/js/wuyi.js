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

// 头部 微信区域 加移入移出事件 结束

// 所有产品分类 加移入移出事件 开始
$(function(){
	$('#manu_out .manu .left').mouseover(function(){
		$(this).parent().find('.left_box').show();

	})
	$('#manu_out .manu .left').mouseout(function(){
		$(this).parent().find('.left_box').hide();

	})

})

// 所有产品分类 加移入移出事件 结束


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



// 所有产品分类《竖导航二级菜单》加移入移出事件 结束



// 活动区域开始
$(function(){
	$('.content_s_r_box').mouseover(function(){
		$(this).find('.huikuai_box').show();
	})
	$('.content_s_r_box').mouseout(function(){
		$(this).find('.huikuai_box').hide();
	})

})

// 活动区域结束



// 快递导航区域开始

$(function(){
		if(!isie6()){
			var rollStart=$('#j'); // 获取 滚动条 临界点
			var offset=rollStart.offset(); // 获取 滚动条 临界点 的 偏移量 
			objWindow=$(window); // 获取窗口对象
			// offset.top;  // 获取 临界点 的高度
	        // objWindow.scrollTop(); // 获取 滚动条 高度
			objWindow.scroll(function(){ // 滚动事件
				if(objWindow.scrollTop()>offset.top){// 大于 临界点 高度 时 显示
					// alert(objWindow.scrollTop())
					$('.kuai_nav').show();
				}else{
					$('.kuai_nav').hide();
				}
			})	


			var top_1= $('.one').offset().top;
			var top_2= $('.two_t').offset().top;
			var top_3= $('.three').offset().top;
			var top_4= $('.four').offset().top;
			var top_5= $('.five').offset().top;
			var top_6= $('.six').offset().top;
			var top_7= $('.seven').offset().top;
			var top_8= $('.eight').offset().top;

			objWindow.scroll(function(){ // 滚动事件
				if(objWindow.scrollTop()>top_1){
					$('.kuai_nav .nav').eq(0).addClass('bj').siblings('.nav').removeClass('bj');
					$('.kuai_nav .nav').eq(0).find('.left').addClass('yuan').siblings('.nav').find('.left').removeClass('yuan');
					$('.kuai_nav .nav').eq(1).find('.left').removeClass('yuan');
					$('.kuai_nav .nav').eq(0).find('.right p').css('color','#fff');
					$('.kuai_nav .nav').eq(1).find('.right p').css('color','#9B2511');
				}

				if(objWindow.scrollTop()>top_2){	
					$('.kuai_nav .nav').eq(1).addClass('bj').siblings('.nav').removeClass('bj');
					$('.kuai_nav .nav').eq(1).find('.left').addClass('yuan').siblings('.nav').find('.left').removeClass('yuan');
					$('.kuai_nav .nav').eq(0).find('.right p').css('color','#9B2511');
					$('.kuai_nav .nav').eq(1).find('.right p').css('color','#fff');
					$('.kuai_nav .nav').eq(2).find('.right p').css('color','#9B2511');
				}
				
				if(objWindow.scrollTop()>top_3){
					$('.kuai_nav .nav').eq(2).addClass('bj').siblings('.nav').removeClass('bj');
					$('.kuai_nav .nav').eq(2).find('.left').addClass('yuan').siblings('.nav').find('.left').removeClass('yuan');
					$('.kuai_nav .nav').eq(1).find('.left').removeClass('yuan');
					$('.kuai_nav .nav').eq(3).find('.left').removeClass('yuan');
					$('.kuai_nav .nav').eq(1).find('.right p').css('color','#9B2511');
					$('.kuai_nav .nav').eq(2).find('.right p').css('color','#fff');
					$('.kuai_nav .nav').eq(3).find('.right p').css('color','#9B2511');
				}

				if(objWindow.scrollTop()>top_4){
					$('.kuai_nav .nav').eq(3).addClass('bj').siblings('.nav').removeClass('bj');
					$('.kuai_nav .nav').eq(3).find('.left').addClass('yuan').siblings('.nav').find('.left').removeClass('yuan');
					$('.kuai_nav .nav').eq(3).find('.right p').css('color','#fff');
					$('.kuai_nav .nav').eq(2).find('.right p').css('color','#9B2511');
					$('.kuai_nav .nav').eq(4).find('.right p').css('color','#9B2511');
					$('.kuai_nav .nav').eq(3).find('.right p').css('color','#fff');
				}

				if(objWindow.scrollTop()>top_5){
					$('.kuai_nav .nav').eq(4).addClass('bj').siblings('.nav').removeClass('bj');
					$('.kuai_nav .nav').eq(4).find('.left').addClass('yuan').siblings('.nav').find('.left').removeClass('yuan');
					$('.kuai_nav .nav').eq(3).find('.left').removeClass('yuan');
					$('.kuai_nav .nav').eq(5).find('.left').removeClass('yuan');
					$('.kuai_nav .nav').eq(4).find('.right p').css('color','#fff');
					$('.kuai_nav .nav').eq(3).find('.right p').css('color','#9B2511');
					$('.kuai_nav .nav').eq(5).find('.right p').css('color','#9B2511');
				}

				if(objWindow.scrollTop()>top_6){
					$('.kuai_nav .nav').eq(5).addClass('bj').siblings('.nav').removeClass('bj');
					$('.kuai_nav .nav').eq(5).find('.left').addClass('yuan').siblings('.nav').find('.left').removeClass('yuan');
					$('.kuai_nav .nav').eq(5).find('.right p').css('color','#fff');
					$('.kuai_nav .nav').eq(4).find('.right p').css('color','#9B2511');
					$('.kuai_nav .nav').eq(6).find('.right p').css('color','#9B2511');
				}

				if(objWindow.scrollTop()>top_7){
					$('.kuai_nav .nav').eq(6).addClass('bj').siblings('.nav').removeClass('bj');
					$('.kuai_nav .nav').eq(6).find('.left').addClass('yuan').siblings('.nav').find('.left').removeClass('yuan');
					$('.kuai_nav .nav').eq(5).find('.left').removeClass('yuan');
					$('.kuai_nav .nav').eq(7).find('.left').removeClass('yuan');
					$('.kuai_nav .nav').eq(6).find('.right p').css('color','#fff');
					$('.kuai_nav .nav').eq(5).find('.right p').css('color','#9B2511');
					$('.kuai_nav .nav').eq(7).find('.right p').css('color','#9B2511');
				}

				if(objWindow.scrollTop()>top_8){
					$('.kuai_nav .nav').eq(7).addClass('bj').siblings('.nav').removeClass('bj');
					$('.kuai_nav .nav').eq(7).find('.left').addClass('yuan').siblings('.nav').find('.left').removeClass('yuan');
					$('.kuai_nav .nav').eq(6).find('.left').removeClass('yuan');
					$('.kuai_nav .nav').eq(7).find('.right p').css('color','#fff');
					$('.kuai_nav .nav').eq(6).find('.right p').css('color','#9B2511');
				}
			})
			
		}
		
		function isie6() {
			if ($.browser.msie) {
				if ($.browser.version == "6.0") return true;
			}return false;
		} 


	})

// 快递导航区域结束