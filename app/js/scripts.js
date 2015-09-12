$(document).ready(function(){


	var $parent = $("#navSearch");
	var $link = $parent.find('a');
	var $form = $parent.find('form');

	$link.on('click', function(e){
		e.preventDefault;
		$parent.toggleClass('opened');

		if ($parent.hasClass('opened')) {
			$form.find('input').focus();
		}
	});

	$(document).keyup(function(e) {
		if (e.keyCode == 27) { 
			var $form = $('#navSearch');

			if ($form.hasClass('opened')) {
				$form.removeClass('opened');
			}
		}
	});


});