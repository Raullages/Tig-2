$(document).ready(function(){

	$("#home-sec h1").on("mouseover", function(){

		$("#home-sec h1").addClass("ativo");

	}).on("mouseout", function(){

		$("#home-sec h1").removeClass("ativo");

	});

	$("#title h1").on("mouseover", function(){

		$("#title h1").addClass("effect");

	}).on("mouseout", function(){

		$("#title h1").removeClass("effect");

	});	

	/*-----ATIVOS-----*/

	$("#home-menu").on("click", function(){

		$("#home-menu").addClass("efeito-ativo");

		console.log("oi");
		/*alert("Olá Mundo");*/
	})

	/*-----ATIVOS-----*/

	$("#button-dropdown").on("click", function(){

		$('#homesection-span').animatescroll({scrollSpeed:1000});

	})


	$("#example").on("click", function(){

		$('#testimonial-sec').animatescroll({scrollSpeed:1500});

	})

	$("#contato").on("click", function(){

		$('#footer-sec').animatescroll({scrollSpeed:2000});

	})
/*
	$("#about-men").on("click", function(){

		$('#clients-sec').animatescroll({scrollSpeed:1000});


	})
*/

	$("#jq-list").on("click", function(){

		$('#top-menu').animatescroll({scrollSpeed:1000});

	})

	$("#gephi-list").on("click", function(){

		$('#jjjjq').animatescroll({scrollSpeed:1000});


	})

	$("#javascript-list").on("click", function(){

		$('#gphiii').animatescroll({scrollSpeed:1000});


	})

	$("#slab-list").on("click", function(){

		$('#jvsc').animatescroll({scrollSpeed:1000});

	})

	$("#linkedin-list").on("click", function(){

		$('#slba').animatescroll({scrollSpeed:1000});

	})

/*	$("#clients-sec").on("click", function(){

		$('#clients-sec').animatescroll({scrollSpeed:1000});

	}) */

	$("#ferramentas-new").on("click", function(){

		$('#ferramentas-new').animatescroll({scrollSpeed:1000});

	})
	
	$("#tools-menu").on("click", function(){

		$('#ferramentas-new').animatescroll({scrollSpeed:1000});

	})


	$("#btn-topo").on("click", function(){

		$('header').animatescroll({scrollSpeed:1000});

	})
	
	$("#new-about").on("click", function(){

		$('#new-about').animatescroll({scrollSpeed:1000});

	})
	
	$("#about-men").on("click", function(){

		$('#new-about').animatescroll({scrollSpeed:1000});

	})

	
	
	


	$("#button-dropdown").on("click",function(){
		
		$("#clients-sec").addClass("efeito");

	}).on("blur", function(){

		$("#clients-sec").removeClass("efeito");

	});
	
	$("#button-xs-dropdown").on("click",function(){
		
		$("#clients-sec").addClass("efeito");

	}).on("blur", function(){

		$("#clients-sec").removeClass("efeito");

	});

	$("#owl-demo").owlCarousel({
 
	    navigation : true, // Show next and prev buttons
	    slideSpeed : 300,
	    paginationSpeed : 400,
	    singleItem:true
    // 	autoPlay: 3000, //Set AutoPlay to 3 seconds

 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
    });
	
	
	/*$("#pesquisar").on("click",function(){
		$("#clients-sec").css("margin-top","700px");
		$("#area-atuacao").css("visibility","visible");
		$("#area-atuacao").addClass("col-md-10 col-md-offset-1");
		$(".jumbotron").css("height","600px");
		$(this).css("visibility","hidden");
		$("#pesquisar1").css("visibility","visible");
		
	});
	*/
	

});