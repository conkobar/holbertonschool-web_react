import React from 'react';
import { mount } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications Component', () => {
  let wrapper;

  // Create listNotifications array
  const listNotifications = [
    { id: 1, type: 'default', value: 'New course available', html: undefined },
    { id: 2, type: 'urgent', value: 'New resume available', html: undefined },
    {
      id: 3,
      type: 'urgent',
      value: undefined,
      html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' },
    },
  ];

  // Re-creates wrapper before each test to prevent side-effects or
  // interference between tests
  beforeEach(() => {
    wrapper = mount(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
  });

  // Test that Notifications renders without crashing
  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  // Test that Notifications renders three list items
  it('renders three list items', () => {
    wrapper.update();
    const listItems = wrapper.find('NotificationItem');
    expect(listItems.length).toBe(3);
  });

  // Test that Notifications renders the correct text
  it('renders the correct text', () => {
    wrapper.update();
    const p = wrapper.find('p');
    expect(p.text()).toEqual('Here is the list of notifications');
  });

  // Test that Notifications renders the correct NotificationItem
  it('renders the first NotificationItem html correctly', () => {
    wrapper.update();
    expect(wrapper.html()).toContain(
      '<div class="Notifications"><img src="test-file-stub" alt="close icon" style="height: 15px; position: absolute; top: 10px; right: 10px;" aria-label="Close"><p>Here is the list of notifications</p><ul><li data-notification-type="default">New course available</li><li data-notification-type="urgent">New resume available</li><li data-notification-type="urgent"><strong>Urgent requirement</strong> - complete by EOD</li></ul></div>'
    );
  });
});

describe('Notifications Component displayDrawer', () => {
  // Test that the menu item is being displayed when displayDrawer is false
  it('displays the menuItem div when displayDrawer is false', () => {
    const wrapper = mount(<Notifications />);
    const menuItemElement = wrapper.find('.menuItem');
    expect(menuItemElement.exists()).toBe(true);
  });

  // Test that the div.Notifications is not being displayed when displayDrawer is false
  it('does not display the Notifications div when displayDrawer is false', () => {
    const wrapper = mount(<Notifications />);
    const NotificationsComponent = wrapper.find('.Notifications');
    expect(NotificationsComponent.exists()).toBe(false);
  });

  // Test that the menu item is being displayed when displayDrawer is true
  it('displays the menuItem div when displayDrawer is true', () => {
    const wrapper = mount(<Notifications displayDrawer={true} />);
    const menuItemElement = wrapper.find('.menuItem');
    expect(menuItemElement.exists()).toBe(true);
  });

  // test that the div.Notifications is being displayed when displayDrawer is true
  it('does not display the Notifications div when displayDrawer is false', () => {
    const wrapper = mount(<Notifications displayDrawer={true} />);
    const NotificationsComponent = wrapper.find('.Notifications');
    expect(NotificationsComponent.exists()).toBe(true);
  });
});

describe('Notifications Component listNotifications', () => {
  let wrapper;

  // create listNotifications array
  const listNotifications = [
    { id: 1, type: 'default', value: 'New course available', html: undefined },
    { id: 2, type: 'urgent', value: 'New resume available', html: undefined },
    {
      id: 3,
      type: 'urgent',
      value: undefined,
      html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' },
    },
  ];

  // Test that Notifications renders correctly if listNotifications is not passed
  it('renders correctly if listNotifications is not passed', () => {
    wrapper = mount(<Notifications displayDrawer={true} />);
    expect(wrapper.exists()).toBe(true);
    const p = wrapper.find('p').first(); // get the first p element
    expect(p.text()).toEqual('No new notification for now');
  });

  // Test that Notifications renders correctly if listNotifications is an empty array
  it('renders correctly if listNotifications is an empty array', () => {
    wrapper = mount(
      <Notifications displayDrawer={true} listNotifications={[]} />
    );
    expect(wrapper.exists()).toBe(true);
    const p = wrapper.find('p').first(); // get the first p element
    expect(p.text()).toEqual('No new notification for now');
  });

  // Test that Notifications renders the correct number of NotificationItem components
  it('renders the correct number of NotificationItem components', () => {
    wrapper = mount(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
    expect(wrapper.exists()).toBe(true);
    const listItems = wrapper.find('NotificationItem');
    expect(listItems.length).toBe(listNotifications.length);
  });
});
