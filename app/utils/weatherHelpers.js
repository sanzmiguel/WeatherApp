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
    return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city +'&cnt=5&&appid=' + api_key)
    .then(function(info){
      return info.data.list.map(function(weather){
        return weather;
      });
    }).catch(function(err){console.log(err)});
  },
  getDate(timestamp){
    var date = new Date(timestamp * 1000);
    var weekDay = date.getDay();
    var day = date.getDate();
    var month = date.getMonth();
    var daysNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return daysNames[weekDay] + ', ' + monthNames[month] + ' ' + day;
  }
};

module.exports = helpers;
