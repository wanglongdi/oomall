$(function(){
	$('.free_btn').click(function(){
		$(this).parent().hide();
		$(this).parent().next('.con0').show();
		$(this).addClass('free_btn0');
		setTimeout('sec()',800);
		//setTimeout('noShow()',800);

	})
    $('#close').click(function(){
		$('#lot_suc_bg').hide();
		$('#lot_suc').hide();
		$('#mask').hide();

	})

	$('#lot_know').click(function(){
		$('#lot_no').hide();
		$('#mask').hide();

	})
   

   $(window).scroll(function(){
		var w_h=$(window).height();
		var s_h=$(window).scrollTop();
		if(s_h>w_h){
			$('#lot_top').show();
		}else{
			$('#lot_top').hide();
		}

	})
    $('#lot_top').click(function(){
    	$('html,body').animate({scrollTop:0},500);
    })


})

function bgShow(){
	var h=$(window).height();
	$('#mask').css('height',h).show();
}

function sec(){
	bgShow();
	$('#lot_suc_bg').show();
	$('#lot_suc').show();
}

function noShow(){
	bgShow();
	$('#lot_no').show();
}

$(function(){
	$(".lot_man0").myScroll({
		speed:40, //数值越大，速度越慢
		rowHeight:30 //li的高度
	})
})

