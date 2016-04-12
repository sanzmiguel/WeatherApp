var React = require('react');
var SearchForm = require('../components/SearchForm');

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
    console.log(this.state.city)
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
