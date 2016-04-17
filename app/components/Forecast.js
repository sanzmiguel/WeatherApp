var React = require('react');
var PropTypes = React.PropTypes;
var ReactDOM = require('react-dom');
var Loading = require('./Loading');
var styles = require('../styles/styles');
var ForecastUI = require('./ForecastUI');

function Forecast(props){
  return props.isLoading === true
    ? <Loading />
    : <ForecastUI city={props.city} data={props.data}/>
}

Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  city: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired
}

module.exports = Forecast;
