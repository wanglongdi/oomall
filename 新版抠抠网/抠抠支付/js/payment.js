$(function(){
	
	$('.payment_tit ul li').click(function(){
		if($(this).index()==0){
			$(this).addClass('cur').siblings().removeClass('cur');
			$('#tabs_container').find('#tabs-1').show().siblings('#tabs-2').hide();
		}
		if($(this).index()==1){
			$(this).addClass('cur').siblings().removeClass('cur');
			$('#tabs_container').find('#tabs-2').show().siblings('#tabs-1').hide();
		}
		
	})
})