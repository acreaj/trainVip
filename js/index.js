
//倒计时
var count = 60 * 15;
var countdown = setInterval(CountDown, 1000);
function CountDown() {
    if (count >= 0) {
        var minutes = Math.floor(count / 60);
        var seconds = Math.floor(count % 60);
		document.getElementById('J-sp-time-M').innerHTML=minutes;
		document.getElementById('J-sp-time-S').innerHTML=seconds;
        --count;
    } else {
        clearInterval(countdown);
    }
}

$(function(){
	$(window).scroll(function(){
		let viewscroll = $(window).scrollTop();
		console.log(viewscroll);
		if ( viewscroll > 400){
			console.log(1);
			$(".fix-left-nav").show();
		}else {
			console.log(3);
			$(".fix-left-nav").hide();
		}
	})
})
//轮播图
$(function(){
	
	var imgarr = ['./images/home/s1.jpg','./images/home/s2.jpg'];
	
	var current = 0;
	
	$("#icon a").eq(0).css("background","#000");
	
	$("#icon a").mouseover(function(){
		console.log("当前悬停的是第"+$(this).index()+"个icon小图标");
		var i = $(this).index();
		changeimg(i);
	})
	
	$("#bannerbox .left").click(function(){
		var nowi = current-1;
		if(nowi<=-1) {
			nowi = 4;
		}
		changeimg(nowi);
	})
	$("#bannerbox .right").click(function(){
		var nowi = current+1;
		if(nowi>=5) {
			nowi = 0;
		}
		changeimg(nowi);
	})
	
	var timerid = setInterval(function(){
		$("#bannerbox .right").click();
	},1000);
	
	$("#bannerbox").mouseover(function(){
		clearInterval(timerid);
	})
	// $(".infour-img").mouseout(function(){
	// 	timerid = setInterval(function(){
	// 		$(".infour-img .after").click();
	// 	},1000);
	// })
	$("#bannerbox").mouseout(function(){
		timerid = setInterval(function(){
			$("#bannerbox .right").click();
		},1000);
	})
	
	function changeimg(i){
		$("#bannerimg").attr("src",imgarr[i]);
		$("#icon a").eq(i)
		.css("background","#000")
		.siblings()
		.css("background","#fff");
		current = i;
	}
	
	
	// $(".icon-like").click(function(){
	// 	window.scroll(0,1500);
	// })
	
	// $("fix-left-nav .index-nav-item").click(function(){
	// 	window.scroll(0,1850);
	// })
})	
