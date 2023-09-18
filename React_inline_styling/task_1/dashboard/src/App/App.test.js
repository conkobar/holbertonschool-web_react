import React from 'react';
import { mount } from 'enzyme';
import App from './App';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('App Component before login', () => {
  let wrapper;

  // Re-creates wrapper before each test to prevent side-effects or
  // interference between tests
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  // Test that App renders without crashing
  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  // Test that App renders a div with the class App-header
  it('renders a div with class App-header', () => {
    wrapper.update();
    const headerDiv = wrapper.find('.App-header');
    expect(headerDiv.exists()).toBe(true);
  });

  // Test that App renders a div with the class App-body
  it('renders a div with class App-body', () => {
    wrapper.update();
    const bodyDiv = wrapper.find('.App-body');
    expect(bodyDiv.exists()).toBe(true);
  });

  // Test that App renders a div with the class App-footer
  it('renders a div with class App-footer', () => {
    wrapper.update();
    const footerDiv = wrapper.find('.App-footer');
    expect(footerDiv.exists()).toBe(true);
  });

  // Test that CourseList is not displayed when isLoggedIn is false
  it('does not display CourseList when isLoggedIn is false', () => {
    wrapper.update();
    const CourseListElement = wrapper.find('table');
    expect(CourseListElement.exists()).toBe(false);
  });
});

describe('App Component after login', () => {
  let wrapper;
  const mockLogOut = jest.fn();
  const mockAlert = jest.fn();

  // Re-creates wrapper before each test to prevent side-effects or
  // interference between tests
  beforeEach(() => {
    global.alert = mockAlert;
    wrapper = mount(<App isLoggedIn={true} logOut={mockLogOut} />);
  });

  afterEach(() => {
    global.alert = window.alert;
  });

  // Test that Login is not displayed when logged in
  it('does not display Login when isLoggedIn is false', () => {
    wrapper.update();
    const LoginElement = wrapper.find('form');
    expect(LoginElement.exists()).toBe(false);
  });

  // Test that CourseList is shown when logged in
  it('renders the CourseList component when isLoggedIn is true', () => {
    wrapper.update();
    const CourseListElement = wrapper.find('table');
    expect(CourseListElement.exists()).toBe(true);
  });

  // Test that logOut and alert are called when ctrl+h is pressed
  it('calls logOut and alert when ctrl+h is pressed', () => {
    const instance = wrapper.instance();
    instance.handleKeyDown({ key: 'h', ctrlKey: true });
    expect(mockLogOut).toHaveBeenCalled();
    expect(mockAlert).toHaveBeenCalledWith('Logging you out');
  });
});
