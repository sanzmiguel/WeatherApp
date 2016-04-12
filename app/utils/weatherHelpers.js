var axios = require('axios');
var api_key = 'e1c16cc1e1c9f0a52b70cef25db11aa2';

var helpers = {
  getCurrentWeather: function (city) {
    return axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + city +'&appid=' + api_key)
    .then(function(info){
      return info.data;
    }).catch(function(err){console.log(err)});
  },
  getForecastWeather: function (city) {
    return axios.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city +'&appid=' + api_key)
    .then(function(info){
      return info.data;
    }).catch(function(err){console.log(err)});
  }
};

module.exports = helpers;
