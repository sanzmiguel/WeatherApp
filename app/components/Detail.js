var React = require('react');
var PropTypes = React.PropTypes;
var ReactDOM = require('react-dom');
var Header = require('./Header');
var Loading = require('./Loading');
var DayItem = require('./DayItem');
var styles = require('../styles/styles');
var weatherHelpers = require('../utils/weatherHelpers');

function Detail(props){
  return (
    <div>
      <DayItem data={props.details}/>
      <div style={styles.detailContainer}>
        <p>{props.city}</p>
        <p>{props.details.weather[0].description}</p>
        <p>
          <span>min temp: </span>
          <span>{weatherHelpers.convertKelvinDegrees(props.details.temp.min)}</span>
          <span> degrees</span>
        </p>
        <p>
          <span>max temp: </span>
          <span>{weatherHelpers.convertKelvinDegrees(props.details.temp.max)}</span>
          <span> degrees</span>
        </p>
        <p>
          <span>humidity: </span>
          <span>{props.details.humidity}</span>
        </p>
      </div>
    </div>
  );
}

Detail.propTypes = {
  details: PropTypes.object.isRequired,
  city: PropTypes.string.isRequired
}

module.exports = Detail;
