$(document).ready(function () {
	$('#show-pass').mousedown(function () {
		$('#pass').removeAttr('type');
		$('#show-pass').text('visibility_off');
	});

	$('#show-pass').mouseup(function () {
		$('#pass').attr('type', 'password');
		$('#show-pass').text('visibility');
	});
});
