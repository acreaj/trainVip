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

  // 监听品牌更多的点击事件
  $(".descrip-info .brand .center .hide").hide();
  
  let flagbrand = 1 ;
  $(".descrip-info .brand .slide-more").click(function(){
    if( flagbrand == 1 ) {

      $(this).children(".text").html("收起");
      $(this).children(".change").removeClass("icon-bottom1").addClass("icon-top");
      flagbrand = 0;
    }else {
      $(this).children(".text").html("更多");
      $(this).children(".change").removeClass("icon-top").addClass("icon-bottom1");
      flagbrand = 1;
    }

    $(".descrip-info .brand .center .hide").slideToggle();
  })

  // 监听种类更多的点击事件
  $(".descrip-info .kinds .center .hide").hide();
  
  let flagkind = 1 ;
  $(".descrip-info .kinds .slide-more").click(function(){
    if( flagkind == 1 ) {

      $(this).children(".text").html("收起");
      $(this).children(".change").removeClass("icon-bottom1").addClass("icon-top");
      $(".descrip-info .kinds").css("padding-bottom","17px");
      flagkind = 0;
      // console.log(flag)
    }else {
      $(this).children(".text").html("更多");
      $(this).children(".change").removeClass("icon-top").addClass("icon-bottom1");
      $(".descrip-info .kinds").css("padding-bottom","0")
      flagkind = 1;
    }

    $(".descrip-info .kinds .center .hide").slideToggle();
  })

  // 监听尺码更多的点击事件
  $(".descrip-info .size .center .hide").hide();
  
  let flagsize = 1 ;
  $(".descrip-info .size .slide-more").click(function(){
    if( flagsize == 1 ) {

      $(this).children(".text").html("收起");
      $(this).children(".change").removeClass("icon-bottom1").addClass("icon-top");
      $(".descrip-info .size").css("padding-bottom","17px");
      $(".descrip-info .size .center .hide").show();
      flagsize = 0;
      // console.log(flag)
    }else {
      $(this).children(".text").html("更多");
      $(this).children(".change").removeClass("icon-top").addClass("icon-bottom1");
      $(".descrip-info .size").css("padding-bottom","0");
      $(".descrip-info .size .center .hide").hide();
      flagsize = 1;
    }

    // $(".descrip-info .size .center .hide").slideToggle();
  })

  // 监听更多选项的点击
  $(".descrip-info .line > .hide").hide();
  let flagoption = 1 ;

  $(".option").click(function(){ 

    if( flagsize == 1 ) {

      $(this).children(".text").html("点击收起");
      $(this).children(".change").removeClass("icon-bottom1").addClass("icon-top");
      flagsize = 0;
      // console.log(flag)
    }else {
      $(this).children(".text").html("更多选项");
      $(this).children(".change").removeClass("icon-top").addClass("icon-bottom1");
      flagsize = 1;
    }
    $(".descrip-info .line > .hide").slideToggle();
  })
})

// 悬挂
let compreset= $('.compre').offset().top;
$(window).scroll(function(){
  
  let viewscroll = $("html,body").scrollTop();

  // console.log(compreset)
  if ( viewscroll > compreset) {
    $(".compre").addClass("hang");
  }else {
    $(".compre").removeClass("hang");
  }

})