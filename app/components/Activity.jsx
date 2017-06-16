import React, {Component} from 'react';

class Activity extends Component {
  render() {
    var {id, title, time} = this.props;
    return (
      <div>
        {id}. {title} - {time}
      </div>
    )
  }
}

module.exports = Activity
