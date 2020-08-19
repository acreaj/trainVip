$(function(){
    $(".p-f-right").mouseover(
        function(){
            $(this).siblings(".product-left-pic-slider-img").animate({marginLeft: "0px"},350);
        }
      )
      $(".p-f-left").mouseover(
        // 点击向左
        function(){
            $(this).siblings(".product-left-pic-slider-img").animate({marginLeft: "-241px"},350);
        }
      ) 
	  //显示城市
	  $(function(){
	       $(".product-dlevery-lcation").bind("click",function(){
	           $('.chengshi').css('display',"block");
			   $(".chengshi-icon").addClass("icon-top");
			   $(".chengshi-icon").removeClass("icon-bottom1");
			   $('.product-dlevery-lcation').css('border-bottom',"none");
	       });
	   });
	   $(document).click(function(){
	       $(".chengshi").css('display',"none");
		   $(".chengshi-icon").addClass("icon-bottom1");
		   $(".chengshi-icon").removeClass("icon-top");
		   $('.product-dlevery-lcation').css('border-bottom',"#ccc 1px solid");
	  });
	  /*阻止冒泡*/
	   $(".product-dlevery-lcation").click(function(event){
	      event.stopPropagation();
	   });
    
      //推荐模块
      $(".recommand-user-info").hover(
        // 鼠标移入
        function(){
            $(this).children(".recommand-span").animate({width:32},400);
        },
        // 鼠标移出
        function(){ 
            $(this).children(".recommand-span").animate({width:0},400);
        })

        // 悬挂
        let compreset= $('.detail-nav').offset().top;
        $(window).scroll(function(){
			let viewscroll = $("html,body").scrollTop();
			if ( viewscroll > compreset){
				$(".detail-nav").addClass("fixtop");
				$(".detail-nav ul").addClass("fixUrl");
				$(".detail-nav ul li").css("width",'112px');
				$(".topprice").css("display",'block');
			}else {
				$(".detail-nav").removeClass("fixtop");
				$(".detail-nav ul").removeClass("fixUrl");
				$(".detail-nav ul li").css("width",'120px');
				$(".topprice").css("display",'none');
        }
        })

})
