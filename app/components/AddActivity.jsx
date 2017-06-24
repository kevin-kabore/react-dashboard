import React from 'react';

import Activity from 'Activity';

var AddActivity = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();

    //object
    // var activity = {}
    // activity.title = document.getElementById("activityTitle").value;
    // console.log(activity.title);

    var activityTitle = this.refs.activityTitle.value;
    var activityDate = this.refs.activityDate.value;
    var startTime = this.refs.startTime.value;
    var endTime = this.refs.endTime.value;


    if (activityTitle.length > 0) {
      this.refs.activityTitle.value = '';
      this.props.onAddActivity(activityTitle)
    } else {
      this.refs.activityTitle.focus()
    }
  },
  render: function() {
    // Edit placeholder using CSS
    return (
      <div>
        <form ref="form" onSubmit={this.handleSubmit}>
          <input type="text" id="activityTitle" ref="activityTitle" placeholder="WHat activity are you completing next?" />
          <input type="date" ref="activityDate" placeholder="01/01/2017"/>
          <input type="time" ref="startTime" placeholder="00:00 AM"/>
          <input type="time" ref="endTime" placeholder="00:45 PM"/>
          <button className="button expanded">Add Activity</button>
        </form>
      </div>
    );
  }
});

module.exports = AddActivity;
