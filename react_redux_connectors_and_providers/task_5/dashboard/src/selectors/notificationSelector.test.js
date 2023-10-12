import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications,
} from './notificationSelector';

describe('notification selectors', () => {
  const state = {
    filter: 'DEFAULT',
    notifications: [
      {
        id: 1,
        isRead: true,
        type: 'default',
        value: 'New course available',
      },
      {
        id: 2,
        isRead: false,
        type: 'urgent',
        value: 'New resume available',
      },
      {
        id: 3,
        isRead: false,
        type: 'urgent',
        value: 'New data available',
      },
    ],
  };

  it('filterTypeSelected selector', () => {
    const filteredNotifications = filterTypeSelected(state);
    expect(filteredNotifications).toHaveLength(2);
    expect(filteredNotifications[0].type).toBe('urgent');
    expect(filteredNotifications[1].type).toBe('urgent');
  });

  it('getNotifications selector', () => {
    const notifications = getNotifications(state);
    expect(notifications).toHaveLength(3);
    expect(notifications[0].value).toBe('New course available');
    expect(notifications[1].value).toBe('New resume available');
    expect(notifications[2].value).toBe('New data available');
  });

  it('getUnreadNotifications selector', () => {
    const unreadNotifications = getUnreadNotifications(state);
    expect(unreadNotifications).toHaveLength(2);
    expect(unreadNotifications[0].id).toBe(2);
    expect(unreadNotifications[1].id).toBe(3);
  });
});
