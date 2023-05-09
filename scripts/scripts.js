

// Botão voltar ao top

	$(document).scroll(function () {
		var sc = $(this).scrollTop();
		if (sc > 50) {
			$('#Top').fadeIn('slow'); // aparece
			$('#back_to_top').animate({'opacity':'0.5'},150); //opacidade
			$('#back_to_top').removeClass('visibility');//visibilidade
			
		} else {
			$('#backToTop').fadeOut('slow');
			$('#back_to_top') .animate({'opacity':'0'},20);//opacidade
			$('#back_to_top').addClass('visibility');//visibilidade
		}
		
		$('#back_to_top').mouseover(function(){ // rato em cima 
			$(this).css('opacity','1');// rato opacidade total
			
	}).mouseout(function(){
			$(this).css('opacity','0.2');// rato metade opacidade
		});			
		
		
	$('#top').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 1300);
		disable();
	 });

	});
	
	
	
// --Fim do script --

// Pesquisar toggle
$(document).ready(function() {
	$.fx.speeds.xslow = 300; // tempo de aperecer 0.3s
	
 $("#search-icon").click(function(e) {
        $(".search-box").toggle('xslow');
		$("#search-icon").hide('arrow-tt');// desaparecer Div
	  event.stopPropagation(); // faz com que nao esteja sempre a desaparecer 
    });
	
	$('div#box').click(function(e){
        e.stopPropagation(); // Ao clicar pára
    });
	
    $(window).click(function(){
        $('div#box').hide('xslow');// Ao fora desaparece a div
		$("#search-icon").show('arrow-tt');// Aparecer Div
    });
	
		
	$('.srch_box').keypress(function(e){
        if(e.which == 13){// Tecla Enter
            alert('Eieee, conseguiste muito bem! :D .|.'); // ao carregar enter diz ("dsadad")
        }
    });
	
});
	
//clica mostra formulario de log in 
jQuery(document).ready(function() {
            	$('#lg-in').click(function(){
					$('#lg-form').fadeIn('slow');
					$('#lg-form').css('display','block');
					$(this).css('background','#BDBDBD');
					$(this).css('padding-bottom','2px');
					$(this).css('color','#3F3F3F');
				});
            	$('#lg-form').mouseleave(function(){
					$(this).fadeOut(300);
					$('#lg-in').css('background','');
					$('#lg-in').css('color','');
					$('#lg-in').css('padding-bottom','0');
				});
		});

	
// Rato em cima da div dos género fica com classe do Hover	
jQuery(document).ready(function() {
	$('ul.menu .submenu').mouseenter(function(){//rato em cima da div
		$('ul.menu  li #cat').addClass('menu-hv');//remove a class
		});	
			$('ul.menu .submenu').mouseleave(function(){//rato fora da div
		$('ul.menu  li #cat').removeClass('menu-hv');//remove a class
		
	});
  });
  

//Popup video from Trailer

jQuery(document).ready(function() {
		
	$(".trailer").click(function() {
		$.fancybox({
			autoScale		: false,
			transitionIn	: 'fade',
			transitionOut	: 'fade',
			title		: this.title,
			centerOnScroll: 'false',
			width			: 800,
			height			: 500,
			href			: this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
			type			: 'swf',
			swf				: {
			wmode			: 'transparent',
			allowfullscreen	: 'true'
			}
		});
		return false;
	});
	
});

// Pop Up imagens
$(document).ready(function(){
    $(".fancy-images").fancybox({
        openEffect: "none",
        closeEffect: "none",
		transitionIn : 'elastic',
	    transitionOut : 'elastic',
    });
});

//Tabs da pagina de filmes   
$(document).ready(function() {
    $(".tabs-menu a").click(function(event) {
        event.preventDefault();
		jwplayer('player').stop();
		jwplayer('player2').stop();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");

       	 var tab = $(this).attr("href"); 
        $(".tab-content").not(tab).css("display", "none");
        $(tab).fadeIn('slow');
    });
});
   
//Clique para mostrar div do video

$(document).ready(function() {
	$('#tabs-container').hide();
	$('#comments').hide();
		$('#clicktosee').click(function(){
			$('#tabs-container').show();
			$('#comments').show();
			$('#clicktosee').css('display','none');
		});
});

//Desligar/ligar as luzes
function toggle () {
			var shadow = document.getElementById("shadow");
			if (shadow.style.display != "block")
				shadow.style.display = "block";
			else
				shadow.style.display = "none";
		}

			$(function() {
				$( ".lights" ).click(function() {
				  $( this ).toggleClass( "lights-off");
				});
			  });
			  
			  
// registo ver se as passwords correspondem 

$(document).ready(function() {
  $("#conf-password").keyup(validate);
});

//rato cima  da caixa desaparece placeholder
$(':input').removeAttr('placeholder');


	// caso dê erro a escrever aparece estas mesnsagens 
function InvalidMsgUser(textbox) {if (textbox.value == '') {textbox.setCustomValidity('Insira um pseudômino');}else {
textbox.setCustomValidity('');}return true;}
function InvalidMsgEmail(textbox) {if (textbox.value == '') {textbox.setCustomValidity('Escreva o email corretamente!');}else {textbox.setCustomValidity('');}return true;}
function InvalidMsgPassword(textbox) {if (textbox.value == '') {textbox.setCustomValidity('Use letras grandes, números e simbolos!');}else {textbox.setCustomValidity('');}return true;}
function InvalidMsgConfirmPass(textbox) {if (textbox.value == '') {textbox.setCustomValidity('Volte a Escrever a palavra passe');}else {textbox.setCustomValidity('');}return true;}


function validate() {
  var password1 = $("#rg-password").val(); 
  var password2 = $("#conf-password").val();

    $('#rg-block input[type=password]').blur(function () {
  if ($('input:text').is(":empty")) {
    $(".divCheckPasswordMatch").hide();}

	if( this.value != ''){
                   $('.divCheckPasswordMatch').show(); 
              }
              else{
                   $('.divCheckPasswordMatch').hide(); 
             }
});
 
    if(password1 == password2) {
       $(".divCheckPasswordMatch").text("As Palavra-passes correspondem!"); 
       $(".divCheckPasswordMatch").css("color","green"); 
    }
    else {
        $(".divCheckPasswordMatch").text("As Palavra-passes não correspondem!");
       $(".divCheckPasswordMatch").css("color","red"); 
    }
    
}
