var React = require('react');
var ReactDOM = require('react-dom');
var styles = require('../styles/styles');
var weatherHelpers = require('../utils/weatherHelpers');

function DayItem(props){
  var icon = props.data.weather[0].icon;
  var day = weatherHelpers.getDate(props.data.dt);
  return (
    <div style={styles.dayContainer}>
      <img style={styles.imageHeight} src={'./app/images/weather-icons/' + icon + '.svg'}/>
      <h2 style={styles.forecastText}>{day}</h2>
    </div>
  );
}

module.exports = DayItem;
