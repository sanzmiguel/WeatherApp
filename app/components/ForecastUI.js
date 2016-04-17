var React = require('react');
var ReactDOM = require('react-dom');
var DayItemContainer = require('../containers/DayItemContainer');
var styles = require('../styles/styles');

function ForecastUI(props){
  return (
    <div style={styles.forecastContainer}>
      <h1 style={styles.forecastTittle}>{props.city}</h1>
      <p style={styles.forecastText}>Select a day</p>
      <div style={styles.daysContainer}>
        {props.data.map(function(info) {
          return <DayItemContainer key={info.dt} data={info} city={props.city}/>;
        })}
      </div>
    </div>
  );
}

module.exports = ForecastUI;
