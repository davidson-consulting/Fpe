// Textarea 1
$('#t1').each(function(){
    autosize(this);
}).on('autosize:resized', function(){
	var v1 = $('#t1').height();
	var v2 = $('#t2').height();
	var v3 = $('#t3').height();
	var v = (v1 > ((v2 > v3) ? v2 : v3)) ? v1 : ((v2 > v3) ? v2 : v3);
	$('#t1').css('height', v+4);
	$('#t2').css('height', v+4);
	$('#t3').css('height', v+4);
});	

// Textarea 2
$('#t2').each(function(){
    autosize(this);
}).on('autosize:resized', function(){
	var v1 = $('#t1').height();
	var v2 = $('#t2').height();
	var v3 = $('#t3').height();
	var v = (v1 > ((v2 > v3) ? v2 : v3)) ? v1 : ((v2 > v3) ? v2 : v3);
	$('#t1').css('height', v+4);
	$('#t2').css('height', v+4);
	$('#t3').css('height', v+4);
});	

// Textarea 3
$('#t3').each(function(){
    autosize(this);
}).on('autosize:resized', function(){
	var v1 = $('#t1').height();
	var v2 = $('#t2').height();
	var v3 = $('#t3').height();
	var v = (v1 > ((v2 > v3) ? v2 : v3)) ? v1 : ((v2 > v3) ? v2 : v3);
	$('#t1').css('height', v+4);
	$('#t2').css('height', v+4);
	$('#t3').css('height', v+4);
});