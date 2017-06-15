var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var DashboardApp = require('DashboardApp')
// load foundation
$(document).foundation();

// load app css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <DashboardApp />,
  document.getElementById('app')
);
