$(document).ready(function() {

// Load location weather if available.
	if (navigator.geolocation){
		navigator.geolocation.getCurrentPosition(showPosition);
	} else {
		$("#location").html("<p>Could not retrieve location.</p>");
    $("#weather-icon").html("<i class='wi wi-na'></i>");
	}

	function showPosition (position){
		loadWeather(position.coords.latitude+','+position.coords.longitude);
	}
  
});

function loadWeather(lat, long) {
  $.simpleWeather({
    location: lat,
    woeid: long,
    unit: 'c',
    success: function(weather) {
      
      $("#location").html("<p>" + weather.city + ", " + weather.region + "</p>");
    	$("#weather-icon").html("<i class='wi "
    													+ getWeatherIcon(parseInt(weather.code))
    													+ "'></i>");
    	$("#description").html("<p>" + weather.text + "</p>");
    	$("#temperature").html("<p>" + weather.temp + "&#8451;/ " + weather.alt.temp + "&#8457;</p>");

    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });

}

function getWeatherIcon (code){
	var icon;

	switch(code) {
		case 0:
			icon = "wi-tornado";
			break;
			
		case 1:
			icon = "wi-storm-showers";
			break;
			
		case 2:
			icon = "wi-hurricane";
			break;
			
		case 3:
			icon = "wi-lightning";
			break;
			
		case 4:
			icon = "wi-thunderstorm";
			break;
			
		case 5:
			icon = "wi-rain-mix";
			break;
			
		case 6:
			icon = "wi-rain-mix";
			break;
			
		case 7:
			icon = "wi-rain-mix";
			break;
			
		case 8:
			icon = "wi-snow";
			break;
			
		case 9:
			icon = "wi-sprinkle";
			break;
			
		case 10:
			icon = "wi-rain-mix";
			break;
			
		case 11:
			icon = "wi-showers";
			break;
			
		case 12:
			icon = "wi-showers";
			break;
			
		case 13:
			icon = "wi-snow";
			break;
			
		case 14:
			icon = "wi-snow";
			break;
			
		case 15:
			icon = "wi-snow-wind";
			break;
			
		case 16:
			icon = "wi-snow";
			break;
			
		case 17:
			icon = "wi-hail";
			break;
			
		case 18:
			icon = "wi-sleet";
			break;
			
		case 19:
			icon = "wi-dust";
			break;
			
		case 20:
			icon = "wi-fog";
			break;
			
		case 21:
			icon = "wi-day-haze";
			break;
			
		case 22:
			icon = "wi-smoke";
			break;
			
		case 23:
			icon = "wi-strong-wind";
			break;
			
		case 24:
			icon = "wi-windy";
			break;
			
		case 25:
			icon = "wi-snowflake-cold";
			break;
			
		case 26:
			icon = "wi-cloudy";
			break;
			
		case 27:
			icon = "wi-night-cloudy";
			break;
			
		case 28:
			icon = "wi-day-cloudy";
			break;
			
		case 29:
			icon = "wi-night-partly-cloudy";
			break;
			
		case 30:
			icon = "wi-day-cloudy-high";
			break;
			
		case 31:
			icon = "wi-night-clear";
			break;
			
		case 32:
			icon = "wi-day-sunny";
			break;
			
		case 33:
			icon = "wi-night-partly-cloudy";
			break;
			
		case 34:
			icon = "wi-day-sunny-overcast";
			break;
			
		case 35:
			icon = "wi-rain-mix";
			break;
			
		case 36:
			icon = "wi-hot";
			break;
			
		case 37:
			icon = "wi-thunderstorm";
			break;
			
		case 38:
			icon = "wi-thunderstorm";
			break;
			
		case 39:
			icon = "wi-thunderstorm";
			break;
			
		case 40:
			icon = "wi-showers";
			break;
			
		case 41:
			icon = "wi-snow";
			break;
			
		case 42:
			icon = "wi-snow";
			break;
			
		case 43:
			icon = "wi-snow";
			break;
			
		case 44:
			icon = "wi-cloud";
			break;
			
		case 45:
			icon = "wi-storm-showers";
			break;
			
		case 46:
			icon = "wi-snow";
			break;
			
		case 47:
			icon = "wi-storm-showers";
			break;
			
		case 3200:
			icon = "wi-na";
			break;

		default:
			icon = "wi-na";
			break;
		}

	return icon;

}