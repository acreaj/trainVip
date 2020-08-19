    /*顶部导航*/
     //改变顶部字体颜色
    $(function(){
        $('.login,.register,.sign,.order,.disaccount,.club,.service,.tel-version,.more').mouseover(function(){
            $(this).find('.top-nav-a').css("color","#F10180");
        }).mouseout(function(){
            $(this).find('.top-nav-a').css("color","#666");
        })
        //改变顶部三角符号样式
        $('.disaccount,.club,.service,.more').mouseover(function(){
            $(this).find('i').removeClass('i-rotate1');
            $(this).find('i').addClass('i-rotate');
            $(this).find('i').css("color","#F10180");
        }).mouseout(function(){
            $(this).find('i').css("color","#666");
            $(this).find('i').removeClass('i-rotate');
            $(this).find('i').addClass('i-rotate1');
        })
         //改变为元素“/”图片样式
        $('.login,.sign,.disaccount,.club,.service,.tel-version,.more').mouseover(function(){
            $(this).css({"border":'1px solid #cdcdcd','border-bottom':'none'});
            $(this).removeClass("xie");
        }).mouseout(function(){
            $(this).find('.top-nav-a').css("color","#666");
            $(this).addClass("xie");
            $(this).css("border",'none');
        })
        /*登录提示的显示与隐藏*/
        $('.login,.sign,.disaccount,.club,.service,.tel-version,.more').mouseover(function(){
            $(this).children(".det").show();
        }).mouseout(function(){
            $(this).children(".det").hide();
        })
        /*改变购物袋数量*/
        $(".cart-content").mouseover(function(){
            $(".num").text("0");
        })
        /*显示历史记录*/
        $(function(){
            $(".iform-input").bind("click",function(){
                $('.search-hisotry').css('display',"block");
            });
        });
        $(document).click(function(){
            $(".search-hisotry").css('display',"none");
       });
       /*阻止冒泡*/
        $(".iform-input").click(function(event){
           event.stopPropagation();
        });
        /*控制商品分类的详细菜单*/
        $('.divide-category,.details-nav,.details-category-col1,.details-category-col2').mouseover(function(){
            $(".details-nav, .main-nav-details").show();
        }).mouseout(function(){ 
            $(".details-nav, .main-nav-details").hide();
        });
        /*控制推荐品牌的样式*/
        $('.category-col2-brand').mouseover(function(){
            $(this).css("border","solid 1px #fa2a83");
        }).mouseout(function(){
            $(this).css("border","solid 1px #fff");
        })
        /*控制二级菜单的显示与隐藏*/
        $(".details-nav-link-item-tit").mouseover(function(){
            var tagId = $(this).attr("id");
            var cateilsId = "#cate" + tagId;
            $(cateilsId).show().siblings().hide();
        })
        //更多
        $("#gengduo-nav-li,#gengduo-nav,.gengduo-group-na,.main-gengduo-group").mouseover(function(){
            $(".main-gengduo-group").show();
            $("#gengduo-nav-li").css("box-shadow","0 -2px 3px 0 rgba(0,0,0,.06)");
        }).mouseout(function(){
            $(".main-gengduo-group").hide();
            $("#gengduo-nav-li").css("box-shadow",'none');
        })
    })
     