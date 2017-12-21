$.fn.passwordStrength = function(options){
	var PW_Strength;
	return this.each(function(){
		var that = this;that.opts = {};
		that.opts = $.extend({}, $.fn.passwordStrength.defaults, options);
		
		that.div = $(that.opts.targetDiv);
		that.defaultClass = that.div.attr('class');
		
		that.percents = (that.opts.classes.length) ? 100 / that.opts.classes.length : 100;
		 v = $(this).keyup(function(){
			if( typeof el == "undefined" )
				this.el = $(this);
			var s = getPasswordStrength (this.value);
			var p = this.percents;
			var t = Math.floor( s / p );			
			if( 100 <= s ) t = this.opts.classes.length - 1;
			PW_Strength = t+1;
			this.div.removeAttr('class').addClass( this.defaultClass ).addClass( this.opts.classes[ t ]);	
		});
		 
	   //光标失焦
	  //  $(this).blur(function(){
			// CheckPW($(this));			 
	  //  });
	});
	
	function CheckPW(obj){
	  if(obj.val().length<6){
		  // alert('密码长度太短!');
		  obj.select();
		  return false;
	  }
	  if(PW_Strength<8){
		// alert('密码强度不够，建议重设！');
		obj.select();
		return false;
	  }
	}
	//获取密码强度
	function getPasswordStrength(H){
        var D=(H.length);
        var E;
        if(D == 1){ // 输入一个字符的时候
            E=1;    // 显示一个 强度
        }
        if(D==2){  // 输入2个字符的时候
            E=10;  // 显示2个 强度
        }
        if(D==3){  // 输入2个字符的时候
            E=20;  // 显示3个 强度
        }

        if(D>3 && D<7){  // 输入 3到 7 之间
            E=20;        // 5个 强度
        }
        var num =  /^\d+$/;
            if(num.test(H)  && D>=7){ // 纯数字 时
                E=20;  // 5个 强度
                // $('.p_tishi2').show();
            }
        var zm = /^[A-Za-z]+$/;
            if(zm.test(H)  &&  D>=7){  // 纯字母 时

                E=40;  // 5个 强度
            }
         var zh = /[A-Za-z]+[0-9]+/;
        if(zh.test(H)  &&  D>=7){   // 字母 加 数字  时
            E=70;
        }
        var n_z = /[0-9]+[A-Za-z]+/;
        if(n_z.test(H)  &&  D>=7){  //  数字 加 字母  时

            E=70;
        }


        //  字母 + 特殊符号 +  字母
        var z_m = /(^[A-Za-z]+)([^A-Za-z0-9]+)([A-Za-z]+)$/;

        if(z_m.test(H) && D>=7){
           E=70;
        }

        //  字母 + 特殊符号

        var t_s_z = /(^[A-Za-z]+)([^A-Za-z0-9]+)$/

        if(t_s_z.test(H)  && D>=7 ){
            E=60;
        }

        //  数字 + 特殊符号 +  数字

        var sz_t = /(^[\d]+)([^A-Za-z0-9]+)([\d]+)$/;
        if(sz_t.test(H)  && D>=7 ){
            E=70
        }

        //  数字 + 特殊符号

        var sz_ts = /(^[\d]+)([^A-Za-z0-9]+)$/;

        if(sz_ts.test(H)  && D>=7 ){
            E=60;
        }

        // 特殊符号 +  数字

        var ts_sz = /(^[^A-Za-z0-9]+)([\d]+)$/

        if(ts_sz.test(H)  && D>=7){
            E=60
        }
        // 特殊符号 +  字母

        var ts_zu = /(^[^A-Za-z0-9]+)([A-Za-z]+)$/;
        if(ts_zu.test(H)  && D>=7){
            E=60
        }
        // 字母 + 数字 + 特殊符号
        var gh = /(?=.*[\d]+)(?=.*[A-Za-z]+)(?=.*[^A-Za-z0-9]+)/;

          if(gh.test(H)  && D>=7){

              E=100
          }




        return E


	}

};
	
$.fn.passwordStrength.defaults = {
	classes : Array('is10','is20','is30','is40','is50','is60','is70','is80','is90','is100'),//样式�?
	targetDiv : '#passwordStrengthDiv',
	cache : {}
    
}
$.passwordStrength = {};
$.passwordStrength.getRandomPassword = function(size){
		var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
		var size = size || 8;
		var i = 1;
		var ret = ""
		while ( i <= size ) {
			$max = chars.length-1;
			$num = Math.floor(Math.random()*$max);
			$temp = chars.substr($num, 1);
			ret += $temp;
			i++;
		}
		return ret;			
}

