var React = require('react');
var ReactDOM = require('react-dom');
var uuid = require('node-uuid');

var ActivityList = require('ActivityList');
var AddActivity = require('AddActivity');
var ActivityAPI = require('ActivityAPI');

var DashboardApp = React.createClass({
  getInitialState: function() {
    return {
      activities: ActivityAPI.getActivities()
    };
  },
  componentDidUpdate: function() {
    ActivityAPI.setActivities(this.state.activities);
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
