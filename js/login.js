$(function(){	
	
			$(".login-from").hide();
			$(".QR-img-mask").hide();
			$(".guide-img").hide();
			$(".left-tab").click(function(){
				$(".login-code").show();
				$(".login-from").hide();
				$(".left-tab").css("color","#f10180");
				$(".right-tab").css("color","#000");
			})
			$(".right-tab").click(function(){
				$(".login-from").show();
				$(".login-code").hide();
				$(".right-tab").css("color","#f10180");
				$(".left-tab").css("color","#000");
			})
			
			$(function(){
				setTimeout(function(){
					$(".QR-img-mask").show();
				},6000);
			})
			
			
			$(".timeout-button").click(function(){
				$(".QR-img-mask").hide();
				$(function(){
					setTimeout(function(){
						$(".QR-img-mask").show();
					},6000);
				})
			})
			
			$(function(){
				$(".QR-img").hover(function(){
					$(".QR-img").stop().animate({left:'30px'});
					$(".guide-img").fadeIn(1500).show();
				},function(){
					$(".QR-img").stop().animate({left:'90px'});
					$(".guide-img").hide();
				})
			})
			
			$(".panel-footer-more .close").hide();
			$(".item-more").hide();
			$(".panel-footer-more .more").click(function(){
				$(".item-more").show();
				$(".panel-footer-more .more").hide();
				$(".panel-footer-more .close").show();
			})
			$(".panel-footer-more .close").click(function(){
				$(".item-more").hide();
				$(".panel-footer-more .close").hide();
				$(".panel-footer-more .more").show();
			})
			
})	