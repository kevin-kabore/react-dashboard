import React from 'react';

import Activity from 'Activity';

var AddActivity = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();

    //object
    var activity = {}
    activity.title = document.getElementById("activityTitle").value;
    activity.date = document.getElementById("activityDate").value;
    activity.startTime = document.getElementById("startTime").value;
    activity.endTime = document.getElementById("endTime").value;



    // var activityTitle = this.refs.activityTitle.value;
    // var activityDate = this.refs.activityDate.value;
    // var startTime = this.refs.startTime.value;
    // var endTime = this.refs.endTime.value;


    if (activity.title.length > 0) {
      this.refs.activityTitle.value = '';
      this.props.onAddActivity(activity)
    } else {
      this.refs.activityTitle.focus()
    }
  },
  render: function() {
    // Edit placeholder using CSS
    return (
      <div>
        <form ref="form" onSubmit={this.handleSubmit}>
          <input type="text" id="activityTitle" ref="activityTitle" placeholder="What activity are you completing next?" />
          <input type="date" id="activityDate" ref="activityDate" placeholder="01/01/2017"/>
          <input type="time" id="startTime" ref="startTime" placeholder="00:00 AM"/>
          <input type="time" id="endTime" ref="endTime" placeholder="00:45 PM"/>
          <button className="button expanded">Add Activity</button>
        </form>
      </div>
    );
  }
});

module.exports = AddActivity;
