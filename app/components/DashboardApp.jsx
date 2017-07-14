var React = require('react');
var ReactDOM = require('react-dom');
var uuid = require('node-uuid');
var moment = require('moment');

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
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    })
  },
  handleToggle: function(id) {
    let updatedActivities = this.state.activities.map((activity) => {
      if (activity.id === id) {
        activity.completed = !activity.completed
      }
      return activity
    });

    this.setState({activities: updatedActivities});
  },
  render: function() {
    var {activities} = this.state;

    return(
      <div>
        <h1 className="page-title">Complete Dashboard</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-9 large-8">
            <div className="container">
              <ActivityList activities={activities} onToggle={this.handleToggle}/>
              <AddActivity onAddActivity={this.handleAddActivity}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
})


module.exports = DashboardApp
