var React = require('react');
var PropTypes = React.PropTypes;
var ReactDOM = require('react-dom');
var Header = require('./Header');
var Loading = require('./Loading');
var styles = require('../styles/styles');
var ForecastUI = require('./ForecastUI');

function Forecast(props){
  return props.isLoading === true
    ? <div>
        <Header />
        <Loading />
      </div>
    : <div>
        <Header />
        <ForecastUI city={props.city} data={props.data}/>
      </div>;
}

Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  city: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired
}

module.exports = Forecast;
