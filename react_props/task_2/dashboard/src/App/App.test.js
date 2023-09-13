import React from 'react';
import { mount, shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

// testing suite for the app component
describe('App Component', () => {
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
});

describe('App contains Notifications', () => {
  it('contains the Notifications', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications).length).toBe(1);
  });
});

describe('App contains Header', () => {
  it('contains the Header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header).length).toBe(1);
  });
});

describe('App contains Login', () => {
  it('contains the Login', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Login).length).toBe(1);
  });
});

describe('App contains Footer', () => {
  it('contains the Footer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer).length).toBe(1);
  });
});
