export const filterTypeSelected = (state) => state.filter;

export const getNotifications = (state) => {
  const notifications = state.notifications;
  const notificationsMap = new Map();

  notifications.forEach((notification) => {
    notificationsMap.set(notification.id, notification);
  });

  return notificationsMap;
};

export const getUnreadNotifications = (state) => {
  const notifications = state.notifications;
  const unreadNotificationsMap = new Map();

  notifications.forEach((notification) => {
    if (notification.isRead === false) {
      unreadNotificationsMap.set(notification.id, notification);
    }
  });

  return unreadNotificationsMap;
};
