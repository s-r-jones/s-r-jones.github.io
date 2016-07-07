$(document).ready(function(){
	jQuery.ajax( {
		url: 'http://freegeoip.net/json/',
		type: 'POST',
		dataType: 'jsonp',
		success: function(location) {
			jQuery("#city").html(location.city);
		}
	});


	clock = $('#clock').FlipClock({
		clockFace: 'HourlyCounter',
		countdown: true,
	});
	clock.setTime(3600);
	clock.start();

	ouibounce(document.getElementById('bounce-modal'));


});