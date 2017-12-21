// 商品收藏
$(function(){
  $('p.img').hover(function(){
	  $(this).find('.del').show();
  },function(){
	  $(this).find('.del').hide();
	  })	
	
	
})


// 商品收藏删除
$(function(){
  var obg='<div class="del_con_bg"></div>';
  var obox='<div class="del_con"><p class="text">确定要删除吗？</p><p><a href="javascript:;" class="sure">确定</a><a href="javascript:;" class="quxiao">取消</a></p></div>';
  $('.collect_con ul li').find('.del').click(function(){
	  $(this).parents('li').append(obg);
	  $(this).parents('li').append(obox);
	  
	  $('.quxiao').click(function(){
	    $('.del_con').remove();
	    $('.del_con_bg').remove();
      })	
	
     $('.sure').click(function(){

		$(this).parents('li').remove();
     })
	  
  })
  
	
})

// 店铺收藏
$(function(){
  $('p.tit_pic').hover(function(){
	  $(this).find('.del0').show();
  },function(){
	  $(this).find('.del0').hide();
	  })	

})


// 店铺收藏删除
$(function(){
  var obg='<div class="del_con_bg0"></div>';
  var obox='<div class="del_con0"><p class="text">确定要删除此店铺吗？</p><p><a href="javascript:;" class="sure">确定</a><a href="javascript:;" class="quxiao">取消</a></p></div>';
  $('.collect_con0').find('.del0').click(function(){
	  $(this).parents('.tit').append(obg);
	  $(this).parents('.tit').append(obox);
	  
	  $('.quxiao').click(function(){
	    $('.del_con0').remove();
	    $('.del_con_bg0').remove();
      })	
	
     $('.sure').click(function(){

		$(this).parents('.collect_con0').remove();
     })
	  
  })
  
	
})

// 店铺去掉最后一个竖线
$(function(){
  $('.collect_con0').each(function(){
	  var t=$(this).find('.con').find('li:last');
	  t.css('border-right','0px');
	  
  })	

})