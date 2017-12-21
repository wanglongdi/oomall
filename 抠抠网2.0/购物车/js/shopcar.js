//优惠券
$(function(){
	$('.coupon').click(function(){
		var ml=$(this).offset().left;
		var mt=$(this).offset().top+24;
		var con=$('.coupon_con');
		if(con.is(':hidden')){
			$('.coupon_con').show().css({'left':ml,'top':mt});
		}else{
			$('.coupon_con').hide().css({'left':0,'top':0});
		}
	})
	function stopPropagation(e) {
        if (e.stopPropagation)
            e.stopPropagation();
        else
            e.cancelBubble = true;
    }

    $(document).bind('click',function(){
        $('.coupon_con').css('display','none');
    });

    $('.coupon,.coupon_con').bind('click',function(e){
        stopPropagation(e);
    });
    $('.go').one('click',function(){
    	var par=$(this).parent('.ling');
        $(this).removeClass('go').addClass('get').text('已领取');
        $('<span class="wel"><b></b>领取成功</span>').appendTo(par).delay(1000).fadeOut();
    })
})

//满立减
$(function(){
	$('.full_text').each(function(){
		var h=$(this).height();
		if(h==27){
		   $(this).parents('.full').find('.full_text_icon').hide();
		}else{
		   $(this).parents('.full').find('.full_text_icon').show();
		   $(this).parents('.full').find('.full_text').css('height','25px');
		}
	})
	/*$('.full_text_icon b').click(function(){
        if(!$(this).hasClass('zhang')){
        	$(this).addClass('zhang');
        	$(this).parents('.full').find('.full_text').addClass('full_text0');
        	$(this).parents('.full').find('.full_text').css('height','auto');
        }else{
        	$(this).removeClass('zhang');
        	$(this).parents('.full').find('.full_text').removeClass('full_text0');
        	$(this).parents('.full').find('.full_text').css('height','25px');
        }
	})*/
	$('.full').each(function(){
		if($(this).find('.full_text_icon').is(':visible')){
			$(this).hover(function(){
		        $(this).find('b').addClass('zhang');
		    	$(this).find('.full_text').addClass('full_text0');
		    	$(this).find('.full_text').css('height','auto');
			},function(){
				$(this).find('b').removeClass('zhang');
		    	$(this).find('.full_text').removeClass('full_text0');
		    	$(this).find('.full_text').css('height','25px');
			})
		}
	})
	
})

//收藏成功
$(function(){
	$('.sc_icon').one('click',function(){
       $('<span class="coll_sus"><b></b>成功移入收藏</span>').appendTo($(this).parents('li')).delay(1000).fadeOut(); 
	})
})
//修改
$(function(){
	$('li.ys').hover(function(){
		$(this).find('.xiugai').show();
		$(this).find('.xiugai_btn').show();
	},function(){
		$(this).find('.xiugai').hide();
		$(this).find('.xiugai_btn').hide();
	})
})
//删除
$(function(){
	function delhide(){
		$('#mask').hide();
		$('#del_con').hide();
	}
	$('.del_icon').click(function(){
		$('#mask').show().css('height',$(window).height());
		$('#del_con').show();
	})
	$('#del_close,#del_con .quxiao').click(function(){
		delhide();
	})
	
	$('#del_con .queding').click(function(){
		delhide();
		$('.check_single_con').each(function(){
        	if($(this).hasClass('checked')){
        		$(this).parents('.shopcar_pro').remove();
        	}
        })
	})

})
//数量
function tomoney(obj){
	var $this=$(obj);
	var pri=$(obj).parents('ul').find('li.dy p').first().text();
	var to_pri=Number($(obj).val())*Number(pri);
	var tt=$this.parents('ul').find('li.cz').prev();
	tt.html(to_pri.toFixed(2));
}


$(function(){
	$('input.shop_num_inp').each(function(){
		if($(this).val()==0){
			var par_con=$(this).parents('li');
			par_con.find('.shop_num_ts').show().text('无货');
			par_con.find('.num_add').addClass('dis_add').removeClass('num_add');
			par_con.find('.num_minus').addClass('dis_minus').removeClass('num_minus');
			par_con.find('input').css('color','#aaa');
		    par_con.find('.shop_num_inp').attr('readonly','readonly').css('background','#e2e2e2');
		}
		var pp=$(this).parents('.shopcar_pro');
		if(pp.hasClass('pass_bg')){
			pp.find('.num_add').addClass('dis_add').removeClass('num_add');
			pp.find('.num_minus').addClass('dis_minus').removeClass('num_minus');
			pp.find('input').css('color','#aaa');
		    pp.find('.shop_num_inp').attr('readonly','readonly').css('background','#e2e2e2');
		}
	})

	$('input.shop_num_inp').keyup(function(){
		if($(this).val().length==1)	{
			$(this).val($(this).val().replace(/\D|^0/g,'1'));
		}else{
			$(this).val($(this).val().replace(/\D|^0/g,""));
		}
		if($(this).val()>5){
			$(this).val(5);
			$(this).parents('li').find('.shop_num_ts').show().text('最多买5件');
		}
		tomoney($(this));
	})
	$('.num_add').click(function(){
		var inp_con=$(this).prev('.shop_num_inp');
		var inp_val=inp_con.val();
		if(inp_val==5){
			$(this).parents('li').find('.shop_num_ts').show().text('最多买5件');
			return false;
		}else{
			inp_val++;
            inp_con.val(inp_val);
            $(this).parents('li').find('.shop_num_ts').hide().text('');
            tomoney(inp_con);
		}
		
	})
	$('.num_minus').click(function(){
		var inp_con=$(this).next('.shop_num_inp');
		var inp_val=inp_con.val();
		if(inp_val==1){
			return false;
		}else{
			inp_val--;
            inp_con.val(inp_val);
            $(this).parents('li').find('.shop_num_ts').hide().text('');
            tomoney(inp_con);
		}
		
	})
})

//结算

$(function(){
	var st_t=$('#shopcar_count').offset().top;
	var wh=$(window).height();
	if(st_t>wh){
		$('#shopcar_count').addClass('shopcar_fixed');
	}

	$(window).scroll(function(){
		var w_h=$(window).scrollTop();
		if(w_h<=st_t-wh){
			$('#shopcar_count').addClass('shopcar_fixed');
		}else{
			$('#shopcar_count').removeClass('shopcar_fixed');
		}
	})
})

$(function(){
	$('#go_count').click(function(){
		$('#mask').show().css('height',$(window).height());
		$('#shopcar_sel').show();
	})
	$('#shopcar_sel_close').click(function(){
		$('#mask').hide();
		$('#shopcar_sel').hide();
	})
	var sel_cp=$('#shopcar_sel_pic ul').find('li');
	$('#shopcar_sel_pic ul').css('width',125*sel_cp.length);
	if(sel_cp.length<4){
		$('#shopcar_sel_con').find('span').hide();
		$('#shopcar_sel_pic ul').addClass('t').removeClass('l');
	}else{
		$('#shopcar_sel_con').find('span').show();
		$('#shopcar_sel_pic ul').addClass('l').removeClass('t');
	}
	var l_n=0;
	var r_n=sel_cp.length-3;
	var $ul=$('#shopcar_sel_con').find('ul');
	var po_l=$ul.position().left;
	$('#shopcar_sel_con .pre_btn').click(function(){
       if(l_n>0){
       	   l_n--;
       	   r_n++;
       	   po_l+=125;
           $('#shopcar_sel_con').find('ul').animate({'left':po_l},1000);
       }else{
       	   return false;
       }
	})
	$('#shopcar_sel_con .next_btn').click(function(){
		if(r_n>0){
       	   l_n++;
       	   r_n--;
       	   po_l-=125;
           $('#shopcar_sel_con').find('ul').animate({'left':po_l},1000);
       }else{
       	   return false;
       }

	})
})

//全选
function removeChecked(obj){
	$(obj).each(function(){
		if($(this).hasClass('checked')){
			$(this).removeClass('checked');
			$(this).find('input').removeAttr('checked');
		}else{
			return false;
		}
	})	
}
function addChecked(obj){
	$(obj).each(function(){
		if($(this).hasClass('checked')){
			return false;
		}else{
			$(this).addClass('checked');
			$(this).find('input').attr('checked','checked');
		}
	})	
}
function sizeChecked(obj){
	var $this=$(obj);
	var i=0;
	var arr=$this.parents('.shopcar_con').find('.check_single_con');
	arr.each(function(){
		if($(this).hasClass('checked')){
			i++;
		}
	})
	if(i==arr.length){
		return true;
	}
}
function sizeChecked0(obj){
	var $this=$(obj);
	var i=0;
	var arr=$this.parents('.shopcar_main').find('.check_single_con');
	arr.each(function(){
		if($(this).hasClass('checked')){
			i++;
		}
	})
	if(i==arr.length){
		$('.check_all_con').addClass('checked');
		$('.check_all_con').find('.check_store_con input').attr('checked','checked');
	}else{
		$('.check_all_con').removeClass('checked');
		$('.check_all_con').find('.check_store_con input').removeAttr('checked','checked');	
	}
	if(i==0){
		$('#go_count').css('background','#d3d3d3');
		$('#del_btn').removeClass('cur');

	}else{
		$('#go_count').css('background','#db2424');
		$('#del_btn').addClass('cur');
	}
}
function addAll(obj){
	$(obj).each(function(){
		if($(this).hasClass('checked')){
			return false;
		}else{
			$(this).addClass('checked');
			$(this).find('input').attr('checked','checked');
		}
	})	
}
function removeAll(obj){
	$(obj).each(function(){
		if($(this).hasClass('checked')){
			$(this).removeClass('checked');
			$(this).find('input').removeAttr('checked');
		}else{
			return false;
		}
	})	
}
function otherAdd(obj){
	$(obj).removeClass('checked');
    $(obj).find('input').removeAttr('checked');
}
function otherAdd0(obj){
	$(obj).addClass('checked');
    $(obj).find('input').attr('checked');
}

$(function(){
	$('.check_single_con label').each(function(){
		$(this).click(function(){
			var par=$(this).parent();
			var pars=$(this).parents('.shopcar_con');
			var label_size=pars.find('.check_single_con label').length;
			if(par.hasClass('checked')){
				par.removeClass('checked');	
				par.find('input').removeAttr('checked');
			}else{
			   par.addClass('checked');
			   par.find('input').attr('checked','checked');	
			}
			if(sizeChecked($(this))){
				pars.find('.check_store_con').addClass('checked');
				pars.find('.check_store_con input').attr('checked','checked');	
			}else{
				pars.find('.check_store_con').removeClass('checked');
				pars.find('.check_store_con input').removeAttr('checked','checked');	
			}

			sizeChecked0($(this));
		})
	})
	
	$('.check_store_con label').each(function(){
		$(this).click(function(){
			var child=$(this).parents('.shopcar_con').find('.check_single_con');
			var par=$(this).parent();
			if(par.hasClass('checked')){
				par.removeClass('checked');
				par.find('input').removeAttr('checked');
				removeChecked(child);
			}else{
			   par.addClass('checked');
			   par.find('input').attr('checked','checked');	
			   addChecked(child);
			}
			sizeChecked0($(this));
		})
	})

	$('.check_all_con label,.check_all_con span').click(function(){
		var single=$('.check_single_con');
		var store=$('.check_store_con');
		var par=$(this).parent();
		var all=$('.check_all_con');
		if(par.hasClass('checked')){
			par.removeClass('checked');
			par.find('input').removeAttr('checked');
			removeAll(single);
			removeAll(store);
			otherAdd(all);
			$('#go_count').css('background','#d3d3d3');
		}else{
		   par.addClass('checked');
		   par.find('input').attr('checked','checked');	
		   addAll(single);
		   addAll(store);
		   otherAdd0(all);
		   $('#go_count').css('background','#db2424');
		}
	})
})


//删除
function clearNum(){
	var n=0;
	$('.shopcar_pro').each(function(){
		if($(this).hasClass('pass_bg')){
			n++;
		} 
	})
	if(n>0){
		$('#clear_btn').addClass('cur');
	}else{
		$('#clear_btn').removeClass('cur');
	}
}
$(function(){
	clearNum();
	$('#del_btn').click(function(){
		if($(this).hasClass('cur')){
			$('#mask').show().css('height',$(window).height());
			$('#del_con').show();
		}else{
			return false;
		}
		
	})

	$('#clear_btn').click(function(){
		if($(this).hasClass('cur')){
			$('#mask').show().css('height',$(window).height());
			$('#clear_con').show();
			
		}else{
			return false;
		}
		
        
	})
	$('#clear_close,#clear_con .quxiao').click(function(){
		$('#mask').hide();
		$('#clear_con').hide();
        
	})
	$('#clear_con .queding').click(function(){
		$('#mask').hide();
		$('#clear_con').hide();
		$('.shopcar_pro').each(function(){
        	if($(this).hasClass('pass_bg')){
        		$(this).remove();
        	}
        })
        
	})



})


//两种结算
$(function(){
	$('.shopcar_end_con').each(function(){
		var $this=$(this);
		var $li=$this.find('li');
		var $ul=$this.find('ul');
		$ul.css('width',125*$li.length);
		if($li.length<4){
			$this.find('b').hide();
		}else{
			$this.find('b').show();
		}
		var l_n=0;
		var r_n=$li.length-3;
		var po_l=$ul.position().left;
		$this.find('b.prev_btn').click(function(){
	       if(l_n>0){
	       	   l_n--;
	       	   r_n++;
	       	   po_l+=125;
	           $this.find('ul').animate({'left':po_l},1000);
	       }else{
	       	   return false;
	       }
		})
		$(this).find('b.next_btn').click(function(){
			if(r_n>0){
	       	   l_n++;
	       	   r_n--;
	       	   po_l-=125;
	           $this.find('ul').animate({'left':po_l},1000);
	       }else{
	       	   return false;
	       }

		})
	})
	
	
})