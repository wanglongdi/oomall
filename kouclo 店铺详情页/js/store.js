// 我的收藏
$(function(){
    $(".top_sc").hover(function(){
	   $(this).find(".top_sc0").show();
	   $(this).find(".mysc").addClass("white");	

    },function(){
	   $(this).find(".top_sc0").hide();	
	   $(this).find(".mysc").removeClass("white");	
		});
	
});




// 公告
$(function(){  
   var demo = document.getElementById("demo");
   var demo2 = document.getElementById("demo2");
   demo2.innerHTML=document.getElementById("demo1").innerHTML;
   function Marquee(){
     if(demo.scrollLeft-demo2.offsetWidth>=0){
     demo.scrollLeft-=demo1.offsetWidth;
    }
    else{
       demo.scrollLeft++;
      }
   }
   var myvar=setInterval(Marquee,25);
   demo.onmouseout=function (){myvar=setInterval(Marquee,25);}
   demo.onmouseover=function(){clearInterval(myvar);}
});
       



// 商品分类
$(function(){
	$('.sp_fl_text').on('click', function(){
		 var child =$(this).next('.sp_fl_con01');
		 if (child.is(':hidden')) {
            child.show('fast');
            $(this).find(' > i').addClass('icon_sp0').removeClass('icon_sp');
			$(this).children("a").css("color","#947E4E");
        } else {
            child.hide('fast');
            $(this).find(' > i').addClass('icon_sp').removeClass('icon_sp0');
			$(this).children("a").css("color","#000");
        }
        e.stopPropagation();
		
	});

  $('.sp_fl_text').mouseover(function(){
	  $(this).children("a").css("color","#947E4E");
	  }).mouseout(function(){
		  $(this).children("a").css("color","#000");
		  });
});




// Hot Sale
function setTab(name,cursel,n){
for(i=1;i<=n;i++){
var menu=document.getElementById(name+i);
var con=document.getElementById("con_"+name+"_"+i);
menu.className=i==cursel?"hover":"";
con.style.display=i==cursel?"block":"none";
};

}

// 所有分类
$(function(){
	$(".store_feilei").hover(function(){
		$(this).find(".store_flz").show();
	},function(){
		$(this).find(".store_flz").hide();
	});
	
	
});

$(function(){
	$("li.list").hover(function(){
         $(this).find(".store_flz00").show();
		 $(this).children().find("i").removeClass("icon_st");
		 $(this).addClass("store_sur");
	 },function(){
		 $(this).find(".store_flz00").hide();
		 $(this).children().find("i").addClass("icon_st");
		 $(this).removeClass("store_sur");
	     
	
	});
	
	
});

//最近浏览商品
$(function(){

	$li1 = $(".look_pass_nav ul li");
	$window1 = $(".look_pass_nav ul");
	$left1 = $(".pre_btn");
	$right1 = $(".next_btn");
	
	$window1.css("width", $li1.length*278);

	var lc1 = 0;
	var rc1 = $li1.length-4;
	
	$left1.click(function(){
		if (lc1 < 1) {
			return;
		}
		lc1--;
		rc1++;
		$window1.animate({left:'+=278px'}, 1000);
	});

	$right1.click(function(){
		if (rc1 < 1){
			return;
		}
		lc1++;
		rc1--;
		$window1.animate({left:'-=278px'}, 1000);
	});

})

//收藏本站

$(function(){
	$(".header_store_sc a").click(function(){
		$("#collect").toggle();
	});
	$("a.close").click(function(){
         $("#collect").hide();
     });	
	
});




