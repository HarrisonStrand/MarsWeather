import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Weather from './services/Elysium-Planitia.js';

//Business Logic
function makeWeatherCall(date) {
  const response = Weather.getWeather(date);
}

function displayWeather(response) {
  for(const property in response) {
    $('#dayCurrent').text(`Today's Martian weather is ${response[property].AT.mn}`);
    $('#dayCurrent').text(`Today's Martian weather is ${response[property].AT.mx}`);
  }
}


// for (const property in response) { // This is what we need
//   console.log(`${property}: ${response[property].PRE.av}`);
// }

//User Interface Logic

$(document).ready(function() {
  displayWeather(response);

});