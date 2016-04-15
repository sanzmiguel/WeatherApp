var React = require('react');
var PropTypes = React.PropTypes;
var ReactDOM = require('react-dom');
var Header = require('./Header');
var Loading = require('./Loading');

function Forecast(props){
  return props.isLoading === true
    ? <div>
        <Header />
        <Loading />
      </div>
    : <div>
        <Header />
        <h1>Forecast</h1>
      </div>;
}

Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired
}

module.exports = Forecast;
