$('i').addClass('big icon');

$(window).resize(function(){
	if ($(window).width() <= 800){	
		$('header.column.row img').removeClass('left floated').addClass('ten wide center aligned');
		$('header.column.row').addClass('center aligned')}
    
   	else {$('header.column.row img').addClass('left floated').removeClass('ten wide center aligned')}	
});