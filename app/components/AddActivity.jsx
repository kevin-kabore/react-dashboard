import React from 'react';

import Activity from 'Activity';

var AddActivity = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var activityString = this.refs.activityTitle.value
    //object

    if (activityString.length > 0) {
      this.refs.activityTitle.value = '';
      this.props.onAddActivity(activityString)
    } else {
      this.refs.activityTitle.focus()
    }
  },
  render: function() {
    // Edit placeholder using CSS
    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.handleSubmit}>
          <input type="text" id="activityTitle" ref="activityTitle" placeholder="What activity are you completing next?" />
          <button className="button expanded">Add Activity</button>
        </form>
      </div>
    );
  }
});

module.exports = AddActivity;
