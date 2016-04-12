var React = require('react');
var PropTypes = React.PropTypes;
var ReactDOM = require('react-dom');
var styles = require('../styles/styles');

function SearchForm(props){
  return (
    <div style={props.styles}>
      <input className='form-control' placeholder='St. George, Utah' type='text' value={props.city} onChange={props.onUpdateCity}/>
      <button className='btn btn-success' style={styles.botonBusqueda} onClick={props.onSubmitCity}>Get Weather</button>
    </div>
  );
}

SearchForm.PropTypes = {
  styles: PropTypes.string,
  onUpdateCity: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
  onSubmitCity: PropTypes.func.isRequired
};

module.exports = SearchForm;
