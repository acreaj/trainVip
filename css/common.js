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
	
	// function reinitIframe() { 
	// var iframe = document.getElementById("urlIframe"); 
	// try 
	// { 
	// var bHeight = iframe.contentWindow.document.body.scrollHeight; 
	// iframe.height = bHeight; 
	// } catch (ex) { } 
	// }
	
	// $("#top_ad").hide();
	// setTimeout(function(){
	// 	window.scroll(0,0);
	// 	$("#top_ad").slideDown();
	// },3000)
	// $("#top_ad .close").click(function(){
	// 	$("#top_ad").slideUp(); 
	// })
	
	$(".index-nav-sort .curr").click(function(){
		window.scroll(0,1500);
	})
	
	$(".index-nav-sort .index-nav-item").click(function(){
		window.scroll(0,1850);
	})
})	
