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


});