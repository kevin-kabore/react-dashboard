var React = require('react');
var moment = require('moment');

var Activity = React.createClass({
  render: function() {
    var {id, title, createdAt, completed} = this.props;

    var renderDate = () => {
      var message = 'Started ';
      var timeStamp = createdAt;

      return message = message + moment.unix(timeStamp).format('LLL');
    };

    return (
      <div >
       <p>{title}</p>
       <p>{renderDate()}</p>
       <label><input onClick={() => {
         this.props.onToggle(id)
       }} type="checkbox" checked={completed}/>Complete Activity</label>
      </div>
    )
  }
})


module.exports = Activity
