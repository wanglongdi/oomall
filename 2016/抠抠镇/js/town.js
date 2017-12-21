//热卖商品
$(function(){
	var $ul=$('.town_hot_con ul');
	var $pre_btn=$('.town_hot_con span.pre_btn');
	var $next_btn=$('.town_hot_con span.next_btn');
	var len=$ul.find('li').length;
	var i=0;
	var t=len-5;
	$ul.width(242*len);
	$next_btn.click(function(){
		if(t>0){
			t--;
			i++;
			$ul.animate({'left':-242*i},500);
		}
	})
	$pre_btn.click(function(){
		if(i>0){
			t++;
			i--;
			$ul.animate({'left':-242*i},500);
		}
	})
})

//分类
$(function(){
	$('#town_cify0 li').hover(function(){
		var num=$(this).index();
		$(this).addClass('cur').siblings().removeClass('cur');
		$(this).find('.cify').show().css('top',-num*59);
	},function(){
		$(this).removeClass('cur');
		$(this).find('.cify').hide();
	})
})
//轮播图
$(function(){
	var cur=0;
	var $pic=$('#bigpic_con li');
	var $icon=$('#bigpic_icon li');
	$pic.first().show();
	var timer=setInterval(picRun,5000);
	function picRun(){
       cur++;
       cur=cur==$pic.length?0:cur;
       $pic.eq(cur).fadeIn(500).siblings().hide();
       $icon.eq(cur).addClass('cur').siblings().removeClass('cur');
	}
	$icon.hover(function(){
		clearInterval(timer);
		var len=$(this).index();
		cur=len;
		$pic.eq(cur).fadeIn(500).siblings().hide();
        $(this).addClass('cur').siblings().removeClass('cur');
	},function(){
		timer=setInterval(picRun,5000);
	})
})
$(function(){
	var cur=0;
	var $pic_li=$('#town_pic_con li');
	var $icon_li=$('#town_pic_icon li');
	var icon_n=$icon_li.length;
	var $l_pre=$('#town_pic').find('.pre_btn');
	var $l_next=$('#town_pic').find('.next_btn');
	$pic_li.first().show();
	var timer=setInterval(autoRun,5000);
	function autoRun(){
		cur++;
		cur=(cur==icon_n)?0:cur;
		runPic(cur);
	}
	function runPic(cur){
		$pic_li.eq(cur).fadeIn(500).siblings().hide();
		$icon_li.eq(cur).addClass('cur').siblings().removeClass('cur');
	}
	$icon_li.hover(function(){
		clearInterval(timer);
		cur=$(this).index();
		runPic(cur);
	},function(){
		timer=setInterval(autoRun,5000);
	})
	$l_pre.click(function(){
		clearInterval(timer);
		cur--;
		runPic(cur);
		timer=setInterval(autoRun,5000);
	})
	$l_next.click(function(){
		clearInterval(timer);
		cur++;
		runPic(cur);
		timer=setInterval(autoRun,5000);
	})
	
})
function isPhone(oVal){
    var reg=/^1[3|5|7|8][0-9]\d{8}$/;
    if(reg.test(oVal)){
        return true;
    }
}
//话费
$(function(){
	$('.town_mz').hover(function(){
		$(this).addClass('town_bd');
		$(this).find('ul').show();
	},function(){
		$(this).removeClass('town_bd');
		$(this).find('ul').hide();
	})
	$('.town_mz ul li').click(function(){
		var $par=$(this).parents('.town_mz');
		$par.removeClass('town_bd');
		$par.find('span').text($(this).text());
		$par.find('ul').hide();
	})
	$('.town_tel_tit a').hover(function(){
		$(this).addClass('cur').siblings().removeClass('cur');
		$(this).parents('.town_tel').find('.town_tel_con').eq($(this).index()).show().siblings('.town_tel_con').hide();
	})
})
function winTop(n){
		return $('.town_floor').eq(n).offset();
	}
//侧边栏
$(function(){
	$('#side a').click(function(){
		$(this).addClass('cur').siblings('a').removeClass('cur');
	})
	var side_l=$('.town_floor').offset().left;
	$('#side').css('left',side_l-70);
	$('#side_top').click(function(){
		$('body,html').animate({scrollTop:0},500);
	})
	function townTop(num){
		return $('.town_floor').eq(num).offset().top;
	}
	$(window).scroll(function(){
		var w_top=$(window).scrollTop()+300;
		var side_a=$('#side').find('a');
		var ot=$('.town_floor');
		if(w_top>=townTop(0)){
			$('#side').fadeIn(300);
		}else{
			$('#side').fadeOut(300);
		}
		if(w_top>=townTop(0) && w_top<townTop(1)){
			side_a.eq(0).addClass('cur').siblings().removeClass('cur');
		}else if(w_top>=townTop(1) && w_top<townTop(2)){
			side_a.eq(1).addClass('cur').siblings().removeClass('cur');
		}else if(w_top>=townTop(2) && w_top<townTop(3)){
			side_a.eq(2).addClass('cur').siblings().removeClass('cur');
		}else if(w_top>=townTop(3) && w_top<townTop(4)){
			side_a.eq(3).addClass('cur').siblings().removeClass('cur');
		}else if(w_top>=townTop(4) && w_top<townTop(5)){
			side_a.eq(4).addClass('cur').siblings().removeClass('cur');
		}else if(w_top>=townTop(5) && w_top<townTop(6)){
			side_a.eq(5).addClass('cur').siblings().removeClass('cur');
		}else{
			side_a.eq(6).addClass('cur').siblings().removeClass('cur');
		}
	})
	
})