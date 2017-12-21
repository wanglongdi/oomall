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

//侧边栏
$(function(){
       var h=$(window).height();
       $('#index_side').height(h);
       $(window).resize(function(){
            var h=$(window).height();
            $('#index_side').height(h);  
       })
       //二维码
       $('#side_erm').hover(function(){
              $(this).find('#side_erm_con').show();
       },function(){
              $(this).find('#side_erm_con').hide();
       })
       //返回顶部
       $('#side_gotop').click(function(){
              $('html,body').animate({scrollTop:0});
       })

       //资产
       $('#side_money').hover(function(){
              $(this).find('#side_money_tt').show();
       },function(){
              $(this).find('#side_money_tt').hide();
       })

       //记录
       $('#side_record,#side_sc').hover(function(){
              $(this).find('.side_record_tt').show();
       },function(){
              $(this).find('.side_record_tt').hide();
       })
       $('.side_coll_con').first().show();
       $('#side_coll_tit ul li').hover(function(){
              var len=$(this).index();
              $(this).addClass('cur').siblings().removeClass('cur');
              $('.side_coll_con').eq(len).show().siblings('.side_coll_con').hide();
       })
       

})

//登录复选框
$(function(){
       $('.index_login_check').click(function(){
              var $inp=$(this).find('input');
              var $check=$(this).find('.check_pic');
              if($check.hasClass('checked')){
                     $check.removeClass('checked');
                     $inp.removeAttr('checked');
              }else{
                     $check.addClass('checked');
                     $inp.attr('checked','checked'); 
              }
       })
})

//登录
$(function(){
       $('#xm').focus(function(){
              $(this).prev().addClass('name0');
              $(this).css('border','#dead00 1px solid');
       })
       $('#xm').blur(function(){
              $(this).prev().removeClass('name0');
              $(this).css('border','#ccc 1px solid');
       })
       $('#password').focus(function(){
              $(this).prev().addClass('mm0');
              $(this).css('border','#dead00 1px solid');
       })
       $('#password').blur(function(){
              $(this).prev().removeClass('mm0');
              $(this).css('border','#ccc 1px solid');
       })
       $('#index_login_close').click(function(){
              $('#index_login').hide();
       })

})
//优惠券
$(function(){
       $('.ling_btn').click(function(){
              $(this).addClass('ling_yi');
              $(this).text('已领取');
       })
})

//购物车
$(function(){
       $('.side_shopcar0_sp').hover(function(){
              $(this).find('.close_sp').show();
              $(this).find('.num_con').show();
              $(this).find('.sel_num').hide();
       },function(){
              $(this).find('.close_sp').hide();
              $(this).find('.num_con').hide();
              $(this).find('.sel_num').show();
       })

       $('.close_sp').click(function(){
              $(this).parents('.side_shopcar0_sp').remove();
       })
})

function addShopcheck(obj){
       var $check=$(obj).parents('.side_shopcar0_con').find('.check');
       $check.each(function(){
              if(!$(this).hasClass('checked')){
                   $(this).addClass('checked');
                   $(this).prev('input').attr('checked','checked');  
                   $(this).parent('.side_sp_check').addClass('checked'); 
              }
       })
}
function removeShopcheck(obj){
       var $check=$(obj).parents('.side_shopcar0_con').find('.check');
       $check.each(function(){
              if($(this).hasClass('checked')){
                   $(this).removeClass('checked');
                   $(this).prev('input').removeAttr('checked');  
                   $(this).parent('.side_sp_check').removeClass('checked');
              }
       })
}

function addAllcheck(){
       var $check=$('.check');
       var $shop=$('.shopcheck_box');
       $check.each(function(){
              if(!$(this).hasClass('checked')){
                   $(this).addClass('checked');
                   $(this).prev('input').attr('checked','checked');  
                   $(this).parent('.side_sp_check').addClass('checked'); 
              }
       })
       $shop.each(function(){
              if(!$(this).hasClass('checked')){
                   $(this).addClass('checked');
                   $(this).prev('input').attr('checked','checked');  
                   $(this).parent('.shopcheck_check').addClass('checked'); 
              }
       })
}
function removeAllcheck(){
       var $check=$('.check');
       var $shop=$('.shopcheck_box');
       $check.each(function(){
              if($(this).hasClass('checked')){
                   $(this).removeClass('checked');
                   $(this).prev('input').removeAttr('checked');   
                   $(this).parent('.side_sp_check').removeClass('checked'); 
              }
       })
       $shop.each(function(){
              if($(this).hasClass('checked')){
                   $(this).removeClass('checked');
                   $(this).prev('input').removeAttr('checked'); 
                   $(this).parent('.shopcheck_check').removeClass('checked'); 
              }
       })
}

function checkNum(obj){
        var $par=$(obj).parents('.side_shopcar0_con');
        var $check=$par.find('.check');
        var $shop=$par.find('.shopcheck_check');
        var len=$check.length;
        var len0=0;
        $check.each(function(){
              if($(this).hasClass('checked')) {
                     len0++;
              }
        })
       
        if(len0==len){
            $shop.addClass('checked');
            $shop.find('input').attr('checked','checked');  
            $shop.find('.shopcheck_box').addClass('checked');
        }else{
            $shop.removeClass('checked');
            $shop.find('input').removeAttr('checked');   
            $shop.find('.shopcheck_box').removeClass('checked'); 
        }
}

function checkAllnum(){
        var $check=$('.check');
        var len=$check.length;
        var $all=$('.all_check');
        var len0=0;
        $check.each(function(){
              if($(this).hasClass('checked')) {
                     len0++;
              }
        })
        if(len0==len){
            $all.addClass('checked');
            $all.find('input').attr('checked','checked');  
            $all.parent('.all_sel').addClass('checked');
        }else{
            $all.removeClass('checked');
            $all.find('input').removeAttr('checked');   
            $all.parent('.all_sel').removeClass('checked'); 
        }
}

function totalNum(){
      var n=0;
      $('.check').each(function(){
              var num=$(this).parents('.side_shopcar0_sp').find('.sel_num').text();
              if($(this).hasClass('checked')) {
                     n+=Number(num);
              }
       })
      $('#sp_num').text(n);
}

$(function(){
       $('.check').click(function(){
              if($(this).hasClass('checked')){
                   $(this).removeClass('checked');
                   $(this).prev('input').removeAttr('checked');  
                   $(this).parent('.side_sp_check').removeClass('checked'); 
              }else{
                   $(this).addClass('checked');
                   $(this).prev('input').attr('checked','checked');  
                   $(this).parent('.side_sp_check').addClass('checked');

              }
              checkNum($(this));
              checkAllnum();
              totalNum();
       })

       $('.shopcheck_box').click(function(){
              if($(this).hasClass('checked')){
                   $(this).removeClass('checked');
                   $(this).prev('input').removeAttr('checked');  
                   $(this).parent('.shopcheck_check').removeClass('checked');
                   removeShopcheck($(this)); 
              }else{
                   $(this).addClass('checked');
                   $(this).prev('input').attr('checked','checked');  
                   $(this).parent('.shopcheck_box').addClass('checked');
                   addShopcheck($(this));   
              }
               totalNum();
       })

       $('.all_check').click(function(){
              if($(this).hasClass('checked')){
                   $(this).removeClass('checked');
                   $(this).prev('input').removeAttr('checked');  
                   $(this).parent('.all_sel').removeClass('checked');
                   removeAllcheck(); 
              }else{
                   $(this).addClass('checked');
                   $(this).prev('input').attr('checked','checked');  
                   $(this).parent('.all_sel').addClass('checked');
                   addAllcheck(); 
              }
              totalNum();
       })

       $('.num_add').click(function(){
              var $inp=$(this).parents('.num_con').find('input');
              var val=$inp.val();
              if(val<10){
                     val++;
              }else{
                     return false;
              }
              $inp.val(val);
              $(this).parents('.num_con').prev().text(val);
               totalNum();
       })
       $('.num_minus').click(function(){
              var $inp=$(this).parents('.num_con').find('input');
              var val=$inp.val();
              if(val>1){
                     val--;
              }else{
                     return false;
              }
              $inp.val(val);
              $(this).parents('.num_con').prev().text(val);
               totalNum();
       })
})

//侧边栏点击
function openSide(obj,con){
       $(obj).click(function(){
             if($(con).is(':hidden')){
                 $(con).show();
                 $('#index_side').css('width','325px');
                 $(con).siblings().not('#index_side_con').hide();
             }else{
                 $(con).hide();
                 $('#index_side').css('width','45px');
             }
       })
}
function stopPropagation(e) {
  if (e.stopPropagation)
     e.stopPropagation();
  else
     e.cancelBubble = true;
}

    
$(function(){
       openSide('#side_login0','#side_personal');
       openSide('#side_money','#side_money_con');
       openSide('#side_sc','#side_coll');
       openSide('#side_record','#side_notes');
       $('#side_login').click(function(){
              $('#index_login').show();
       })
       $('#side_shopcar').click(function(){
              var $con=$('#side_shopcar_no');
              var $con0=$('#side_shopcar0');
              /*if($con.is(':hidden')){
                 $con.show();
                 $('#index_side').css('width','325px');
              }else{
                 $con.hide();
                 $('#index_side').css('width','45px');
              }*/
              if($con0.is(':hidden')){
                 $con0.show();
                 $('#index_side').css('width','325px');
                 $con0.siblings().not('#index_side_con').hide();
              }else{
                 $con0.hide();
                 $('#index_side').css('width','45px');
              }
       })

       $(document).bind('click',function(){
          $('#side_personal,#side_money_con,#side_coll,#side_notes,#side_shopcar_no,#side_shopcar0').css('display','none');
          $('#index_side').css('width','45px');
       });

      $('#side_login0,#side_money,#side_sc,#side_record,#side_shopcar,#side_personal,#side_money_con,#side_coll,#side_notes,#side_shopcar_no,#side_shopcar0').bind('click',function(e){
          stopPropagation(e);
      });


      
})