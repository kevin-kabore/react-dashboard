var React = require('react');
var ReactDOM = require('react-dom');

var ActivityList = require('ActivityList');
var AddActivity = require('AddActivity');
var uuid = require('node-uuid');

var DashboardApp = React.createClass({
  getInitialState: function() {
    return {
      activities: [
        {
          id: uuid(),
          title: 'Gym',
          date: 10,
          startTime: 2,
          endTime: 3
        },
        {
          id: uuid(),
          title: 'Codewars',
          date: 12,
          startTime: 3,
          endTime: 4
        },
        {
          id: uuid(),
          title: 'Fanslu bug fixes',
          date: 14,
          startTime: 4,
          endTime: 5
        }
      ]
    };
  },
  handleAddActivity: function(activity){
    this.setState({
      activities: [
        ...this.state.activities,
        {
          id: uuid(),
          title: activity.title,
          date: activity.date,
          startTime: activity.startTime,
          endTime: activity.endTime
        }
      ]
    })
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
