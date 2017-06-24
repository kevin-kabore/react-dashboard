var React = require('react')


var Activity = React.createClass({
  render: function() {
    var {id, title, date, startTime, endTime} = this.props;

    return (
      <div>
        {id}. {title} - {date} - {startTime} -  {endTime}
      </div>
    )
  }
})


module.exports = Activity
