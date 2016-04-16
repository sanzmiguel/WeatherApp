var React = require('react');
var Forecast = require('../components/Forecast');
var weatherHelpers = require('../utils/weatherHelpers');

var ForecastContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      isLoading: true,
      data: []
    }
  },
  componentDidMount: function () {
    var city = this.props.routeParams.city;
    this.makeRequest(city);
  },
  componentWillReceiveProps: function (nextProps) {
    this.makeRequest(nextProps.routeParams.city)
  },
  makeRequest(city){
    weatherHelpers.getForecastWeather(city).then(function(info){
      this.setState({
        isLoading: false,
        data: info
      });
    }.bind(this));
  },
  render: function(){
    return (
      <Forecast isLoading={this.state.isLoading}
        city={this.props.routeParams.city}
        data={this.state.data}/>
    );
  }
});

module.exports = ForecastContainer;
