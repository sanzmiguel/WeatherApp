var React = require('react');
var ReactDOM = require('react-dom');
var styles = require('../styles/styles');
var SearchForm = require('./SearchForm');

function Header(){
  return (
    <div style={styles.header}>
      <h2>Clever Title</h2>
      <SearchForm styles={styles.headerForm}/>
    </div>
  );
}

module.exports = Header;
