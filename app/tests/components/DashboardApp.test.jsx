var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

import DashboardApp from 'DashboardApp';

describe('DashboardApp', () => {
  it('should exist', () => {
    expect(DashboardApp).toExist()
  });

  it('should add Activty to  the activities state on handleAddActivity', () => {
    var activity = {
      title: 'test activity'
    };
    var dashboardApp = TestUtils.renderIntoDocument(<DashboardApp/>);

    dashboardApp.setState({activities: []})
    dashboardApp.handleAddActivity(activity)

    expect(dashboardApp.state.activities[0].title).toBe(activity.title)
  });
  it('should toggle completed value when handleToggle called', () => {
    var activityData = {
      id: 2,
      title: 'Gym',
      completed: false
    };
    var dashboardApp = TestUtils.renderIntoDocument(<DashboardApp/>);
    dashboardApp.setState({activities: [activityData]})

    // check activity completed to equal valse
    expect(dashboardApp.state.activities[0].completed).toBe(false);
    // call handleToggle(id=2)
    dashboardApp.handleToggle(2);
    expect(dashboardApp.state.activities[0].completed).toBe(true);

  })
})
