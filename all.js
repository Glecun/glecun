$( document ).ready(function() {
	//load loader
	componentHandler.upgradeElement(document.getElementsByClassName('mdl-spinner')[0]);

	//is_firefox
	var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
	
  	//loader
	$('.loader').delay(2000).fadeOut(400);

	//Masonry
	$('#masonry').masonry({
	isFitWidth: true,
	gutter: 10
	});
	setTimeout(function () {
		$('#masonry').masonry({
		isFitWidth: true,
		gutter: 10
		});
	}, 50);

	//years of xp
	var yearOfXp = new Date().getFullYear() - 2012
	$('#years-of-experience')[0].innerText = yearOfXp;

	//fullPage
	$('#fullpage').fullpage({
		anchors:['welcome', 'aboutMe', 'formation','skills','projects','contact'],
		autoScrolling: false,
		fitToSection: false,
		afterLoad: function(anchorLink, index){
            var loadedSection = $(this);

            //using anchorLink
            if(anchorLink == 'aboutMe'){
				$.fn.fullpage.setAllowScrolling(false);
				$.fn.fullpage.setKeyboardScrolling(false);
				$("#imgMe").show();
                $("#me").fadeIn(300);
				$( ".whitediv" ).removeClass("active");
				setTimeout(function(){
				  $( "#horLigne1" ).show("clip",{ direction: "horizontal" },700);
				  $( "#verticalLigne1" ).show("blind",null ,500);
				  if ( is_firefox ) {
				    $(".ui-effects-wrapper").css("width", "auto");
				  }
				}, 300);
				setTimeout(function(){
				  	$('#aboutMeinfo').fadeIn(300);
				}, 800);
				setTimeout(function(){
					$( "#verticalLigne2" ).show("blind",null,500);
					if ( is_firefox ) {
						$(".ui-effects-wrapper").css("width", "auto");
					}
				}, 1100);
				setTimeout(function(){
					$('#butCv').fadeIn(400);
				}, 1600);
				setTimeout(function(){
					$.fn.fullpage.setAllowScrolling(true);
					$.fn.fullpage.setKeyboardScrolling(true);
				}, 1600);
            } else {
				$("#imgMe").fadeOut(200);
				$("#me").fadeOut(200);
				$( ".whitediv" ).addClass("active");
				$('#horLigne1').fadeOut(200);
				$('#verticalLigne1').fadeOut(200);
				$('#aboutMeinfo').fadeOut(200);
				$('#verticalLigne2').fadeOut(200);
				$('#butCv').fadeOut(200);
			}
			if(anchorLink == 'projects'){
				$('#masonry').masonry({
					isFitWidth: true,
					gutter: 10
				});
				
				$(".sysDR").parent().mouseover(function() {
						$(this).children('.sysDR').css("background-image", 	"url('img/sysr.gif')");
					}).mouseleave(function(){
						$(this).children('.sysDR').css("background-image", "url('img/SysDR.png')");
					}	
				);
				$(".spaceInvaders").parent().mouseover(function() {
						$(this).children('.spaceInvaders').css("background-image", 	"url('img/spaceInvaders.gif')");
					}).mouseleave(function(){
						$(this).children('.spaceInvaders').css("background-image", "url('img/spaceInvaders.png')");
					}	
				);
				
				$(".vaispace").parent().mouseover(function() {
						$(this).children('.vaispace').css("background-image", 	"url('img/vaispace.gif')");
					}).mouseleave(function(){
						$(this).children('.vaispace').css("background-image", "url('img/vaispace.png')");
					}	
				);
				$(".stars").parent().mouseover(function() {
						$(this).children('.stars').css("background-image", 	"url('img/stars.gif')");
					}).mouseleave(function(){
						$(this).children('.stars').css("background-image", "url('img/stars.png')");
					}	
				);
				$(".glecuntech").parent().mouseover(function() {
						$(this).children('.glecuntech').css("background-image", "url('img/glecuntech.gif')");
					}).mouseleave(function(){
						$(this).children('.glecuntech').css("background-image", "url('img/glecuntech.png')");
					}	
				);
				$(".gameMaker").parent().mouseover(function() {
					$(this).children('.gameMaker').css("background-image", "url('img/gameMaker.gif')");
				}).mouseleave(function(){
						$(this).children('.gameMaker').css("background-image", "url('img/gameMaker.png')");
					}
				);
				
			}
        }
	});

	// Go Top
	$(window).scroll(function() {
		const top = $(".section[data-anchor='aboutMe']").position().top + 100;
		if ($(this).scrollTop() > top && $('.go-top').css('display') === 'none') {
			$('.go-top').css("display", "flex").hide().fadeIn(200);
		}
		if ($(this).scrollTop() <= top && $('.go-top').css('display') === 'flex') {
			$('.go-top').fadeOut(200);
		}
	});
	$('.go-top').click(function(event) {
		event.preventDefault();
		const top = $(".section[data-anchor='aboutMe']").position().top;
		$('html, body').animate({scrollTop: top}, 300);

	})

});
