$(function(){
  // 监听价格的点击事件
  $(".compre .price-range input").focus(function(){
    $(this).css({"box-shadow":"0 0 3px #ddd"})
    $(this).parent().css({"border":"1px solid #ddd","box-shadow":"0 0 3px #ddd"})
    $(this).siblings("button").css("display","inline-block")
  })

  $(".compre .price-range input").blur(function(){
    $(this).css({"box-shadow":"none"})
    $(this).parent().css({"border":"none","box-shadow":"none"})
    $(this).siblings("button").css("display","none")
  })

  // 监听更多的点击事件
  $(".descrip-info .brand .center .hide").hide();
  
  let flag = 1 ;
  $(".descrip-info .brand .more").click(function(){
    if( flag == 1 ) {

      $(this).children(".text").html("收起");
      $(this).children(".change").removeClass("icon-bottom").addClass("icon-top");
      flag = 0;
      console.log(flag)
    }else {
      $(this).children(".text").html("更多");
      $(this).children(".change").removeClass("icon-top").addClass("icon-bottom");
      flag = 1;
      console.log(flag)
    }

    $(".descrip-info .brand .center .hide").slideToggle();
  })

})

let compreset= $('.compre').offset().top;
$(window).scroll(function(){
  
  let viewscroll = $("html,body").scrollTop();

  console.log(compreset)
  if ( viewscroll > compreset) {
    $(".compre").addClass("hang");
  }else {
    $(".compre").removeClass("hang");
  }

})