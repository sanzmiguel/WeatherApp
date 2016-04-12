var React = require('react');
var SearchForm = require('../components/SearchForm');
var weatherHelpers = require('../utils/weatherHelpers');

var SearchFormContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    return {
      city: ''
    }
  },
  handleUpdateCity: function(event){
    this.setState({
      city: event.target.value
    });
  },
  handleSubmitCity: function(event){
    weatherHelpers.getCurrentWeather(this.state.city).then(function(info){
      console.log(info);
    });
  },
  render: function(){
    return (
      <SearchForm
        styles={this.props.styles}
        city={this.state.city}
        onUpdateCity={this.handleUpdateCity}
        onSubmitCity={this.handleSubmitCity}/>
    );
  }
});

module.exports = SearchFormContainer;
