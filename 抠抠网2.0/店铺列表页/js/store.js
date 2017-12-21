function stopPropagation(e) {
  if (e.stopPropagation)
     e.stopPropagation();
  else
     e.cancelBubble = true;
}

$(function(){
       $('input.moy_input').focus(function(){
              $('#store_moy').find('.mcon').height('auto').css('background','#e6e6e6');
              $('#store_moy').find('.con').eq(1).show();
       })
       $('.spic li img').click(function(){
              var lj=$(this).attr('src');
              $(this).parent().siblings().removeClass('cur');
              $(this).parent().addClass('cur');
              $(this).parents('.spic').siblings('.bpic').find('img').attr('src',lj);
       })
       $('.piclist_big li,.piclist_small li').hover(function(){
              $(this).find('.sc').show();
              $(this).find('.line').show();
       },function(){
              $(this).find('.sc').hide();
              $(this).find('.line').hide();
       })
       $('.piclist_big li .sc,.piclist_small li .sc').click(function(){
              $(this).text('已收藏');
       })
       $('.clear_btn').click(function(){
              $(this).parents('form').find('.moy_input').val('');
       })
       $(document).bind('click',function(){
              $('#store_moy').find('.mcon').height('32px').css('background','#fff');
              $('#store_moy').find('.con').eq(1).hide();
       });
        $('input.moy_input').bind('click',function(e){
          stopPropagation(e);
          
      });

      
})

