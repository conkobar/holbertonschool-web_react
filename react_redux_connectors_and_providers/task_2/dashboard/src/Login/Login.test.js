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
    expect(inputItems.length).toBe(3);

    const labelItems = wrapper.find('label');
    expect(labelItems.length).toBe(2);
  });

  // Test that the OK button is disabled by default
  it('disables the OK button by default', () => {
    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.props().disabled).toBe(true);
  });

  //Test that after changing username/password, the button is enabled
  it('enables the OK button when both inputs are not empty', () => {
    const emailInput = wrapper.find('input[name="email"]');
    const passwordInput = wrapper.find('input[name="password"]');

    // user changes email and password
    emailInput.simulate('change', { target: { value: 'test@email.com' } });
    passwordInput.simulate('change', { target: { value: 'password' } });
    wrapper.update();

    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.props().disabled).toBe(false);
  });
});
