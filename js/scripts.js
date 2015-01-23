$('i').addClass('big icon');

$(window).resize(function(){
	if ($(window).width() <= 800){
		$('header#large img').removeClass('hide');
		$('header#corner img').addClass('hide')}

	else {$('header#corner img').removeClass('hide');
		$('header#large img').addClass('hide')}
});

