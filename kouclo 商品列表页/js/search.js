// JavaScript Document

/******
*函数作用：价格搜索
*参数说明：
*/
function seaMoney(){
	
	var oZoom = $('#mone_dTop');
	oZoom.find('span.spanLet').on('click',function(ev){
		oZoom.css('display','none').next('input').focus();
		oZoom.siblings('.money_Div').css('display','block')
		ev.stopPropagation();
	})
	
	oZoom.find('span.spanRit').on('click',function(ev){
		oZoom.css('display','none').siblings('input').focus();
		oZoom.siblings('.money_Div').css('display','block')
		ev.stopPropagation();
	})
	$("#seaBot_money").on('click',function(ev){
		
		ev.stopPropagation();
		
	})
	$("#mone_dBot a:first-child").on('click',function(){
		
		$("#seaBot_money").find('input').val("");
		
	})
	$("#mone_dBot a:last-child").on('click',function(){
		
		var arr=[];
		
		 $("#seaBot_money").find('input').each(function(){
			
			arr.push( $(this).val() );	
		})
		
		var ur = $(this).parents(".seaBot_money").attr("ur");
		window.location.href=ur+arr;
		//alert( arr )  //获取到需要的两个值
		
	})
	$(document).on('click',function(){
		oZoom.siblings('.money_Div').css('display','none');
		oZoom.css('display','block');
	})
}
//实现发货地JS效果 **
function sourceADD(){
	var oWrap = $(".js-address");
	oWrap.each(function(index, element) {
		var This = this;
       $(this).on('click',function(e){
			var target = e.target;
			if( target.nodeName == "A"){
				var lw = $(This).attr('lw');
				var ur = $(This).attr('ui');
				var loc = encodeURIComponent(target.innerHTML);
				var lo = lw+loc+ur;
				window.location.href = lo;
				//$(This).find('b[class=seaBot_b]').html( target.innerHTML );
			}
		}) 
    });

}

//搜索品牌
function searchbr(){
	var brandname = $(".seaTop");
	$('.seaTop').find('input[type=button]').on('click',function(sear){
		var This = this;
		var brand = '';
		var ur = '';
		var ui = '';
		brand = $(This).prev().val();
		if(brand != ''){
			$.ajax({
				type:'POST',
				url:'/search/fobrand',
				data:'datearr='+brand,
				success:function(data, sear)
				{
					alert(data);
				}
			});
		}else{
			return false;
		}
		
	})
}
//品牌、款式、风格...筛选效果
function dressing(){
	var oWrap = $(".choose");
	oWrap.find("dl").each(function() {
		var This = this;
		$(this).live('click',function(ev){
			var target = $( ev.target );
			if( target.attr('class')=='attrs_posMore0' ){	// 点击多选
				
				evStyle("none","none","block","none","none")
				
			}
			if( target.val()=='取消' ){	// 点击取消
			
				evStyle("block","none","none","block","block")
				$(This).find('.attrs_posMore').html( '更多<b></b>' );
				
			}
			if( target.val() == '确定'){//多选确定
				
				//target.css('border',"1px solid red")
				var str = '';
				var ur = '';
				var ui = '';
				
				ur = target.closest('.attrs_rigFirst').find('ul').attr('ur');
				ui = target.closest('.attrs_rigFirst').find('ul').attr('ui');
				
				$(".attr_hidUl").find('li[class=hover]').each(function(){
					str+=$(this).find('a').html()+',';
				})
				if(str == ''){
					alert('至少选择一个品牌');
				}else{
					window.location.href=ur+str+ui;
				}
				
				
			}
			if( target.attr('class')=='attrs_posMore' ){	// 点击更多
				
				if(target.html()=="更多<b></b>"){
					
					target.html( '收起<b class="hover"></b>' )
				
					evStyle("none","block","none","block","block")
					
				}else{
					
					target.html( '更多<b></b>' )
				
					evStyle("block","none","none","block","block")
				}
				
			}
			
			function evStyle(one,two,three,fore,five){
		
				$(This).find('.attr_deft').css('display',one);	 //默认
				$(This).find('.attr_more').css('display',two);	 //更多
				$(This).find('.attr_mSelt').css('display',three);	 //多选
				$(This).find('.attrs_posMore0').css('display',fore);	 //多选按钮
				$(This).find('.attrs_posMore').css('display',five);	 //更多按钮
			}
			
		})
		
    });
	
	$(".attr_mSelt").find("li").live('click',function(){		//多选选中效果***
		if($(this).hasClass('hover')){
			
			$(this).attr('class','');
			
		}else{
			$(this).attr('class','hover');
			
		}
		
	})
	
}

window.onload = function(){

	var divFYD = getId('seaBotA');
	divFYD.onmouseover = divFYD.onmouseout = function(){
		divF('seaBotADiv')
	};
	
	var divFYD2 = getId('seaBotB');
	divFYD2.onmouseover = divFYD2.onmouseout = function(){
		divF('seaBotBDiv')
	};
	
	
	function divF(id){	/** 根据状态改变显隐 **/
		var o = css.getStyle(id,'display');
		var objDom=getId(id);
		
		if(o=='block'){
			objDom.style.display='none'	
		}else{
			objDom.style.display='block'	
		}
	}
}

function moFun(name){	/**改变显隐**/
	var oMO = document.getElementById(name+"_posMore");
	var oDiv1 =document.getElementById(name+'Div1');
	var oDiv2 =document.getElementById(name+'Div2');
	

	if(!oDiv1||!oDiv2) return;
	if(oDiv2.style.display=='none'){
		oMO.innerHTML='收起<b class="hover"></b>';
		
		oDiv1.style.display='none';
		oDiv2.style.display='block';
		
	}else{
		
		oMO.innerHTML='更多<b></b>';
		oDiv1.style.display='block';
		oDiv2.style.display='none';
	}
	
	var oDiv3 =document.getElementById(name+'Div3');
	if(!oDiv3) return;
	var oLi = oDiv3.getElementsByTagName('li');
	
	for(var i=0,l=oLi.length; i<l ; i++){
		
		oLi[i].onclick= function(){
			if(this.className=='hover')return this.className=''; 
			this.className='hover'
		}
	}
	
}