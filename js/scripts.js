	$(document).ready(function() {
		$(".fancybox").fancybox();
	});



$('i').addClass('big icon');

$(window).resize(function(){
	if ($(window).width() <= 800){
		$('header#large img').removeClass('hide');
		$('header#corner img').addClass('hide')}

	else {$('header#corner img').removeClass('hide');
		$('header#large img').addClass('hide')}
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

$(".fancybox").fancybox({

});

