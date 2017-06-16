import React, {Component} from 'react';

var Activity = require('Activity');

class ActivityList extends Component {
  render() {
    var {activities} = this.props;
    var renderActivities = () => {
       return activities.map((activity) => {
         return (
           <Activity key={activity.id} {...activity}/>
         )
       })
    };
    return (
      <div>{renderActivities()}</div>
    )
  }
}

module.exports = ActivityList
