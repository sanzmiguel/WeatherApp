var React = require('react');
var ReactDOM = require('react-dom');
var styles = require('../styles/styles');
var SearchFormContainer = require('../containers/SearchFormContainer');

function Header(){
  return (
    <div style={styles.header}>
      <h2>Clever Title</h2>
      <SearchFormContainer styles={styles.headerForm}/>
    </div>
  );
}

module.exports = Header;
