import LoadJSON from './JSON'

function init() {
  new LoadJSON().pull(function(response) {
    var current,
      data = response,
      date = new Date(),
      day = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      dayShort = ['Sun', 'Mon', 'Tues', 'Weds', 'Thurs', 'Fri', 'Sat'],
      desc,
      today = {
        ctemp: data.current_observation.temp_c,
        ctempfeel: data.current_observation.feelslike_c,
        ctemphigh: data.forecast.simpleforecast.forecastday[0].high.celsius,
        ctemplow: data.forecast.simpleforecast.forecastday[0].low.celsius,
        temp: data.current_observation.temp_f,
        tempfeel: data.current_observation.feelslike_f,
        temphigh: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
        templow: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
        icon: data.current_observation.icon,
        location: data.current_observation.display_location.full,
        official: data.forecast.txt_forecast.forecastday[0].fcttext,
        rain: data.forecast.simpleforecast.forecastday[0].pop,
        sunrise: data.sun_phase.sunrise,
        sunset: data.sun_phase.sunset,
        uvi: data.current_observation.UV,
        weather: data.current_observation.weather
      },
      isEvening = false,
      types = ['temp', 'tempfeel', 'temphigh', 'templow', 'location', 'weather'],
      uvwarn;
    
    for (var i = 0; i < types.length; i++)
      document.getElementById(types[i]).innerHTML = today[types[i]];
    
    //Descrition Building
    if (today.ctempfeel <= 4 ) {
      desc = 'Heavy Coat';
    } else if (today.ctempfeel <= 15) {
      desc = 'Light Jacket';
    } else {
      desc = 'Not Needed';
      document.getElementById('jacket').classList.add('today__suggestions--disable');
    }

    if (today.uvi < 4) {
      uvwarn = 'Not Needed'
      document.getElementById('sunscreen').classList.add('today__suggestions--disable');
    } else {
      uvwarn = 'Use Sunscreen'
    }

    if (today.rain == 0) {
      document.getElementById('umbrella').classList.add('today__suggestions--disable');      
    }

    document.getElementById('official').innerHTML = today.official;
    document.getElementById('uv-index').innerHTML = uvwarn;
    document.getElementById('rain').innerHTML = today.rain;
    document.getElementById('summary').innerHTML = desc;
    document.getElementById('icon').classList.add('icon--' + today.icon);

    //Time Handling
    document.getElementById('day').innerHTML = day[date.getDay()];
    if (date.getHours() >= today.sunset.hour) {
      greeting.innerHTML = "Night";
      document.getElementById('background').classList.add('background--night');
      document.getElementById('today__info').classList.add('today__info--night');
      document.getElementById('forecast').classList.add('forecast--night');
      if (document.getElementById('icon').classList.contains('icon--clear')){
        document.getElementById('icon').classList.remove('icon--clear')
        document.getElementById('icon').classList.add('icon--clear--night')
      }
    } else if (date.getHours() >= 17) {
      greeting.innerHTML = "Evening";
    } else if (date.getHours() >= 12) { 
      greeting.innerHTML = "Afternoon";
      document.getElementById('background').classList.add('background--afternoon');
    } else {
      greeting.innerHTML = "Morning";
      document.getElementById('background').classList.add('background--morning');
    }

    //Unit Changing
    document.getElementById('changeunit').onclick = function() {
      var swap,
        units = ['temp', 'tempfeel', 'temphigh', 'templow'];
      if (document.getElementById('unit').innerHTML == 'F') {
        document.getElementById('unit').innerHTML = 'C'
        for (var i = 0; i < units.length; i++) {
          document.getElementById(units[i]).innerHTML = (today['c'+units[i]]);
          document.getElementById(units[i]).id = 'c' + units[i];
        }
      } else {
        document.getElementById('unit').innerHTML = 'F'
        for (var i = 0; i < units.length; i++) {
          document.getElementById('c' + units[i]).innerHTML = (today[units[i]]);
          document.getElementById('c' + units[i]).id = units[i];
        }
      }
    }

    //Weekly Forecast
    for (var i = 1, j = date.getDay(); i < 7; i++, j++) {
      if (j == dayShort.length)
        j = 0
      document.getElementById('forecast__' + i + '__day').innerHTML = dayShort[j+1];
      document.getElementById('forecast__' + i + '__icon').classList.add('icon--' + data.forecast.simpleforecast.forecastday[i].icon);
      document.getElementById('forecast__' + i + '__high').innerHTML = data.forecast.simpleforecast.forecastday[i].high.fahrenheit;
      document.getElementById('forecast__' + i + '__low').innerHTML = data.forecast.simpleforecast.forecastday[i].low.fahrenheit;
    }

    console.log(data)
  });
}

init();