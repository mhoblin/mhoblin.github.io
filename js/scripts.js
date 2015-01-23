$('i').addClass('big icon');

$(window).resize(function(){
	if ($(window).width() <= 800){	
		$('header#corner img').addClass('hide');
		$('header#large img').removeClass('hide')}

	else {$('header#large img').addClass('hide');
			$('header#corner img').removeClass('hide')}
});

