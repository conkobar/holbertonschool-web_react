import React from 'react';
import { mount } from 'enzyme';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('Login Component', () => {
  let wrapper;

  // Re-creates wrapper before each test to prevent side-effects or
  // interference between tests
  beforeEach(() => {
    wrapper = mount(<Login />);
  });

  // Test that Footer renders without crashing
  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  // Test that Footer renders 2 input & 2 label tags
  it('renders the copyright string', () => {
    wrapper.update();
    const inputItems = wrapper.find('input');
    expect(inputItems.length).toBe(2);

    const labelItems = wrapper.find('label');
    expect(labelItems.length).toBe(2);
  });
});
