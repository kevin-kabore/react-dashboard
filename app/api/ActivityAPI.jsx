var $ = require('jquery');

module.exports = {
  setActivities: function (activities) {
    if ($.isArray(activities)) {
      localStorage.setItem('activities', JSON.stringify(activities));
      return activities;
    }
  },
  getActivities: function () {
    var stringActivities = localStorage.getItem('activities');
    var activities = [];

    try {
      activities = JSON.parse(stringActivities);
    } catch (e) {

    }

    return $.isArray(activities) ? activities : []
  }
};
