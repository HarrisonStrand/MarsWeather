import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Weather from './services/Elysium-Planitia.js';

//Business Logic

function displayWeather(response) {
  for(let property in response) {
    if (response[property].AT) {
      $('#dayCurrent').append(`${response[property].AT.mn}, `);
    }
      
    // $('#dayCurrent').text(`Today's Martian weather is ${response[698].Season}`);
    // $('#dayCurrent').text(`Today's Martian weather is ${response[property].AT.mx}`);
  }
}


// for (const property in response) { // This is what we need
//   console.log(`${property}: ${response[property].PRE.av}`);
// }

//User Interface Logic

$(document).ready(function() {
  $("#button").click(function() {
    Weather.getWeather()
      .then(function(response) {
        displayWeather(response);
      });
  });
});