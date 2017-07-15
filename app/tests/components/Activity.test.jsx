var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

import Activity from 'Activity';

describe('Activity', () => {
  it('Should exist', () => {
    expect(Activity).toExist();
  })
  it('Should call onToggle prop with id on click', () => {
    var activityData = {
      id: 3,
      title: 'test title',
      completed: false
    }
    var spy = expect.createSpy();
    var activity = TestUtils.renderIntoDocument(<Activity {...activityData} onToggle={spy}/>)
    var $el = $(ReactDOM.findDOMNode(activity));

    $el = $el[0].getElementsByTagName('input')
    console.log($el[0])

    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith(3);
  })
})
