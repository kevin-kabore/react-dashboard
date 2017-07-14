var React = require('react');
var Activity = require('Activity');

var  ActivityList = React.createClass({
  render: function() {
    var {activities} = this.props;
    var renderActivities = () => {
       return activities.map((activity) => {
         return (
           <Activity key={activity.id} {...activity} onToggle={this.props.onToggle}/>
         )
       })
    };
    return (
      <div>{renderActivities()}</div>
    )
  }
})


module.exports = ActivityList
