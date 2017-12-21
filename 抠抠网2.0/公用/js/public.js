//我的抠抠
$(function(){
       $('.top_right ul li.my').hover(function(){
              $(this).addClass('bg');
              $(this).next('.line').hide();
              $(this).prev('.line').hide();
              $(this).find('.my_kk').show();
              $(this).find('b').addClass('my_icon0');
       },function(){
              $(this).removeClass('bg');
              $(this).next('.line').show();
              $(this).prev('.line').show();
              $(this).find('.my_kk').hide();
              $(this).find('b').removeClass('my_icon0');
       })
})

//手机版
$(function(){
       $('.top_right ul li.phone').hover(function(){
              $(this).addClass('bg0');
              $(this).next('.line').hide();
              $(this).prev('.line').hide();
              $(this).find('.phone_con').show();
              $(this).find('b').addClass('my_icon0');
       },function(){
              $(this).removeClass('bg0');
              $(this).next('.line').show();
              $(this).prev('.line').show();
              $(this).find('.phone_con').hide();
              $(this).find('b').removeClass('my_icon0');
       })
})

//商品分类
$(function(){
       $('#classify ul li').hover(function(){
              var len=$(this).index();
              len=len*40+10;
              $(this).addClass('cur');
              $(this).find('.classify_con').show().css('top',-len);
       },function(){
              $(this).removeClass('cur');
               $(this).find('.classify_con').hide();
       })

      
})