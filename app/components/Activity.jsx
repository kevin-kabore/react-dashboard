var React = require('react')


var Activity = React.createClass({
  render: function() {
    var {id, title, time} = this.props;
    
    return (
      <div>
        {id}. {title} - {time}
      </div>
    )
  }
})


module.exports = Activity
