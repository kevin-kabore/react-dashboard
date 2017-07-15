var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var ActivitySearch = require('ActivitySearch');

describe('ActivitySearch', () => {
  it('Should Exist', () =>{
    expect(ActivitySearch).toExist();
  })

  it('Should call onSearch with entered input text', () => {
    var searchText = 'Search string';
    var spy = expect.createSpy();
    var activitySearch = TestUtils.renderIntoDocument(<ActivitySearch onSearch={spy}/>)

    activitySearch.refs.searchText.value = searchText
    TestUtils.Simulate.change(activitySearch.refs.searchText)

    expect(spy).toHaveBeenCalledWith(false, 'Search string');
  });

  it('Should call onSearch with proper checked value', () => {
    var spy = expect.createSpy();
    var activitySearch = TestUtils.renderIntoDocument(<ActivitySearch onSearch={spy}/>)

    activitySearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(activitySearch.refs.showCompleted)

    expect(spy).toHaveBeenCalledWith(true, '');

  })
})
