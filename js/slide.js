$(function(){

  $(".user").hover(
    // 鼠标移入
    function(){
      $(this).children(".count").animate({right:'30px'},350);
    },
    // 鼠标移出
    function(){
      $(this).children(".count").animate({right:'-300px'},350);
    }
  )
  // 可优化
  $(".operation li").hover(
    // 鼠标移入
    function(){
      $(this).children("p").animate({right:'30px'},350);
    },
    // 鼠标移出
    function(){
      $(this).children("p").animate({right:'-100px'},350);
    }
  )
  
  $(".bottom li").hover(
    // 鼠标移入
    function(){
      $(this).children("p").animate({right:'30px'},350);
    },
    // 鼠标移出
    function(){
      $(this).children("p").animate({right:'-100px'},350);
    }

  ) 
  
  // 回到顶部
  $(".bottom .gotop").click(function(){
    $("html,body").animate({scrollTop:"0"},300);
  })

})

