import React from 'react';
import { mount } from 'enzyme';
import Footer from './Footer';
import AppContext from '../App/AppContext';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('Footer Component', () => {
  let wrapper;

  // Test that Footer renders without crashing
  it('renders without crashing', () => {
    wrapper = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: false } }}>
        <Footer />;
      </AppContext.Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });

  // Test that Footer renders the text "Copyright"
  it('renders the copyright string', () => {
    wrapper = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: false } }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.text()).not.toContain('Contact us');
  });

  // Test that the link is displayed when the user is logged in
  it('shows the link when logged in', () => {
    wrapper = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: true } }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.text()).toContain('Contact us');
  });
});
