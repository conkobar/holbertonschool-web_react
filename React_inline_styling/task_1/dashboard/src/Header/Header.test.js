import React from 'react';
import { mount } from 'enzyme';
import Header from './Header';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('Header Component', () => {
  let wrapper;

  // Re-creates wrapper before each test to prevent side-effects or
  // interference between tests
  beforeEach(() => {
    wrapper = mount(<Header />);
  });

  // Test that Header renders without crashing
  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  // Test that Header renders img and h1 tags
  it('renders img and h1 tags', () => {
    wrapper.update();
    const imgItems = wrapper.find('img');
    expect(imgItems.exists()).toBe(true);

    const h1Items = wrapper.find('h1');
    expect(h1Items.exists()).toBe(true);
  });
});
