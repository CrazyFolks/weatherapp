

$(document).ready(function(){
	
	// $('#splash').animate({

	// }, {
	// 	duration: 5000
	// });

	var url = "http://api.openweathermap.org/data/2.5/weather?units=metric&q=";

	$('#grad').on('change', function(){
	var grad = $(this).val();
	$('.rezultati').show();
	// console.log(grad);

	var boba = url + grad;
// console.log(boba)
		$.post( boba , function( data ) {
			// var rezultat = $.parseJSON(data);
			// console.log(data)
			var temp = data.main.temp;
			var vremenski_uslovi = data.weather[0].main;
			var max = data.main.temp_max;
			var min = data.main.temp_min;
			$('#city').text(grad);
			$('#temp').text(temp);
			$('#max').text(max);
			$('#min').text(min);
		});

	});
	
});