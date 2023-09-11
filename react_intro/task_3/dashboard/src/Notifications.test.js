import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

// Test that Notifications renders without crashing
test('Notifications renders without crashing', () => {
  shallow(<Notifications />);
});

// Verify that Notifications renders a div with the class Notifications
test('Notifications renders a div with the class Notifications', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.find('.Notifications').length).toBe(1);
});

// Verify that Notifications renders a button with the aria-label "Close"
test('Notifications renders a button with the aria-label "Close"', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.find('button[aria-label="Close"]').length).toBe(1);
});

// Verify that Notifications renders an ul with at least three list items
test('Notifications renders an ul with at least three list items', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.find('ul').children().length).toBeGreaterThanOrEqual(3);
});
