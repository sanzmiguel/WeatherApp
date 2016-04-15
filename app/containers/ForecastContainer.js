var React = require('react');
var Forecast = require('../components/Forecast');
var weatherHelpers = require('../utils/weatherHelpers');

var ForecastContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      isLoading: true
    }
  },
  componentDidMount: function () {
    var city = this.props.routeParams.city;
    weatherHelpers.getForecastWeather(city).then(function(info){
      console.log(info);
      this.setState({
        isLoading: false
      });
    }.bind(this));
  },
  render: function(){
    return (
      <Forecast isLoading = {this.state.isLoading} />
    );
  }
});

module.exports = ForecastContainer;
