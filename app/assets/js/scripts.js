$(document).ready(function(){


	$('.dropdown').on('click', function(){
		$(this).toggleClass('open');
	});

	$('.navbar-toggle a').on('click', function(e){
		e.preventDefault();

		$('.navbar__items').toggleClass('open');
	});

});