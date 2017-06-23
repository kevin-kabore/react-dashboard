var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var ActivityList = require('ActivityList');
var Activity = require('Activity');

describe('ActivityList', () => {
  it('should exist', () => {
    expect(ActivityList).toExist()
  });

  it('should render one Activity Component for each activity item', () => {
    var activities = [{
      id: 1,
      title: 'Develop DashboardApp',
      time: 1
    }, {
      id: 2,
      title: 'Gym',
      time: 2
    }];
    var activityList = TestUtils.renderIntoDocument(<ActivityList activities={activities}/>)
    var activitiesComponents = TestUtils.scryRenderedComponentsWithType(activityList, Activity)

    expect(activitiesComponents.length).toBe(activities.length)
  })
})
