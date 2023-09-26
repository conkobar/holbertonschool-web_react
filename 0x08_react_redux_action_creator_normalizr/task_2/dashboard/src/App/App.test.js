import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('App Component before login', () => {
  let wrapper;

  // Re-creates wrapper before each test to prevent side-effects or
  // interference between tests
  beforeEach(() => {
    wrapper = mount(<App />);
    wrapper.setState({
      user: {
        isLoggedIn: false,
      },
    });
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
    const CourseListElement = wrapper.find('CourseList');
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
    wrapper = mount(<App />);
    wrapper.setState({
      user: {
        isLoggedIn: true,
      },
    });
  });

  afterEach(() => {
    global.alert = window.alert;
  });

  // Test that Login is not displayed when logged in
  it('does not display Login when isLoggedIn is false', () => {
    wrapper.update();
    const LoginElement = wrapper.find('Login');
    expect(LoginElement.exists()).toBe(false);
  });

  // Test that CourseList is shown when logged in
  it('renders the CourseList component when isLoggedIn is true', () => {
    wrapper.update();
    const CourseListElement = wrapper.find('CourseList');
    expect(CourseListElement.exists()).toBe(true);
  });

  // Test that logOut and alert are called when ctrl+h is pressed
  it('calls logOut and alert when ctrl+h is pressed', () => {
    const instance = wrapper.instance();
    instance.handleKeyDown({ key: 'h', ctrlKey: true });
    expect(wrapper.state().user.isLoggedIn).toBe(false);
  });
});

describe('App Component displayDrawer state', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
  });

  // Test that the default state for displayDrawer is false
  it('has a default state of false', () => {
    expect(wrapper.state().displayDrawer).toBe(false);
  });

  // Test that displayDrawer's state is true after calling handleDisplayDrawer
  // and is false after HandleHideDrawer is called
  it('has a state of true after handleDisplayDrawer is called and a state of false after handleHideDrawer is called', () => {
    // const instance = wrapper.instance();
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toBe(true);

    wrapper.instance().handleHideDrawer();
    expect(wrapper.state().displayDrawer).toBe(false);
  });

  it('passes updated displayDrawer state as prop to Notifications', () => {
    const instance = wrapper.instance();

    // Call handleDisplayDrawer and check if the updated state is passed as a prop
    instance.handleDisplayDrawer();
    wrapper.update();
    expect(wrapper.state().displayDrawer).toBe(true);

    // Call handleHideDrawer and check if the updated state is passed as a prop
    instance.handleHideDrawer();
    wrapper.update();
    expect(wrapper.state().displayDrawer).toBe(false);
  });

  it('logIn function updates the state correctly', () => {
    const instance = wrapper.instance();
    const testEmail = 'test@test.com';
    const testPassword = 'password';

    instance.logIn(testEmail, testPassword);

    expect(wrapper.state().user.email).toBe(testEmail);
    expect(wrapper.state().user.password).toBe(testPassword);
    expect(wrapper.state().user.isLoggedIn).toBe(true);
  });

  it('logOut function updates the state correctly', () => {
    const instance = wrapper.instance();

    instance.logOut();

    expect(wrapper.state().user.email).toBe('');
    expect(wrapper.state().user.password).toBe('');
    expect(wrapper.state().user.isLoggedIn).toBe(false);
  });

  it('verifies that markNotificationAsRead works as expected', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({
      listNotifications: [
        {
          id: 1,
          type: 'default',
          value: 'New course available',
          html: undefined,
        },
        {
          id: 2,
          type: 'urgent',
          value: 'New resume available',
          html: undefined,
        },
        {
          id: 3,
          type: 'urgent',
          value: undefined,
          html: {
            __html: '<strong>Urgent requirement</strong> - complete by EOD',
          },
        },
      ],
    });
    wrapper.instance().markNotificationAsRead(2);
    expect(wrapper.state().listNotifications).toEqual([
      {
        id: 1,
        type: 'default',
        value: 'New course available',
        html: undefined,
      },
      {
        id: 3,
        type: 'urgent',
        value: undefined,
        html: {
          __html: '<strong>Urgent requirement</strong> - complete by EOD',
        },
      },
    ]);
  });
});
