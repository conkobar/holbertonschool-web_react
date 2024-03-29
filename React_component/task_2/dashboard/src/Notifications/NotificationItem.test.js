import React from 'react';
import { mount } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem Component', () => {
  // Test that NotificationItem renders without crashing
  it('renders without crashing', () => {
    const wrapper = mount(
      <NotificationItem type='default' html={{ __html: '<p>Dummy HTML</p>' }} />
    );
    expect(wrapper.exists()).toBe(true);
  });

  // Test that NotificationItem renders correctly when passed dummy values for
  // type and value props
  it('renders a correctly with dummy type and value props', () => {
    const wrapper = mount(<NotificationItem type='default' value='test' />);

    expect(wrapper.prop('type')).toEqual('default');
    expect(wrapper.prop('value')).toEqual('test');
    expect(wrapper.text()).toEqual('test');
  });

  // Test that NotificationItem renders correctly when passed a dummy html prop
  it('renders correctly with dummy html prop', () => {
    const wrapper = mount(
      <NotificationItem type='default' html={{ __html: '<u>test</u>' }} />
    );

    expect(wrapper.html()).toContain('<u>test</u>');
  });
});
