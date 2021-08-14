$( document ).ready(function() {
	//load loader
	componentHandler.upgradeElement(document.getElementsByClassName('mdl-spinner')[0]);

	//is_firefox
	var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
	
  	//loader
	$('.loader').delay(2000).fadeOut(400);

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
				showGifOnMouseHover = (name) => {
					$("." + name).parent().mouseover(function () {
						$(this).children("." + name).css("background-image", "url('img/" + name + ".gif')");
					}).mouseleave(function () {
							$(this).children("." + name).css("background-image", "url('img/" + name + ".png')");
						}
					);
				}
				["sysDR", "spaceInvaders", "vaispace", "stars", "glecuntech", "gameMaker", "sibyllaReward"]
					.forEach(value => showGifOnMouseHover(value))
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
