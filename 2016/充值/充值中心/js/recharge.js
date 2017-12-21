//手机版 
$(function(){
  $('.phone').hover(function(){
	$(this).find('.phone_con').show();
	},function(){
	 $(this).find('.phone_con').hide();	
  })
  
  $('.erm').hover(function(){
	$(this).find('.erm_con').show();
	},function(){
	 $(this).find('.erm_con').hide();	
  })	
})

//切换
$(function(){
	$('.recharge_con_hf').first().show();
	$('.recharge_tit ul li').first().find('span').show();
	$('.recharge_tit ul li').click(function(){
         var cur=$(this).index();
         $(this).addClass('cur').siblings().removeClass('cur').find('span').hide();
         $('.recharge_con_hf').eq(cur).show().siblings().hide();
         $(this).find('span').show();
	})
})

/* 手机号码 */
function stopPropagation(e) {
  if (e.stopPropagation)
     e.stopPropagation();
  else
     e.cancelBubble = true;
}

function isPhone(oVal){
    var reg=/^1[3|5|7|8][0-9]\d{8}$/;
    if(reg.test(oVal)){
		return true;
	}
}


$(function(){
	$('.tel_icon').click(function(){
		$(this).parents('dd').find('.tel_list').show();
	})

	$('#tel_inp,#tel_inp0').focus(function(){
		
		if($(this).val().length==11 || $(this).val() ==''){
			$(this).parents('dd').find('.tel_list').show();
		}else{
			$(this).parents('dd').find('.tel_list0').show();
		}
		
		$(this).parent().find('.tel_ts').hide();
	})

	function operator(obj){
		var o_this=$(obj);
        var o_val=o_this.val();
		var o_gs=o_this.parent().find('.tel_gs');
		o_gs.show().text('移动');
		/*$.ajax({
				type:'post',
				url:'http://www.baidu.com',
				data:{tel_num:o_val},
				success:function(data){
                   o_gs.show().text(data);
				}
		})*/
		mianzhi(o_this);
	}

	function mianzhi(obj){
		var o_this=$(obj);
        var o_val=o_this.val();
		var o_gs=o_this.parent().find('.tel_gs').text();
		var o_text=o_this.parents('form').find('.hf_mz');
		var o_name=o_this.parents('form').attr('name');
		var o_yy=0;
		var json=[{"Type":"1","Package":"20\u5143","Sku":"01","Name":"20\u5143","Price":"2000"},{"Type":"1","Package":"500\u5143"
,"Sku":"02","Name":"500\u5143","Price":"49900"},{"Type":"1","Package":"300\u5143","Sku":"01","Name":"300\u5143","Price":"29940"
},{"Type":"1","Package":"200\u5143","Sku":"05","Name":"200\u5143","Price":"19960"},{"Type":"1","Package":"100\u5143"
,"Sku":"03","Name":"100\u5143","Price":"9980"},{"Type":"1","Package":"50\u5143","Sku":"06","Name":"50\u5143","Price":"4990"
},{"Type":"1","Package":"30\u5143","Sku":"04","Name":"30\u5143","Price":"3000"}];
		if(o_gs =='移动'){
			o_yy='1';
		}else if(o_gs =='联通'){
			o_yy='2';
		}else{
			o_yy='3';
		}
					o_text.html('');
                    var html='';
					for(i in json){
						if(o_name==1){
							if(json[i].Type==o_yy){
				            	if(json[i].Package=='100\u5143'){
				            		html+='<span class="cur" id='+json[i].Package+'>'+json[i].Name+'</span>';
				            		o_this.parents('form').find('.jg em').text(json[i].Price);	
				                	o_this.parents('form').find('input[name=price]').attr('value',json[i].Price);
				                	o_this.parents('form').find('input[name=sku]').attr('value',json[i].Sku);
				            	}else{
				            	    html+='<span id='+json[i].Package+'>'+json[i].Name+'</span>';
				                }
				                
				             }
						}else{
							if(json[i].Type==o_yy){
				            	if(json[i].Package=='1G'){
				            		html+='<span class="cur" id='+json[i].Package+'>'+json[i].Name+'</span>';
				            		o_this.parents('form').find('.jg em').text(json[i].Price);	
				                	o_this.parents('form').find('input[name=price]').attr('value',json[i].Price);
				                	o_this.parents('form').find('input[name=sku]').attr('value',json[i].Sku);
				            	}else{
				            	    html+='<span id='+json[i].Package+'>'+json[i].Name+'</span>';
				                }	
				                
				             }
						}
			            
					}
				    o_text.html(html);
				    $('.hf_mz').on('click','span',function(){
						var pr=$(this).attr('id');
						var inp=$(this).parents('form').find('input[name=price]');
						$(this).addClass('cur').siblings().removeClass('cur');
						inp.attr('value',pr);
						for(i in json){
							if(json[i].Type==o_yy && json[i].Name==$(this).text()){
								$(this).parents('form').find('.jg em').text(json[i].Price);
								$(this).parents('form').find('input[name=sku]').attr('value',json[i].Sku);
							}
						}
					})
					
		/*$.ajax({
				type:'post',
				url:'http://www.baidu.com',
				data:{tel_num:o_val,tel_lb:o_name},
				dataType:'json',
				success:function(json){

				}
		})*/
	}

	

	$('.tel_list li').click(function(){
		var oText=$(this).text();
		oText=oText.replace(/-/g,'');
		var o_error=$(this).parents('dd').find('.tel_ts');
		$(this).parents('dd').find('input').val(oText);
		o_error.hide();
		$(this).parents('dd').find('.tel_right').show();
		operator($(this).parents('dd').find('input'));
	})

	$('#tel_inp,#tel_inp0').blur(function(){
		var o_val=$(this).val();
		var o_error=$(this).parent().find('.tel_ts');
		var o_right=$(this).parent().find('.tel_right');
		var o_gs=$(this).parent().find('.tel_gs');
		$(this).parents('dd').find('.tel_list0').hide();
		if(o_val==''){
			o_error.show();
			o_right.hide();
			o_gs.hide();
		}else if(!isPhone(o_val)){
			o_error.show();
			o_right.hide();
			o_gs.hide();
		}else{
			o_error.hide();
			o_right.show();
			operator($(this));
		}
		
	})
    

	$(document).bind('click',function(){
          $('.tel_list,.tel_list0').css('display','none');
    });

    $('#tel_inp,.tel_icon,#tel_inp0').bind('click',function(e){
          stopPropagation(e);
    });

    $("#tel_inp,#tel_inp0").keypress(function(event) {  
        var keyCode = event.which; 
        if (keyCode == 46 || (keyCode >= 48 && keyCode <=57)|| keyCode == 8)  
            return true;  
        else  
            return false;  
    })

    $('#tel_inp,#tel_inp0').keyup(function(){
		var oVal=$(this).val();
		var oArr=oVal.split('');
		var len=oVal.length;
		var oLi=$(this).parent().find('.tel_list li');
		if(len>3){
			oArr.splice(3,0,'-');
		}
		if(len>7){
			oArr.splice(8,0,'-');	
		}
		if(len==11){
			$(this).parents('dd').find('.tel_list0').hide();
		}
        if(oVal==''){
        	$(this).parent().find('.tel_list0').hide();
        }else{
        	$(this).parent().find('.tel_list').hide();
        	$(this).parent().find('.tel_list0').show();
			$(this).parent().find('.tel_list0 li').text(oArr.join(''));
        }
		
	})

	

	
})