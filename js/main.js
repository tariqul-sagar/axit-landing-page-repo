$(document).ready(function(){
	
	$('#tab-one').addClass('active-tab');
	$('#body-two').hide();
	$('#body-three').hide();

	$('#tab-one').click(function(){
		$('#tab-one').addClass('active-tab');
		$('#tab-two').removeClass('active-tab');
		$('#tab-three').removeClass('active-tab');
		$('#body-one').show();
		$('#body-two').hide();
		$('#body-three').hide();	
	});

	$('#tab-two').click(function(){
		$('#tab-one').removeClass('active-tab');
		$('#tab-two').addClass('active-tab');
		$('#tab-three').removeClass('active-tab');
		$('#body-one').hide();
		$('#body-two').show();
		$('#body-three').hide();	
	});

	$('#tab-three').click(function(){
		$('#tab-one').removeClass('active-tab');
		$('#tab-two').removeClass('active-tab');
		$('#tab-three').addClass('active-tab');
		$('#body-one').hide();
		$('#body-two').hide();
		$('#body-three').show();	
	});
});