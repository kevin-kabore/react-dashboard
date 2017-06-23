var React = require('react');
var ReactDOM = require('react-dom');

var ActivityList = require('ActivityList')

var DashboardApp = React.createClass({
  getInitialState: function() {
    return {
      activities: [
        {
          id: 1,
          title: 'Gym',
          time: 2
        },
        {
          id: 2,
          title: 'Codewars',
          time: 1
        },
        {
          id: 3,
          title: 'Fanslu bug fixes',
          time: 3
        }
      ]
    };
  },
  render: function() {
    var {activities} = this.state;

    return(
      <div>
        <ActivityList activities={activities}/>
      </div>
    )
  }
})


module.exports = DashboardApp
