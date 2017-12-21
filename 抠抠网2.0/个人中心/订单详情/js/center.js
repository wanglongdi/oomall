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
       $('.track').hover(function(){
              $(this).find('.wuliu_icon').show();
              $(this).find('.wuliu').show();
       },function(){
              $(this).find('.wuliu_icon').hide();
              $(this).find('.wuliu').hide();
       })
})
//商品优惠
$(function(){
       $('.order_yh,.order_hb').hover(function(){
              $(this).find('.box').show();
              $(this).find('b').addClass('cur');
       },function(){
              $(this).find('.box').hide();
              $(this).find('b').removeClass('cur');
       })
})

// 倒计时
$(function(){
       countDown("2016/07/02 14:42:00","#count");
});
$(function(){
       countDown("2016/07/02 14:42:00","#count1");
});
function countDown(time,id){
       var day_elem = $(id).find('.day');
       var hour_elem = $(id).find('.hour');
       var minute_elem = $(id).find('.minute');
       var second_elem = $(id).find('.second');
       var end_time = new Date(time).getTime(),//月份是实际月份-1
       sys_second = (end_time-new Date().getTime())/1000;
       var timer = setInterval(function(){
              if (sys_second > 1) {
                     sys_second -= 1;
                     var day = Math.floor((sys_second / 3600) / 24);
                     var hour = Math.floor((sys_second / 3600) % 24);
                     var minute = Math.floor((sys_second / 60) % 60);
                     var second = Math.floor(sys_second % 60);
                     day_elem && $(day_elem).text(day);//计算天
                     $(day_elem).text(day<10?"0"+day:day);
                     $(hour_elem).text(hour<10?"0"+hour:hour);//计算小时
                     $(minute_elem).text(minute<10?"0"+minute:minute);//计算分钟
                     $(second_elem).text(second<10?"0"+second:second);//计算秒杀
                     $('.seckill_btn').html('<input type="button" class="shop_start" value="立即购买" />');
                     if(day!=0){
              
                   $("#day").show();
                   $("#dayh").show();
                      $("#clock").css("width","287");
                      $("#clock .clock_t").css("width","253");
                      $("#clock .clock_con").css("width","253");
                  }
              } else { 
                     clearInterval(timer);
              }
       }, 1000);
       
       
}

$(function(){
       $('.order_table td.wl').hover(function(){
              $(this).find('.order_wl').show();
              $(this).find('.order_wl_icon').show();
       },function(){
              $(this).find('.order_wl').hide();
              $(this).find('.order_wl_icon').hide();
       })
       $('.order_text .n').hover(function(){
              $(this).find('.more_con').show();
              $(this).find('.more').addClass('hover');
       },function(){
              $(this).find('.more_con').hide();
              $(this).find('.more').removeClass('hover');
       })
})
