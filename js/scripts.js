
$('a i').addClass('big icon');

$(window).resize(function(){
	if ($(window).width() <= 800){
		$('header#large img').removeClass('hide');
		$('header#corner img').addClass('hide')}

	else {$('header#corner img').removeClass('hide');
		$('header#large img').addClass('hide')}
});

$(window).resize(function(){
	if ($(window).width() <= 480){
		$('ul.column').removeClass('center aligned');
		$('ul.column').addClass('center aligned')}

	else {$('ul.column').removeClass('center aligned');
		$('ul.column').addClass('center aligned')}
});

$(document).ready(function() {
	$(".fancybox").fancybox({
		openEffect	: 'fade',
		closeEffect	: 'none',
		nextEffect  : 'none',
		prevEffect  : 'none',
		padding     : 'none',
		helpers : {
        	title: {
            		type: 'outside'
        			}
 		   	}

	});
});

$('.ui.accordion')
  .accordion()
;

$('.ui.accordion').accordion('refresh');

