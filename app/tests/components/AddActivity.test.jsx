import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jquery';

import AddActivity from 'AddActivity';

describe('AddActivity', () => {
  it('should exist', () => {
    expect(AddActivity).toExist();
  });

  it('should call onAddActivity prop with valid data', () => {
    var activity = {
      title: "Gold's Gym"
    }
    // var activityTitle = "Gold's gym";
    var spy = expect.createSpy();
    var addActivity = TestUtils.renderIntoDocument(<AddActivity onAddActivity={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addActivity));

    addActivity.refs.activityTitle.value = activity.title
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(activity.title);
  })

  it('should not call onAddActivity prop when invalid input', () => {
    var activityTitle = '';
    var spy = expect.createSpy();
    var addActivity = TestUtils.renderIntoDocument(<AddActivity onAddActivity={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addActivity));

    addActivity.refs.activityTitle.value = activityTitle
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  })
})
