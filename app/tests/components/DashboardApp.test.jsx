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
})
