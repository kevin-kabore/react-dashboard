var React = require('react');
var ReactDOM = require('react-dom');

var ActivityList = require('ActivityList');
var AddActivity = require('AddActivity');

var DashboardApp = React.createClass({
  getInitialState: function() {
    return {
      activities: [
        {
          id: 1,
          title: 'Gym',
          date: 10,
          startTime: 2,
          endTime: 3
        },
        {
          id: 2,
          title: 'Codewars',
          date: 12,
          startTime: 3,
          endTime: 4
        },
        {
          id: 3,
          title: 'Fanslu bug fixes',
          date: 14,
          startTime: 4,
          endTime: 5
        }
      ]
    };
  },
  handleAddActivity: function(activity){
    alert('new activity:' + activity);
  },
  render: function() {
    var {activities} = this.state;

    return(
      <div>
        <ActivityList activities={activities}/>
        <AddActivity onAddActivity={this.handleAddActivity}/>

      </div>
    )
  }
})


module.exports = DashboardApp
